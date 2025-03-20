import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AuthLayout from './pages/auth/authantication/Auth'
import AuthLogin from './pages/auth/authantication/login/AuthLogin'
import Authregister from './pages/auth/authantication/register/Authregister'


const UserRout = () => {
  return (
    <>
      <Routes>
      {/* <Route path="/" element={<Hero />} /> */}

      <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<AuthLogin />} />
          <Route path="register"  element={<Authregister />} />
        </Route>
      </Routes>
    </>
  )
}

export default UserRout
