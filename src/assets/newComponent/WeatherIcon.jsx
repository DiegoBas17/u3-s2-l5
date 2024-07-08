import clearSkyDay from "../svgAnimated/day.svg";
import clearSkyNight from "./path/to/01n.png";
import fewCloudsDay from "./path/to/02d.png";
import fewCloudsNight from "./path/to/02n.png";
import scatteredCloudsDay from "./path/to/03d.png";
import scatteredCloudsNight from "./path/to/03n.png";
import brokenCloudsDay from "./path/to/04d.png";
import brokenCloudsNight from "./path/to/04n.png";
import showerRainDay from "./path/to/09d.png";
import showerRainNight from "./path/to/09n.png";
import rainDay from "./path/to/10d.png";
import rainNight from "./path/to/10n.png";
import thunderstormDay from "./path/to/11d.png";
import thunderstormNight from "./path/to/11n.png";
import snowDay from "./path/to/13d.png";
import snowNight from "./path/to/13n.png";
import mistDay from "./path/to/50d.png";
import mistNight from "./path/to/50n.png";

const WeatherIcon = ({ code }) => {
  let icon;

  switch (code) {
    case "01d":
      icon = clearSkyDay;
      break;
    case "01n":
      icon = clearSkyNight;
      break;
    case "02d":
      icon = fewCloudsDay;
      break;
    case "02n":
      icon = fewCloudsNight;
      break;
    case "03d":
      icon = scatteredCloudsDay;
      break;
    case "03n":
      icon = scatteredCloudsNight;
      break;
    case "04d":
      icon = brokenCloudsDay;
      break;
    case "04n":
      icon = brokenCloudsNight;
      break;
    case "09d":
      icon = showerRainDay;
      break;
    case "09n":
      icon = showerRainNight;
      break;
    case "10d":
      icon = rainDay;
      break;
    case "10n":
      icon = rainNight;
      break;
    case "11d":
      icon = thunderstormDay;
      break;
    case "11n":
      icon = thunderstormNight;
      break;
    case "13d":
      icon = snowDay;
      break;
    case "13n":
      icon = snowNight;
      break;
    case "50d":
      icon = mistDay;
      break;
    case "50n":
      icon = mistNight;
      break;
    default:
      icon = clearSkyDay;
  }

  return <img src={icon} alt="Weather Icon" />;
};

export default WeatherIcon;
