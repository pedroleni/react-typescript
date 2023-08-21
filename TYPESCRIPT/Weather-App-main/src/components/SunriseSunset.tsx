import { SunTime } from '../types/index'
import sunriseIcon from '../../public/sunrise-svgrepo-com.svg'
import sunsetIcon from '../../public/sunset-svgrepo-com.svg'

const SunriseSunset = ({ sunset, sunrise }: SunTime): JSX.Element => {
  return (
    <div className="flex flex-row gap-3">
      <section className="w-28 sm:w-56 flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg px-4 py-3 pag-1">
        <img src={sunriseIcon} alt="sunrise_icon" className="w-8" />
        <p>{sunrise}</p>
      </section>
      <section className="w-28 sm:w-56 flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg px-4 py-3 gap-1">
        <img src={sunsetIcon} alt="sunset_icon" className="w-8" />
        <p>{sunset}</p>
      </section>
    </div>
  )
}

export default SunriseSunset
