/* eslint-disable react-hooks/exhaustive-deps */

import { Toaster } from 'react-hot-toast'
import './App.css'
import { CardWeatherComponent } from './component'

function App() {
  return (
    <main className='flex flex-col justify-center items-center h-screen w-screen bg-dim-white'>
        <CardWeatherComponent />
        <Toaster />
    </main>
  )
}

export default App


// https://dribbble.com/Offdesignarea desined by Offdesignarea

