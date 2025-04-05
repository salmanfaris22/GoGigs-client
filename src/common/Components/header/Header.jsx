import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const HeaderData = ({ scrollRef, menuItems, setActiveIndex, activeIndex }) => {
  return (
    <ul
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap w-full ml-8 mr-8"
    >
   {menuItems.map((item, index) => (
              <li
                key={index}
                className=""
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <button className="hover:text-gray-500 text-gray-400 font-bold whitespace-nowrap flex  items-center gap-2">
                {item.title}
                <FaChevronDown size={12} />
              </button>

                {/* Submenu */}
                {activeIndex === index && (
                  <div 
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="absolute left-0  w-[100%] mt-1 bg-white text-black  shadow z-50 p-6 flex flex-wrap gap-6">
                    {item.sub.map((subItem, subIndex) => (
                      <div key={subIndex} className="w-full md:w-1/4">
                        <h3 className="font-semibold mb-1">{subItem.value}</h3>
                        <p className="text-sm text-gray-600">{subItem.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
    </ul>
  )
}

export default HeaderData
