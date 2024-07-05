import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

/* import Slider from "react-slick"; */

const MoreMeteo = ({ objCity }) => {
  const [arrayMeteoCity, setArrayMeteoCity] = useState([]);

  const fetchMeteo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${objCity.lat}&lon=${objCity.lon}&appid=46db030ed3dcd0f7a8c87d071969153f`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del meteo della città");
        }
      })
      .then((objMeteoCities) => {
        setArrayMeteoCity(objMeteoCities.list);
      })
      .catch((err) => alert(err));
  };
  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  const calcolaOraEsatta = (timestampUNIX) => {
    const data = new Date(timestampUNIX * 1000);

    const ora = data.getHours().toString().padStart(2, "0");
    const minuti = data.getMinutes().toString().padStart(2, "0");

    const oraFormattata = `${ora}:${minuti}`;

    return oraFormattata;
  };
  const kelvinToCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15);
  };
  /* const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; */
  useEffect(() => {
    fetchMeteo();
  }, [objCity]);

  return (
    <>
      {/* <Slider {...settings}> */}
      <Container className="mt-2">
        <h3>Nelle prossime ore:</h3>
        <Row className="text-center gy-2">
          {arrayMeteoCity.map((objMeteoStep, index) => (
            <Col sm="1" md="2" lg="3" key={index}>
              <div className="card">
                <p className="mb-1">
                  {(() => {
                    const oraEsatta = calcolaOraEsatta(objMeteoStep.dt);
                    const ora = oraEsatta.split(":")[0];
                    const ampm = parseInt(ora) >= 12 ? "PM" : "AM";
                    return `${oraEsatta} ${ampm}`;
                  })()}
                </p>

                <img
                  src={getWeatherIconUrl(objMeteoStep.weather[0].icon)}
                  className="card-img-top mx-auto"
                  alt=""
                  style={{ height: "70px", width: "70px" }}
                />

                <p className="mb-1">
                  {kelvinToCelsius(objMeteoStep.main.temp)}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/*  </Slider> */}
    </>
  );
};
export default MoreMeteo;
