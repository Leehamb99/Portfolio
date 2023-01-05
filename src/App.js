import { Home, About, Contact, Projects } from './Pages'

import { Sidebar } from './layout'

import './App.css';

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Sidebar />
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
