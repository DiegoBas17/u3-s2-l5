import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./assets/componet/MyNavbar";
import InputFormCity from "./assets/componet/InputFormCity";
import CitySelected from "./assets/componet/CitySelected";
import { useState, useEffect } from "react";

function App() {
  const [arrayCity, setArrayCity] = useState("");
  const [city, setCity] = useState("roma");
  const fetchInputCity = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=dcc50e318c9db5f32a167131d97c167e`
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

  useEffect(() => {
    fetchInputCity();
  }, [city]);

  return (
    <div id="containerApp" className="text-light">
      <MyNavbar />
      <InputFormCity setCity={setCity} />
      {arrayCity.length > 0 && <CitySelected objCity={arrayCity[0]} />}
    </div>
  );
}

export default App;
