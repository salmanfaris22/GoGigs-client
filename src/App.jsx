
import { Route, Routes } from 'react-router-dom'
import './App.css'

import UserRout from './rout'
// import Hero from './pages/NonAuth/Landing/Hero/Hero'
import AuthLayout from './pages/auth/authantication/Auth'
import AuthLogin from './pages/auth/authantication/login/AuthLogin'
import Register from './pages/auth/authantication/register/Register'
import VerifyOTP from './pages/auth/authantication/verifyOTP/verifyOTP'
import AuthForgotPassword from './pages/auth/authantication/forgot/ForgotPassword'
import NewPassword from './pages/auth/authantication/newPassword/NewPassword'
import { NavbarDemo } from './common/Layout/Navbar/Navbar'
// Incorrect (based on the error):
// import Hero from "./pages/NonAuth/Landing/Hero/Hero";

// Correct (assuming the file is actually hero.jsx):
import Hero from "./pages/NonAuth/Landing/Hero/hero";
function App() {
  
  return (
    <>
       <NavbarDemo/>
     
<Routes>
      <Route path="" element={<Hero />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="verify-otp/:meth/:email" element={<VerifyOTP />} />
          <Route path="forgot/:meth" element={<AuthForgotPassword />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>
      </Routes>
    

    </>
  )
}

export default App
