import { InfoProps } from '../types'
import temp from '../../public/temperature-high-svgrepo-com.svg'
import humidity from '../../public/humidity-svgrepo-com.svg'
import rain from '../../public/umbrella-svgrepo-com.svg'
import wind from '../../public/wind-svgrepo-com.svg'

const InfoToday = ({ info }: InfoProps): JSX.Element => {
  const forecast = info.list[0]

  return (
    <div className="max-w-screen-lg w-10/12 flex flex-row justify-around items-center p-2 shadow-[0_50px_25px_-24px_rgb(0,0,0,0.5)] rounded-md bg-violet-300 opacity-80">
      <section className="flex flex-col items-center w-12">
        <img className="w-8" src={temp} alt="temperature icon" />
        <p>{Math.floor(forecast.main.feels_like)}º</p>
      </section>
      <section className="flex flex-col items-center w-12">
        <img className="w-8" src={humidity} alt="humidity icon" />
        <p>{Math.floor(forecast.main.humidity)}%</p>
      </section>
      <section className="flex flex-col items-center w-12">
        <img className="w-8" src={rain} alt="rain icon" />
        <p>{Math.floor(forecast.pop)}%</p>
      </section>
      <section className="flex flex-col items-center w-12">
        <img className="w-8" src={wind} alt="wind icon" />
        <div className="flex flex-row items-center gap-1">
          <p>{Math.round(forecast.wind.speed)}</p>
          <p className="text-sm">Km/h</p>
        </div>
      </section>
    </div>
  )
}
export default InfoToday
