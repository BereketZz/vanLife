import React, { useState } from 'react'
import { useLocation , Form, Navigate, useNavigate, redirect} from 'react-router-dom'
import { loginUser } from '../api'


export async function action({request}){

  const formData= await request.formData()

  const email = formData.get("email")
  const password = formData.get("password")
  const data = await loginUser({email, password})
  // if(data){
  //   
  // }
  console.log(data)
  return redirect("/host")




}


function Login() {
  const navigate= useNavigate()
  const pathName= useLocation().state?.path || "/host"
  const[input, setInput]= useState({
    email:"",
    password:""
  })
  const[status, setStatus]= useState(null)
  const[error, setError]= useState(null)
  const inputStyle= {
    border:"1px solid gray",
    borderRadius:"5px",
    padding:"10px",
    width:"92%"

  }
  const subdivStyle= {
    width:"100%",
    height:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }
  const butStyle={
    width:"100%",
    border:"none",
    borderRadius:"5px",
    padding:"15px",
    color:"white",
    backgroundColor:"orange",
    
  }
  const handleChange= (event)=>{
    setInput((prev)=>{
      return {
        ...prev,
        [event.target.name]:event.target.value
      }
    })
  }
  const handleSubmit= async (event)=>{
    event.preventDefault()

    try{
      setStatus("submitting")
      const data= await loginUser(input)
      localStorage.setItem("logged", true)
       navigate(`${pathName}`, {replace:true})
      setError(null)
     

    }catch(error){
       
      setError(error.message)
      
     
    }finally{
      setStatus(null)
    }
 

  }

   const message= useLocation().state?.message|| "sign in to your account"
   console.log()

  return (
    <div style={{width:"100vw", height:"86vh"}}>
     
     <div style={subdivStyle}>
      
      <Form method='post'>
      <h2>{message}</h2> <br/>
        <input style={inputStyle} type="text" placeholder='beki@gmail.com' name="email" onChange={handleChange} /><br/> 
        <input style={inputStyle} type="password" placeholder='password' name="password" onChange={handleChange} /> <br/> <br/>
         {error && <div style={{color:"red", textAlign:"center", width:"100%"}}>{error} <br/> </div>} 
        <button onClick={handleSubmit}  disabled={status==="submitting"} style={butStyle} >{ status==="submitting"?"Loging in ...":"Log in"}</button>
      </Form>
     </div>
    </div>
  )
}

export default Login
