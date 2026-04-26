// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const sections = [
  "I'm Valentina Gandolfo", "About Me", "My Projects", "Contact Me!"
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Intro data={sections}/>

        {/* <p>hi</p> */}
        <About data={sections}/>
        <Projects data={sections}/>
        <Contact data={sections}/>

        <Footer/>
      </header>
    </div>
  );
}

export default App;
