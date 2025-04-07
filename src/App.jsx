
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Hero from './pages/NonAuth/Landing/Hero/Hero'
import AuthLayout from './pages/auth/authantication/Auth'
import AuthLogin from './pages/auth/authantication/login/AuthLogin'
import Register from './pages/auth/authantication/register/Register'
import VerifyOTP from './pages/auth/authantication/verifyOTP/verifyOTP'
import AuthForgotPassword from './pages/auth/authantication/forgot/ForgotPassword'
import NewPassword from './pages/auth/authantication/newPassword/NewPassword'
import { NavbarDemo } from './common/Layout/Navbar/Navbar'
import Hero from './pages/Landing/Hero'
import Makefreelancer from './pages/auth/makefreelancer/Makefreelancer'
import Freelncer from './pages/auth/makefreelancer/freelncer/Freelncer'
import Skills from './pages/auth/makefreelancer/skills/Skills'

import Education from './pages/auth/makefreelancer/education/Educaion'



// import Hero from './pages/NonAuth/Landing/Hero/Hero'
// import Hero from './pages/NonAuth/Landing/Hero/Hero'


function App() {

  return (
    <div>
      {/* <NavbarDemo/>   */}
      <Routes>
        <Route path="/freelancer" element={<Makefreelancer />}>
        <Route index element={<Freelncer />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
        
        
        </Route>
      </Routes>
      {/* <NavbarDemo/>   */}
      <Routes>
        <Route path="/" element={<NavbarDemo />} ></Route>
      </Routes>
      <Routes>

        <Route path="/" element={<Hero />} ></Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="verify-otp/:meth/:email" element={<VerifyOTP />} />
          <Route path="forgot/:meth" element={<AuthForgotPassword />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>
      </Routes>


    </div>
  )
}

export default App
