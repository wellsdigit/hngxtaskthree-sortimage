import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ImageGallery from './pages/ImageGallery';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState(false);
  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  } 

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data);
    }
  }, [])
  
  return (
    <>
    <Routes>
      {!token ? (
        <Route path="/" element={<Login setToken={setToken} />} />
      ) : (
        <Route path="/" element={<Navigate to="/app" replace={true} />} />
      )}
      <Route path="register" element={<Register />} />
      {token ? (
        <Route path="app" element={<ImageGallery token={token} />} />
      ) : (
        <Route path="app" element={<Navigate to="/" replace={true} />} />
      )}
    </Routes>
    </>
  )
}

export default App
