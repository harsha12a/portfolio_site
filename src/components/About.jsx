import React from 'react';

function About() {
  return (
    <section id="about" className="w-full px-4 py-20 bg-gradient-to-br from-white via-gray-100 to-gray-300 dark:from-black dark:to-gray-900 dark:text-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-green-400 mb-8">
          About Me
        </h1>

        <p className="text-sm sm:text-lg dark:text-gray-300 text-gray-800 max-w-3xl mx-auto leading-relaxed">
          I'm someone who enjoys building things with <span className="text-green-400 font-medium">JavaScript</span>,
          solving <span className="dark:text-white text-black font-medium">algorithmic challenges</span>, and continuously learning through code.
        </p>

        <p className="mt-4 text-sm sm:text-lg dark:text-gray-400 text-gray-900 max-w-3xl mx-auto">
          Whether it's crafting web experiences or diving into logic problems, I appreciate clean solutions and thoughtful design.
        </p>

        <p className="mt-6 text-base sm:text-xl font-semibold text-green-500">
          Focused, curious, and always improving.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm sm:text-base font-medium">
          <span className="px-4 py-2 dark:bg-gray-800 bg-gray-300 dark:hover:bg-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 rounded-full">
            ♟️ Chess Enthusiast
          </span>
          <span className="px-4 py-2 dark:bg-gray-800 bg-gray-300 dark:hover:bg-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 rounded-full">
            🏸 Badminton Player
          </span>
          <span className="px-4 py-2 dark:bg-gray-800 bg-gray-300 dark:hover:bg-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-full">
            📚 Book Reader
          </span>
        </div>
        <div className='mt-10'>
          <div className="mt-10">
            <a
              href="https://drive.google.com/file/d/101MFU37WYrJww9eJ9T6Iezp7q774-Lr9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl bg-blue-300 text-black px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 inline-block"
            >
              View My Resume
            </a>
          </div>

        </div>
        <p className="mt-5 text-base sm:text-lg text-green-400 font-medium tracking-wide">
          Always exploring new ideas through code.
        </p>
      </div>
    </section>
  );
}

export default About;
