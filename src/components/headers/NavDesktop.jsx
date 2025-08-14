import React from 'react'
import Image from 'next/image'


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
          <ul className="menu menu-horizontal px-1">
            <li><a className='text-xl font-medium' href='/'>Home</a></li>
            <li><a className='text-xl font-medium'>Search</a></li>
            <li><a className='text-xl font-medium'>Settings</a></li>

          </ul>
        </div>
      </div>
  )
}

export default NavDesktop
