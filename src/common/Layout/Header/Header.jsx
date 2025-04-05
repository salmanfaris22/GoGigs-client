import React, { useState, useEffect } from 'react'
import SearchInput from '../../Components/input/SearchInput'

import { PiChatCircleTextThin, PiNotificationLight, PiUserCircleDashedThin } from "react-icons/pi";
import { CheckLogged } from '../../../utils/checkLogged';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        setLogged(CheckLogged());
    }, []);

    return (
        <header className="flex justify-center p-2 w-full h-[80px] items-center bg-white ">
            <div className="w-[90%] flex gap-3 justify-between items-center">
                {/* Brand */}
                <div className="font-bold text-[var(--color-primary)] text-3xl md:text-4xl">
                    GoGigs
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Search Bar - hidden on small screens */}
                    <div className="hidden md:block w-[300px] lg:w-[500px]">
                        <SearchInput
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search products or categories..."
                        />
                    </div>

                    {/* Icons or User Actions */}
                    {logged ? (
                        <div className="text-sm md:text-base">Welcome Back</div>
                    ) : (
                        <div className="flex items-center text-3xl md:text-4xl gap-3">
                            <PiNotificationLight />
                            <PiChatCircleTextThin />
                            <PiUserCircleDashedThin />
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
