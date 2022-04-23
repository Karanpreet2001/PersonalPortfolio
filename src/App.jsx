import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/porfolio";
import Testomonial from "./components/testomonial/testomonial";
import Topbar from "./components/topbar/topbar";
import Works from "./components/works/works";
import Contact from "./components/Contact/contact";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="s">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testomonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
