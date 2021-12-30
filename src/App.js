import Home from './Components/homePage/Home';
import About from './Components/aboutMe/About';
import Portfolio from './Components/portfolio/Portfolio';
import NavBar from './Components/navigation/Navbar';
import Contact from './Components/contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="app">
    <h1>Talored Tales</h1>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="Portfolio/" element={<Portfolio/>} />
        <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;