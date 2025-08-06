import React,{useState} from 'react'

const simpleForm = () => {
    const[username, setUserName] =useState("");
    const[password, setPassword] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Username: "+username+"\n"+"Password: "+password);
    }
  return (
    <div>
        <p>Form</p>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder='Username:' onChange={(e)=> setUserName(e.target.value)}></input><br/>
            <input type="password" name="password" placeholder='Password:' onChange={(e)=> setPassword(e.target.value)}></input><br/><br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default simpleForm