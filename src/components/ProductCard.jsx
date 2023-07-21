import { Link } from "react-router-dom";

export default function ProductCard({id, type, image, name, price}) {

    return (
        <Link to={"/product_page/" + id}>
            <div className={`product_card ${type}`}>
                <img src={image} alt="" />
                <h4>{name}</h4>
                <p className="bl">£{price}</p>
            </div>
        </Link>
    )
}