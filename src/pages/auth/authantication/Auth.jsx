import React from 'react'
import { Outlet } from 'react-router-dom'
import img from '../../../assets/auth/image.png'
const AuthLayout = () => {
  return (
    <div>
dsdssdfgsfg
<Outlet />

<div>
    <img src={img} alt="" />
</div>
    </div>
  )
}

export default AuthLayout