import React from 'react'

const GradiantBtn = ({lebal}) => {
  return (
    <a class="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-hidden focus:from-violet-600 focus:to-blue-600 py-3 px-4" href="#">
    {lebal}

  </a>
  )
}

export default GradiantBtn