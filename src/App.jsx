/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { setAddress } from './store/slices/dataSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAddress())
  }, [])

  return (
    <>
      <h1 className="text-7xl font-bold underline mt-10 text-red-500">
      Hello world!
      </h1>
    </>
  )
}

export default App
