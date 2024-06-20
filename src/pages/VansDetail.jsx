import React, { useEffect, useState } from 'react'

import{Link, useParams, useLocation, useLoaderData} from "react-router-dom"
import abp from "../assets/images/about-hero.png"
import { getVan } from '../api'

export async function loader({params}){
  const id= params.id
  const data= await getVan(id)
  return data
}
function VansDetail() {

  const van= useLoaderData()
  console.log(van)
  const History= useLocation().state?.search || ""
  const hold= History.split("=")[1]
 
  // const params=useParams()
  // const[van, setVan]= useState(null)

  // useEffect(()=>{
  // fetch(`/api/vans/${params.id}`)
  // .then(res=> res.json())
  // .then(data => setVan(data.vans))
  // },[params.id])
 
  return (
    <>

        <div className='van-detail-cont'>
          {
            van? <div className='sub-van-detail'><br/> <Link to={`..?${History}`} relative='path'><span> Back to {hold? hold:"all"} vans</span></Link> <br/><br/>
            <img src={van.imageUrl} /> <br/><br/>
            <  button className={`${van.type}`}>{van.type}</button><br/><br/>
            <b>{van.name}</b> <br/><br/>
            <p> ${van.price} /day</p><br/>
            <p>{van.description}</p> <br/>
            <button style={{padding:"8px",width:"100%", backgroundColor:"darkorange", color:"white"}}>Rent this van</button> </div> : <h2 style={{textAlign:"center"}}> <br/> <br/>Loading...</h2>
          }
         

    </div>
    <br/> <br/>
 
    </>
 
  )
}

export default VansDetail
