import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../components/Banner/Banner";
import { FeatureContainer } from "../components/FeatureContainer/FeatureContainer";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { SignInForm } from "../components/SignInForm/SignInForm";
import { connectUser } from "../store/store";


export function LoginPage() {
   
    return <div className="login-page page">
        <Header />
        <SignInForm />
        <Footer />
    </div>
}