import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Projects from './Pages/Projects/projects';
import Coursework from './Pages/Coursework/coursework';
import Home from './Pages';
import Bar from "./Components/Navbar/bar.js";


function App() {
    useEffect(() => {
        document.title = "Abhi Alderman"
      }, [])

return (
    <Router>
    <Bar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/coursework' element={<Coursework/>} />
    </Routes>
    </Router>
);
}
  
export default App;