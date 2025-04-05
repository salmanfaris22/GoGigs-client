import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ScrollButton = ({ direction = "left", onClick }) => {
    const Icon = direction === "left" ? FaChevronLeft : FaChevronRight;

    const positionClass =
        direction === "left"
            ? "left-0"
            : "right-0";

    return (
        <button
            className={`flex items-center justify-center absolute ${positionClass} top-1/2 transform -translate-y-1/2 bg-white z-50 p-1 shadow rounded-full`}
            onClick={onClick}
        >
            <Icon />
        </button>
    );
};

export default ScrollButton;
