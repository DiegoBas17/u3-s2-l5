import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./assets/componet/MyNavbar";
import InputFormCity from "./assets/componet/InputFormCity";
import CitySelected from "./assets/componet/CitySelected";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyFooter from "./assets/componet/MyFooter";
import Home from "./assets/newComponent/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MeteoDetails from "./assets/newComponent/MeteoDetails";

function App() {
  return (
    <div id="containerApp">
      <BrowserRouter>
        <MyNavbar />
        {/* <InputFormCity setCity={setCity} />
      {city && arrayCity.length > 0 && <CitySelected objCity={arrayCity[0]} />}
 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meteo-datails/:city" element={<MeteoDetails />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
