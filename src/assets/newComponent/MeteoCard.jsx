import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

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
        <Row>
          <Col md="6">
            <img
              src={getWeatherIconUrl(objCityMeteo.weather[0].icon)}
              alt={`Icona meteo per ${objCityMeteo.name}`}
              style={{ height: "150px", width: "150px" }}
              className="d-inline"
            />
          </Col>
          <Col md="6" className="text-start my-auto ms-0 ps-0">
            <h4 className="d-inline">
              <span className="h6 text-secondary">Luogo</span>
              <br />
              {objCityMeteo.name}
            </h4>
          </Col>
          <p>
            Temperatura: {kelvinToCelsius(objCityMeteo.main.temp)}°C
            <br />
            Vento: {objCityMeteo.wind.speed} km/h
          </p>
        </Row>
      )}
    </>
  );
};

export default MeteoCard;
