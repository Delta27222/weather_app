
export const getSimpleWeather = (city) => {
  return fetch(`${import.meta.env.VITE_BASEURL}${city}${import.meta.env.VITE_APIKEY}`)
  .then(res => res.json())
  .catch(error => console.log(error))
}

export const getFullWeather = (city) => {
  return fetch(`${import.meta.env.VITE_BASEURL2}${city}${import.meta.env.VITE_APIKEY}`)
  .then(res => res.json())
  .catch(error => console.log(error))
}