import "./works.scss";
import { TagCloud } from 'react-tagcloud';
import randomColor from 'randomcolor';

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
      
      <div className="container1">
          <h3>Frond-End</h3>
      <ul className="skills">
          {skills.map((skill, index) => 
            <li
              key={skill.type}
              style={{ width: `${skill.level}%`, backgroundColor: `hsl(290, 50%, ${100 / (index + 3.5) }%)` }}
            >
              <p>{skill.type}<span>{skill.level}</span></p>
            </li>
          )}
        </ul>

        </div>

        <div className="container2">
          <h3>Back-End</h3>
      <ul className="skills">
          {skills2.map((skill, index) => 
            <li
              key={skill.type}
              style={{ width: `${skill.level}%`, backgroundColor: `hsl(50, 50%, ${100 / (index + 3.5) }%)` }}
            >
              <p>{skill.type}<span>{skill.level}</span></p>
            </li>
          )}
        </ul>

        </div>

        </div>

    </div> );
}
 
export default Works;