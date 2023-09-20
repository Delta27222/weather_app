/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { locationIcon, refreshIcon, searchIcon } from '../../assets'
import { useSelector } from 'react-redux'

const HeaderSectionComponent = () => {
  return (
    <section className="w-full flex flex-row justify-between items-center">
      <Location />
      <ButtonSearch />
    </section>
  )
}

export default HeaderSectionComponent


const Location = () => {
  const city =  useSelector(state => state.data.city);
  const country =  useSelector(state => state.data.country);
  return (
    <div className="text-black flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-1">
        <img src={locationIcon} alt="searchIcon" className="w-3"/>
        <h1>{city.charAt(0).toUpperCase() + city.slice(1)}, {country}</h1>
      </div>
      <span className="rounded-full flex flex-row justify-center gap-1 items-center px-3 py-1 bg-gray-100 text-black text-[10px] cursor-pointer">
        <img src={refreshIcon} alt="refreshIcon" className="w-2 text-black"/>
        Update
      </span>
    </div>
  )
}

const ButtonSearch = () => {
  return (
    <span className="rounded-full border flex flex-col justify-center items-center p-2 border-gray-400 hover:bg-dim-unselected-mini-card">
      <img src={searchIcon} alt="searchIcon" className="w-5"/>
    </span>
  )
}



