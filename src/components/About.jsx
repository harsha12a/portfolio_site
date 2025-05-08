import React from 'react';
import profilePic from '../assets/favicon.png'; // Adjust path as needed

function About() {
  return (
    <section
      id="about"
      className="w-full px-6 py-24 bg-gradient-to-br from-white via-gray-100 to-gray-300 dark:from-black dark:to-gray-900 dark:text-white text-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-green-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-400 mb-6">
            About Me
          </h1>

          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed max-w-2xl">
            I'm someone who enjoys building things with{' '}
            <span className="text-green-500 font-semibold">JavaScript</span>, solving{' '}
            <span className="dark:text-white text-black font-semibold">algorithmic challenges</span>, and continuously learning through code.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-900 dark:text-gray-400 leading-relaxed max-w-2xl">
            Whether it's crafting web experiences or diving into logic problems, I appreciate clean solutions and thoughtful design.
          </p>

          <p className="mt-6 text-lg sm:text-xl font-semibold text-green-500">
            Focused, curious, and always improving.
          </p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            {[
              { icon: '♟️', label: 'Chess Enthusiast', hover: 'hover:bg-green-500 dark:hover:bg-green-500' },
              { icon: '🏸', label: 'Badminton Player', hover: 'hover:bg-pink-400 dark:hover:bg-pink-400' },
              { icon: '📚', label: 'Book Reader', hover: 'hover:bg-yellow-400 dark:hover:bg-yellow-400' },
            ].map((item, idx) => (
              <span
                key={idx}
                className={`px-5 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 ${item.hover} transition-all duration-300 shadow`}
              >
                {item.icon} {item.label}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/101MFU37WYrJww9eJ9T6Iezp7q774-Lr9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg bg-blue-400 text-black px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md"
            >
              🚀 View My Resume
            </a>
          </div>

          <p className="mt-4 text-base sm:text-lg text-green-400 font-medium tracking-wide">
            Always exploring new ideas through code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
