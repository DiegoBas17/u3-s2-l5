import { useEffect, useState } from "react";
import { /*  Button, */ Col, Container, Row } from "react-bootstrap";
/* import { Link } from "react-router-dom"; */
import MoreMeteo from "./MoreMeteo";
import {
  Moisture,
  SunriseFill,
  SunsetFill,
  ThermometerHalf,
  Wind,
} from "react-bootstrap-icons";

const CitySelected = ({ objCity }) => {
  const [objCityMeteo, setObjCityMeteo] = useState(null);
  const fetchMeteo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${objCity.lat}&lon=${objCity.lon}&appid=46db030ed3dcd0f7a8c87d071969153f`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del meteo della città");
        }
      })
      .then((objCities) => {
        setObjCityMeteo(objCities);
      })
      .catch((err) => alert(err));
  };
  const timeStamp = (dataUNIX) => {
    const giorniSettimana = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
    const data = new Date(dataUNIX * 1000);

    const giornoSettimana = giorniSettimana[data.getDay()];
    const giorno = data.getDate().toString().padStart(2, "0");
    const mese = (data.getMonth() + 1).toString().padStart(2, "0");
    const anno = data.getFullYear();
    const ore = data.getHours().toString().padStart(2, "0");
    const minuti = data.getMinutes().toString().padStart(2, "0");

    const dataFormattata = `${giornoSettimana} ${giorno}/${mese}/${anno} ${ore}:${minuti}`;

    return dataFormattata;
  };
  const calcolaOraEsatta = (timestampUNIX) => {
    const data = new Date(timestampUNIX * 1000);

    const ora = data.getHours().toString().padStart(2, "0");
    const minuti = data.getMinutes().toString().padStart(2, "0");

    const oraFormattata = `${ora}:${minuti}`;

    return oraFormattata;
  };

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };
  const kelvinToCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15);
  };

  useEffect(() => {
    fetchMeteo();
  }, [objCity]);
  return (
    <>
      {objCityMeteo && (
        <Container className="text-light">
          <h2 className="text-center">{timeStamp(objCityMeteo.dt)}</h2>
          <h1 className="text-center">{objCity.local_names.it}</h1>
          <Row className="text-center">
            <Col sm="12">{objCityMeteo.weather[0].main}</Col>
            <Col md="4" className="d-flex flex-column text-light">
              <div className="card">
                <p className="mb-1">{objCityMeteo.weather[0].description}</p>
                <img
                  src={getWeatherIconUrl(objCityMeteo.weather[0].icon)}
                  alt={objCityMeteo.weather[0].description}
                  style={{ height: "70px", width: "70px" }}
                  className="mx-auto"
                />
              </div>
            </Col>
            <Col md="4" className="text-light">
              <h2>{`${kelvinToCelsius(objCityMeteo.main.temp)}°`}</h2>
            </Col>
            <Col md="4" className="d-flex flex-column">
              <div className="card">
                <p className="mb-1">
                  <ThermometerHalf />
                  {`Temp. percepita: ${kelvinToCelsius(
                    objCityMeteo.main.feels_like
                  )}°`}
                </p>
                <p className="mb-1">
                  {" "}
                  <ThermometerHalf />
                  {`Temp. min.: ${kelvinToCelsius(
                    objCityMeteo.main.temp_min
                  )}°`}
                </p>
                <p className="mb-1">
                  {" "}
                  <ThermometerHalf />
                  {`Temp. max: ${kelvinToCelsius(objCityMeteo.main.temp_max)}°`}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="text-center mt-3">
            <Col>
              <div className="card">
                <p className="mb-1">
                  <SunriseFill className="me-1" />
                  {`alba: ${calcolaOraEsatta(objCityMeteo.sys.sunrise)}`}
                </p>
              </div>
            </Col>
            <Col>
              <div className="card">
                <p className="mb-1">
                  <SunsetFill className="me-1" />
                  {`Tramonto: ${calcolaOraEsatta(objCityMeteo.sys.sunset)}`}
                </p>
              </div>
            </Col>
            <Col>
              <div className="card">
                <p className="mb-1">
                  {`Vento: ${objCityMeteo.wind.speed}`}
                  <Wind className="ms-1" />
                </p>
              </div>
            </Col>
            <Col>
              <div className="card">
                <p className="mb-1">
                  <Moisture className="me-1 mb-1" />
                  {`Umidità: ${objCityMeteo.main.humidity}%`}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {/* <Link to="/moremeteo">
        <Button type="button" className="mx-auto d-block mt-5">
          Clicca per maggiore informazioni
        </Button>
      </Link> */}
      <MoreMeteo objCity={objCity} />
    </>
  );
};
export default CitySelected; /* default */ /* diego2 */ /* basili con un altro account */

/* dcc50e318c9db5f32a167131d97c167e */
/* abb8766cd5dec1fa1fa7cb4fc0cb3087 */
/* 46db030ed3dcd0f7a8c87d071969153f */
