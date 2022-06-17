import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './Pages/about';
import Projects from './Pages/Projects/projects';
import Coursework from './Pages/Coursework/coursework';
import Home from './Pages';
import Bar from "./Components/Navbar/bar.js";


function App() {
return (
    <Router>
    <Bar />
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