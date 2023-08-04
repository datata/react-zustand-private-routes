import React from "react";

interface UserData {
  id: number,
  firstName: string,
  email: string,
  image: string,
  phone: string
}

interface UserListProps {
  data: UserData[];
}

const UserList = ({data}: UserListProps) => {
    const handleEmailCopy = (event: React.MouseEvent, email: string) => {
      console.log(event.detail);

      if(event.detail == 1) console.log('1');
      if(event.detail == 2) console.log('2');
      
      
      navigator.clipboard.writeText(email)
    };

  return (
    <>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
          {
            data.map(((user, index) => (
                <tr key={user.id} style={index % 2 === 0 ? {backgroundColor: 'grey', color: 'white'} : {}}>
                  <td><img src={user.image} alt="" style={{width: '50px'}} /></td>
                  <td>{user.firstName}</td>
                  <td>{user.phone}</td>
                  <td>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => handleEmailCopy(e,user.email)}
                    >
                      {user.email}
                    </span>
                  </td>
                </tr>
            )))
          }
        </tbody>
    </table>

    </>
  )
}

export default UserList