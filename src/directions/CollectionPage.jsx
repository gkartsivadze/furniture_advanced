import ProductCard from "../components/ProductCard"
import GetInTouch from "../components/GetInTouch"
import Filter from "../components/Filter"

import { products } from "../data/featuredData.json"

import { nanoid } from "nanoid"

import "../styling/collection.scss"
import { useEffect, useState } from "react"

export default function CollectionPage() {
    const [filteredCollection, setFilteredCollection] = useState([]);
    const [filter, setFilter] = useState({
        category: "any",
        price: "any",
        brand: "any"
    })

    useEffect(() => {
        let priceRange = filter.price.split("_");
        setFilteredCollection(products
            .filter(x => (filter.category == "any" || x.category == filter.category) &&
                (filter.brand == "any" || x.brand == filter.brand) &&
                (filter.price == "any" || (x.price > priceRange[0] && x.price < priceRange[1]))
            ));
    }, [filter])

    function handleFiltering(e) {
        setFilter(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <main>
            <section id="collection_section">
                <h1>View all products</h1>
                <Filter passFilter={handleFiltering} />
                <div className="collection">
                    {
                        filteredCollection.length > 0 ?
                            filteredCollection.map(elem => <ProductCard
                                key={nanoid()}
                                id={elem.id}
                                type={elem.type}
                                image={elem.image}
                                name={elem.name}
                                price={elem.price}
                            />) : <p className="bl">Nothing To Display</p>
                    }
                </div>
            </section>
            <GetInTouch />
        </main>
    )
};
