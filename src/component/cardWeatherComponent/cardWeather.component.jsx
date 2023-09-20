/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { HeaderSectionComponent, InfoDaysComponent, InfoWindRainHumComponent, MidInfoComponent } from ".."
import { useEffect, useState } from "react"
import { fecthFullWeather, fecthFullWeatherLatLon, fecthSimpleWeather, fecthSimpleWeatherLatLog, setLoading } from "../../store"
import { getLocation } from "../../hooks/useLocation";

const CardWeatherComponent = () => {
  const [firstEntry, setFirstEntry] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    if(firstEntry) {
      const fecthLocation = async () => {
        try {
          const locationData = await getLocation();
          setFirstEntry(false)
          dispatch(fecthSimpleWeatherLatLog({lat:locationData.latitude,lon:locationData.longitude}))
          dispatch(fecthFullWeatherLatLon({lat:locationData.latitude,lon:locationData.longitude}))
        } catch (error) {
          console.error('Error getting location:', error);
        }
      }
      fecthLocation();
    }
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 1000);
  }, [])
  const loading = useSelector(state => state.ui.loading)
  return (
    <article className="flex flex-col items-center p-[27px] border h-[624px] w-[300px] bg-dim-card rounded-[40px] shadow-md text-black">
      <HeaderSectionComponent/>
      <MidInfoComponent loading={loading}/>
      <InfoWindRainHumComponent loading={loading}/>
      <InfoDaysComponent loading={loading}/>
    </article>
  )
}

export default CardWeatherComponent


