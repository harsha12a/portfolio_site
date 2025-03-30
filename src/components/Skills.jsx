import React from "react";
import { Code, Server, Database, Brush, Terminal } from "lucide-react"; // Importing icons

function Skills() {
  return (
    <div id="skills" className="flex flex-col justify-center items-center dark:text-white text-gray-900">
      <section className="m-5 text-center lg:p-10 p-5 dark:bg-gray-800 bg-gray-200 rounded-2xl shadow-lg w-full max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 dark:text-green-400 text-green-600">My Skills 🚀</h1>

        <p className="sm:text-lg text-md leading-relaxed mb-6">
          Here’s a quick look at my **tech stack** & what I love working with!  
        </p>

        <hr className="my-8 border-gray-700" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          {/* Frontend */}
          <div className="p-4 dark:bg-gray-700 bg-gray-300 rounded-lg shadow-md">
            <Code className="w-10 h-10 mx-auto text-blue-500" />
            <h3 className="mt-3 font-bold">Frontend</h3>
            <p className="text-sm">React, JavaScript, Redux</p>
          </div>

          {/* Backend */}
          <div className="p-4 dark:bg-gray-700 bg-gray-300 rounded-lg shadow-md">
            <Server className="w-10 h-10 mx-auto text-red-500" />
            <h3 className="mt-3 font-bold">Backend</h3>
            <p className="text-sm">Node.js, Express.js</p>
          </div>

          {/* Database */}
          <div className="p-4 dark:bg-gray-700 bg-gray-300 rounded-lg shadow-md">
            <Database className="w-10 h-10 mx-auto text-yellow-500" />
            <h3 className="mt-3 font-bold">Databases</h3>
            <p className="text-sm">MongoDB, MySQL</p>
          </div>
          
          {/* AI/ML */}
          <div className="p-4 dark:bg-gray-700 bg-gray-300 rounded-lg shadow-md">
            <Terminal className="w-10 h-10 mx-auto text-purple-500" />
            <h3 className="mt-3 font-bold">Languages</h3>
            <p className="text-sm">C, C++, Java, Python, Rust, PHP</p>
          </div>

          {/* UI/UX */}
          <div className="p-4 dark:bg-gray-700 bg-gray-300 rounded-lg shadow-md">
            <Brush className="w-10 h-10 mx-auto text-green-500" />
            <h3 className="mt-3 font-bold">UI/UX</h3>
            <p className="text-sm">Figma, Tailwind, CSS, Bootstrap</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Skills;
