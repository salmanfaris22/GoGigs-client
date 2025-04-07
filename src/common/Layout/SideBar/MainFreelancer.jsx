import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { HiBriefcase } from 'react-icons/hi';
import { AiOutlineProject } from 'react-icons/ai';

import MainLogo from '../Header/RigthSide';
import SideBarFooter from '../SideBarFooter/Footer';

import ManuBarButtons from '../../Components/manuBar/ManuBar';

const FreelncerBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeRoute, setActiveRoute] = useState(''); // State to track active route

  // Menu items with icons and labels
  const menuItems = [
    { icon: <FaUserAlt />, label: 'Profile', route: '' },
    { icon: <GiSkills />, label: 'Skills', route: 'skills' },
    { icon: <IoIosSchool />, label: 'Education', route: 'education' },
    { icon: <MdWork />, label: 'Experience', route: 'experience' },
    { icon: <AiOutlineProject />, label: 'Portfolio', route: 'portfolio' },
    { icon: <HiBriefcase />, label: 'Services', route: 'services' },
  ];

  const handleItemClick = (route) => {
    setActiveRoute(route); // Set active route when a menu item is clicked
  };

  return (
    <div
      className={`top-0 left-0 h-[100vh] ${isHovered ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-between items-center h-full p-4">
        {/* Logo Section */}
        <div className="flex gap-2 justify-center items-center">
          <div className={`text-3xl text-blue-500`}>
            {/* Logo icon can go here if needed */}
          </div>
          <div className={`text-xl font-bold text-blue-500 ${isHovered ? 'block' : 'hidden'}`}>
            <MainLogo />
          </div>
        </div>

        {/* Menu bar with Links */}
        <div className="flex flex-col items-center mt-10 w-full">
      <ManuBarButtons menuItems={menuItems} isHovered={isHovered} handleItemClick={handleItemClick} activeRoute={activeRoute}/>
        </div>

        <SideBarFooter isHovered={isHovered} />
      </div>
    </div>
  );
};

export default FreelncerBar;
