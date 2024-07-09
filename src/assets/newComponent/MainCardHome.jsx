import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import WeatherIcon from "./WeatherIcon";
import humidity from "../svgAnimated/humidity.svg";
import temperaturaMinima from "../svgAnimated/thermometer-colder.svg";
import temperaturaMassima from "../svgAnimated/thermometer-warmer.svg";
import vento from "../svgAnimated/wind-beaufort-1.svg";

const MainCardHome = (props) => {
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

  /* funzione per ricavare i gradi Celsius dai Kelvin */
  const kelvinToCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15);
  };

  return (
    <>
      {objCityMeteo && (
        <Link to={`/meteo-city/` + "roma"} className="text-decoration-none">
          <Container className="third-color p-4 rounded-4">
            <Row>
              <Col md="3">
                <div className="second-color rounded-4">
                  <h2 className="pt-3">{objCityMeteo.name}</h2>
                  <h2 className="pt-3">
                    {kelvinToCelsius(objCityMeteo.main.temp)}°C
                  </h2>
                  <WeatherIcon icon={objCityMeteo.weather[0].icon} />
                </div>
              </Col>
              <Col md="9">
                <Row className="g-3">
                  <Col md="6">
                    <div className="second-color rounded-4">
                      <Row className="align-items-center">
                        <Col>
                          <img
                            src={humidity}
                            alt="humidity"
                            style={{ height: "10rem" }}
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
                          <img
                            src={temperaturaMinima}
                            alt="temperaturaMinima"
                            style={{ height: "10rem" }}
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
                          <img
                            src={temperaturaMassima}
                            alt="temperaturaMassima"
                            style={{ height: "10rem" }}
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
                          <img
                            src={vento}
                            alt="vento"
                            style={{ height: "10rem" }}
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
export default MainCardHome;
