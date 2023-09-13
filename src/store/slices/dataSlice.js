import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  weatherInfo: {},
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers:{
    setAddress: () => {
      console.log('hola')
    },
  },
});

export const { setAddress } = dataSlice.actions;

export default dataSlice.reducer;