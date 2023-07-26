import ProductCard from "../components/ProductCard";

import { useParams } from "react-router-dom"

import { products } from "../data/featuredData.json"

import "../styling/lists.scss"

export default function Lists() {
    const { filterOptions } = useParams();
    return (
        <section id="lists_section">
            <h1>{filterOptions.toUpperCase()}</h1>
            <div className="collection">
                {
                    products.filter(x => x.category == filterOptions).map(elem => <ProductCard
                        key={elem.id}
                        id={elem.id}
                        type={elem.type}
                        image={elem.image}
                        name={elem.name}
                        price={elem.price}
                    />)
                }
            </div>
        </section>
    )
};
