import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const CitySelected = ({ objCity }) => {
  const [objCityMeteo, setObjCityMeteo] = useState(null);
  const fetchMeteo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${objCity.lat}&lon=${objCity.lon}&appid=dcc50e318c9db5f32a167131d97c167e`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del meteo della città");
        }
      })
      .then((arraycities) => {
        setObjCityMeteo(arraycities);
      })
      .catch((err) => alert(err));
  };
  const timeStamp = (dataUNIX) => {
    const data = new Date(dataUNIX * 1000);
    return data.toString();
  };
  /* mi salvo la  */
  let iconUrl =
    "http://openweathermap.org/img/w/" +
    objCityMeteo.list[0].weather.icon +
    ".png";
  const kelvinToCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15);
  };

  useEffect(() => {
    fetchMeteo();
  }, [objCity]);

  console.log(objCityMeteo.list);
  return (
    <Container>
      <h2 className="text-center">{timeStamp(objCityMeteo.list[0].dt)}</h2>
      <h1 className="text-center">{objCity.name}</h1>
      <Row className="text-center">
        <Col sm="12">{objCityMeteo.list[0].weather.main}</Col>
        <Col md="4" className="d-flex flex-column">
          <p>{objCityMeteo.list[0].weather.description}</p>
          <img src={iconUrl} alt={objCityMeteo.list[0].weather.description} />
        </Col>
        <Col md="4">
          <h2>{`${kelvinToCelsius(objCityMeteo.list[0].main.temp)}°`}</h2>
        </Col>
        <Col md="4">altre info</Col>
      </Row>
    </Container>
  );
};
export default CitySelected; /* default */ /* diego2 */ /* basili con un altro account */

/* dcc50e318c9db5f32a167131d97c167e */
/* abb8766cd5dec1fa1fa7cb4fc0cb3087 */
/* 46db030ed3dcd0f7a8c87d071969153f */
