import { useSelector } from "react-redux"
import './ProfileHeader.css'

export function ProfileHeader() {
    
    const firstName = useSelector((state) => state.firstName)
    const lastName = useSelector((state) => state.lastName)

    return <div className="profile-header">
        <h1>Welcome back <br></br>{firstName} {lastName} !</h1>
        <button className="edit-button">Edit Name</button>
    </div>
}