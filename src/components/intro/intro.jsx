import React, { useEffect, useRef } from 'react';
import "./into.scss";
import  Typewriter  from 'typewriter-effect';



const Intro = () => {

    const txtRef= useRef();

    // useEffect(()=>{
    //     init(txtRef.current, { 
    //         showCursor: false, 
    //         strings: ['Use with React.js!', 'Yeah!' ] 
    //     });
    // },[]);

    return ( <div className="intro" id='intro'>
       
       <div className="left"><div className='imgContainer'><img src="https://www.seekpng.com/png/full/76-760594_man-transparent-resolution-smile-man-png.png" alt="" /></div></div>
       <div className="right">
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
    </div> );
}
 
export default Intro;