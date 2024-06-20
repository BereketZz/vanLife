import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HvdComponent() {
  return (
 <>
 
 <br/>
        <div className='host-ly-cont' style={{display:"flex" , justifyContent:"space-evenly", alignItems:"center",  }}>
      
      <NavLink style={({isActive})=> isActive? activeStyle:null} end to="details">Details</NavLink>
     <NavLink style={({isActive})=> isActive? activeStyle:null}to="pricing">Pricing</NavLink>

     <NavLink style={({isActive})=> isActive? activeStyle:null}to="photos">Photos</NavLink>
 
      
     
     

    </div> <br/>
      
    <Outlet/>
 
 
 </>


  )
}

export default HvdComponent
