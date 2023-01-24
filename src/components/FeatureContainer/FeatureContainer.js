import { FeatureCard } from "../FeatureCard/FeatureCard";
import chatImg from "../../assets/icon-chat.png"
import moneyImg from "../../assets/icon-money.png"
import securityImg from "../../assets/icon-security.png"
import "./FeatureContainer.css"

export function FeatureContainer() {
    return <section className="features">
        <FeatureCard img={chatImg} title="You are our #1 priority" text="
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          "/>
        <FeatureCard img={moneyImg} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be! "/>
        <FeatureCard img={securityImg} title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe. "/>
    </section>
}