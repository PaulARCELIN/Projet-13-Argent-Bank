
import { Banner } from "../components/Banner/Banner";
import { FeatureContainer } from "../components/FeatureContainer/FeatureContainer";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { TestComponent } from "../components/Test/TestComponent";


// "HomePage" component
export function HomePage() {

    
    return <div className="home-page">
        <Header />
        <TestComponent />
        <Banner />
        <FeatureContainer />
        <Footer />
    </div>
}