import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/porfolio";
import Testimonial from "./components/testimonial/testimonial";
import Topbar from "./components/topbar/topbar";
import Skills from "./components/skill/skills";
import Contact from "./components/Contact/contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/menu";



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Skills/>
      <Testimonial/>
      <Contact/>
    </div>
   </div>
  );
}

export default App;
