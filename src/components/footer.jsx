import likedIn from "../assets/linkedin.png"
import pinterest from "../assets/pinterest.png"
import github from "../assets/github.png"
import twitter from "../assets/twitter.png"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-gray-950">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 text-sm text-slate-400">
        <span className="mb-4 md:mb-0">© {new Date().getFullYear()} Git Guide</span>
        {/* <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-200"
          >
            <img src={likedIn} alt="LinkedIn" className="h-5"/>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-200"
          >
            <img src={twitter} alt="Twitter" className="h-5"/>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-200"
          >
            <img src={pinterest} alt="Pinterest" className="h-5"/>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-200"
          >
            <img src={github} alt="GitHub" className="h-5"/>
          </a>
        </div> */}
        <span>Made with React & Tailwind</span>
      </div>
    </footer>
  )
}
