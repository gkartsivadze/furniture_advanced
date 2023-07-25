import { Link } from "react-router-dom";

export default function CartItem({ data }) {
    console.log(data);
    return (
        <tr>
            <td>
                <img src={data.image} alt="" />
                <Link to={`../product_page/${data.id}`}><h3>{data.name}</h3></Link>
                <p className="bs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="bl">£{data.price}</p>
            </td>
            <td>1</td>
            <td>£{data.price}</td>
        </tr>
    )
};
