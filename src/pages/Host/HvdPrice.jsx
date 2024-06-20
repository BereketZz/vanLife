import React, { useEffect, useState } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

export async function loader(){
  return null
}


function HvdPrice() {

  const{id}= useParams()
   const{van}= useOutletContext()
  return (
    <div style={{textAlign:"center"}}>
      <br/>    <br/>      <br/>  
         <br/>  <br/>

      { van? <h2><b>{van.price}$</b>/day</h2>:null}
      
    </div>
  )
}

export default HvdPrice
