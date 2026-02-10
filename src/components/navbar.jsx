import { useState } from "react";
import Hamburger from "../assets/hamburger";
import gitLab from "../assets/gitlab.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const url = window.location.pathname.split('/');
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full border-b border-gray-800 bg-gray-950 fixed z-50">
      <div className="mx-auto flex justify-between items-center px-6 py-2">
        <a
          className="rounded cursor-pointer text-gray-100 px-2 py-1 text-2xl font-bold tracking-wider gap-2 flex"
          href="/"
        >
          <img src={gitLab} alt="img" className="h-8 w-8" />
          <h1>Git<span className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Verse</span></h1>
        </a>

        <nav className="hidden md:flex items-center gap-5 text-base font-bold tracking-wide text-gray-100">
          <a
            className={`hover:text-blue-500 ${url[1] === "docs" ? "text-blue-500" : ""}`}
            href="/docs"
          >
            Docs
          </a>
          <a
            className={`hover:text-blue-500 ${url[1] === "cheat-sheet" ? "text-blue-500" : ""}`}
            href="/cheat-sheet"
          >
            Cheat Sheet
          </a>
          <a
            className={`hover:text-blue-500 ${url[1] === "contact-me" ? "text-blue-500" : ""}`}
            href="/contact-me"
          >
            Contact Me
          </a>
          <a
            className={`hover:text-blue-500 ${url[1] === "about-me" ? "text-blue-500" : ""}`}
            href="/about-me"
          >
            About Me
          </a>
        </nav>

        <button
          className="md:hidden text-gray-100 hover:text-blue-500"
          onClick={toggleMenu}
        >
          <Hamburger />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          <nav className="flex flex-col items-center gap-4 py-4 text-base font-semibold tracking-wide text-gray-100">
            <a
              className={`hover:text-blue-500 ${url[1] === "docs" ? "text-blue-500" : ""}`}
              href="/docs"
              onClick={toggleMenu}
            >
              Docs
            </a>
            <a
              className={`hover:text-blue-500 ${url[1] === "cheat-sheet" ? "text-blue-500" : ""}`}
              href="/cheat-sheet"
              onClick={toggleMenu}
            >
              Cheat Sheet
            </a>
            <a
              className={`hover:text-blue-500 ${url[1] === "contact-me" ? "text-blue-500" : ""}`}
              href="/contact-me"
              onClick={toggleMenu}
            >
              Contact Me
            </a>
            <a
              className={`hover:text-blue-500 ${url[1] === "about-me" ? "text-blue-500" : ""}`}
              href="/about-me"
              onClick={toggleMenu}
            >
              About Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
