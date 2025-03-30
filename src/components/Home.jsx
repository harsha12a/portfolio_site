function Home() {
  return (
    <div className="dark:bg-gray-900 bg-gray-100 h-screen text-gray-900 dark:text-white flex flex-col justify-center items-center relative">
      
      <div className="absolute left-[10%] top-[15%] w-[120px] h-[120px] animate-morph-1"></div>
      <div className="absolute right-[20%] bottom-[5%] w-[120px] h-[120px] animate-morph-2"></div>
      
      <div className="bg-red-500 sm:w-[120px] sm:h-[120px] w-[80px] h-[80px] absolute ml-40 mb-20 rounded-full shadow-[0px_0px_50px_15px_rgba(255,10,10,0.4)]"></div>

      <div className="text-center z-[20]">
        <h1 className="text-4xl sm:text-6xl font-bold">Hello, I'm Harsha</h1>
        <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mt-2">
          Full Stack Developer | AI Enthusiast
        </p>
      </div>
    </div>
  );
}

export default Home;
