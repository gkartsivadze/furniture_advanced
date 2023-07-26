import { Link } from "react-router-dom";

export default function CartItem({ handleRemoveFromCart, data, amount }) {
    return (
        <tr>
            <td>
                <Link to={`/product_page/${data.id}`}>
                    <img src={data.image} alt="" />
                    <h3>{data.name}</h3>
                    <p className="bs">Lorem ipsum dolor sit amet, consectetur.</p>
                    <p className="bl">£{data.price}</p>
                </Link>
            </td>
            <td style={{width: "10%"}}>{amount}</td>
            <td style={{width: "10%"}}>£{data.price * amount}</td>
            <td style={{width: "10%"}}><button onClick={() => handleRemoveFromCart(data.id)} className="btn btn_trans" style={{color: "var(--primary-color)"}}>X</button></td>
        </tr>
    )
};
