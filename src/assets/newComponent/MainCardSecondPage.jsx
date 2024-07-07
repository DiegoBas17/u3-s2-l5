import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Calendar, GeoAltFill, Sunrise, Sunset } from "react-bootstrap-icons";

const MainCardSecondPage = (props) => {
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

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };
  /* funzione per ricavare i gradi Celsius dai Kelvin */
  const kelvinToCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15);
  };
  /* funzione per tradurre weather[0].main */
  const translateWeatherCondition = (condition) => {
    switch (condition) {
      case "Clear":
        return "Sereno";
      case "Clouds":
        return "Nuvoloso";
      case "Rain":
        return "Pioggia";
      case "Drizzle":
        return "Pioggia Leggera";
      case "Thunderstorm":
        return "Temporale";
      case "Snow":
        return "Nevicato";
      case "Mist":
        return "Nebbia";
      case "Smoke":
        return "Fumo";
      case "Haze":
        return "Nebbia Leggera";
      case "Dust":
        return "Polvere";
      case "Fog":
        return "Nebbia";
      case "Sand":
        return "Sabbiato";
      case "Ash":
        return "Cenere";
      case "Squall":
        return "Raffica";
      case "Tornado":
        return "Tornado";
      default:
        return condition; // Ritorna il valore originale se non è stato trovato nella mappatura
    }
  };

  const formatUnixTimestamp = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    // Mappatura dei nomi dei mesi
    const monthNames = [
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
    // Formattazione del giorno, del mese e dell'anno
    const day = date.getDate().toString().padStart(2, "0");
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    // Formattazione dell'ora
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    // Converte le ore in formato 12 ore (AM/PM)
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    // Compone la stringa finale
    const formattedDate = `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
    return formattedDate;
  };

  // Calcola la percentuale di riempimento in base alla temperatura
  const calculateFillPercentage = (temp) => {
    if (temp >= 50) return 100; // Se la temperatura è 50°C o più, riempo completamente il cerchio
    if (temp <= -10) return 0; // Se la temperatura è -10°C o meno, riempo il cerchio a 0
    return ((temp + 10) / 60) * 100; // Calcola la percentuale tra -10 e 50°C
  };
  // Calcola la percentuale di riempimento in base alla pressione
  const calculateFillPercentagePressure = (press) => {
    const minPressure = 870; // Valore minimo tipico di pressione atmosferica in millibar
    const maxPressure = 1080; // Valore massimo tipico di pressione atmosferica in millibar
    // Calcola la percentuale di riempimento in base alla pressione fornita
    return ((press - minPressure) / (maxPressure - minPressure)) * 100;
  };

  const calcolaOraEsatta = (timestampUNIX) => {
    const data = new Date(timestampUNIX * 1000);

    const ora = data.getHours().toString().padStart(2, "0");
    const minuti = data.getMinutes().toString().padStart(2, "0");

    const oraFormattata = `${ora}:${minuti}`;

    return oraFormattata;
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  return (
    <>
      {objCityMeteo && (
        <Container>
          <Row>
            <Col md="4">
              <div className="third-color rounded-4 p-4">
                <img
                  src={getWeatherIconUrl(objCityMeteo.weather[0].icon)}
                  alt={`Icona meteo per ${objCityMeteo.name}`}
                />
                <h2>{kelvinToCelsius(objCityMeteo.main.temp)}°C</h2>
                <p>{translateWeatherCondition(objCityMeteo.weather[0].main)}</p>
                <hr />
                <p>
                  <GeoAltFill className="mb-1 me-1" />
                  {props.name}
                </p>
                <p>
                  <Calendar className="mb-1 me-1" />
                  {formatUnixTimestamp(objCityMeteo.dt)}
                </p>
              </div>
            </Col>
            <Col md="8">
              <div className="third-color rounded-4 p-4">
                <Row className="g-2">
                  <Col md="6">
                    <div className="second-color rounded-4 p-4 text-center">
                      Temperatura minima{" "}
                      {kelvinToCelsius(objCityMeteo.main.temp_min)}°C
                      <div className="progress" style={{ height: "20px" }}>
                        <div
                          className="progress-bar fourth-color"
                          role="progressbar"
                          style={{
                            width: `${calculateFillPercentage(
                              kelvinToCelsius(objCityMeteo.main.temp_min)
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="second-color rounded-4 p-4 text-center">
                      Temperatura massima{" "}
                      {kelvinToCelsius(objCityMeteo.main.temp_max)}°C
                      <div className="progress" style={{ height: "20px" }}>
                        <div
                          className="progress-bar fourth-color"
                          role="progressbar"
                          style={{
                            width: `${calculateFillPercentage(
                              kelvinToCelsius(objCityMeteo.main.temp_max)
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="second-color rounded-4 p-4 text-center">
                      Pressione {objCityMeteo.main.pressure}mb
                      <div className="progress" style={{ height: "20px" }}>
                        <div
                          className="progress-bar fourth-color"
                          role="progressbar"
                          style={{
                            width: `${calculateFillPercentagePressure(
                              objCityMeteo.main.pressure
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="second-color rounded-4 p-4 text-center">
                      Umidità {objCityMeteo.main.humidity}%
                      <div className="progress" style={{ height: "20px" }}>
                        <div
                          className="progress-bar fourth-color"
                          role="progressbar"
                          style={{
                            width: `${objCityMeteo.main.humidity}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="second-color rounded-4 p-2 text-center">
                      <Sunrise className="h1 me-2" /> Alba{" "}
                      {calcolaOraEsatta(objCityMeteo.sys.sunrise)}
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="second-color rounded-4 p-2 text-center">
                      <Sunset className="h1 me-2" /> Tramonto{" "}
                      {calcolaOraEsatta(objCityMeteo.sys.sunset)}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default MainCardSecondPage;
