import { useAuthStore } from "../../store/useAuthStore"

const Profile = () => {
  const userImg = useAuthStore(state => state.profile.image)
  const userName = useAuthStore(state => state.profile.username)
  const userEmail = useAuthStore(state => state.profile.email)
  
  return (
    <>
      <img src={userImg} style={{width: "100px"}}/>
      <h1>{userName}</h1>
      <h1>{userEmail}</h1>
    </>
  )
}

export default Profile