import './App.css';
import {useState} from "react"
function App() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log({firstName,lastName,email,password})
  }

  function handleFirstNameChange(e){    
    setFirstName(e.target.value)
  }
  function handleLastNameChange(e){    
    setLastName(e.target.value)
  }
  function handleEmailChange(e){    
    setEmail(e.target.value)
  }
  function handlePasswordChange(e){    
    setPassword(e.target.value)
  }
  console.log({firstName})
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>          
          First Name:
          <input onChange={handleFirstNameChange} value={firstName} type='text'/>
        </label> 
        <label>          
          Last Name:
          <input onChange={handleLastNameChange} value={lastName} type='text'/>
        </label> 
        <label>          
          Email:
          <input onChange={handleEmailChange} value={email} type='text'/>
        </label> 
        <label>          
          Password:
          <input onChange={handlePasswordChange} value={password} type='text'/>
        </label> 
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
