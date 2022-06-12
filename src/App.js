import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './Pages/about';
import Projects from './Pages/projects';
import Coursework from './Pages/coursework'
import Home from './Pages';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/coursework' element={<Coursework/>} />
    </Routes>
    </Router>
);
}
  
export default App;