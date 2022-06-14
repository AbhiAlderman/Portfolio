import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './Pages/about';
import Projects from './Pages/Projects/projects';
import Coursework from './Pages/Coursework/coursework';
import Home from './Pages';
import Todo from './Pages/todo';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/coursework' element={<Coursework/>} />
        <Route path='/todo' element={<Todo/>} />
    </Routes>
    </Router>
);
}
  
export default App;