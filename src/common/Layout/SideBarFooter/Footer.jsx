import React from 'react'

const SideBarFooter = ({isHovered}) => {
  return (

 <div className="flex justify-center w-full mt-auto">
 <div className={`${isHovered ? 'block' : 'hidden'} text-sm text-gray-500`}>
   <p>© 2025 Freelancer Inc.</p>
 </div>
</div>
  )
}

export default SideBarFooter