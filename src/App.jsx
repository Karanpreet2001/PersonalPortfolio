import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/porfolio";
import Testimonial from "./components/testimonial/testimonial";
import Topbar from "./components/topbar/topbar";
import Works from "./components/works/works";
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
      <Works/>
      <Testimonial/>
      <Contact/>
    </div>
   </div>
  );
}

export default App;
