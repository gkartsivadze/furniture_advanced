export default function ProductCard({type, image}) {
    return (
        <div className={`product_card ${type}`}>
            <img src={image} alt="" />
            <h4>The Dandy chair</h4>
            <p className="bl">£250</p>
        </div>
    )
}