import React, { useEffect, useState } from 'react'
import abp from "./home-hero.png"
import "../pages.css"
import{Link, useLoaderData } from "react-router-dom"
import { gethostVans } from '../../api'



export function loader(){
   return gethostVans()

}
function HostVans() {
  const van= useLoaderData()
  console.log(van)
  // const[van, setVan]= useState([])

  // useEffect(()=>{
  //    fetch("/api/host/vans").
  //    then(res=> res.json()).
  //    then(data=> setVan(data.vans))
  // }, [])

  return (
    <div className='host-vans-cont'>
        <br/><br/><br/><br/>
     <h2>Your listed vans</h2> <br/><br/>
     <div className='listed-vans-cont'>

        {
            van?.map(v=>{
                return <Link  to={`${v.id}`} style={{color:"black", textDecoration:"none"}} key={v.id}>
                 <div className='single-list-van' >
          
          <img src={abp} />
          <div>
           <h3>{v.name}</h3>
           <p>${v.price}/ day</p>
          </div>
           </div> 
                
                </Link>
                
               
            }) 
           
        }
    
     </div>
    </div>
  )
}

export default HostVans
