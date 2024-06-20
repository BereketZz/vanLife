import React from 'react'
import { redirect, Navigate, Link } from 'react-router-dom'
import { requiredAuth } from '../../auth'

// export async function loader(){
//   const isLoged= false

//     if(!isLoged){
//       throw redirect("/login", 302);
     
//     }
//    return null

// }

// 0918510767

function Dashboard() {
  return (
    <div style={{width:"100vw", height:"85vh", }}>
     <div style={{marginLeft:"5%", marginRight:"5%" , height:"85vh" }}>
       <br/>  <br/> <br/>
      <h2>Welcome!</h2>
     <br/> <br/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"left"}}>
    <p>Income Last 30 days &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;</p> 
    <Link to="income">Details</Link>
      </div> <br/> <br/>
       <h2>$2260</h2>
       <br/> <br/>
       <div style={{ display:"flex", alignItems:"center", justifyContent:"left"}}>
    <h3>Review Score <b>5.0</b>/5   &nbsp;    &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;</h3> 
    <Link to="reviews">Details</Link>
      </div> <br/> <br/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"left"}}>
    <h3>Your listed vans   &nbsp; &nbsp; &nbsp;    &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;</h3> 
    <Link to="vans">View all</Link>
      </div>

     </div>
    </div>
  )
}

export default Dashboard
