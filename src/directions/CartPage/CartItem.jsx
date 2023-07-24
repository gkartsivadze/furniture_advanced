export default function CartItem({ data }) {
    return (
        <tr>
            <td>
                <img src={data.image} alt="" />
                <h3>{data.name}</h3>
                <p className="bs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="bl">£{data.price}</p>
            </td>
            <td>1</td>
            <td>£{data.price}</td>
        </tr>
    )
};
