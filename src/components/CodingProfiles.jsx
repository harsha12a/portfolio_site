import React from 'react'
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiHackerearth } from "react-icons/si";
function CodingProfiles() {
  return (
    <div className='h-full mb-40' id='coding'>
      <div className='text-center text-3xl mb-20'>Coding Profiles</div>
      <ul className='flex items-center justify-center flex-wrap gap-32'>
        <li className='w-fit'>
          <a
            className='flex justify-between h-20 items-center hover:shadow-black dark:hover:shadow-white shadow-transparent shadow-[0px_0px_20px_5px] px-4 py-2 transition-all duration-300'
            href='https://www.codechef.com/users/harsha12a'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiCodechef className='ml-4 mr-6' size={40} />
            <div className='mr-4 text-3xl'>Codechef</div>
          </a>
        </li>
        <li className='w-fit'>
          <a
            className='flex justify-between h-20 items-center hover:shadow-black dark:hover:shadow-white shadow-transparent shadow-[0px_0px_20px_5px] px-4 py-2 transition-all duration-300'
            href='https://leetcode.com/u/harsha12a'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiLeetcode className='ml-4 mr-6' size={40} />
            <div className='mr-4 text-3xl'>Leetcode</div>
          </a>
        </li>
        <li className='w-fit'>
          <a
            className='flex justify-between h-20 items-center hover:shadow-black dark:hover:shadow-white shadow-transparent shadow-[0px_0px_20px_5px] px-4 py-2 transition-all duration-300'
            href='https://www.geeksforgeeks.org/user/harshapss'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiGeeksforgeeks className='ml-4 mr-6' size={40} />
            <div className='mr-4 text-3xl'>GeeksForGeeks</div>
          </a>
        </li>
        <li className='w-fit'>
          <a
            className='flex justify-between h-20 items-center hover:shadow-black dark:hover:shadow-white shadow-transparent shadow-[0px_0px_20px_5px] px-4 py-2 transition-all duration-300'
            href='https://www.hackerrank.com/profile/harsha12a'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiHackerrank className='ml-4 mr-6' size={40} />
            <div className='mr-4 text-3xl'>Hackerrank</div>
          </a>
        </li>
        <li className='w-fit'>
          <a
            className='flex justify-between h-20 items-center hover:shadow-black dark:hover:shadow-white shadow-transparent shadow-[0px_0px_20px_5px] px-4 py-2 transition-all duration-300'
            href='https://codeforces.com/profile/harshapss2005'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiCodeforces className='ml-4 mr-6' size={40} />
            <div className='mr-4 text-3xl'>Codeforces</div>
          </a>
        </li>
        <li className='w-fit'>
          <a
            className='flex justify-between h-20 items-center hover:shadow-black dark:hover:shadow-white shadow-transparent shadow-[0px_0px_20px_5px] px-4 py-2 transition-all duration-300'
            href='https://www.hackerearth.com/@harsha12a/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiHackerearth className='ml-4 mr-6' size={40} />
            <div className='mr-4 text-3xl'>Hackerearth</div>
          </a>
        </li>
      </ul>

    </div>
  )
}

export default CodingProfiles