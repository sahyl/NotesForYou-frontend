import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials]= useState({name:'',email:'',password:'',confirmPassword:''})
    const host = 'http://localhost:5050'
    let navigate = useNavigate();


    
    const  handlesubmit= async (e)=>{
        const{name,email,password} =credentials
        e.preventDefault()
        if (credentials.password !== credentials.confirmPassword) {
            props.showAlert(' Passwords dont match', 'danger')
            return;
          }
        const response = await fetch(`${host}/api/auth/createuser`,{
            method : "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body : JSON.stringify({name, email, password})
          })
          const json = await response.json()
          console.log(json)
          if (json.success){
            localStorage.setItem("token", json.authtoken)
            
            navigate('/')
            props.showAlert(' Account created successfully', 'success')


          }else{
            props.showAlert('Invalid Credentials', 'danger')
          }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
  return (
    <div className="container mt-5">
    <h2 className="text-center">Sign Up  to NotesForYou</h2>
    <form onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={onChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength={5}
          onChange={onChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={onChange}
          className="form-control"
          minLength={5}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  </div>
  )
}

export default Signup
