import { useState } from 'react'
import './SignInForm.css'
import { useDispatch, useSelector } from "react-redux";
import { setUserConnected, setUserEmail, setUserFirstName, setUserLastName  } from "../../store/userState";
import { fetchToken, fetchProfile } from '../../services/api';
import { tokenFetching, tokenRejected, tokenResolved } from '../../store/fetchState';
import { Navigate } from "react-router-dom";

export function SignInForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const dispatch = useDispatch()
    const isUserConnected = useSelector((state) => state.user.isUserConnected)
    const status = useSelector((state) => state.fetch.status)
    const error = useSelector((state) => state.fetch.error)

    let bodyRequest = {
        email,
        password
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetchToken(bodyRequest)
        dispatch(tokenFetching())
        if(response.status === 200) {
            dispatch(tokenResolved(await response.body.token))
            const data = await fetchProfile(await response.body.token)
            console.log(await data.body) 
            dispatch(setUserEmail(data.body.email))
            dispatch(setUserFirstName(data.body.firstName))
            dispatch(setUserLastName(data.body.lastName))
            dispatch(setUserConnected(true))
        }
        else{
            dispatch(tokenRejected('erreur token'))
        }
    }


    if(status === 'pending') {
        return <main className="main bg-dark">
            <p>LOADING</p>
        </main>
    }

    if(isUserConnected) {
        return <Navigate to="/user"/>
    }

    return <main className="main bg-dark">
        <section className='sign-in-content'>
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="texte" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <p className='error-message'>{error === 'erreur token' ? "wrong password or username" : ""}</p>
                <div className="input-remember">
                    <input id="remember-me" type="checkbox"></input>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type='submit'>Sign In</button> 
            </form>
        </section>
    </main>
}