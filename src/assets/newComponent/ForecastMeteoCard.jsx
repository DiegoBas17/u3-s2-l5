import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import WeatherIcon from "./WeatherIcon";

const ForecastMeteoCard = (props) => {
  const [forecast, setForecast] = useState("");
  const fetchForecast5d3h = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=46db030ed3dcd0f7a8c87d071969153f`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del meteo della città");
        }
      })
      .then((objMeteoCities) => {
        setForecast(objMeteoCities.list);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchForecast5d3h();
  }, []);

  const calcolaOraEsatta = (timestampUNIX) => {
    const data = new Date(timestampUNIX * 1000);

    const ora = data.getHours().toString().padStart(2, "0");
    const minuti = data.getMinutes().toString().padStart(2, "0");

    const oraFormattata = `${ora}:${minuti}`;

    return oraFormattata;
  };
  const calcolaGiornoSettimana = (timestampUNIX) => {
    const data = new Date(timestampUNIX * 1000);
    const giorniSettimana = [
      "Domenica",
      "Lunedì",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato",
    ];

    return giorniSettimana[data.getDay()];
  };
  const calcolaGiornoEMese = (timestampUNIX) => {
    const data = new Date(timestampUNIX * 1000);
    const mesi = [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre",
    ];

    const giornoMese = data.getDate().toString().padStart(2, "0");
    const mese = mesi[data.getMonth()];

    return `${giornoMese} - ${mese}`;
  };

  const kelvinToCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15);
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <h2>Nelle prossime ore:</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {forecast &&
            forecast.map((meteo, index) => (
              <div key={index} className=" px-3">
                <Row className="text-center align-items-center third-color  rounded-4 overflow-hidden">
                  <Col md="12" className="second-color">
                    {calcolaGiornoEMese(meteo.dt)}
                  </Col>
                  <Col md="6" className="second-color">
                    {calcolaGiornoSettimana(meteo.dt)}
                  </Col>
                  <Col md="6" className="second-color">
                    {calcolaOraEsatta(meteo.dt)}
                  </Col>
                  <Col md="6">
                    <h3 className="d-inline">
                      {kelvinToCelsius(meteo.main.temp)}°C
                    </h3>
                  </Col>
                  <Col md="6">
                    <WeatherIcon icon={meteo.weather[0].icon} />
                  </Col>
                </Row>
              </div>
            ))}
        </Slider>
      </div>
    </Container>
  );
};
export default ForecastMeteoCard;
