import React, { useEffect, useRef } from 'react';
import "./into.scss";
import  Typewriter  from 'typewriter-effect';




import AnimatedShapes from '../AnimatedShapes';
const Intro = () => {

  

  const toGitHub=()=>{
      const link = 'https://github.com/Karanpreet2001';
      window.open(link, '_blank');
  }
   
  

    return (

      


     
       <div className="intro" id='intro'>
         <AnimatedShapes/>
       <div className="right">
      
       
      <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Karanpreet.</h1>
          <h1 className='newH1'>I build things for the web.</h1>
          <h3><span><Typewriter 
          
          options={
              { strings:["Full Stack Developer", "Web Developer", "Android Developer", "Java Developer", "MERN Stack Developer"],

           autoStart:true,
           delay:75,
       loop:true}}
          
          /> </span></h3>
      

          <button onClick={()=>toGitHub()}>Check all my projects</button>
         
      </div>
     
     
  </div>
      
       
  </div> 
  
                 );
}
 
export default Intro;