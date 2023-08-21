import Header from './components/Header'
import Main from './components/Main'
import useWeather from './hooks/useWeather'
import Footer from './components/Footer'

const App = (): JSX.Element => {
  const {
    locat,
    options,
    weather,
    setWeather,
    handleInput,
    handleClickSearch,
    handleClickOption,
  } = useWeather()

  return (
    <div className="App">
      <div className="bg-[url('../public/bkgr.jpeg')] sm:bg-center">
        <Header />
        <Main
          locat={locat}
          weather={weather}
          setWeather={setWeather}
          options={options}
          handleInput={handleInput}
          handleClickSearch={handleClickSearch}
          handleClickOption={handleClickOption}
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
