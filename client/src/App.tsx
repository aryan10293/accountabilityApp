import { RouterProviderProps } from '../node_modules/react-router-dom/dist/index'
import { Routes, Route, Navigate, Router, BrowserRouter, useNavigate } from 'react-router-dom'
import Feed from './pages/Feed'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Progress from './pages/Progress'
import Goals from './pages/Goals'
import Community from './pages/Community'
import './index.css'
function App() {

  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/community' element={<Community />} />
      <Route path='/progresslogs' element={<Progress />} />
      <Route path='/goals' element={<Goals />} />
      <Route path='/home' element={<Feed />} />
      {/* </PrivateRoute> */}
    </Routes>
  )
}

export default App
