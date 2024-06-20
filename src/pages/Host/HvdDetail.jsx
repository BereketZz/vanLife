import React, { useEffect, useState } from 'react'
import{useParams, useOutletContext} from "react-router-dom"


export async function loader(){
  return null
}


function HvdDetail() {
  const{van}= useOutletContext()


  return (
    
    <div >
      <br/>
{ van?    <div style={{marginLeft:"5%"}}>
<p><b>Name:</b>&nbsp;{van.name}</p> <br/>
<p><b>Catagory:</b>&nbsp; {van.type}</p> <br/>
<p> <b>Description:</b>&nbsp; {van.description}</p> <br/>
<p> <b>Visibility:</b>public</p>
</div> :null }
  

      


    </div>
  )
}

export default HvdDetail
