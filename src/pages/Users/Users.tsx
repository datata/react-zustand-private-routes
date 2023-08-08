import { useEffect, useState } from "react"
// import { Link } from "react-router-dom";
import UserList from "../../components/UsersList/UserList";
import Toaster from "../../components/Toaster/Toaster";

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
	const [toaster, setToaster] = useState(false)
	const [toasterError, setToasterError] = useState(false)
  const [skip, setSkip] = useState<number>(0)

  useEffect(()=>{
    setIsLoading(true)

    fetch(`https://dummyjson.com/users?limit=${limitUsers}&skip=${skip}`)
      .then((res) => {
        if(!res.ok) throw new Error('Retrieving users error')
        return res.json()
      })
      .then((res) => {       
        setUsers(users.concat(res.users))
        
        setToaster(true);
        setTimeout(() => {
          setToaster(false)
        }, 2000);
      })
			.catch((error: unknown) => {
        console.log(error)
        setToasterError(true);
        setTimeout(() => {
          setToasterError(false)
        }, 2000);
      })
      .finally(() =>  {
        setIsLoading(false) 
      })    
  }, [limitUsers, skip])

  return (
    <>
      {toaster ? <Toaster message={'Success!'} /> : ""}
      {toasterError ? <Toaster message={"Error"} type={'error'}/> : ""}
      <button onClick={() => setLimitUsers(100)}> All Users </button>
      { users.length > 0 && <>
            {/* <button><Link to="/profile"> Profile </Link></button> */}
            {/* <button 
              onClick={() => {
                setLimitUsers(limitUsers + 10)
              }}
              > 
              10 more Users 
            </button> */}
            <UserList data={users}/>
          </>
      }
      { limitUsers !== 100 && <button onClick={() => setSkip(skip + 10)}> Next page </button>}
      { isLoading && <div>Loading users...</div>}
    </>
  )
}

export default Users