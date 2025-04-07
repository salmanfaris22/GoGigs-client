import React from 'react'
import { Link } from 'react-router-dom'

const ManuBarButtons = ({menuItems,isHovered,handleItemClick,activeRoute}) => {
  return (
    <ul className="space-y-4 text-center w-full flex flex-col">
            {menuItems.map((item, index) => (
              <Link
                to={item.route}
                key={index}
                className={`w-full`}
                onClick={() => handleItemClick(item.route)} // Set active route on click
              >
                <li
                  className={`flex items-center justify-start gap-5 text-black shadow-sm p-2 rounded-lg cursor-pointer 
                    ${activeRoute === item.route ? 'bg-blue-500 text-white' : ''}`} // Apply active styles
                >
                  {item.icon}
                  {isHovered && <span>{item.label}</span>}
                </li>
              </Link>
            ))}
          </ul>
  )
}

export default ManuBarButtons
