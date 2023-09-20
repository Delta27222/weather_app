import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFullWeather, getFullWeatherLatLon, getSimpleWeather, getSimpleWeatherLatLog } from '../../api';
import toast from 'react-hot-toast';


const initialState = {
  city: '',
  country: '',
  simpleWeatherInfo: {},
  fullWeatherInfo: {},
}

export const fecthSimpleWeatherLatLog = createAsyncThunk(
  'data/fecthSimpleWeatherLatLog',
  async ({lat, lon}, { dispatch }) => {
    const simpleWeather = await getSimpleWeatherLatLog(lat, lon)
    dispatch(setSimpleWeather(simpleWeather))
    dispatch(setCity(simpleWeather.name))
    dispatch(setCountry())
  }
)
export const fecthFullWeatherLatLon = createAsyncThunk(
  'data/fecthFullWeatherLatLon',
  async ({lat, lon}, { dispatch }) => {
    const fullWeather = await getFullWeatherLatLon(lat, lon)
    dispatch(setFullWeather(fullWeather))
  }
)

export const fecthSimpleWeather = createAsyncThunk(
  'data/fecthSimpleWeather',
  async (city, { dispatch }) => {
    const simpleWeather = await getSimpleWeather(city)
    if(simpleWeather.cod === '404') {
      toast('Location not found!', {
        icon: '🌎😟',
      });
    }else{
      dispatch(setSimpleWeather(simpleWeather))
      dispatch(setCity(simpleWeather.name))
      dispatch(setCountry())
    }
  }
)
export const fecthFullWeather = createAsyncThunk(
  'data/fecthFullWeather',
  async (city, { dispatch }) => {
    const fullWeather = await getFullWeather(city)
    if(fullWeather.cod !== '404') {
      dispatch(setFullWeather(fullWeather))
    }
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers:{
    setCity: (state, action) => {
      state.city = action.payload
    },
    setCountry:(state) => {
      state.country = state.simpleWeatherInfo.sys.country
    },
    setSimpleWeather: (state, action) => {
      state.simpleWeatherInfo = action.payload
    },
    setFullWeather: (state, action) => {
      state.fullWeatherInfo = action.payload
    },
  },
});

export const { setCity, setCountry, setSimpleWeather, setFullWeather } = dataSlice.actions;

export default dataSlice.reducer;