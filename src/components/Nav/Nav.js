import './Nav.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export function Nav() {
    
   
   const isUserConnected = useSelector((state) => state.userConnected)

   const firstName = useSelector((state) => state.firstName)

   if(!isUserConnected) {
    return <div className='main-nav-container'>
        <Link className='main-nav-item' to={`/login`}><i className="fa fa-user-circle"></i>Sign In</Link>
    </div>
   }
   
   return <div className='main-nav-container'>
        <Link className='main-nav-item' to={`/profil`}><i className="fa fa-user-circle"></i>{firstName}</Link>
        <Link className='main-nav-item' to={`/home`}><i className="fa fa-sign-out"></i>Sign out</Link>
    </div>
}