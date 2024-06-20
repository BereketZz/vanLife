import React from 'react'
import reviewImg from "../../assets/images/reviews-graph.png"

export async function loader(){
  return null
}


function Reviews() {
  return (
    <div style={{width:"100vw", height:"85vh"}}>
   <div style={{marginLeft:"5%", marginRight:"5%" , height:"100%" }}>
     <br/><br/>
     <div style={{ display:"flex", alignItems:"center", justifyContent:"left"}}>
    <h3>Your Reviews &nbsp; &nbsp;  &nbsp;</h3> <span>Last 30 days</span>
      </div>
    <br/> <br/> <br/>
    <img src={reviewImg}  style={{width:"100%", height:"40%"}} />
    <br/><br/> <br/>
    <h3>Reviews(2)</h3> <br/>
    <h4>* * * * *</h4>
    <br/> <br/>
    <div style={{ display:"flex", alignItems:"center", justifyContent:"left"}}>
    <h3>Abebe Belew &nbsp; &nbsp;  &nbsp;</h3> <span>Jan 3, 2023</span>
      </div>
   </div>
    </div>
  )
}

export default Reviews
