export default function Checkout({ sum = 0 }) {
    return (
        <div id="checkout">
            <p className="bl text-lighter">Subtotal <span className="bl text-primary">£{sum}</span></p>
            <p className="bm text-lighter">Taxes and shipping are calculated at checkout</p>
            <button className="btn btn_dark">Go to checkout</button>
        </div>
    )
};
