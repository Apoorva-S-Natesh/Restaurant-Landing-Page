import './App.css';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Work from './components/Work.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
