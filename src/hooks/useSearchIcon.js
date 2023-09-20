import { DayClouds, DayRain, DaySnow, DayStorm, DaySun, NightMoon } from "../assets";

export function imageWeather(idWeather) {
  if (idWeather >= 200 && idWeather <= 232) {
    return DayStorm;
  } else if ((idWeather >= 300 && idWeather <= 321) || (idWeather >= 500 && idWeather <= 531)) {
    return DayRain;
  } else if (idWeather >= 600 && idWeather <= 622) {
    return DaySnow;
  } else if (idWeather >= 801 && idWeather <= 804) {
    return DayClouds;
  } else if (idWeather === 800) {
    return DaySun;
  }
  return NightMoon;
}
