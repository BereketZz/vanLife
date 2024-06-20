import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{textAlign:"center", height:"86vh", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
     
     <div>
     <h2>Sorry the page you were looking for is not found!</h2>  <br/>
      <Link to="/" state={{color:"black",textDecoration:"none"}}><button style={{padding:"15px", backgroundColor:"black", color:"white", border:"none", borderRadius:"5px", width:"250px"}}>Back to Home</button></Link>
     </div>
    
    </div>
  )
}

export default NotFound
