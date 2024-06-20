import React from 'react'
import './comp.css'
import{NavLink} from "react-router-dom"
import Avater from "../assets/images/avatar-icon.png"

function Navbar() {


  const activeStyle={
    fontWeight:"bold",
    color:"#161616",
    
    textDecoration:"underline"
  }
  return (
    <div className='main-cont'>
        <NavLink to="/"><h2> #VANLIFE</h2></NavLink>
      

      <div className='sub-cont'>
      <NavLink style={({isActive})=> isActive? activeStyle:null}  to="/host">  <span>Host</span></NavLink>
        <NavLink style={({isActive})=> isActive? activeStyle:null} to="/about">  <span>About</span></NavLink>
        <NavLink style={({isActive})=> isActive? activeStyle:null} to="/vans"><span>Vans</span></NavLink>
        <NavLink style={({isActive})=>isActive? activeStyle:null} to="login">
         <span><img src={Avater} width="25" height="25"  style={{marginTop: "auto"}}  /></span>  
        </NavLink>
        
      </div>
    </div>
  )
}

export default Navbar
