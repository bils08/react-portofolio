import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/logo-s.png';
import logoSub from '../../assets/images/logo_sub.png';
import './index.scss'

const sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo} alt='logo' />
            <img className='sub-logo' src={logoSub} alt='logo-sub' />
        </Link>  
        <nav className='nav-link'>
            <NavLink exact='true' activeClassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeClassname='active' className='about-link' to='about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeClassname='active' className='contact-link' to='contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='#'>
                  <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e' />
                </a>
                <a target='_blank' rel='noreferrer' href='#'>
                  <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
                <a target='_blank' rel='noreferrer' href='#'>
                  <FontAwesomeIcon icon={faGitlab } color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default sidebar;