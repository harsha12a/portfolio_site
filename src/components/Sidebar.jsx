import { useState, useEffect } from "react";
import { Sun, Moon, X } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)} />}
      <button
        className="fixed top-4 right-4 z-[100] p-2 text-gray-800 bg-white rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <div className="w-5 h-5 flex justify-center items-center">☰</div>}
      </button>

      <aside
        className={`fixed left-0 top-0 h-full w-[300px] bg-white/50 dark:bg-gray-900/50 text-black dark:text-white shadow-lg backdrop-blur-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:translate-x-0 pt-10`}
      >
        <ul className="p-6 space-y-10">
          <li className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] hover:translate-x-3 transition-all duration-200 before:dark:bg-white before:bg-black before:duration-300 hover:before:w-full hover:shadow-sm rounded-md p-2">
            <a href="#home" className="hover:text-gray-900 hover:dark:text-white text-xl">Home</a>
          </li>
          <li className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] hover:translate-x-3 transition-all duration-200 before:dark:bg-white before:bg-black before:duration-300 hover:before:w-full hover:shadow-sm rounded-md p-2">
            <a href="#projects" className="hover:text-gray-900 hover:dark:text-white text-xl">Projects</a>
          </li>
          <li className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] hover:translate-x-3 transition-all duration-200 before:dark:bg-white before:bg-black before:duration-300 hover:before:w-full hover:shadow-sm rounded-md p-2">
            <a href="#coding" className="hover:text-gray-900 hover:dark:text-white text-xl">Coding Profiles</a>
          </li>
          <li className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] hover:translate-x-3 transition-all duration-200 before:dark:bg-white before:bg-black before:duration-300 hover:before:w-full hover:shadow-sm rounded-md p-2">
            <a href="#contact" className="hover:text-gray-900 hover:dark:text-white text-xl">Contact</a>
          </li>
        </ul>

        <button
          className="absolute bottom-6 left-6 flex items-center gap-2 p-2 rounded-md dark:bg-gray-300/50 bg-gray-700/50"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
