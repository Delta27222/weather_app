/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { DayClouds, DayRain, DaySnow, DayStorm, DaySun, NightMoon } from '../../assets';

const MidInfoComponent = ({loading}) => {
  const info = useSelector(state => state.data.simpleWeatherInfo)

  return (
    <section className="flex flex-col justify-center items-center">
    <div className="h-[250px]">
      <img src={` ${loading ? NightMoon : imageWeather(parseInt(info.weather[0].id))}`} alt="weatherIcon" className="scale-[.7]"/>
    </div>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold">{loading ? '...' : parseInt(info.main.temp)+'°'}</h1>
      <h2 className="text-1xl font-bold text-gray-400">{loading ? '...' : capitalizeString(info.weather[0].description)}</h2>
    </div>
  </section>
  )
}

export default MidInfoComponent

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function imageWeather(idWeather) {
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
