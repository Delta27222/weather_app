/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { HeaderSectionComponent, MidInfoComponent } from ".."
import { useEffect } from "react"
import { fecthFullWeather, fecthSimpleWeather, setLoading } from "../../store"


const CardWeatherComponent = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {})
    dispatch(setLoading(true))
    dispatch(fecthSimpleWeather('finlandia'))
    dispatch(fecthFullWeather('finlandia'))

    setTimeout(() => {
      dispatch(setLoading(false))
    }, 1000);
  }, [])
  const loading = useSelector(state => state.ui.loading)
  return (
    <article className="flex flex-col items-center p-[27px] border h-[624px] w-[300px] bg-dim-card rounded-[40px] shadow-md text-black">
      <HeaderSectionComponent/>
      <MidInfoComponent loading={loading}/>
    </article>
  )
}

export default CardWeatherComponent