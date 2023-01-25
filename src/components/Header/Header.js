import LogoImg from '../../assets/argentBankLogo.png'
import './Header.css'
import { Nav } from '../Nav/Nav.js'
import { Link } from 'react-router-dom'

export function Header () {
    return <div className="header">
        <Link to={`/home`} className="main-nav-logo" >
            <img src={LogoImg} alt="Logo" className='main-nav-logo-image'></img>
        </Link>
        <Nav />
    </div>
}

