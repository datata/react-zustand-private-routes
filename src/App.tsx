import './App.css'
import PrivateZone from './guards/PrivateZone';
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile';
import { Routes, Route } from "react-router-dom";
import Users from './pages/Users/Users';
import Navigate from "./components/Header/Navigate";

function App() {
  return (
    <>
      <Navigate />
      <Routes>
        <Route path='*' element={<><h1>Home</h1></>}/>
        <Route path='/home' element={<><h1>Home</h1></>}/>
        <Route path='/login' element={<Login />}/>
        <Route 
          path='/profile' 
          element={
            <>
              <PrivateZone>
                <Profile />
              </PrivateZone>
            </>}
        />
        <Route 
          path='/users' 
          element={
            <>
              <PrivateZone>
                <Users/>
              </PrivateZone>
            </>}
        />

      </Routes>
    </>
  )
}

export default App
