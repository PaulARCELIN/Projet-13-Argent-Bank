import './Nav.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../store/userState'
import { tokenReset } from '../../store/fetchState'

export function Nav() {
    
   
   const isUserConnected = useSelector((state) => state.user.isUserConnected)
   const firstName = useSelector((state) => state.user.firstName)

   const dispatch = useDispatch()

    function logOut() {
        dispatch(signOut())
        dispatch(tokenReset())
    }

   if(!isUserConnected) {
    return <div className='main-nav-container'>
        <Link className='main-nav-item' to={`/login`}><i className="fa fa-user-circle"></i>Sign In</Link>
    </div>
   }
   else if(isUserConnected) {
    return <div className='main-nav-container'>
        <Link className='main-nav-item' to={`/user`}><i className="fa fa-user-circle"></i>{firstName}</Link>
        <Link className='main-nav-item' to={`/home`} onClick={() => logOut()}><i className="fa fa-sign-out"></i>Sign out</Link>
    </div>
   }
   
}