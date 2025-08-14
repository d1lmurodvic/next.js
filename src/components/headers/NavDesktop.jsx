  import React from 'react'
  import Image from 'next/image'

const NavDesktop = () => {
  return (
    <div>
      <div className="navbar bg-info-content shadow-lg shadow-info/80 ">
        <div className="flex-1">
          <Image src="/vercel.svg" alt="Vercel Logo" width={23} height={24}/>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a className='text-xl font-medium'>Contact</a></li>
            <li><a className='text-xl font-medium'>Search</a></li>
            <li><a className='text-xl font-medium'>Settings</a></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavDesktop
