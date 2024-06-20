import React from 'react'
import homep from "../assets/images/home-hero.png"
import "./pages.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
  
    <div className='home-cont'>
       <img src={homep} /> 
       <div className='write'>
       <h2>You got the travel plans, we got the travel vans.</h2> <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing
         elit. Dolores quia, possimus cum voluptatibus 
       
         
        </p> <br/> <br/>
          <button>Find your van</button>
        
       </div>

    </div>

   
    </>
    
  )
}

export default Home
