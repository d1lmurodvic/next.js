import React from 'react'

const DesktopSidebar = () => {
    return (
            <div className="drawer h-screen flex items-start justify-start overflow-y-auto">
                <ul className=" bg-info-content/50 menu text-base-content min-h-full w-80 p-4">
                    <li><a className='text-lg'>All Foods</a></li>
                    <li><a className='text-lg'></a></li>
                    <li><a className='text-lg'>All Projects</a></li>
                </ul>
            </div>
    )
}

export default DesktopSidebar
