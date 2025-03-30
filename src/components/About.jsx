import React from 'react';

function About() {
  return (
    <div id='about'>
      <div className="mt-20 flex justify-center items-center min-h-screen dark:text-white text-gray-900">
      <section className="m-5 text-center lg:p-10 p-5 dark:bg-gray-800 bg-gray-200 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6 dark:text-green-400 text-green-600">Who Am I? 🤔</h1>

        <p className="sm:text-lg text-md leading-relaxed">
          Just a regular human (probably) who speaks fluent 
          <span className="dark:text-green-500 text-green-700"> JavaScript</span>, wrestles with 
          <span className="font-bold"> DSA problems</span>, and occasionally argues with 
          <code className="dark:bg-gray-700 bg-gray-400 px-2 py-1 rounded-md mx-1">undefined</code>.  
          If there's a bug, I debug. If there's an algorithm, I optimize. If there's a problem, I solve it.  
        </p>

        <p className="mt-6 sm:text-lg text-md">
          My world revolves around <span className="font-bold">code, caffeine, and chaos</span>.  
          Whether it's crafting full-stack magic, tackling  
          <span className="font-bold"> complex data structures</span>,  
          or speedrunning <span className="dark:text-green-400 text-green-700">competitive programming</span>, I'm all in.  
        </p>

        <p className="mt-8 text-xl font-semibold dark:text-green-400 text-green-700">
          Warning: May randomly disappear into a <span className="dark:text-yellow-400 text-yellow-700">coding spree </span>  
          or a <span className="dark:text-blue-400 text-blue-700">DSA deep dive</span>. 🔥
        </p>

        <hr className="my-8 border-gray-700" />

        <p className="sm:text-lg text-md">
          When I'm not lost in curly braces and semicolons, you’ll find me:  
        </p>

        <ul className="mt-4 space-y-3 sm:text-lg text-md">
          <li>♟️ Battling it out in <span className="font-bold dark:text-blue-400 text-blue-700">chess</span></li>
          <li>🏸 Smashing <span className="font-bold dark:text-red-400 text-red-700">shuttlecocks</span></li>
          <li>📚 Devouring books like a true <span className="dark:text-yellow-400 text-yellow-700">knowledge-hungry coder</span></li>
        </ul>

        <p className="mt-8 text-xl font-semibold dark:text-green-400 text-green-700">
          Code. Debug. Repeat. 🔄 Welcome to my digital playground! ✨  
        </p>
      </section>
    </div>
    </div>
  );
}

export default About;
