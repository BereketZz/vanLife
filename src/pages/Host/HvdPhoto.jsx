import React, { useEffect, useState } from 'react'
import abp from "./home-hero.png"
import{useParams} from "react-router-dom"

export async function loader(){
  return null
}

function HvdPhoto() {

    
    // const[van, setVan] = useState(null)
    // useEffect(()=>{
    //   fetch(`/api/host/vans/${id}`)
    //   .then(res => res.json())
    //   .then(data => setVan(data.vans))
    // },[]
    // )
  return (
    <div>
        <br/> <br/>

    <img src={abp} style={{width:"40%", height:"150px" , marginLeft:"10%"}} />
    </div>
  )
}

export default HvdPhoto
