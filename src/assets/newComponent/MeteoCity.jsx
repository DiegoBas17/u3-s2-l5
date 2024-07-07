import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ForecastMeteoCard from "./ForecastMeteoCard";
import MainCardSecondPage from "./MainCardSecondPage";
import MyInputForm from "./MyInputForm";
import { Container } from "react-bootstrap";

const MeteoCity = () => {
  const params = useParams();
  const city = params.city;
  const [arrayGeoCity, setArrayGeoCity] = useState("");

  /* fetch per ricavare lat e lon */
  const fetchGeocoding = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=46db030ed3dcd0f7a8c87d071969153f`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento della città");
        }
      })
      .then((arraycities) => {
        setArrayGeoCity(arraycities);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    if (city) {
      fetchGeocoding();
    }
  }, [city]);

  return (
    <>
      {arrayGeoCity && (
        <>
          <h1 className="text-center">
            {arrayGeoCity[0].local_names.it
              ? arrayGeoCity[0].local_names.it
              : arrayGeoCity[0].name}
          </h1>
          <Container>
            <MyInputForm />
          </Container>
          <MainCardSecondPage
            name={
              city
              /* arrayGeoCity[0].local_names.it
                ? arrayGeoCity[0].local_names.it
                : arrayGeoCity[0].name */
            }
            lat={arrayGeoCity[0].lat}
            lon={arrayGeoCity[0].lon}
          />
          <ForecastMeteoCard
            lat={arrayGeoCity[0].lat}
            lon={arrayGeoCity[0].lon}
          />
        </>
      )}
    </>
  );
};
export default MeteoCity;
