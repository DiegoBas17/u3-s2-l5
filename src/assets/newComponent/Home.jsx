import { Col, Container, Row } from "react-bootstrap";
import MyInputForm from "./MyInputForm";
import WeatherCardAround from "./WeatherCardAround";
import MainCardHome from "./MainCardHome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Benvenuto in Pollito Meteo</h1>
      <p>Il gallo più sveglio del pollaio in fatto di previsioni meteo!</p>
      <Row className="justify-content-center">
        <Col md={6}>
          <MyInputForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <MainCardHome lat={41.8933203} lon={12.4829321} />
        </Col>
      </Row>

      <h3 className="mt-4">Meteo intorno a roma</h3>
      <Container>
        <Row className="g-3">
          <Col md="4">
            <Link
              to={`/meteo-city/` + "ciampino"}
              className="text-decoration-none"
            >
              <WeatherCardAround lat={41.8002891} lon={12.6004706} />
            </Link>
          </Col>
          <Col md="4">
            <Link
              to={`/meteo-city/` + "latina"}
              className="text-decoration-none"
            >
              <WeatherCardAround lat={41.4672827} lon={12.9037789} />
            </Link>
          </Col>
          <Col md="4">
            <Link
              to={`/meteo-city/` + "frascati"}
              className="text-decoration-none"
            >
              <WeatherCardAround lat={41.8082452} lon={12.6803684} />
            </Link>
          </Col>
          <Col md="4">
            <Link
              to={`/meteo-city/` + "Tivoli"}
              className="text-decoration-none"
            >
              <WeatherCardAround lat={41.960922} lon={12.798884} />
            </Link>
          </Col>
          <Col md="4">
            <Link
              to={`/meteo-city/` + "Fiumicino"}
              className="text-decoration-none"
            >
              <WeatherCardAround lat={41.7712145} lon={12.2278855} />
            </Link>
          </Col>
          <Col md="4">
            <Link
              to={`/meteo-city/` + "Ladispoli"}
              className="text-decoration-none"
            >
              <WeatherCardAround lat={41.9537219} lon={12.0734646} />
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home;
/* 41.90278937071288, 12.694191723623684 */
