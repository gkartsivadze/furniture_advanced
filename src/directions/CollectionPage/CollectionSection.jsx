import CollectionItem from "./CollectionItem"

import { products } from "../../data/featuredData.json"

export default function CollectionSection() {
    return (
        <section id="collection_section">
            <table>
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    <CollectionItem  data={products[0]} />
                </tbody>
            </table>
        </section>
    )
};
