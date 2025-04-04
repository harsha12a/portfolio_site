import React from 'react';
import {
  SiCodechef,
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiCodeforces,
  SiHackerearth,
} from 'react-icons/si';

const profiles = [
  {
    name: 'Codechef',
    href: 'https://www.codechef.com/users/harsha12a',
    icon: SiCodechef,
  },
  {
    name: 'Leetcode',
    href: 'https://leetcode.com/u/harsha12a',
    icon: SiLeetcode,
  },
  {
    name: 'GeeksForGeeks',
    href: 'https://www.geeksforgeeks.org/user/harshapss',
    icon: SiGeeksforgeeks,
  },
  {
    name: 'Hackerrank',
    href: 'https://www.hackerrank.com/profile/harsha12a',
    icon: SiHackerrank,
  },
  {
    name: 'Codeforces',
    href: 'https://codeforces.com/profile/harshapss2005',
    icon: SiCodeforces,
  },
  {
    name: 'Hackerearth',
    href: 'https://www.hackerearth.com/@harsha12a/',
    icon: SiHackerearth,
  },
];

function CodingProfiles() {
  return (
    <div id="coding" className="py-16 px-4 dark:bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#121212] dark:text-white text-black">
      <h2 className="text-4xl text-center font-bold mb-16">Coding Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {profiles.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-44 h-44 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg dark:hover:shadow-white/20 hover:shadow-black/20 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            <Icon size={64} className="mb-6 dark:text-white text-black" />
            <span className="text-2xl font-semibold">{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CodingProfiles;
