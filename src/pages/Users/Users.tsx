import { useEffect, useState } from "react"
import UserList from "../../components/UsersList/UserList";

const Users = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  interface UserData {
    id: number,
    firstName: string,
    email: string,
    image: string,
    phone: string
  }

  useEffect(()=>{
    fetch('https://dummyjson.com/users')
      .then((res) => {
        if(!res.ok) throw new Error('Retrieving users error')
        return res.json()
      })
      .then((res) => setUsers(res.users))
			.catch((error: unknown) => console.log(error))
  }, [])

  return (
    <>
      <UserList data={users}/>
    </>
  )
}

export default Users