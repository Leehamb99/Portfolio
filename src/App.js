import { Home, About, Game, Projects } from './Pages'
import { useEffect } from 'react';
import Granim from 'granim';
import { Sidebar } from './layout'


import './App.css';

import { Routes, Route, useLocation} from 'react-router-dom'


function App() {
  
  let location = useLocation();
  let where = location.pathname.slice(1)
  useEffect(() => {
    new Granim({
      element: "#logo-canvas",
      direction: "diagonal",
      opacity: [0.6, 0.9],
      states: {
        "default-state": {
          gradients: [
            ["#e3dddc", "#858181"],
            ["#696666", "#cccaca"],
            ["#595757", "#e3dddc"]
          ],
          transitionSpeed: 7000
        }
      }
    });
  });
  
  return (
    <div className="bloc-logo">
    <canvas id="logo-canvas"></canvas>
    <div className="logo-mask">
      <div className="mainBorder">

      
      <Sidebar />


  

          <div className="wrapper2">
         {where ? <h1 className="title"> {where} </h1> :
          <h1 className="title"> Welcome!</h1>}
            
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Game' element={<Game />}></Route>
        <Route path='Projects' element={<Projects />}></Route>
      </Routes>
          </div>
         </div> 
        </div>
      </div>

    
  );
}

export default App;
