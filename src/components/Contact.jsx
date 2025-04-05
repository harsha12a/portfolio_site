import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center py-12 px-4 text-gray-900 dark:text-white"
    >
      <div className="w-full max-w-xl bg-white/10 dark:black/30 backdrop-blur-md border border-white/10 dark:border-black/10 rounded-2xl p-6 sm:p-8 shadow-[0px_0px_20px_20px_rgba(0,0,0,0.1)]">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">
          Get in Touch! 📩
        </h2>

        <p className="text-center text-sm sm:text-base mb-6">
          Want to connect? Feel free to reach out through any of the platforms below! 🚀
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/harsha12a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="mailto:harsha.pss2005@gmail.com"
            className="hover:text-red-500 transition"
          >
            <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://linkedin.com/in/harsha-pss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
