import React from 'react'

const DesktopSidebar = () => {
    return (
            <div className="drawer flex items-start justify-start overflow-y-auto h-screen">
                <ul className=" bg-info-content/50 menu text-base-content min-h-full w-80 p-4">
                    <li><a className='text-lg' href='/'>Home</a></li>
                    <li><a className='text-lg' href='/drinks'>Choose</a></li>
                </ul>
            </div>
    )
}

export default DesktopSidebar
