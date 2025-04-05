import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const SideBar = ({menuItems,setActiveIndex,activeIndex}) => {
  return (
      <ul className="py-2">
                            {menuItems?.map((item, index) => (
                                <li key={index} className="border-b border-gray-200">
                                    <div
                                        className="p-4 cursor-pointer flex justify-between items-center"
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    >
                                        <span className="font-semibold">{item.title}</span>
                                        <FaChevronDown size={12} className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                                    </div>
                                    {activeIndex === index && (
                                        <ul className="py-2 bg-gray-100">
                                            {item.sub.map((subItem, subIndex) => (
                                                <li key={subIndex} className="p-4 hover:bg-gray-200">
                                                    <a href={subItem.path} className="block text-sm">
                                                        <h3 className="font-semibold text-sm">{subItem.value}</h3>
                                                        <p className="text-xs text-gray-600">{subItem.desc}</p>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
  )
}

export default SideBar