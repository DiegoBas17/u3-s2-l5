import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";

const MeteoCard = (props) => {
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
        <Container className="second-color rounded-4">
          <Row>
            <Col md="6">
              <WeatherIcon icon={objCityMeteo.weather[0].icon} />
            </Col>
            <Col md="6" className="text-start my-auto ms-0 ps-0">
              <h4 className="d-inline">
                <span className="h6 opacity-50">Luogo</span>
                <br />
                {objCityMeteo.name}
              </h4>
            </Col>
            <Col md="4">
              <p>
                <span className="h6 opacity-50">Temperatura:</span> <br />{" "}
                {kelvinToCelsius(objCityMeteo.main.temp)}°C
              </p>
            </Col>
            <Col md="4">
              <p>
                <span className="h6 opacity-50">Vento:</span>
                <br />
                {objCityMeteo.wind.speed} km/h
              </p>
            </Col>
            <Col md="4">
              <p>
                <span className="h6 opacity-50">Umidità:</span>
                <br />
                {objCityMeteo.main.humidity} %
              </p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default MeteoCard;
