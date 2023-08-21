import { ChangeEvent } from 'react'

export interface OptionType {
  name: string
  country: string
  lat: number
  lon: number
}

export interface ImportMeta {
  readonly VITE_APP_API_KEY: string
  readonly VITE_APP_API_KEY_TIME: string
}

export interface Props {
  locat: string
  weather: WeatherType
  setWeather: (weather: WeatherType) => void
  options: []
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleClickSearch: () => void
  handleClickOption: (option: OptionType) => void
}

export interface DataProps {
  data: WeatherType
}

export interface InfoProps {
  info: WeatherType
}

export interface Info {
  forecastToday: [
    {
      dt_txt: string
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        deg: number
        gust: number
        speed: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
}

export interface ForecastToday {
  dt_txt: string
  dt: number
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  weather: [
    {
      main: string
      icon: string
      description: string
    }
  ]
  wind: {
    deg: number
    gust: number
    speed: number
  }
  clouds: {
    all: number
  }
  pop: number
  visibility: number
}

export interface WeatherType {
  coord: any
  name: string
  country: string
  sunrise: number
  sunset: number
  timezone: number
  list: [
    {
      dt_txt: string
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        deg: number
        gust: number
        speed: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
}

export interface SunTime {
  sunrise: string
  sunset: string
}

export interface DateToday {
  weekDay: string
  day: string
  month: string
  year: string
}

export type TempDay = Record<string, number | string | number[] | string[]>

export interface IconWeather {
  main: string
  icon: string
  description: string
}

export interface weatherMax {
  max: number[] | string[]
  min: string | number | number[] | string[]
  icon: string | number | number[] | string[]
  weather: string | number | number[] | string[]
}
