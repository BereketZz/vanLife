import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import abp from "../assets/images/about-hero.png"
function About() {
  return (

    <>
   
    <div className='about-cont'>
        <img src={abp} /> <br/><br/>

        <div className='below-img'>
        <h2> Don't squeez in a sedan when you could relax in a van</h2><br/><br/>

<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Architecto eum recusandae mollitia fugit reiciendis laborum, 
  <br/><br/>
   consequatur 
  ducimus numquam voluptatum!
   Corporis minus sapiente suscipit tempore labore.
</p>
        </div>
       <br/><br/>

      <div className='sub-about'>
        <h3>Your destination is waiting . <br/> Your van is ready.</h3> <br/>
        <button>Explore our vans</button> 
      </div>
    </div>
   
    </>
  )

    
}

export default About
