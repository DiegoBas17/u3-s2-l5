import { Col, Container, Row } from "react-bootstrap";
import MyInputForm from "./MyInputForm";
import { useEffect, useState } from "react";
import MeteoCard from "./MeteoCard";

const Home = () => {
  const [ArrayCity, setArrayCity] = useState();
  const fetchForGeoWithCity = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=46db030ed3dcd0f7a8c87d071969153f`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento della città");
        }
      })
      .then((arraycities) => {
        setArrayCity(arraycities);
      })
      .catch((err) => alert(err));
  };

  /*   useEffect(() => {
    if (city) {
        fetchForGeoWithCity();
    }
  }, [city]); */
  return (
    <Container className="text-center">
      <h1>Benvenuto in Meteo Castelverde</h1>
      <p>
        Il tuo sito di riferimento per le previsioni meteo aggiornate a
        Castelverde, Roma e non solo.
      </p>
      <Row className="justify-content-center">
        <Col md={6}>
          <MyInputForm />
        </Col>
      </Row>
      <h3>Meteo intorno a roma</h3>
      <Row className="g-3">
        <Col md="4">
          {/* ciampino */}
          <MeteoCard lat={41.8002891} lon={12.6004706} />
        </Col>
        <Col md="4">
          {/* latina */}
          <MeteoCard lat={41.4672827} lon={12.9037789} />
        </Col>
        <Col md="4">
          {/* frascati */}
          <MeteoCard lat={41.8082452} lon={12.6803684} />
        </Col>
        <Col md="4">
          {/* Tivoli */}
          <MeteoCard lat={41.960922} lon={12.798884} />
        </Col>
        <Col md="4">
          {/* Fiumicino */}
          <MeteoCard lat={41.7712145} lon={12.2278855} />
        </Col>
        <Col md="4">
          {/* Ladispoli */}
          <MeteoCard lat={41.9537219} lon={12.0734646} />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;

/* "name": "Castelverde",
        "lat": 41.4936353,
        "lon": 12.7988284,
        "country": "IT",
        "state": "Lazio" */
