import React from 'react'
import {useState} from "react"
import { RegisterDiv, RegisterButton } from './Register.style';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
  const navigate=useNavigate()

  const [registerValues, setRegisterValues] =useState({
    username:"",
    email:"",
    password:""
  });

  console.log(registerValues)

  const handleFormValues =(e) => {
    setRegisterValues({...registerValues, [e.target.name]: e.target.value})
  } 

  const handleSubmit =(e)=> {

    e.preventDefault();
    const user =registerValues;
   
    const localValues= (Object.values(localStorage)).map((item)=> JSON.parse(item))

    if(!localValues.some((item)=> item.username === registerValues.username) ||  !localValues.some((item)=> item.email===registerValues.email) || !localValues.some((item)=> item.password===registerValues.password)){
      localStorage.setItem(new Date().getTime(), JSON.stringify(user) )
      document.querySelector(".success-warning").innerText= `You registered successfully and being redirected to home page`
     setTimeout(()=> {
      navigate("/home")
    },2000)
    }else {
      document.querySelector(".success-warning").innerText= `You have already registered and being redirected to login page`
      setTimeout(()=> {
      navigate("/login")
    },2000)
    
   
    }
  }

  return (
    <RegisterDiv >
      <h1 style={{color:"rgba(0,0,0,1)", fontSize:"1.5rem"}} >REGISTER FORM</h1>
      
      <form style={{margin:"1.5rem auto", width:"60%", textAlign:"center" }} onSubmit={(e) => handleSubmit(e)}>

        <div style={{marginTop:"1rem"}}  >
        
          <input
            name="username"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={registerValues.username}
            onChange={handleFormValues}
            style={{width:"50%",minWidth:"200px", padding:"0.5rem", borderRadius:"10px"}}
          />
        </div>
        <div style={{marginTop:"1rem"}} >
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={registerValues.email}
            onChange={handleFormValues}
            style={{width:"50%",minWidth:"200px", padding:"0.5rem", borderRadius:"10px"}}
          />
        </div>
        <div style={{ marginTop:"1rem"}} >
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={registerValues.password}
            onChange={handleFormValues}
            style={{width:"50%",minWidth:"200px", padding:"0.5rem", borderRadius:"10px"}}
          />
        </div>
        <div style={{marginTop:"1rem"}} >
          <RegisterButton >Submit</RegisterButton>
          <h2 style={{color:"blue", fontWeight:"bold" }} className="success-warning"></h2>
        </div>
      </form>
      
      
    </RegisterDiv>
  )
}

export default Register