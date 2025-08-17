import React from 'react'
import Link from "next/link";
import { RiDrinks2Fill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";

const DesktopSidebar = () => {
    return (
        <div className="drawer flex items-start justify-start overflow-y-auto h-screen">
            <ul className="bg-info-content/50 menu text-base-content min-h-full w-80 p-4">
                <li>
                    <Link className="text-lg" href="/">
                        <LuLayoutDashboard /> Home
                    </Link>
                </li>
                <li>
                    <Link className="text-lg" href="/drinks">
                        <RiDrinks2Fill /> All Drinks
                    </Link>

                </li>
            </ul>
        </div>
    )
}

export default DesktopSidebar