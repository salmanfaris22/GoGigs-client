import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AuthLayout from './pages/auth/authantication/Auth'
import AuthLogin from './pages/auth/authantication/login/AuthLogin'


const UserRout = () => {
  return (
    <>
      <Routes>
      {/* <Route path="/" element={<Hero />} /> */}

      <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<AuthLogin />} />
      
        </Route>
      </Routes>
    </>
  )
}

export default UserRout
