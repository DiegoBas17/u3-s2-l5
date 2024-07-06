import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ForecastMeteoCard from "./ForecastMeteoCard";

const MeteoDetails = () => {
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
  }, []);

  return (
    <>
      {arrayGeoCity && (
        <ForecastMeteoCard
          lat={arrayGeoCity[0].lat}
          lon={arrayGeoCity[0].lon}
        />
      )}
    </>
  );
};
export default MeteoDetails;
