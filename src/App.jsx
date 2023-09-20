/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */

import { Toaster } from 'react-hot-toast'
import './App.css'
import { CardWeatherComponent } from './component'

function App() {
  return (
    <main className='flex flex-col justify-center items-center h-screen w-screen bg-dim-white'>
        <CardWeatherComponent />
        {/* <section className='w-full bottom-0 sticky flex flex-row justify-center items-center mt-5 text-black'>
          <p>Designed by <a href="https://dribbble.com/Offdesignarea" target='_blank' className='hover:text-dim-selected-mini-card' >Offdesignarea</a>
          , Built by <a href="https://angel-hernandez-dev.vercel.app" target='_blank' className='hover:text-dim-selected-mini-card' >Angel G. Hernandez</a></p>
          </section> */}
        <Toaster />
    </main>
  )
}

export default App


// https://dribbble.com/Offdesignarea desined by Offdesignarea

