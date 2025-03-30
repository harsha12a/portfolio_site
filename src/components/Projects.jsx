import workgrid from '../assets/sites/workgrid.png';
import clothing from '../assets/sites/clothing.png';
import ecommerce from '../assets/sites/ecomm.png';
import upskillink from '../assets/sites/upskillink.png';
import efficio from '../assets/sites/efficio.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projs = useRef(null);

  useEffect(() => {
    // let items = projs.current.querySelectorAll('.project-item');
    const ctx = gsap.context(() => {
      // gsap.fromTo(
      //   items,
      //   { opacity: 0, x: 300 },
      //   { opacity: 1, x: 0, duration: 2, ease: 'power2.out',
      //     scrollTrigger: {
      //       trigger: items, 
      //       start: 'top 0%',
      //       end: 'top -200%',
      //       scrub: true
      //     }
      //    }
      // )
      gsap.to(
        projs.current,
        {
          transform: 'translateX(-100%)',
          scrollTrigger: {
            trigger: projs.current,
            start: 'top 10%',
            end: 'top -200%',
            scrub: true,
            pin: true
          }
        }
      );
    });

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
      description: 'Efficio is a advanced project management tool.',
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
    <div id="projects" className='mb-20'>

      {/* Horizontal Scroll Container */}
      <div className="text-3xl text-center my-16 font-bold">Projects</div>
      <div ref={projs} className="flex gap-5 px-5 py-5 ">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 relative rounded-lg shadow-md min-w-[400px] max-w-[500px] snap-start project-item"
          >
            <img src={project.img} alt={project.name} className="w-full h-[200px] object-cover rounded-t-lg" />
            <div className="p-5">
              <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
              <p className="text-lg">{project.description}</p>

              <div className="mt-4">
                <div className="text-lg font-semibold">Tools used</div>
                <div className="flex flex-wrap mt-2">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-xl m-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-5">
                <a href={project.code} className="text-blue-500 dark:hover:bg-blue-900 hover:bg-blue-900 absolute right-32 text-xl -bottom-3 bg-gray-100 dark:bg-gray-900 px-5 py-1 rounded-lg mr-3">Code</a>
                <a href={project.live} className="text-blue-500 dark:hover:bg-blue-900 hover:bg-blue-900 absolute right-5 text-xl -bottom-3 bg-gray-100 dark:bg-gray-900 px-5 py-1 rounded-lg">Live site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
