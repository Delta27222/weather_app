import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFullWeather, getSimpleWeather } from '../../component';


const initialState ={
  city: '',
  simpleWeatherInfo: {},
  fullWeatherInfo: {},
}

export const fecthSimpleWeather = createAsyncThunk(
  'data/fecthSimpleWeather',
  async (city, { dispatch }) => {
    const simpleWeather = await getSimpleWeather(city)
    dispatch(setSimpleWeather(simpleWeather))
    dispatch(setCity(city))
  }
)
export const fecthFullWeather = createAsyncThunk(
  'data/fecthFullWeather',
  async (city, { dispatch }) => {
    const fullWeather = await getFullWeather(city)
    dispatch(setFullWeather(fullWeather))
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers:{
    setCity: (state, action) => {
      state.city = action.payload
    },
    setSimpleWeather: (state, action) => {
      state.simpleWeatherInfo = action.payload
    },
    setFullWeather: (state, action) => {
      console.log('')
      state.fullWeatherInfo = action.payload
    },
  },
});

export const { setCity, setSimpleWeather, setFullWeather } = dataSlice.actions;

export default dataSlice.reducer;