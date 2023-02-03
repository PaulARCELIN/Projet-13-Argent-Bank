import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Account } from "../components/Account/Account";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ProfileHeader } from "../components/ProfileHeader/ProfileHeader";
import { TestComponent } from "../components/Test/TestComponent";

export function UserPage() {

    const isUserConnected = useSelector((state) => state.user.isUserConnected)

    if(isUserConnected === false) {
        return <Navigate to="/login"/>
    }

    return <div className="user-page page">
        <Header />
        <main className="main bg-dark">
            <ProfileHeader />
            <TestComponent />
            <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Avaible Balance"}/>
            <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Avaible Balance"}/>
            <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Avaible Balance"}/>
        </main>
        <Footer />
    </div>
    
}