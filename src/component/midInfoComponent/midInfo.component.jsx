/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { NightMoon } from '../../assets';
import { imageWeather } from "../../hooks/useSearchIcon";

const MidInfoComponent = ({loading}) => {
  const info = useSelector(state => state.data.simpleWeatherInfo)

  return (
    <section className="flex flex-col justify-center items-center">
    <div className="h-[230px]">
      <img src={` ${loading ? NightMoon : imageWeather(parseInt(info.weather[0].id))}`} alt="weatherIcon" className="scale-[.8]"/>
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