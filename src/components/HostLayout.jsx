import React from 'react'
import{Link, NavLink} from 'react-router-dom'
import{Outlet} from "react-router-dom"

function HostLayout() {

  const activeStyle={
    fontWeight:"bold",
    color:"#161616",
    
    textDecoration:"underline"
  }
  return (

    <>
    <br/>
        <div className='host-ly-cont' style={{display:"flex" , justifyContent:"space-evenly", alignItems:"center",  }}>
      
      <NavLink style={({isActive})=> isActive? activeStyle:null} end to="/host">Dashboard</NavLink>
     <NavLink style={({isActive})=> isActive? activeStyle:null}to="/host/income">Income</NavLink>

     <NavLink style={({isActive})=> isActive? activeStyle:null}to="/host/vans">Vans</NavLink>
     <NavLink style={({isActive})=> isActive? activeStyle:null}to="/host/reviews">Reviews</NavLink>
      
     
     

    </div> <br/>
    <Outlet/>
    
    </>

  )
}

export default HostLayout
