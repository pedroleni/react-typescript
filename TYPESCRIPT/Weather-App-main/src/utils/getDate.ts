import clearDay from '../../public/clear-day.svg'
import clearNight from '../../public/falling-stars.svg'
import cloudyDay from '../../public/partly-cloudy-day.svg'
import cloudyNight from '../../public/partly-cloudy-night.svg'
import overcastDay from '../../public/overcast-day.svg'
import overcastNight from '../../public/overcast-night.svg'
import overcast from '../../public/overcast.svg'
import drizzleDay from '../../public/partly-cloudy-day-drizzle.svg'
import drizzleNight from '../../public/partly-cloudy-night-drizzle.svg'
import rainDay from '../../public/partly-cloudy-day-rain.svg'
import rainNight from '../../public/partly-cloudy-night-rain.svg'
import thunderstomsDay from '../../public/thunderstorms-day.svg'
import thunderstomsNight from '../../public/thunderstorms-night.svg'
import snowDay from '../../public/partly-cloudy-day-snow.svg'
import snowNight from '../../public/partly-cloudy-night-snow.svg'
import wind from '../../public/dust-wind.svg'
import { DateToday } from '../types'

export const getDate = (date: number): DateToday => {
  const myDate: Date = new Date(date * 1000)
  const array: string[] = myDate.toString().split(' ')
  return {
    weekDay: array[0],
    day: array[2],
    month: array[1],
    year: array[3],
  }
}

export const formatDate = (date: string): string => {
  const dateArray: any = date.split('-')
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]
  return `${dateArray[2]} ${months[dateArray[1] - 1]}`
}

export const average = (list: any): Record<string, string> => {
  const averageTotal: Record<string, string> = {}
  for (const key in list) {
    const counts = list[key].reduce((counts: any, string: any) => {
      counts[string] = (counts[string] || 0) + 1
      return counts
    }, {})
    averageTotal[key] = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    )
  }
  return averageTotal
}

export const hour = (string: string): string[] => {
  const date = new Date(string)
  date.setHours(date.getHours() - 1)
  const dateString: string = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
  const timeString: string = date.toLocaleTimeString()
  const time: string = timeString.split(':')[0] + ' h'
  return [dateString, time]
}

export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours: string = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}

export const getIcon = (string: string): string | undefined => {
  switch (string) {
    case '01d':
      return clearDay
    case '01n':
      return clearNight
    case '02d':
      return cloudyDay
    case '02n':
      return cloudyNight
    case '03d':
      return overcastDay
    case '03n':
      return overcastNight
    case '04d':
      return overcast
    case '04n':
      return overcast
    case '09d':
      return drizzleDay
    case '09n':
      return drizzleNight
    case '10d':
      return rainDay
    case '10n':
      return rainNight
    case '11d':
      return thunderstomsDay
    case '11n':
      return thunderstomsNight
    case '13d':
      return snowDay
    case '13n':
      return snowNight
    case '50d':
      return wind
    case '50n':
      return wind
  }
}
