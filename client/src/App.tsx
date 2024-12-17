import { RouterProviderProps } from '../node_modules/react-router-dom/dist/index'
import { Routes, Route, Navigate , Router, BrowserRouter, useNavigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import './index.css'
function App() {

  return (
    <Routes>       
      {/* public routes */}
      <Route path="/" element={<Landing />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />       
      {/* </PrivateRoute> */}
    </Routes>
  )
}

export default App
