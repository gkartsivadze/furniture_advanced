export default function CollectionItem({ data }) {
    return (
        <tr>
            <td>
                <img src={data.image} alt="" />
            </td>
            <td>
                <h3>{data.name}</h3>
                <p className="bs">Bla bla bla</p>
                <p className="bl">£{data.price}</p>
            </td>
            <td>
                1
            </td>
            <td>
                {data.price}
            </td>
        </tr>
    )
};
