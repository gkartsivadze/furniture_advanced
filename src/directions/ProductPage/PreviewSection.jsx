import { useState } from "react";
import NumberInput from "../../components/NumberInput";

export default function PreviewSection({ product }) {

    const [currentAmount, setCurrentAmount] = useState(1)

    function handleChoose(opp) {
        switch (opp) {
            case "+":
                setCurrentAmount(currentAmount + 1)
                break;
            case "-":
                if(currentAmount > 1) setCurrentAmount(currentAmount - 1);
                break;
            default:
                alert("Something went wrong")
        }
    }

    return (
        <section id="product_preview_section">
            <img src={product.image} alt={product.name} />
            <div className="info">
                <div>
                    <h1>{product.name}</h1>
                    <h2>£{product.price}</h2>
                </div>

                <div className="description">
                    <p className="bl">Description</p>
                    <p className="about">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                    <ul>
                        <li>Premium material</li>
                        <li>Handmade upholstery</li>
                        <li>Quality timeless classic</li>
                    </ul>
                </div>
                <div className="dimensions">
                    <p className="bl">Dimensions</p>
                    <div className="grid_container">
                        <p className="bm">Height</p>
                        <p className="bm">Width</p>
                        <p className="bm">Depth</p>
                        <p className="bm text-lighter">110cm</p>
                        <p className="bm text-lighter">75cm</p>
                        <p className="bm text-lighter">50cm</p>
                    </div>
                </div>
                <form>
                    <div className="amount_container bl">Amount: <NumberInput handleChoose={handleChoose} value={currentAmount} /></div>
                    <button className="btn btn_dark">Add to card</button>
                </form>
            </div>
        </section>
    )
}