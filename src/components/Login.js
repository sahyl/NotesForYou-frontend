import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';



const Login = (props) => {
    const [credentials, setCredentials]= useState({email:'',password:''})
    const host = 'http://localhost:5050'
    let navigate = useNavigate();


    
    const  handlesubmit= async (e)=>{
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`,{
            method : "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body : JSON.stringify({email: credentials.email,password: credentials.password})
          })
          const json = await response.json()
          console.log(json)
          if (json.success){
            localStorage.setItem("token", json.authtoken)
            navigate('/')
            props.showAlert(' Logged in  successfully', 'success')


          }else{
            props.showAlert('Invalid Credentials', 'danger')
          }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
  return (
    
    <div className="container mt-5">
    
    <h2 className="text-center">Login to NotesForYou</h2>
    <form  onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={onChange}
          className="form-control"
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
          className="form-control"
          
        />
      </div>
      <button type="submit"  className="btn btn-primary">Login</button>
    </form>
  </div>
  )
}

export default Login
