import { useState, useEffect } from "react";
import { Sun, Moon, X, Code, Terminal, CircleUser, UserRoundSearch, House, FileUser, FolderKanban } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const links = [
    { href: "#home", label: "Home", icon: <House /> },
    { href: "#about", label: "About", icon: <UserRoundSearch /> },
    { href: "#skills", label: "Skills", icon: <Terminal /> },
    {
      href: "https://drive.google.com/file/d/101MFU37WYrJww9eJ9T6Iezp7q774-Lr9/view?usp=sharing",
      label: "Resume", icon: <FileUser />, external: true
    },
    { href: "#projects", label: "Projects", icon: <FolderKanban /> },
    { href: "#coding", label: "Coding Profiles", icon: <Code /> },
    { href: "#contact", label: "Contact", icon: <CircleUser /> }
  ];


  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 p-2 bg-white dark:bg-black rounded-md shadow"
        >
          {isOpen ? <X size={22} /> : <span className="text-2xl font-bold">☰</span>}
        </button>

        <aside
          className={`fixed top-0 left-0 h-full w-[270px] bg-white dark:bg-zinc-900 text-black dark:text-white transform transition-transform duration-300 z-40 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <ul className="mt-16 p-5 space-y-6">{
            links.map(({ href, label, icon, external }) => (
              <li key={label} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                {icon}
                <a
                  href={href}
                  className="text-base"
                  target={external ? "_blank" : "_self"}
                  rel={external ? "noopener noreferrer" : ""}
                >
                  {label}
                </a>
              </li>))}</ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-6 right-6 flex items-center rounded-full w-14 h-7 bg-gray-300 dark:bg-zinc-700 p-1 transition-colors duration-300"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white dark:bg-yellow-400 shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-7" : "translate-x-0"
                } flex items-center justify-center`}
            >
              {darkMode ? <Sun size={12} className="text-yellow-900" /> : <Moon size={12} className="text-gray-700" />}
            </div>
          </button>
        </aside>

        {/* Backdrop */}
        {isOpen && <div className="fixed inset-0 bg-black/30 z-30" onClick={() => setIsOpen(false)} />}
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 w-full h-16 bg-white/90 dark:bg-black/90 backdrop-blur-sm items-center px-8 z-50">
        <ul className="flex gap-20 items-center justify-center w-full">
          {links.map(({ href, label, external, icon }) => (
            <li key={label} className="relative group flex items-center justify-center">
              <a
                href={href}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener noreferrer" : ""}
                className="text-sm font-medium hover:text-green-500 transition-all duration-300 flex items-center justify-center"
              >
                {icon}
              </a>
              {/* Tooltip on hover */}
              <span className="absolute top-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-auto flex items-center rounded-full w-14 h-7 bg-gray-300 dark:bg-zinc-700 p-1 transition-colors duration-300"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white dark:bg-yellow-400 shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-7" : "translate-x-0"
              } flex items-center justify-center`}
          >
            {darkMode ? <Sun size={12} className="text-yellow-900" /> : <Moon size={12} className="text-gray-700" />}
          </div>
        </button>

      </nav>

    </>
  );
}

export default Sidebar;
