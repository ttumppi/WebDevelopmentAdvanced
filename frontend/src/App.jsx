import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {GetInputComponent} from "./Input.jsx"
import {User} from "./User.js"

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email,setEmail] = useState("");

  const submitInfo = async (e) => {

    e.preventDefault()

    let user = new User(firstName, lastName, email);

    console.log(user)
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
    


  }

  return (
    <>
      <form onSubmit={submitInfo}>
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
