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
          <Link className='navbar__list_item' to="#about">Обо мне</Link>
          <Link className='navbar__list_item' to='#skills'>Навыки</Link>
          <Link className='navbar__list_item' to='#experience'>Опыт</Link>
          <Link className='navbar__list_item' to='#projects'>Проекты</Link>
          <Link className='navbar__list_item' to='#education'>Образование</Link>
        </ul>
        <div className='navbar__button_container'>
          <Link className='navbar__github_link' to={Bio.github} target="_blank">Github Profile</Link>
        </div>
        {
          isOpen &&
          <div className='navbar__mobile_menu' style={isOpen ? { transform: 'translateY(0)', opacity: '100%', zIndex: '1000' } : { transform: 'translateY(-100%)', opacity: '0', zIndex: '-1000' }}>
            <Link className='navbar__mobile_list' to="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>Обо мне</Link>
            <Link className='navbar__mobile_list' to='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Навыки</Link>
            <Link className='navbar__mobile_list' to='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Опыт</Link>
            <Link className='navbar__mobile_list' to='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Проекты</Link>
            <Link className='navbar__mobile_list' to='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Образование</Link>
            <Link className='navbar__mobile_button' style={{padding: '10px 16px',background: '#854ce6', color: 'white',width: 'max-content'}} to={Bio.github} target="_blank">Github Profile</Link>
          </div>
        }
      </div>
    </nav>
  )
}

export default NavBar