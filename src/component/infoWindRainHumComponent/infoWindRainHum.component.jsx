/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import { drop, rain, wind } from "../../assets"

const InfoWindRainHumComponent = ({loading}) => {
  const info = useSelector(state => state.data.fullWeatherInfo)
  var firstObj = {}
  var allInfo = []

  if (info && info.list && info.list.length > 0) {
    firstObj = info.list[0];
    allInfo = [
      {
        icon: wind,
        value: firstObj.wind.speed,
        unit: 'km/h',
        title: 'Wind'
      },
      {
        icon: drop,
        value: firstObj.main.humidity,
        unit: '%',
        title: 'Humidity'
      },
      {
        icon: rain,
        value: firstObj.rain['3h'],
        unit: '%',
        title: 'Rain'
      }
    ]
  }

  return (
    <section className="flex flex-row justify-center items-center gap-1 mt-4">
      {allInfo.map((item, index) => ((
        <div key={index} className="w-[80px] h-[50px] py-4 flex flex-col justify-center items-center rounded-2xl space-y-1 shadow-md">
          <img src={item.icon} alt="icon" className="w-3"/>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[8px] font-bold">{!loading ? `${item.value} ${item.unit}` : '...' }</p>
            <p className="text-[10px] text-gray-400 font-normal ">{!loading ? `${item.title}` : '...'}</p>
          </div>
        </div>
      )))}
    </section>
  )
}

export default InfoWindRainHumComponent