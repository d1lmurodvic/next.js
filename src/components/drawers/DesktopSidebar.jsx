import React from 'react'
import { RiDrinks2Fill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";


const DesktopSidebar = () => {
    return (
        <div className="drawer flex items-start justify-start overflow-y-auto h-screen">
            <ul className=" bg-info-content/50 menu text-base-content min-h-full w-80 p-4">
                <li><a className='text-lg' href={`/`}><LuLayoutDashboard /> Home</a></li>
                <li><a className='text-lg' href={`/drinksU`}> <RiDrinks2Fill className=''/> Drinks Categroy</a></li>
            </ul>
        </div>
    )
}

export default DesktopSidebar
