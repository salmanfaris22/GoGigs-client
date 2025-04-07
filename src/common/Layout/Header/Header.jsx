import React, { useState } from 'react'
import SearchInput from '../../Components/input/SearchInput'

import { CheckLogged } from '../../../utils/checkLogged';
import RightSide from './RightSide';
import MainLogo from './RigthSide';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    // const [logged, setLogged] = useState(false);

    // useEffect(() => {
    //     setLogged(CheckLogged());
    // }, []);

    return (
        <header className="flex justify-center p-2 w-full h-[80px] items-center bg-white ">
            <div className="w-[90%] flex gap-3 justify-between items-center">
                <MainLogo />
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
                  
                    
                        <RightSide />
                    
                </div>
            </div>
        </header>
    )
}

export default Header
