import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  // Define the menu items as an array of objects
  const menuItems = [
    { label: 'Profile', path: '/profile' },
    { label: 'Earnings', path: '/freelancer/earnings' },
    { label: 'Settings', path: '/freelancer/settings' },
    { label: 'Logout', path: '/logout' },
  ];

  return (
    <div className="z-[51] absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg p-2 flex-col flex">
      {/* Map over menu items to generate the links dynamically */}
      {menuItems.map((item, index) => (
        <Link key={index} to={item.path} className="text-black text-[15px]">
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
