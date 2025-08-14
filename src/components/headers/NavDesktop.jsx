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
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li className="">Home</li>
                  <li className="">About</li>
                  <li className="">Contact</li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavDesktop
