import './App.css'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='app' element={<Register />} />
    </Routes>
    </>
  )
}

export default App
