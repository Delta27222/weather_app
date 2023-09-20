export const getSimpleWeatherLatLog = (lat, lon) => {
  return fetch(`${import.meta.env.VITE_BASEURL}lat=${lat}&lon=${lon}${import.meta.env.VITE_APIKEY}`)
  .then(res => res.json())
  .catch(error => console.log(error))
}
export const getFullWeatherLatLon = (lat,lon) => {
  return fetch(`${import.meta.env.VITE_BASEURL2}lat=${lat}&lon=${lon}${import.meta.env.VITE_APIKEY}`)
  .then(res => res.json())
  .catch(error => console.log(error))
}

export const getSimpleWeather = (city) => {
  return fetch(`${import.meta.env.VITE_BASEURL}q=${city}${import.meta.env.VITE_APIKEY}`)
  .then(res => res.json())
  .catch(error => console.log(error))
}

export const getFullWeather = (city) => {
  return fetch(`${import.meta.env.VITE_BASEURL2}q=${city}${import.meta.env.VITE_APIKEY}`)
  .then(res => res.json())
  .catch(error => console.log(error))
}