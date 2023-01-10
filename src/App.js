import { Home, About, Contact, Projects } from './Pages'
import { useEffect } from 'react';
import Granim from 'granim';
import { Sidebar } from './layout'

import './App.css';

import { Routes, Route } from 'react-router-dom'


function App() {
  useEffect(() => {
    new Granim({
      element: "#logo-canvas",
      direction: "diagonal",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#e3dddc", "#858181"],
            ["#696666", "#cccaca"]
          ],
          transitionSpeed: 5000
        }
      }
    });
  });
  return (
    <div className="App">
    <div className="bloc-logo">
      <canvas id="logo-canvas"></canvas>
      <div className="logo-mask">
      

      <Sidebar />
          <div className="wrapper2">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Contact' element={<Contact />}></Route>
        <Route path='Projects' element={<Projects />}></Route>
      </Routes>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
