import { useState } from "react";

import Checkout from "../components/Checkout"
import CartItem from "../components/CartItem"

import { products } from "../data/featuredData.json"

import "../styling/cart.scss"

export default function CartPage() {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const cartItems = products.filter(x => cart.some(elem => elem == x.id));
    console.log(cart);
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
                        {cart.map(prod => <CartItem key={prod} data={products[prod - 1]} />)}
                    </tbody>
                </table>
                <Checkout sum={cartItems.reduce((acc, item) => acc + parseInt(item.price), 0)} />
            </section>
        </main>
    )
};
