import React from 'react'
import Image from 'next/image'
import { IoSettingsOutline } from "react-icons/io5";


const NavDesktop = () => {
  return (
    <div className="navbar bg-info-content shadow-lg shadow-info/80 ">
      <div className="flex-1">
        <div className='flex items-center gap-3 ml-8'>
          <Image src="/globe.svg" alt="Vercel Logo" width={50} height={20} />
          <p className='text-2xl font-bold text-warning'>Food Bazar <span className='text-success'>.</span></p>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center gap-4">
          <li>
            <label className=" flex items-center w-2xs input input-accent">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" placeholder="Search" className="grow"/>
            </label>
          </li>
          <li><a className='text-xl font-medium'><IoSettingsOutline size={34}/> </a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavDesktop
