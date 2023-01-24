import './FeatureCard.css'

export function FeatureCard( {img, title, text} ) {
    return <div className="feature-item">
        <img className="feature-icon" alt="Icon" src={img}></img>
        <h3 className="features-item-title">{title}</h3>
        <p>{text}</p>
    </div> 
}