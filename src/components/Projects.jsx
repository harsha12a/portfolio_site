import workgrid from '../assets/sites/workgrid.png';
import clothing from '../assets/sites/clothing.png';
import ecommerce from '../assets/sites/ecomm.png';
import upskillink from '../assets/sites/upskillink.png';
import efficio from '../assets/sites/efficio.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollElement = scrollRef.current;
      const scrollWidth = scrollElement.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(scrollElement, {
        x: () => `-${scrollWidth - viewportWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: () => `+=${scrollWidth - viewportWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      name: 'WorkGrid',
      description: 'Create Groups, Assign tasks, Attach files, Track Progress',
      code: 'https://github.com/harsha12a/WorkGrid',
      live: 'https://workgrid-five.vercel.app/',
      skills: ['ReactJS', 'ExpressJS', 'Node.js', 'MongoDB', 'TailwindCSS', 'Redux', 'GSAP'],
      img: workgrid
    },
    {
      name: 'Clothing Store',
      description: 'Clothing Store is a full-stack e-commerce application built with React, Node.js, and MongoDB.',
      code: 'https://github.com/harsha12a/ClothingStore',
      live: 'https://csclothingstore.vercel.app/',
      skills: ['ReactJS', 'ExpressJS', 'Node.js', 'MongoDB', 'ContextAPI'],
      img: clothing
    },
    {
      name: 'Upskillink',
      description: 'Upskillink is a platform for students to learn and grow.',
      code: 'https://github.com/harsha12a/upskillink',
      live: 'https://upskillink.vercel.app/',
      skills: ['ReactJS', 'TailwindCSS'],
      img: upskillink
    },
    {
      name: 'Efficio',
      description: 'Efficio is an advanced project management tool.',
      code: 'https://github.com/harsha12a/Efficio',
      live: 'https://efficio-frontend.vercel.app/',
      skills: ['ReactJS', 'ExpressJS', 'Node.js', 'MongoDB', 'ContextAPI'],
      img: efficio
    },
    {
      name: 'Ecommerce App',
      description: 'Ecommerce App for buying and selling products.',
      code: 'https://github.com/harsha12a/Basic-Ecommerce-Fullstack',
      live: 'https://basic-ecommerce-fullstack.vercel.app/',
      skills: ['ReactJS', 'ExpressJS', 'Node.js', 'MongoDB', 'ContextAPI'],
      img: ecommerce
    },
  ];

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl text-center my-16 font-bold">Projects</h2>

      {/* Horizontal Scroll Section */}
      <div ref={containerRef} className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 px-10 py-5 w-fit"
        >
          {projects.map((project, index) => (
            <div
            key={index}
            className="bg-white dark:bg-gray-800 relative rounded-lg shadow-md min-w-[400px] max-w-[500px] flex flex-col"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
          
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
              <p className="text-lg">{project.description}</p>
          
              <div className="mt-4">
                <div className="text-lg font-semibold">Tools used</div>
                <div className="flex flex-wrap mt-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-xl m-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          
            {/* ⬇️ Buttons floating below bottom-left corner */}
            <div className="absolute bottom-0 left-1/2 translate-y-[50%] bg-transparent flex space-x-5 px-4 py-2">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 dark:text-blue-500 dark:bg-black bg-white p-1 px-3 rounded-md text-sm dark:hover:bg-blue-900 hover:bg-blue-200"
              >
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 dark:text-blue-500 dark:bg-black bg-white p-1 px-3 rounded-md text-sm dark:hover:bg-blue-900 hover:bg-blue-200"
              >
                Live site
              </a>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
