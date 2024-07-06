import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Moisture,
  ThermometerHigh,
  ThermometerLow,
  Wind,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const MainCard = (props) => {
  const [objCityMeteo, setObjCityMeteo] = useState(null);
  const fetchCurrentWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=46db030ed3dcd0f7a8c87d071969153f`
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
  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  /* Funzione per reperire la icona data dalla fetch */
  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };
  /* funzione per ricavare i gradi Celsius dai Kelvin */
  const kelvinToCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15);
  };

  return (
    <>
      {objCityMeteo && (
        <Link to={`/meteo-datails/` + "roma"} className="text-decoration-none">
          <Container className="third-color p-4 rounded-4">
            <Row>
              <Col md="3">
                <div className="second-color rounded-4">
                  <h2 className="pt-3">{objCityMeteo.name}</h2>
                  <h2 className="pt-3">
                    {kelvinToCelsius(objCityMeteo.main.temp)}°C
                  </h2>
                  <img
                    src={getWeatherIconUrl(objCityMeteo.weather[0].icon)}
                    alt={`Icona meteo per ${objCityMeteo.name}`}
                    style={{ height: "110px", width: "110px" }}
                  />
                </div>
              </Col>
              <Col md="9">
                <Row className="g-3">
                  <Col md="6">
                    <div className="second-color rounded-4">
                      <Row className="align-items-center">
                        <Col>
                          <Moisture
                            style={{ height: "60px", width: "60px" }}
                            className="my-4"
                          />
                        </Col>
                        <Col>
                          <p>
                            <span className="h5 opacity-50 ">Umidità:</span>
                            <br />
                            {objCityMeteo.main.humidity} %
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="second-color rounded-4">
                      <Row className="align-items-center">
                        <Col>
                          <ThermometerLow
                            style={{ height: "60px", width: "60px" }}
                            className="my-4"
                          />
                        </Col>
                        <Col>
                          <p>
                            <span className="h5 opacity-50 ">Temp.Min:</span>
                            <br />
                            {kelvinToCelsius(objCityMeteo.main.temp_min)}°C
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="second-color rounded-4">
                      <Row className="align-items-center">
                        <Col>
                          <ThermometerHigh
                            style={{ height: "60px", width: "60px" }}
                            className="my-4"
                          />
                        </Col>
                        <Col>
                          <p>
                            <span className="h5 opacity-50 ">Temp.Max:</span>
                            <br />
                            {kelvinToCelsius(objCityMeteo.main.temp_max)}°C
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="second-color rounded-4">
                      <Row className="align-items-center">
                        <Col>
                          <Wind
                            style={{ height: "60px", width: "60px" }}
                            className="my-4"
                          />
                        </Col>
                        <Col>
                          <p>
                            <span className="h5 opacity-50 ">Vento:</span>
                            <br />
                            {objCityMeteo.wind.speed} km/h
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Link>
      )}
    </>
  );
};
export default MainCard;
