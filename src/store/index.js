export * from './store';
import {fecthFullWeather, fecthSimpleWeather, fecthSimpleWeatherLatLog, fecthFullWeatherLatLon} from './slices/dataSlice';
import { setLoading } from './slices/uiSlice';
export {fecthFullWeather, fecthSimpleWeather, fecthSimpleWeatherLatLog, fecthFullWeatherLatLon, setLoading}