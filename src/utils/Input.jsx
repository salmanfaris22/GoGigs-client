import React from 'react'

function Input({type,text}) {
  return (
    <input
    type={type}
    className="border rounded p-2 w-full "
    placeholder={text}
  />
  )
}

export default Input