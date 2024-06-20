import React, { useEffect, useState } from 'react'
import{Link, NavLink, Outlet, useParams, useLoaderData} from 'react-router-dom'
import abp from "./home-hero.png"
import "../pages.css"
import { gethostVans } from '../../api'

export async function loader({params}){

  return gethostVans(params.id)
}


function HostVanDetail() {

  const van = useLoaderData()
  const activeStyle={
    fontWeight:"bold",
    color:"#161616",
    
    textDecoration:"underline"
  }
  // const {id}= useParams();
  // const[van, setVan]= useState(null)
 
  // useEffect(()=>{
  // fetch(`/api/host/vans/${id}`)
  // .then(res=> res.json())
  // .then(data=>setVan(data.vans))
  // },[])
  
  return (

    <div className='host-vans-cont'><br/><br/>
      <Link  to=".." relative='path' style={{marginLeft:"5%"}}> <span>Back to all vans</span></Link><br/><br/>
      <div className='listed-vans-cont' style={{marginLeft:"5%",marginRight:"5%",   height:"60vh", backgroundColor:"beige"}} ><br/><br/>
    {   
    
    
     van?
    
    <div className='single-list-van'  style={{}}>
          
          <img src={abp}  style={{height:"150px"}}/>
          <div> 
           <button className={`van.type`} style={{ padding:"5px", color:"white", backgroundColor:"red", border:"none", borderRadius:"5px"}}>{van.type}</button> 
           <h3>{van.name}</h3>
           <p>${van.price}/ day</p>
          </div>
           </div>: <h2>Loading...</h2> }
           <div>
               
           </div>


           <br/><br/>
        <div className='host-ly-cont' style={{display:"flex" , justifyContent:"space-evenly", alignItems:"center",  }}>
      
      <NavLink style={({isActive})=> isActive? activeStyle:null}  end to="." >Details</NavLink>
     <NavLink style={({isActive})=> isActive? activeStyle:null}to="pricing">Pricing</NavLink>

     <NavLink style={({isActive})=> isActive? activeStyle:null}to="photos">Photos</NavLink>
 
      
     
     

    </div>
    
    
     <br/> 
    <Outlet context={{van}}/>
      </div>

   
    </div>
  )
}

export default HostVanDetail
