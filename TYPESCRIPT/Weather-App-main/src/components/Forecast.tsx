import { DataProps } from '../types'
import { getIcon } from '../utils/getDate'

const Forecast = ({ data }: DataProps): JSX.Element => {
  const max: number[] = data.list.map((element) => {
    return element.main.temp_max
  })

  const maxAverage: number = Math.max(...max)

  const min: number[] = data.list.map((element) => {
    return element.main.temp_min
  })

  const minAverage: number = Math.min(...min)
  const today = data.list[0]

  const icon = getIcon(today.weather[0].icon)

  return (
    <section className="flex flex-col items-center sm:w-64 w-[13rem] self-center">
      <img className="w-full" src={icon} alt="location icon" />
      <div className="flex flex-col gap-3 items-center">
        <h2 className="w-full text-center text-lg sm:text-2xl">
          {Math.round(today.main.temp)}º
        </h2>
        <p className="text-sm text-center sm:text-xl">
          {today.weather[0].description.toUpperCase()}
        </p>
        <section className="flex flex-row gap-6">
          <div className="flex flex-row gap-1 sm:text-base">
            <p>Máx:</p>
            <p>{Math.ceil(maxAverage)}º</p>
          </div>
          <div className="flex flex-row gap-1 sm:text-base">
            <p>Min:</p>
            <p>{Math.ceil(minAverage)}º</p>
          </div>
        </section>
      </div>
    </section>
  )
}
export default Forecast
