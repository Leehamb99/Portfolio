import { Home, About, Contact, Projects } from './Pages'
import { NamePlate, NavBar } from './components'

import './App.css';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NamePlate />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Contact' element={<Contact />}></Route>
        <Route path='Projects' element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
