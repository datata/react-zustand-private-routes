import './App.css'
import Login from './pages/Login/Login'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<><h1>Home</h1></>}/>
        <Route path='/home' element={<><h1>Home</h1></>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
