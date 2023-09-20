/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { locationIcon, refreshIcon, searchIcon } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { fecthFullWeather, fecthSimpleWeather } from "../../store"

const HeaderSectionComponent = () => {
  const [open, setOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch()
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(fecthSimpleWeather(inputValue))
      dispatch(fecthFullWeather(inputValue))
      setOpen(prev => !prev)
      setInputValue('');
    }
  };
  return (
    <section className="w-full flex flex-row justify-between items-center">
      <Location open={open}/>
        <SerarchInput open={open} handleChange={handleChange} inputValue={inputValue} handleKeyPress={handleKeyPress}/>
        <ButtonSearch setOpen={setOpen} setInputValue={setInputValue}/>
    </section>
  )
}

export default HeaderSectionComponent


const Location = ({open}) => {
  const city =  useSelector(state => state.data.city);
  const country =  useSelector(state => state.data.country);
  return (
    <div className={`${!open ? 'animate-fade-out ' : 'animate-fade-in '} flex flex-col justify-center items-center`}>
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

const ButtonSearch = ({ setOpen, setInputValue}) => {

  const openSearch = () => {
    setInputValue('');
    setOpen(prev => !prev)
  }

  return (
    <button className="rounded-full border flex flex-col justify-center items-center p-2 border-gray-400 hover:bg-dim-unselected-mini-card" onClick={openSearch} onTouchStart={openSearch}>
      <img src={searchIcon} alt="searchIcon" className="w-5"/>
    </button>
  )
}

const SerarchInput = ({open, inputValue, handleChange, handleKeyPress}) => {
  return (
    <input
      type="text"
      className={`${open ? 'animate-fade-out' : 'animate-fade-in'} absolute bg-transparent outline-none border p-2 w-[200px] bg-white`}
      placeholder="Search location"
      value={inputValue} // Establece el valor del input
      onChange={handleChange} // Maneja el cambio en el input
      onKeyPress={handleKeyPress} // Maneja la pulsación de tecla en el input
    />
  )
}
