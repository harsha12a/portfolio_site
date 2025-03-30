import React from "react";
import { Github, Mail, Linkedin } from "lucide-react"; // Importing icons

function Contact() {
  return (
    <div id="contact" className="flex flex-col justify-center items-center dark:text-white text-gray-900">
      <section className="m-5 text-center lg:p-10 p-5 dark:bg-gray-800 bg-gray-200 rounded-2xl shadow-lg w-full max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6 dark:text-blue-400 text-blue-600">Get in Touch! 📩</h1>

        <p className="sm:text-lg text-md leading-relaxed mb-6">
          Want to connect? Feel free to reach out through any of the platforms below! 🚀
        </p>

        <hr className="my-8 border-gray-700" />

        <p className="sm:text-lg text-md">You can find me here:</p>

        <div className="flex justify-center space-x-6 mt-6 text-3xl">
          <a href="https://github.com/harsha12a" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <Github className="w-8 h-8" />
          </a>
          <a href="mailto:harsha.pss2005@gmail.com" className="hover:text-red-600">
            <Mail className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/harsha-pss" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
