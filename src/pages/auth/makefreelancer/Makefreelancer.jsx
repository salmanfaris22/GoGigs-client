import React from 'react'
import FreelncerBar from '../../../common/Layout/SideBar/MainFreelancer'
import { Outlet } from 'react-router-dom'

const Makefreelancer = () => {

  return (
    <div className='flex'><FreelncerBar/>
    <div className='p-10 w-full '>

 

       <Outlet/>
    
    </div>
    </div>
  )
}

export default Makefreelancer