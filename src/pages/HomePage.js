import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../components/Banner/Banner";
import { FeatureContainer } from "../components/FeatureContainer/FeatureContainer";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { connectUser } from "../store/store";


export function HomePage() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state)
   
    return <div className="home-page">
        <Header />
        <button onClick={() => {
            dispatch({type: "pointScored"})
            dispatch(connectUser())
            console.log(state)
        }}>CLICK</button>
        <Banner />
        <FeatureContainer />
        <Footer />
    </div>
}