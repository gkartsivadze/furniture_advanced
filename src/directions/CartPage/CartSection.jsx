import CartItem from "./CartItem"

import { products } from "../../data/featuredData.json"

export default function CartSection() {
    return (
        <section id="cart_section">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem  data={products[0]} />
                    <CartItem  data={products[1]} />
                    <CartItem  data={products[2]} />
                </tbody>
            </table>
        </section>
    )
};
