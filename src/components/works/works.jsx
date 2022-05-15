import "./works.scss";
import { TagCloud } from 'react-tagcloud';
import randomColor from 'randomcolor';

import {BsPatchCheckFill} from 'react-icons/bs';

const Works = () => {
    
    const skills = [
        {type: "HTML", level: 90},
        {type: "CSS", level: 90},
        {type: "JavaScript", level: 80},
        {type: "jQuery", level: 70},
        {type: "BootStrap", level: 70},
        {type: "React.js", level: 80},
       
      
      ];

      const skills2 = [
        {type: "PHP", level: 60},
        {type: "JAVA", level: 80},
        {type: "MOBILE APP", level: 90},
        {type: "Node.js", level: 80},
        {type: "My SQL", level: 90},
        {type: "MongoDB", level: 90}
       
      
      ];

    return ( 
    <div className="works" id="works">

        <h1>My Skills</h1>

        <div className="skillsImage">
        <img src="https://img.icons8.com/color/96/000000/html-5--v1.png"/>
        <img src="https://img.icons8.com/color/96/000000/css3.png"/>
        <img src="https://img.icons8.com/color/96/000000/javascript--v1.png"/>
        <img src="https://img.icons8.com/color/96/000000/nodejs.png"/>
        <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png"/>
        <img src="https://img.icons8.com/color/96/000000/react-native.png"/>
        <img src="https://img.icons8.com/officexs/96/000000/php-logo.png"/>
        <img src="https://img.icons8.com/fluency/96/000000/mysql-logo.png"/>
        <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-filled-tal-revivo.png"/>
        <img src="https://img.icons8.com/color/96/000000/android-studio--v3.png"/>
        </div>

        <div className="wrapper">
      
      <div className="container_frontend">
         <h3>Frontend Developer</h3>
         <div className="experience_content">
           <div className="exp_details">
              <BsPatchCheckFill/>
              <h4>HTML</h4>
              <small className="txt-light">Experienced</small>
           </div>
           <div className="exp_details">
              <BsPatchCheckFill/>
              <h4>CSS</h4>
              <small className="txt-light">Intermediate</small>
           </div>
           <div className="exp_details">
              <BsPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className="txt-light">Intermediate</small>
           </div>
           <div className="exp_details">
              <BsPatchCheckFill/>
              <h4>React</h4>
              <small className="txt-light">Intermediate</small>
           </div>
           <div className="exp_details">
              <BsPatchCheckFill/>
              <h4>Bootstrap</h4>
              <small className="txt-light">Intermediate</small>
           </div>
           <div className="exp_details">
              <BsPatchCheckFill/>
              <h4>HTML</h4>
              <small className="txt-light">Experienced</small>
           </div>
         </div>

        </div>

        <div className="container2">
          
        </div>

        </div>

    </div> );
}
 
export default Works;