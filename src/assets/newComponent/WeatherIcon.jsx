import clearSkyDay from "../svgAnimated/01d.svg";
import clearSkyNight from "../svgAnimated/01n.svg";
import fewCloudsDay from "../svgAnimated/02d.svg";
import fewCloudsNight from "../svgAnimated/02n.svg";
import scatteredCloudsDay from "../svgAnimated/03d.svg";
import scatteredCloudsNight from "../svgAnimated/03n.svg";
import brokenCloudsDay from "../svgAnimated/04d.svg";
import brokenCloudsNight from "../svgAnimated/04n.svg";
import showerRainDay from "../svgAnimated/09d.svg";
import showerRainNight from "../svgAnimated/09n.svg";
import rainDay from "../svgAnimated/10d.svg";
import rainNight from "../svgAnimated/10n.svg";
import thunderstormDay from "../svgAnimated/11d.svg";
import thunderstormNight from "../svgAnimated/11n.svg";
import snowDay from "../svgAnimated/13d.svg";
import snowNight from "../svgAnimated/13n.svg";
import mistDay from "../svgAnimated/50d.svg";
import mistNight from "../svgAnimated/50n.svg";

const WeatherIcon = ({ icon, style = {} }) => {
  switch (icon) {
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

  return <img src={icon} alt="Weather Icon" style={style} />;
};

export default WeatherIcon;
