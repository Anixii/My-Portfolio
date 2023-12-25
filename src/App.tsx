import { useState } from 'react';
import './App.css'
import NavBar from './components/Navbar/NavBar';
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Footer from './Footer/Footer';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails';
function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <>
      <NavBar/> 
      <div className='main__body'> 
        <About/> 
        <div className='wrapper'> 
          <Skills/> 
          <Experience/>
        </div>  
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <div className='wrapper'> 
          <Education/>
        </div> 
        <Footer/> 
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </div>
    </>
  )
}

export default App
