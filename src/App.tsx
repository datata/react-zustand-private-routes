import './App.css'
import PrivateZone from './guards/PrivateZone';
import Login from './pages/Login/Login'
import { Routes, Route } from "react-router-dom";
import Users from './pages/Users/Users';

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<><h1>Home</h1></>}/>
        <Route path='/home' element={<><h1>Home</h1></>}/>
        <Route path='/login' element={<Login />}/>
        <Route 
          path='/profile' 
          element={
            <>
              <PrivateZone>
                <h1>Profile</h1>
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
