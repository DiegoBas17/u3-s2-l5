import { useEffect, useState } from "react";

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
  return <div>ciao</div>;
};
export default ForecastMeteoCard;
