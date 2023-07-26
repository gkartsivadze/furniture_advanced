import { Link } from "react-router-dom";

export default function CartItem({ data, amount }) {
    return (
        <tr>
            <td>
                <Link to={`/product_page/${data.id}`}>
                    <img src={data.image} alt="" />
                    <h3>{data.name}</h3>
                    <p className="bs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="bl">£{data.price}</p>
                </Link>
            </td>
            <td>{amount}</td>
            <td>£{data.price * amount}</td>
        </tr>
    )
};
