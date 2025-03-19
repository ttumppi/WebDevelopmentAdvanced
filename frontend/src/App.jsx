import { useState, useEffect } from 'react'
import './App.css'
import {InputComponent} from "./Input.jsx"
import {User} from "./User.js"
import {UserTable} from "./UserTable.jsx"
import "bootstrap/dist/css/bootstrap.min.css"





const GetUsers = async () => {
  const users = await fetch("http://localhost:5000", {
    method : "GET",
    headers : {
      "Content-Type" : "application/json"
    }
    
  });
  const userObjects = await users.json();
  return userObjects.users;

}

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [users, setUsers] = useState([]);





  const fetchUsers = async () => {
      
    const userData = await GetUsers();
    setUsers(userData);
    
  }


  const DeleteUser = async (id) => {
    const response = await fetch(`http://localhost:5000/deleteuser/${id}`, {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json"
      },
      body : "" 
    });
    console.log(response)

    await fetchUsers();
  }

  const submitInfo = async (e) => {

    e.preventDefault()

    let user = new User(firstName, lastName, email);

    try{

      const response = await fetch("http://localhost:5000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      console.log(response)
    }
    catch(error){
      console.log(error)
    }
    
    await fetchUsers();

    setFirstName("");
    setLastName("");
    setEmail("");


  }

  
  useEffect( () => {
    

    fetchUsers();
    

  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row mb-3">
              <UserTable users={users} onDelete={DeleteUser} />
            </div>
          </div>
          
        </div>

        <div className="row">
          <div className="col-12">
            <form onSubmit={submitInfo}>

          
              <div className="mb-3">
                <InputComponent label="First name" value={firstName} onChange={(e) => 
                  setFirstName(e.target.value)
                } />
              </div>
            

              <div className="mb-3">
                <InputComponent label="Last name" value={lastName} onChange={(e) => 
                setLastName(e.target.value)}/>
              </div>

              <div className="mb-3">
                <InputComponent label="Email" value={email} onChange={(e) => 
                setEmail(e.target.value)}/>
              </div>
            

              <button type="submit" >Create</button>
            </form>
          </div>
        </div>
      </div>
      
      
      
    </>
  )
}

export default App
