import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {Routes , Route} from 'react-router-dom';
import About from './Components/Menus/About';
import Contect from './Components/Menus/Contect';
import FAQ from './Components/Menus/FAQ';
import Home2 from './Components/Menus/Home2';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/Home' element={<Home2/>} />
    <Route path='/contact' element={<Contect/>} />
    <Route path='/FAQ' element={<FAQ/>} />
    </Routes>
    </div>
  );
}

export default App;
