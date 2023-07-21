import { useParams } from "react-router-dom"
import { products } from "../../data/featuredData.json"

import PreviewSection from "./PreviewSection"

export default function ProductPage() {
    const { productId } = useParams();
    const product = products.filter(prod => prod.id == productId)[0];

    return (
        <main>
            <PreviewSection product={product} />
        </main>
    )
}