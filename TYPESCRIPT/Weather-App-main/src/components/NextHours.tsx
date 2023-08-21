import { ForecastToday } from '../types/index'
import { getIcon } from '../utils/getDate'

interface Prp {
  forecastToday: ForecastToday[]
}

const NextHours = ({ forecastToday }: Prp): JSX.Element => {
  const nextH = forecastToday
  return (
    <div className="flex overflow-x-scroll w-full bg-purple-300 bg-opacity-20 p-2 gap-1.5 rounded-md max-w-screen-2xl shadow-[0_50px_25px_-24px_rgb(0,0,0,0.3)]">
      {nextH.map((item, i) => (
        <div
          className="inline-block text-center w-[50px] flex-shrink-0 sm:w-[85px] bg-violet-200 bg-opacity-30 rounded-md"
          key={i}
        >
          <p>{i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}</p>
          <img
            src={getIcon(item.weather[0].icon)}
            alt={`weather-icon-${item.weather[0].description}`}
          />
          <p>{Math.round(item.main.temp)}º</p>
        </div>
      ))}
    </div>
  )
}
export default NextHours
