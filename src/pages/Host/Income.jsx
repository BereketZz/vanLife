import React from 'react'
import incomeImg from '../../assets/images/income-graph.png'
export async function loader(){
  return null
}


function Income() {
  return (
    <div style={{width:"100vw", height:"85vh"}}>
     <div style={{marginLeft:"5%", marginRight:"5%" , height:"100%" }} >
      <br/> <br/>
      <h2>Income</h2> <br/>

      <span>Last 30 days</span>
      <br/> <br/>

      <h3> <b>$2260</b></h3> <br/> <br/>
      <img src={incomeImg}  style={{width:"100%", height:"40%"}} />
      <br/> <br/> <br/>
       <h2>Your Transaction(3)</h2>
      
       <br/>   <br/>

     <span>Last 30 days</span>
     </div>
    </div>
  )
}

export default Income
