import { Link } from "react-router-dom";

export default function ProductCard({ id, type, image, name, price }) {

    return (
        <Link className={`product_card ${type}`} to={"/product_page/" + id}>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p className="bl">£{price}</p>
        </Link>
    )
}