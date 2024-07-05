import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./assets/componet/MyNavbar";
import InputFormCity from "./assets/componet/InputFormCity";
import CitySelected from "./assets/componet/CitySelected";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter /* Route, Routes */ } from "react-router-dom";
/* import MoreMeteo from "./assets/componet/MoreMeteo"; */
import MyFooter from "./assets/componet/MyFooter";

function App() {
  const [arrayCity, setArrayCity] = useState("");
  const [city, setCity] = useState("");
  const fetchInputCity = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=46db030ed3dcd0f7a8c87d071969153f`
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
    if (city) {
      fetchInputCity();
    }
  }, [city]);

  return (
    <div id="containerApp" className="text-light">
      <BrowserRouter>
        <MyNavbar />
        <InputFormCity setCity={setCity} />
        {/* <Routes> */}
        {city && arrayCity.length > 0 && (
          <CitySelected objCity={arrayCity[0]} />
        )}
        {/* <Route
            path="/moremeteo"
            element={
              arrayCity.length > 0 && <MoreMeteo objCity={arrayCity[0]} />
            }
          /> */}
        {/* </Routes> */}
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
