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
    username: 'harsha12a',
    href: 'https://www.codechef.com/users/harsha12a',
    icon: SiCodechef,
  },
  {
    name: 'Leetcode',
    username: 'harsha12a',
    href: 'https://leetcode.com/u/harsha12a',
    icon: SiLeetcode,
  },
  {
    name: 'GeeksForGeeks',
    username: 'harshapss',
    href: 'https://www.geeksforgeeks.org/user/harshapss',
    icon: SiGeeksforgeeks,
  },
  {
    name: 'Hackerrank',
    username: 'harsha12a',
    href: 'https://www.hackerrank.com/profile/harsha12a',
    icon: SiHackerrank,
  },
  {
    name: 'Codeforces',
    username: 'harshapss2005',
    href: 'https://codeforces.com/profile/harshapss2005',
    icon: SiCodeforces,
  },
  {
    name: 'Hackerearth',
    username: 'harsha12a',
    href: 'https://www.hackerearth.com/@harsha12a/',
    icon: SiHackerearth,
  },
];

function CodingProfiles() {
  return (
    <div id="coding" className="py-16 px-4 dark:text-white text-black">
      <h2 className="text-4xl text-center font-bold mb-16">Coding Profiles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {profiles.map(({ name, username, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group dark:bg-[#1f1f1f] bg-gray-200 p-6 rounded-2xl border border-black/10 dark:border-white/10 dark:hover:shadow-[0_0_20px_#ffffff30] hover:shadow-[0_0_20px_#00000030] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="dark:bg-white/10 bg-black/10 p-4 rounded-full mb-4 text-5xl dark:text-[#00FFB2] text-green-600 dark:group-hover:text-white group-hover:text-black transition">
              <Icon />
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm dark:text-gray-400 text-gray-700 mt-1">@{username}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CodingProfiles;
