import React from "react";
import { Code, Server, Database, Brush, Terminal } from "lucide-react";

function Skills() {
  return (
    <section id="skills" className="w-full bg-gradient-to-bl from-white via-gray-100 to-gray-300 dark:from-black dark:to-gray-900 py-20 px-4 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-green-500 dark:text-green-400 mb-10">
          Skills & Tools
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base mb-12">
          Technologies I work with and enjoy exploring:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 text-center">
          <div>
            <Code className="w-8 h-8 mx-auto text-blue-500" />
            <p className="mt-2 text-sm font-medium">Frontend</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">React, JS</p>
          </div>

          <div>
            <Server className="w-8 h-8 mx-auto text-red-500" />
            <p className="mt-2 text-sm font-medium">Backend</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Node, Express</p>
          </div>

          <div>
            <Database className="w-8 h-8 mx-auto text-yellow-500" />
            <p className="mt-2 text-sm font-medium">Databases</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">MongoDB, MySQL</p>
          </div>

          <div>
            <Terminal className="w-8 h-8 mx-auto text-purple-500" />
            <p className="mt-2 text-sm font-medium">Languages</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">C, C++, Java, Python</p>
          </div>

          <div>
            <Brush className="w-8 h-8 mx-auto text-green-500" />
            <p className="mt-2 text-sm font-medium">Design</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Figma, Tailwind</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
