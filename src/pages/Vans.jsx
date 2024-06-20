import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./pages.css"
import abp from "../assets/images/about-hero.png"
import "../server.js"
import { useLoaderData, useSearchParams, defer, Await } from 'react-router-dom'
import{Link} from "react-router-dom"
import {getVan} from "../api"
export function loader(){
 
  return defer({vans:getVan()})
}
function Vans() {
  const dataPromise= useLoaderData()

  
  const[searchParams, setSearchParams]= useSearchParams()
  const typeFilter= searchParams.get("type")
  

  const[color, setColor] = useState("");
   

    const butSimple= {
      backgroundColor:"darkorange",
      color:"white"
    }
    const butRugged= {
      backgroundColor:"darkgreen",
      color:"white"
    }
    const butLuxury= {
      backgroundColor:"black",
      color:"white"
    }
    
 

    

  return (

    <>
  <br/><br/>
      <div className='vans-cont'>
   <div>
        <h3>Explore our van options</h3> <br/>
        <Suspense fallback={<h2 style={{textAlign:"center"}}> <br/> <br/>Loading ...</h2>}>

     
        <Await resolve={dataPromise.vans}>
       {
        vans=>{
          const filterdVans= typeFilter? vans.filter(v=>v.type.toUpperCase()==typeFilter.toUpperCase()): vans
          const van= filterdVans.map(van=>(
            <div className='van-info' key={van.id}>
              <Link to={`${van.id}`} state={{search: searchParams.toString()}}>
              <img src={van.imageUrl}  />
            <div className='van-type'>
                <b>{van.name}</b> &nbsp;&nbsp;&nbsp;
                <p>{van.price} /day</p>
            </div>
            <  button className={`${van.type}`}>{van.type}</button>
              </Link>
      
      
         </div>
          ))

          return(
            <>
            <div className='filters'>
        <button style={typeFilter=="simple"? butSimple:null} onClick={()=>setSearchParams({type:"simple"})}>Simple</button>
        <button style={typeFilter=="rugged"? butRugged:null} onClick={()=>setSearchParams({type:"rugged"})}>Rugged</button>
        <button  style={typeFilter=="luxury"? butLuxury:null} onClick={()=>setSearchParams({type:"luxury"})}>Luxury</button>
       {typeFilter&& <button style={{backgroundColor:"white"}} onClick={()=>setSearchParams({})}>Clear Filter</button>}
   
     
        
          <div className='vv'>
          {van}
          </div>
   
       
      </div>
            </>
          )
          
        }
       }
        </Await>
        </Suspense>
      

        </div>
      

      </div> 
    
    </>
 
  )
}

export default Vans
