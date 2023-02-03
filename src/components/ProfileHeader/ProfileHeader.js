import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { putEditName } from "../../services/api"
import './ProfileHeader.css'
import { setUserFirstName, setUserLastName } from "../../store/userState"

export function ProfileHeader() {
    
    const dispatch = useDispatch()

    const firstName = useSelector((state) => state.user.firstName)
    const lastName = useSelector((state) => state.user.lastName)
    const token = useSelector((state) => state.fetch.data)
    const [isEditing, setIsEditing] = useState(false)
    const [firstNameInput, setFirstNameInput] = useState('')
    const [lastNameInput, setLastNameInput] = useState('')

    let bodyRequest = {
        "firstName": firstNameInput,
        "lastName": lastNameInput
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(firstNameInput, lastNameInput)
        const response = await putEditName(token, bodyRequest)
        console.log(response)
        if(response.status === 200) {
            dispatch(setUserFirstName(response.body.firstName))
            dispatch(setUserLastName(response.body.lastName))
            setIsEditing(!isEditing)
        }
    }

    if(!isEditing) {
        return <div className="profile-header">
        <h1>Welcome back <br></br>{firstName} {lastName} !</h1>
        <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>Edit Name</button>
        </div>
    }
    else {
        return <div className="profile-header">
        <h1>Welcome back !</h1>
            <div>
                <form onSubmit={handleSubmit}>  
                    <input placeholder={firstName} className="input" id="firstname" type="texte" onChange={(e) => setFirstNameInput(e.target.value)}></input>
                    <input placeholder={lastName} className="input" id="lasttname" type="texte" onChange={(e) => setLastNameInput(e.target.value)}></input>
                    <div className="button-wrapper">
                        <button className="save-button" type='submit'>Save</button>
                        <button className="save-button" onClick={() => setIsEditing(!isEditing)}>Cancel</button>
                    </div>
                </form>  
            </div>     
        </div>
    }
}


