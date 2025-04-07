import React, { useEffect, useState } from 'react';
import { PiChatCircleTextThin, PiNotificationLight, PiUserCircleDashedThin } from 'react-icons/pi';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaUserCircle } from 'react-icons/fa'; // Optional: for profile picture icon
import Button from '../../Components/button/Button';
import GradiantBtn from '../../Components/button/GradiantBtn';
import HeaderMenu from '../../Components/dropDownButton/HeaderMenu';
import { CheckLogged } from '../../../utils/checkLogged';

const RightSide = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loggin, isLoggine] = useState(false)
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
      isLoggine(CheckLogged())
  }, [])

  return (
    <div className="flex items-center text-3xl md:text-4xl gap-1 relative">
      {/* Notification, Chat, and User icons */}
      {!loggin ? <div className='flex gap-2'>
        <Link to={"auth/login"}>
          <GradiantBtn lebal={"Sign In"} /></Link><Link to={"auth/register"}>
          <GradiantBtn lebal={"Sign Up"} /></Link>
      </div> : <div className='flex items-center text-3xl md:text-4xl gap-3 relative'> <PiNotificationLight />
        <PiChatCircleTextThin />
        <div className="relative">
          <PiUserCircleDashedThin
            className="cursor-pointer"
            onClick={handleDropdownToggle}
          />
          {isDropdownOpen && (
            <HeaderMenu />

          )}
        </div></div>}
    </div>
  );
};

export default RightSide;
