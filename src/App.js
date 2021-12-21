import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="body">
    <Router>
    <div >
      <div className="--" >
      </div>
      <Navbar/>
      <Home/>
      <Routes className="--">
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
      </Routes>
      
    </div>
  </Router>
    </div>
  );
}

export default App;