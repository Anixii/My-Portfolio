// import { useState } from 'react';
import './App.css'
import NavBar from './components/Navbar/NavBar';
import About from './components/About/About'
function App() {
  // const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <>
      <NavBar/> 
      <div className='main__body'> 
        <About/>
      </div>
    </>
  )
}

export default App