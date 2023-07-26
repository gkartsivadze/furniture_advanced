import ProductCard from "../components/ProductCard"
import GetInTouch from "../components/GetInTouch"
import Filter from "../components/Filter"

import { products } from "../data/featuredData.json"

import { nanoid } from "nanoid"

import "../styling/collection.scss"
import { useEffect, useState } from "react"

export default function CollectionPage() {
    const widerCollection = [...products, ...products, ...products].filter(x => x.type == "vertical")
    const [filter, setFilter] = useState({
        category: "any",
        price: "any",
        brand: "any"
    })
    useEffect(() => {
        console.log(filter)
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
                widerCollection
                        .map(elem=> <ProductCard
                                        key={nanoid()}
                                        id={elem.id}
                                        type={elem.type}
                                        image={elem.image}
                                        name={elem.name}
                                        price={elem.price}
                                    />)
                }
            </div>
        </section>
        <GetInTouch />
        </main>
    )
};
