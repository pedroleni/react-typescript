import { Props, ImportMeta } from '../types'
import location from '../../public/location-svgrepo-com.svg'
import { useEffect } from 'react'
import Forecast from './Forecast'
import TodayAndMore from './TodayAndMore'

const Main = ({
  locat,
  options,
  weather,
  setWeather,
  handleClickSearch,
  handleInput,
  handleClickOption,
}: Props): JSX.Element => {
  useEffect(() => {
    const pass: ImportMeta = import.meta.env.VITE_APP_API_KEY
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position
      const { latitude, longitude } = coords
      const lat: number = latitude
      const lon: number = longitude
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${pass}`
      )
        .then(async (res) => await res.json())
        .then((data) => {
          const weatherData = {
            ...data.city,
            list: data.list,
          }
          setWeather(weatherData)
        })
        .catch((e) => e)
    })

    if (weather === null) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=33.770050&lon=-118.193741&units=metric&appid=${pass}`
      )
        .then(async (res) => await res.json())
        .then((data) => {
          const weatherData = {
            ...data.city,
            list: data.list,
          }
          setWeather(weatherData)
        })
        .catch((e) => e)
    }
  }, [])

  return (
    <main className="flex flex-col gap-5 items-center min-h-[86vh] bg-violet-400 dark:bg-violet-900 dark:bg-opacity-70 px-4 py-8 bg-opacity-70">
      <div className="w-full flex flex-col sm:flex-row gap-8 dark:text-purple-200 sm:justify-around">
        <section className="relative flex flex-col gap-5 items-center justify-center">
          <div className="m-auto flex flex-col gap-5 items-center justify-center ">
            <div className="relative flex">
              <input
                className="rounded-l-md w-40 sm:w-56 placeholder:text-violet-600 placeholder:p-2 placeholder:bg-violet-200 h-8 text-violet-600 text-center"
                placeholder="City"
                onChange={handleInput}
              />
              <button
                className="flex justify-center rounded-r-md border-2 h-8 w-10"
                onClick={handleClickSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
            <ul className="absolute top-8 bg-blue-500 rounded-md sm:top-20">
              {options.map((option: any, index: number) => (
                <li key={index}>
                  <button
                    className="text-sm w-full hover:bg-violet-500 hover:text-violet-200 px-2 py-1 cursor-pointer"
                    onClick={() => {
                      handleClickOption(option)
                    }}
                  >
                    {option.name}, {option.country}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-row gap-2">
              <img className="w-5" src={location} alt="location icon" />
              {weather !== null && (
                <h2 className="text-lg sm:text-2xl">
                  {weather.name}
                  <span className="font-extralight">, {weather.country}</span>
                </h2>
              )}
            </div>
          </div>
        </section>
        {weather !== null && <Forecast data={weather} />}
      </div>
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        {weather !== null && <TodayAndMore info={weather} />}
      </div>
    </main>
  )
}
export default Main
