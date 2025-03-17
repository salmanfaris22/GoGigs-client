import { useContext } from 'react'
import './App.css'
import Login from './pages/auth/authantication/login/Login'
import { AppContext } from './contexts/AppContext'
function App() {
  const {showLogin}=useContext(AppContext)
  return (
    <>
     <div className='bg-red-500'>
    <Login/>
     </div>
    </>
  )
}

export default App
