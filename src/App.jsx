import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./assets/newComponent/MyNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyFooter from "./assets/newComponent/MyFooter";
import Home from "./assets/newComponent/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MeteoCity from "./assets/newComponent/MeteoCity";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div id="containerApp">
      <BrowserRouter>
        <Row className="align-items-center">
          <Col lg="1">
            <MyNavbar />
          </Col>
          <Col md="11">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/meteo-city/:city" element={<MeteoCity />} />
            </Routes>
          </Col>
          <MyFooter />
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
