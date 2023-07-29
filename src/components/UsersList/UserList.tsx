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
            data.map((user => (
                <tr key={user.id}>
                  <td><img src={user.image} alt="" style={{width: '50px'}} /></td>
                  <td>{user.firstName}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
            )))
          }
            {/* <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>25</td>
                <td>jane@example.com</td>
            </tr>
            <tr>
                <td>Bob Johnson</td>
                <td>40</td>
                <td>bob@example.com</td>
            </tr> */}
        </tbody>
    </table>

    </>
  )
}

export default UserList