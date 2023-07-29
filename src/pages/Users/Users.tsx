import { useEffect, useState } from "react"
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

  useEffect(()=>{
    setIsLoading(true)

    fetch('https://dummyjson.com/users')
      .then((res) => {
        if(!res.ok) throw new Error('Retrieving users error')
        return res.json()
      })
      .then((res) => {
        setUsers(res.users)
        setIsLoading(false);
      })
			.catch((error: unknown) => console.log(error))    

  }, [])

  return (
    <>
    { isLoading 
      ? <div>Loading users...</div>
      : <UserList data={users}/>
    }
    </>
  )
}

export default Users