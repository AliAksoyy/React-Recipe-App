import React from 'react'
import {useState} from "react"
import { LoginBody, LoginDiv, LoginImg, LoginButton} from './Login.style';
import LoginImage from "../../assets/meal2.svg"
import { useNavigate } from 'react-router-dom';


let counter=0
const Login = () => {
  const navigate=useNavigate()
  const [loginValues, setLoginValues] =useState({
    username:"",
    password:""
  });

  const handleFormValues =(e) => {
    setLoginValues({...loginValues, [e.target.name]: e.target.value})
  } 

  const handleSubmit =(e)=> {
    e.preventDefault();
    const localValues= (Object.values(localStorage)).map((item)=> JSON.parse(item))
    console.log(localValues)
    if(!localValues.some((item)=> item.username === loginValues.username) ||  !localValues.some((item)=> item.password===loginValues.password)){
      setTimeout(()=> {
        document.querySelector(".warning").textContent= `You have entered wrong password or username ! ${3-counter} rigths left`
      },2000)
      counter++
      if(counter===3) {
        
          document.querySelector(".warning").textContent= `You have entered wrong password and username for ${counter} times`
       setTimeout(()=> {
        navigate("/")
       },1000)
       
        counter=0
      }
    }else {
      navigate("/home")
    }
  }

  return (
    <LoginBody>
      <LoginDiv>
        <LoginImg src={LoginImage} />

        <h2 style={{color:"white", fontWeight:"bold", marginBottom:"1rem"}}>RECIPE LOGIN</h2>

        <p style={{color:"blue", fontSize:"1rem"}} className="warning"></p>
      
       <form onSubmit={(e) => handleSubmit(e)}>

        <div style={{margin:"0.4rem"}} >
          
          <input
          
            name="username"
            type="text"
            placeholder="USERNAME"
            id="username"
            value={loginValues.username}
            onChange={handleFormValues}
            style={{backgroundColor:"rgba(0,0,0,0.4)", padding:"0.3rem"}}
          />
        </div>
        <div style={{margin:"0.4rem"}} >
          <input
            name="password"
            type="password"
            id="password"
            placeholder="PASSWORD"
            value={loginValues.password}
            onChange={handleFormValues}
            style={{backgroundColor:"rgba(0,0,0,0.4)",padding:"0.3rem"}}
          />
        </div>
        <div style={{margin:"0.4rem", textAlign:"center"}} >
          <LoginButton >LOGIN</LoginButton>
        </div>
      </form>
      </LoginDiv>
    </LoginBody>
  )
}

export default Login