import React from 'react'
import './NavBar.moudle.css' 
import { FaBars } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';
import { Link } from 'react-router-dom'
import { Bio } from '../../data/constants';
const NavBar = () => { 
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className={'navbar'}>
      <div className='navbar__container'>
        <Link className='navbar__logo' to='/'>
          <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <span className='inner__span'>Portfolio</span>
          </div>
        </Link>
        <div className='mobile__icon'>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </div>
        <ul className='navbar__list'>
          <a className='navbar__list_item' href="#about">Обо мне</a>
          <a className='navbar__list_item' href='#skills'>Навыки</a>
          <a className='navbar__list_item' href='#experience'>Опыт</a>
          <a className='navbar__list_item' href='#projects'>Проекты</a>
          <a className='navbar__list_item' href='#education'>Образование</a>
        </ul>
        <div className='navbar__button_container'>
          <Link className='navbar__github_link' to={Bio.github} target="_blank">Github Profile</Link>
        </div>
        {
          isOpen &&
          <div className='navbar__mobile_menu' style={isOpen ? { transform: 'translateY(0)', opacity: '100%', zIndex: '1000' } : { transform: 'translateY(-100%)', opacity: '0', zIndex: '-1000' }}>
            <a className='navbar__mobile_list' href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>Обо мне</a>
            <a className='navbar__mobile_list' href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Навыки</a>
            <a className='navbar__mobile_list' href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Опыт</a>
            <a className='navbar__mobile_list' href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Проекты</a>
            <a className='navbar__mobile_list' href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Образование</a>
            <Link className='navbar__mobile_button' style={{padding: '10px 16px',background: '#854ce6', color: 'white',width: 'max-content'}} to={Bio.github} target="_blank">Github Profile</Link>
          </div>
        }
      </div>
    </nav>
  )
}

export default NavBar