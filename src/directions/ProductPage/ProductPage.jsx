import { useParams } from "react-router-dom"
import { products } from "../../data/featuredData.json"

import PreviewSection from "./PreviewSection"
import ProductListSection from '../../components/ProductListSection';

import "../../product.scss"
import FeaturedCardSection from "../../components/FeaturedCardSection";
import SignUpSection from "../../components/SignUpSection";

export default function ProductPage() {
    const { productId } = useParams();
    const product = products.filter(prod => prod.id == productId)[0];

    return (
        <main>
            <PreviewSection product={product} />
            <ProductListSection name="You might also like" data={products.filter(prod => prod.id != product.id)} />
            <FeaturedCardSection />
            <SignUpSection />
        </main>
    )
}