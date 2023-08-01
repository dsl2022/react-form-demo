import './App.css';
import {useState} from "react"
function App() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData();
    
    formData.append("firstName",firstName);
    formData.append("lastName",lastName);
    formData.append("email",email);
    formData.append("password",password);
    const inputObject = Object.fromEntries(formData); // convert the FormData object to a JSON object
    console.log(JSON.stringify(inputObject));
    // console.log({firstName,lastName,email,password})
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
      <form method="POST" onSubmit={handleSubmit}>
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
          <input onChange={handleEmailChange} value={email} type='email'/>
        </label> 
        <label>          
          Password:
          <input onChange={handlePasswordChange} value={password} type='password'/>
        </label> 
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
