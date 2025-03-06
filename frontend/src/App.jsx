import { useState, useEffect } from 'react'
import './App.css'
import {GetInputComponent} from "./Input.jsx"
import {User} from "./User.js"
import {UserTable} from "./UserTable.jsx"






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
      method : "POST",
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


  }

  
  useEffect( () => {
    

    fetchUsers();

  }, []);

  console.log(users);
  return (
    <>
      <form onSubmit={submitInfo}>
      <div>
        <UserTable users={users} onDelete={DeleteUser} />
      </div>
      <div>
        <GetInputComponent label="First name" value={firstName} onChange={(e) => 
          setFirstName(e.target.value)
        } />
        <GetInputComponent label="Last name" value={lastName} onChange={(e) => 
        setLastName(e.target.value)}/>
        <GetInputComponent label="Email" value={email} onChange={(e) => 
        setEmail(e.target.value)}/>
        <input type="submit"></input>
      </div>
      </form>
    </>
  )
}

export default App
