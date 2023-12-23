// import { useState } from 'react';
import './App.css'
import NavBar from './components/Navbar/NavBar';
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
function App() {
  // const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <>
      <NavBar/> 
      <div className='main__body'> 
        <About/> 
        <div className='wrapper'> 
          <Skills/> 
          <Experience/>
        </div>
      </div>
    </>
  )
}

export default App
