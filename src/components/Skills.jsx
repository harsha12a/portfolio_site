import React from "react";
import { Code, Server, Database, PencilRuler, Terminal } from "lucide-react";

const skills = [
  { icon: Code, title: "Frontend", tools: "React, Tailwind CSS, Bootstrap CSS, GSAP, Redux", color: "text-blue-500" },
  { icon: Server, title: "Backend", tools: "NodeJS, ExpressJS, Mongoose, Prisma", color: "text-red-500" },
  { icon: Database, title: "Databases", tools: "MongoDB, MySQL", color: "text-yellow-500" },
  { icon: Terminal, title: "Languages", tools: "C, C++, Java, Python", color: "text-purple-500" },
  { icon: PencilRuler, title: "Tools", tools: "Figma, Canva, Linux, Git/Github, VSCode", color: "text-pink-500" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-bl from-white via-gray-100 to-gray-300 dark:from-black dark:to-gray-900 py-20 px-4 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-green-500 dark:text-green-400 mb-10">
          Skills & Tools
        </h2>

        <p className="text-gray-700 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base mb-12">
          Technologies I work with and enjoy exploring:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 text-center">
          {skills.map(({ icon: Icon, title, tools, color }, index) => (
            <div key={index}>
              <Icon className={`w-8 h-8 mx-auto ${color}`} aria-hidden="true" />
              <p className="mt-2 text-md font-medium">{title}</p>
              {/* <p className="text-xs text-gray-600 dark:text-gray-400">{tools}</p> */}
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-400">
              {
                tools.split(",").map((tool, i) => (
                  <li key={i} className="">
                    {tool.trim()}
                  </li>
                ))
              }
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
