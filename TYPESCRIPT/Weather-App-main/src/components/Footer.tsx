import linkedin from '../../public/linkedin-round-svgrepo-com.svg'
import github from '../../public/github-svgrepo-com (1).svg'

const Footer = (): JSX.Element => {
  return (
    <footer className="h-[6vh] flex items-center justify-center bg-violet-400 dark:bg-violet-900">
      <ul className="flex flex-row gap-16 sm:gap-52">
        <li>
          <a
            href="https://github.com/Lauris21"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-8" src={github} alt="github icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/laura-sanchez-gonzalez0301/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-8" src={linkedin} alt="linkedin icon" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
