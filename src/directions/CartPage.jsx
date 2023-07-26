import { useEffect, useState } from "react";

import Checkout from "../components/Checkout"
import CartItem from "../components/CartItem"

import { products } from "../data/featuredData.json"

import "../styling/cart.scss"

export default function CartPage() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))?.map(items => ({data: products[items.id - 1], amount: items.amount})) || []);

    function handleRemoveFromCart(itemId) {
        setCart(cart.filter(x => x.data.id != itemId))
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart.map(item => ({id: item.data.id, amount: item.amount}))))
    }, [cart])
    console.log(cart);
    return (
        <main>
            <section id="cart_section">
                <h1>Your shopping cart</h1>
                <table>
                    <thead>
                        <tr>
                            <th style={{textAlign: "left"}}>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length > 0 && cart.map((prod, ind) => <CartItem handleRemoveFromCart={handleRemoveFromCart} key={ind} data={prod.data} amount={prod.amount} />)}
                    </tbody>
                </table>
                {cart.length == 0 && <h1 style={{textAlign: "center"}}>No items</h1>}
                <Checkout sum={cart.reduce((acc, item) => acc + parseInt(item.data.price) * item.amount, 0)} />
            </section>
        </main>
    )
};
