import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./assets/componet/MyNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyFooter from "./assets/componet/MyFooter";
import Home from "./assets/newComponent/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MeteoCity from "./assets/newComponent/MeteoCity";

function App() {
  return (
    <div id="containerApp">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meteo-city/:city" element={<MeteoCity />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
