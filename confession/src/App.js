import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Mainbody from './components/Mainbody';
import About from './components/About'
import Confessnow from './Pages/Confessnow';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar/>

         <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="/confessnow"  element={<Confessnow />} />
        <Route path="/about"  element={<About />} />

      </Routes>
 <Footer/>
    </>
  );
}

export default App;
