import "./App.css";

export const UserTable = ({users, onDelete}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            
            <tbody>
            {users.map((user) => (
                
                    <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td> 
                    <td>
                        <button onClick={() => onDelete(user.id)}>Delete</button>
                    </td>
                    </tr>

            ))}
            </tbody>
          
        </table>
    )
}