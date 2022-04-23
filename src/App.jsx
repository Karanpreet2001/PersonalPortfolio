import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/porfolio";
import Testimonial from "./components/testimonial/testimonial";
import Topbar from "./components/topbar/topbar";
import Works from "./components/works/works";
import Contact from "./components/Contact/contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
    <Topbar/>
    {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
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
