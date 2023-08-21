import { ImportMeta } from '../types'

export const getDataForecast = async (
  lat: number,
  lon: number,
  pass: ImportMeta
): Promise<void> => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${pass}`
  )
    .then(async (res) => await res.json())
    .then((data) => {
      const weatherData = {
        ...data.city,
        list: data.list,
      }
      return weatherData
    })
    .catch((e) => e)
}
