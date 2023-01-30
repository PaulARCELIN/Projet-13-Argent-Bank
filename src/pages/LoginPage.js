import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { SignInForm } from "../components/SignInForm/SignInForm";
import { TestComponent } from "../components/Test/TestComponent";



export function LoginPage() {
   
    return <div className="login-page page">
        <TestComponent />
        <Header />
        <SignInForm />
        <Footer />
    </div>
}