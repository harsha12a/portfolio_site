import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import './App.css';
import CodingProfiles from "./components/CodingProfiles";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const anim = useRef(null);
  const proj = useRef(null);
  const code = useRef(null);
  const abt = useRef(null);
  const skl = useRef(null);
  const contact = useRef(null);

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

      gsap.fromTo(
        abt.current,
        { opacity: 0, y: 200, x: -500, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          x: 0,
          duration: 2,
          scrollTrigger: {
            trigger: abt.current,
            start: "top 90%", // Starts animation earlier
            end: "top 40%",
            scrub: true,
          }
        }
      )

      gsap.fromTo(
        skl.current,
        { opacity: 0, y: 200, x: 500, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          x: 0,
          duration: 2,
          scrollTrigger: {
            trigger: skl.current,
            start: "top 90%", // Starts animation earlier
            end: "top 40%",
            scrub: true,
          }
        }
      )

      // Scroll-triggered animation for CodingProfiles
      gsap.fromTo(
        code.current,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: code.current,
            start: "top 90%", // Starts animation earlier
            end: "top 20%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        contact.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 2,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contact.current,
            start: "bottom 100%", // Starts animation earlier
            end: "top 50%",
            scrub: true,
          },
        }
      )
    });

    return () => ctx.revert(); // Cleanup GSAP animations when component unmounts
  }, []);

  return (
    <div className="">
    <div className="flex min-h-screen bg-white dark:bg-black">
      {/* Sidebar with shadow adjustment */}
      <div className="z-[100] shadow-lg shadow-gray-400 dark:shadow-gray-700">
        <Sidebar />
      </div>
      
      {/* Main content */}
      <div className="flex-1 lg:p-6 overflow-hidden">
        <div ref={anim}>
          <Home />
        </div>
        <div ref={abt}>
          <About />
        </div>
        <div ref={skl}>
          <Skills />
        </div>
        <div ref={proj}>
          <Projects />
        </div>
        <div ref={code}>
          <CodingProfiles />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
