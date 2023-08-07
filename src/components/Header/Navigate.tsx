import { useAuthStore } from "../../store/useAuthStore"
import { Link } from 'react-router-dom'

const Navigate = () => {
  const token = useAuthStore(state => state.token);
  const reset = useAuthStore(state => state.reset);


  return (
    <>
      {
        token 
        ? <nav>
            <ul style={{display: 'flex', justifyContent:'space-between'}}>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><span onClick={() => reset()}>Logout</span></li>
            </ul>
          </nav>
        : 
          <nav>
            <ul>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
      }
      
    </>
  )
}

export default Navigate