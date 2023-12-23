import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram'; 
import { Telegram, GitHub} from '@mui/icons-material';
import { Bio } from '../data/constants';
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
    return (
      <footer className='footer'>
        <div className='footer__wrapper'>
          <h1 className='footer__logo'>Kenzhebekov Erbol</h1>
          <nav className='footer__nav'>
            <a className='footer__nav_item' href="#about">Обо мне</a>
            <a className='footer__nav_item' href="#skills">Навыки</a>
            <a className='footer__nav_item' href="#experience">Опыт</a>
            <a className='footer__nav_item' href="#projects">Проекты</a>
            <a className='footer__nav_item' href="#education">Образование</a>
          </nav>
          <div className='footer__socialmedia'>
            <Link className='footer__socialmedia_item' to={Bio.github} target="display"><GitHub /></Link>
            <Link className='footer__socialmedia_item' to={Bio.telegram} target="display"><Telegram /></Link>
            <Link className='footer__socialmedia_item' to={Bio.linkedin} target="display"><LinkedInIcon /></Link>
            <Link className='footer__socialmedia_item' to={Bio.insta} target="display"><InstagramIcon /></Link>
          </div>
          <p className='footer__copyright'>
            &copy; 2023 Kenzhebekov Erbol.
          </p>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;