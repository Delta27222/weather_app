/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { imageWeather } from "../../hooks/searchIcon";

const InfoDaysComponent = () => {
  const info = useSelector(state => state.data.fullWeatherInfo)
  var firstObj = []
  var firstObj0 = {}
  var firstObj1 = {}
  var firstObj2 = {}
  var firstObj3 = {}
  if (info && info.list && info.list.length > 0) {
    firstObj0 = info.list[2];
    firstObj1 = info.list[3];
    firstObj2 = info.list[4];
    firstObj3 = info.list[5];
    firstObj = [
      { main: [
          parseInt(firstObj0.main.temp)+'°',
          divDate(firstObj0.dt_txt),
          firstObj0.weather[0].id
        ]
      },
      { main: [
          parseInt(firstObj1.main.temp)+'°',
          divDate(firstObj1.dt_txt),
          firstObj1.weather[0].id
        ]
      },
      { main: [
          parseInt(firstObj2.main.temp)+'°',
          divDate(firstObj2.dt_txt),
          firstObj2.weather[0].id
        ]
      },
      { main: [
          parseInt(firstObj3.main.temp)+'°',
          divDate(firstObj3.dt_txt),
          firstObj3.weather[0].id
        ]
      },
    ]
  }

  console.log("🚀 ~ file: infoDays.component.jsx:17 ~ InfoDaysComponent ~ firstObj:", firstObj)

  return (
    <section className="flex flex-col justify-center items-center mt-3 w-full space-y-3 select-none">
      <div className="w-full flex justify-start items-start">
        <p className="font-bold">Today</p>
      </div>
      <div className="flex flex-row justify-center items-center w-full gap-1">
      {firstObj.map((item, index) => ((
        <div key={index} className="h-[90px] w-[60px] rounded-2xl bg-dim-selected-mini-card-down flex flex-col justify-center items-center hover:bg-dim-selected-mini-card group">
          <p className="text-[10px] font-bold group-hover:text-white">{item.main[0]}</p>
          <img src={imageWeather(item.main[2])} alt="icon" className="w-8"/>
          <p className="text-[14px] text-gray-400  font-normal group-hover:text-white">{item.main[1]}</p>
        </div>
      )))}
      </div>
    </section>
  )
}

export default InfoDaysComponent



function divDate(date) {
  const partes = date.split(" "); // Dividir la cadena en fecha y hora
  const horaMinutos = partes[1].split(":"); // Dividir la parte de la hora en horas y minutos
  
  const hora = horaMinutos[0];
  const minutos = horaMinutos[1];
  return `${hora}:${minutos}`
}



