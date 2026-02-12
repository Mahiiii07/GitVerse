import { useEffect, useState } from "react";
import Hamburger from "../assets/hamburger";
import gitLab from "../assets/gitlab.png";
import { Link } from "react-router-dom";
import SearchIcon from "@/assets/search";
import Search from "./search";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { pathname:url} = location; 

  function handleButtonClick() {
    setShowSearch(!showSearch);
    document.body.style.overflow = showSearch ? "auto" : "hidden";
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="w-full border-b border-gray-800 bg-gray-950 fixed z-50">
      <div className="mx-auto flex justify-between items-center px-6 py-2">
        <Link
          className="rounded cursor-pointer text-gray-100 px-2 py-1 text-2xl font-bold tracking-wider gap-2 flex"
          to="/"
        >
          <img src={gitLab} alt="img" className="h-8 w-8" />
          <h1>
            Git
            <span className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Verse
            </span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-base font-bold tracking-wide text-gray-100">
          <div
            className="w-24 border rounded-xl border-gray-800 flex gap-2 py-1 px-3 cursor-default"
            onClick={handleButtonClick}
          >
            <SearchIcon height="18" width="18" className="text-gray-400" />
            <span className="text-xs text-gray-400">Ctrl K</span>
          </div>
          <Link
            className={`hover:text-blue-500 ${url[1] === "docs" ? "text-blue-500" : ""}`}
            to="/docs"
          >
            Docs
          </Link>
          <Link
            className={`hover:text-blue-500 ${url[1] === "cheat-sheet" ? "text-blue-500" : ""}`}
            to="/cheat-sheet"
          >
            Cheat Sheet
          </Link>
          <Link
            className={`hover:text-blue-500 ${url[1] === "contact-me" ? "text-blue-500" : ""}`}
            to="/contact-me"
          >
            Contact Me
          </Link>
          <Link
            className={`hover:text-blue-500 ${url[1] === "about-me" ? "text-blue-500" : ""}`}
            to="/about-me"
          >
            About Me
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-100 hover:text-blue-500"
          onClick={toggleMenu}
        >
          <Hamburger />
        </button>
      </div>

      {showSearch && (
        <Search
          handleButtonClick={handleButtonClick}
          setShowSearch={setShowSearch}
        />
      )}

      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          <nav className="flex flex-col items-center gap-4 py-4 text-base font-semibold tracking-wide text-gray-100">
            <Link
              className={`hover:text-blue-500 ${url[1] === "docs" ? "text-blue-500" : ""}`}
              to="/docs"
              onClick={toggleMenu}
            >
              Docs
            </Link>
            <Link
              className={`hover:text-blue-500 ${url[1] === "cheat-sheet" ? "text-blue-500" : ""}`}
              to="/cheat-sheet"
              onClick={toggleMenu}
            >
              Cheat Sheet
            </Link>
            <Link
              className={`hover:text-blue-500 ${url[1] === "contact-me" ? "text-blue-500" : ""}`}
              to="/contact-me"
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
            <Link
              className={`hover:text-blue-500 ${url[1] === "about-me" ? "text-blue-500" : ""}`}
              to="/about-me"
              onClick={toggleMenu}
            >
              About Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
