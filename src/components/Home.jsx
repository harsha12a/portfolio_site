import { useState, useEffect } from "react";

function Home() {
  const roles = ["Full Stack Developer", "AI Enthusiast", "Competitive Programmer"];
  const [curr, setCurr] = useState(roles[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurr(() => {
        const newRole = roles[i];
        i = (i + 1) % roles.length;
        return newRole;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  // Empty dependency array ensures this runs once on mount

  return (
    <div className="dark:bg-gray-900 bg-gray-100 h-screen text-gray-900 dark:text-white flex flex-col justify-center items-center relative" id="home">
      
      <div className="absolute left-[10%] top-[15%] w-[120px] h-[120px] animate-morph-1"></div>
      <div className="absolute right-[20%] bottom-[5%] w-[120px] h-[120px] animate-morph-2"></div>
      
      <div className="bg-red-500 sm:w-[120px] sm:h-[120px] w-[80px] h-[80px] absolute ml-40 mb-20 rounded-full shadow-[0px_0px_50px_15px_rgba(255,10,10,0.4)]"></div>

      <div className="text-center z-[20]">
        <h1 className="text-4xl sm:text-6xl font-bold">Hello, I'm Sree Satya Harsha</h1>
        <div className="flex justify-center items-center mt-4">
        <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mt-2">
          {curr} . . . 
        </p>
        <div className="text-lg ml-2 dark:bg-gray-300 bg-gray-800 w-2 h-6 blink"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
