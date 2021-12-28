import './App.css';
import Home from './Components/homePage/Home';
import About from './Components/aboutMe/About';
import Portfolio from './Components/portfolio/Portfolio';
import Navmenu from './Components/navigation/Navbar';
import Contact from './Components/contact/Contact';


function App() {
  return (
    <div className="body">
      <Navmenu />
      <div>
        <div className="pages"></div>
        <Portfolio className="ribs"/>
        <About className="ribs"/>
        <Contact className="ribs"/>
        <Home className="ribs"/>
      </div>
    </div>
  );
}

export default App;