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

   
  

    return (

      


     
       <div className="intro" id='intro'>
       
       <div className="left"><div className='imgContainer'><img src="https://www.seekpng.com/png/full/76-760594_man-transparent-resolution-smile-man-png.png" alt="" /></div></div>
       <div className="right">
       <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 100,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 7000
            }
          },
          position:{
            value:"absolute"
          },
          size: {
            value: 12,
            random: true,
            anim: {
              speed: 5,
              size_min: 0.3
            }
          },
          zIndex:{
            value:-1
          },
          opacity: {
            value: 0.5,
          },
          
          color: {
            value: ["#B0FC38", "#B2D3C2", "#FFFF00"]
          },
          shape: {
            type: ["circle", "edge", "polygon"]
          },
          move: {
            
            direction: "top",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
            
          },
          line_linked: {
            enable: false
          }
        },
        detectRetina: true,
      }}
    />
       
           <div className="wrapper">
               <h2>Hi there, I'm</h2>
               <h1>Karanpreet</h1>
               <h3><span><Typewriter 
               
               options={
                   { strings:["Full Stack Developer", "Web Developer", "Android Developer", "Java Developer", "MERN Stack Developer"],

                autoStart:true,
                delay:75,
            loop:true}}
               
               /> </span></h3>
           </div>
           <a href='#portfolio'></a>
       </div>
    </div> 
  
    );
}
 
export default Intro;