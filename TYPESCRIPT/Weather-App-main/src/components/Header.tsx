import logo from '../../public/weather-svgrepo-com (1).svg'

const Header = (): JSX.Element => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const changeMode: () => void = () => {
    document.documentElement.classList.toggle('dark')

    const toggle: boolean = document.documentElement.className === 'dark'

    toggle ? (localStorage.theme = 'dark') : (localStorage.theme = 'light')
  }

  return (
    <header className="flex flex-row justify-between bg-purple-400 dark:bg-violet-700 dark:bg-opacity-60 bg-opacity-50 py-3 px-6 h-[8vh]">
      <img className="w-10" src={logo} alt="logo weather" />
      <label
        htmlFor="check"
        className="rounded-full w-12 h-6 bg-slate-600 my-auto relative cursor-pointer"
      >
        <span
          className="rounded-full w-12 h-6 bg-slate-600 my-auto relative cursor-pointer"
          onClick={changeMode}
        >
          <input type="checkbox" id="check" className="sr-only peer" />
          <span
            className="border-2 w-6 h-6 bg-violet-900 absolute rounded-full peer-checked:bg-violet-200 peer-checked:left-6 peer-checked:border-0 transition-all duration-500 dark:peer-checked:left-6 dark:peer-checked:bg-violet-200 dark:peer-checked:border-0"
            onClick={changeMode}
          ></span>
        </span>
      </label>
    </header>
  )
}

export default Header
