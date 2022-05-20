import "./menu.scss";

const Menu = ({menuOpen, setMenuOpen}) => {
    return ( <div className={"menu "+(menuOpen && "active")}>
         <ul>
             <li onClick={()=>setMenuOpen(false)}><a href="#intro">Home</a></li>
             <li onClick={()=>setMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
             <li onClick={()=>setMenuOpen(false)}><a href="#works">Skills</a></li>
             <li onClick={()=>setMenuOpen(false)}><a href="#testimonial">Testimonials</a></li>
             <li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>


             


         </ul>
         <div className="contimg">
         <a target="https://www.instagram.com/?hl=en" href="https://www.instagram.com/?hl=en"><img src="https://img.icons8.com/material/50/ffffff/instagram-new--v1.png"/></a>
             <a href="https://www.linkedin.com/in/karanpreet-karanpreet-7a4b03233/" target="https://www.linkedin.com/in/karanpreet-karanpreet-7a4b03233/"><img src="https://img.icons8.com/material-outlined/50/ffffff/linkedin--v1.png"/></a>
             <a target="https://github.com/Karanpreet2001" href="https://github.com/Karanpreet2001"><img src="https://img.icons8.com/glyph-neue/50/FFFFFF/github.png"/></a>
             </div>
    </div> );
}
 
export default Menu;