import { connectUser, setUserEmail, setUserFirstName, setUserLastName } from "../../store/userState";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken, fetchProfile } from "../../services/api";
import { useState } from "react";
import { store } from "../../store/store";

export function TestComponent() {
    
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [token, setToken] = useState('')

    const body = {
        'email': 'tony@stark.com',
        'password': 'password123',
    }
    
    const requestSignIn = {
        method: 'POST',
        headers: { 
            "Content-Type": 'application/json',
            
        },
        body: JSON.stringify(body),
    };

    async function initToken() {
      const data = await fetchToken(requestSignIn)
      if(data.status === 200) {
        console.log(data)
        setToken(data.body.token)
      }
      else {
        console.log("err")
      }
    }

    const requestUser = {
      method: 'POST',
      headers: { 
          "Content-Type": 'application/json',
          Authorization: 'Bearer ' + localStorage.token,
      },
    };

    async function initProfile() {
      console.log(requestUser)
      const data = await fetchProfile(requestUser)
      if(data && data.status === 200) {
        console.log(data)
        dispatch(setUserFirstName(data.body.firstName))
        dispatch(setUserLastName(data.body.lastName))
        dispatch(setUserEmail(data.body.email))
        /* dispatch(connectUser()) */
      }
      else {
        console.log("err")
      }
    }

    
    return <div>
        <button onClick={() => console.log(state, localStorage)}>Log State</button>
        <button onClick={() => initToken()}>FetchToken</button>
        <button onClick={() => initProfile()}>FetchProfile</button><button onClick={() => localStorage.setItem('token', "")}>Remove token from localStorage</button>
    </div>
}