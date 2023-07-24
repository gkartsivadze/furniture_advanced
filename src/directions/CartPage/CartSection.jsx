import CartItem from "./CartItem"

import { products } from "../../data/featuredData.json"
import { useState } from "react"

export default function CartSection() {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
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
                    {cart.map(prod => <CartItem  data={products[prod-1]} />)}
                </tbody>
            </table>
        </section>
    )
};
