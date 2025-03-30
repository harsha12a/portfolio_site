import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import './App.css';
import CodingProfiles from "./components/CodingProfiles";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const anim = useRef(null);
  const proj = useRef(null);
  const side = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for Home component
      gsap.fromTo(
        anim.current,
        { opacity: 0, y: 200, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }
      );

      // Scroll-triggered animation for Projects
      // gsap.fromTo(
      //   proj.current,
      //   { opacity: 0, x: 500 },
      //   {
      //     opacity: 1,
      //     x: 0,
      //     duration: 1,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: proj.current,
      //       start: "top 100%", // Starts animation earlier
      //       end: "top 20%",
      //       scrub: true,
      //     },
      //   }
      // )

      // Scroll-triggered animation for CodingProfiles
      gsap.fromTo(
        side.current,
        { opacity: 0, y: 200, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: side.current,
            start: "top 90%", // Starts animation earlier
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert(); // Cleanup GSAP animations when component unmounts
  }, []);

  return (
    <div className="">
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar with shadow adjustment */}
      <div className="lg:w-[300px] z-[100] lg:block shadow-lg shadow-gray-400 dark:shadow-gray-700">
        <Sidebar />
      </div>
      
      {/* Main content */}
      {/* <div className="bg-red-500 sm:w-[120px] sm:h-[120px] w-[80px] h-[80px] absolute top-1/2 left-1/2 rounded-full shadow-[0px_0px_50px_15px_rgba(255,10,10,0.4)] z-[3]"></div> */}
      <div className="flex-1 lg:p-6 overflow-hidden">
        <div ref={anim}>
          <Home />
        </div>
        <div ref={proj}>
          <Projects />
        </div>
        <div ref={side}>
          <CodingProfiles />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
