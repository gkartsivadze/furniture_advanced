export default function ProductCard({type, image, name, price}) {
    return (
        <div className={`product_card ${type}`}>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p className="bl">£{price}</p>
        </div>
    )
}