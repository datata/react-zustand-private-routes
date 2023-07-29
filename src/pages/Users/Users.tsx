import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import UserList from "../../components/UsersList/UserList";

interface UserData {
  id: number,
  firstName: string,
  email: string,
  image: string,
  phone: string
}

const Users = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [limitUsers, setLimitUsers] = useState<number>(10)

  useEffect(()=>{
    setIsLoading(true)

    fetch(`https://dummyjson.com/users?limit=${limitUsers}`)
      .then((res) => {
        if(!res.ok) throw new Error('Retrieving users error')
        return res.json()
      })
      .then((res) => {
        setUsers(res.users)
      })
			.catch((error: unknown) => console.log(error))
      .finally(() =>  setIsLoading(false))    

  }, [limitUsers])

  return (
    <>
    { isLoading 
      ? <div>Loading users...</div>
      : <>
          <button><Link to="/profile"> Profile </Link></button>
          <button onClick={() => setLimitUsers(limitUsers + 10)}> 10 more Users </button>
          <button onClick={() => setLimitUsers(100)}> All Users </button>
          <UserList data={users}/>
        </>
    }
    </>
  )
}

export default Users