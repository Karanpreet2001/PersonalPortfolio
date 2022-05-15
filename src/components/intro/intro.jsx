import React, { useEffect, useRef } from 'react';
import "./into.scss";
import  Typewriter  from 'typewriter-effect';



import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Intro = () => {

  const particlesInit = async (main) => {

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const toGitHub=()=>{
      const link = 'https://github.com/Karanpreet2001';
      window.open(link, '_blank');
  }
   
  

    return (

      


     
       <div className="intro" id='intro'>
       <div className="right">
      
       
      <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Karanpreet</h1>
          <h1>I build things for the web.</h1>
          <h3><span><Typewriter 
          
          options={
              { strings:["Full Stack Developer", "Web Developer", "Android Developer", "Java Developer", "MERN Stack Developer"],

           autoStart:true,
           delay:75,
       loop:true}}
          
          /> </span></h3>

          <button onClick={()=>toGitHub()}>Check All my projects</button>
         
      </div>
     
     
  </div>
       {/* <div className="left"><div className='imgContainer'><img src="https://www.seekpng.com/png/full/76-760594_man-transparent-resolution-smile-man-png.png" alt="" /></div></div> */}
       
  </div> 
  
                 );
}
 
export default Intro;