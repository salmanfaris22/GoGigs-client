"use client";

import React, { useRef, useState } from "react";
import { FaBars, FaChevronDown, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import './Navbar.css';
import Header from "../Header/Header.jsx";
import HeaderData from "../../Components/header/Header.jsx";
import { menuItems } from "../../Components/header/demoJson.js";
import ScrollButton from "../../Components/button/IconButtonScroll.jsx";
import SideBar from "../../Components/header/SideBar.jsx";
// import Hero from "../../UI/Hero/Hero.jsx";

export function NavbarDemo() {
    return (
        <div className="">
            <Header />
            <Navbar className="" />
            {/* <Hero/> */}
        </div>
    );
}



export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 150;
            current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setActiveIndex(null); // Close any open submenus when toggling mobile menu
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setActiveIndex(null);
    };

    return (
        <div className="w-full flex justify-center p-1 border-b border-gray-200">
            <nav className="w-[90%] relative flex items-center justify-between md:justify-start">

                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 focus:outline-none"
                >
                    {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>

                <div className="hidden md:flex w-full">
                    <ScrollButton direction="right" onClick={() => scroll("right")} />
                    <HeaderData scrollRef={scrollRef} menuItems={menuItems} setActiveIndex={setActiveIndex} activeIndex={activeIndex}/>
                    <ScrollButton direction="left" onClick={() => scroll("left")} />
                </div>


{/* {Side Bar moiel} */}

                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="p-4 flex justify-end">
                        <button onClick={closeMobileMenu} className="focus:outline-none">
                            <FaTimes size={20} />
                        </button>
                    </div>
                  <SideBar  menuItems={menuItems} setActiveIndex={setActiveIndex} activeIndex={activeIndex}/>
                </div>
            </nav>
        </div>
    );
}