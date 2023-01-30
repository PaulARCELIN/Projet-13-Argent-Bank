import { Account } from "../components/Account/Account";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ProfileHeader } from "../components/ProfileHeader/ProfileHeader";
import { TestComponent } from "../components/Test/TestComponent";

export function UserPage() {
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