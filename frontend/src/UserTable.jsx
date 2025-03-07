import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

export const UserTable = ({users, onDelete}) => {

    return (
        <table class="users-table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    
                </tr>
            </thead>
            
            <tbody>
            {users.map((user) => (
                
                    <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td> 
                    <td>
                        <button className="btn btn-primary" onClick={() => onDelete(user.id)}>Delete</button>
                    </td>
                    </tr>

            ))}
            </tbody>
          
        </table>
    )
}