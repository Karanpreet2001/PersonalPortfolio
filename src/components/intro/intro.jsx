import React from 'react';
import "./into.scss";


const Intro = () => {
    return ( <div className="intro" id='intro'>
       
       <div className="left"><div className='imgContainer'><img src="https://www.seekpng.com/png/full/76-760594_man-transparent-resolution-smile-man-png.png" alt="" /></div></div>
       <div className="right">
           <div className="wrapper">
               <h2>Hi there, I'm</h2>
               <h1>Karanpreet</h1>
               <h3><span></span></h3>
           </div>
           <a href='#portfolio'></a>
       </div>
    </div> );
}
 
export default Intro;