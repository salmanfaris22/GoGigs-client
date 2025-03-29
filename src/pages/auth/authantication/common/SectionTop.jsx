import React from 'react'

const SectionTop = () => {
  return (
    <div className="p-5 text-center text-2xl bg-[var(--color-secondry)]">
          {["G", "o", "G", "i", "g", "s"].map((letter, index) => (
            <div key={index} className="font-bold text-[var(--color-white)]">{letter}</div>
          ))}
        </div>
  )
}

export default SectionTop
