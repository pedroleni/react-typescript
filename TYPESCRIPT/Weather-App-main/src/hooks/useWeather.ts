import { useEffect, useState, ChangeEvent } from 'react'
import { OptionType, WeatherType } from '../types'

const useWeather = (): {
  locat: string
  options: [] | any
  weather: WeatherType | any
  setWeather: React.Dispatch<React.SetStateAction<WeatherType | null>>
  handleInput: (e: ChangeEvent<HTMLInputElement>) => OptionType[] | undefined
  handleClickSearch: () => void
  handleClickOption: (option: OptionType) => void
} => {
  const [locat, setLocat] = useState<string>('')
  const [options, setOptions] = useState([])
  const [city, setCity] = useState<OptionType | null>(null)
  const [weather, setWeather] = useState<WeatherType | null>(null)

  const pass: ImportMeta = import.meta.env.VITE_APP_API_KEY
  const getOptions = (value: string): void => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${pass}`
    )
      .then(async (res) => await res.json())
      .then((data) => setOptions(data))
      .catch((e) => e)
  }
  const handleInput = (
    e: ChangeEvent<HTMLInputElement>
  ): OptionType[] | undefined => {
    const value = e.target.value.trim()
    setLocat(value)
    if (value === '') {
      return
    }
    getOptions(value)
  }

  const getWeather = (city: OptionType): void => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${pass}`
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

  const handleClickSearch = (): void => {
    if (!city) return
    getWeather(city)
  }
  const handleClickOption = (option: OptionType): void => {
    setCity(option)
  }
  useEffect(() => {
    if (city) {
      setLocat(city.name)
      setOptions([])
    }
  }, [city])

  return {
    locat,
    options,
    weather,
    setWeather,
    handleInput,
    handleClickSearch,
    handleClickOption,
  }
}

export default useWeather
