import { useState } from "react";

import Checkout from "../components/Checkout"
import CartItem from "../components/CartItem"

import { products } from "../data/featuredData.json"

import "../styling/cart.scss"

export default function CartPage() {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem("cart")).map(items => ({data: products[items.id - 1], amount: items.amount})) || []);
    return (
        <main>
            <section id="cart_section">
                <h1>Your shopping cart</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((prod, ind) => <CartItem key={ind} data={prod.data} amount={prod.amount} />)}
                    </tbody>
                </table>
                <Checkout sum={cart.reduce((acc, item) => acc + parseInt(item.data.price) * item.amount, 0)} />
            </section>
        </main>
    )
};
