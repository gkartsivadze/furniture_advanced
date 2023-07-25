import ProductCard from "../components/ProductCard"
import GetInTouch from "../components/GetInTouch"

import { products } from "../data/featuredData.json"

import { nanoid } from "nanoid"

import "../styling/collection.scss"

export default function CollectionPage() {
    const viderCollection = [...products, ...products, ...products]
    return (
        <main>
        <section id="collection_section">
            <h1>View all products</h1>
            {/* <Filtering /> */}
            <div className="collection">
                { viderCollection.filter(x => x.type == "vertical").map(elem=> <ProductCard
                                            key={nanoid()}
                                            id={elem.id}
                                            type={elem.type}
                                            image={elem.image}
                                            name={elem.name}
                                            price={elem.price}
                                        />) }
            </div>
        </section>
        <GetInTouch />
        </main>
    )
};
