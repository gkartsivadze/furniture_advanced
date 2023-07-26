import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

export default function ProductListSection({ name, data }) {
  return (
    <section className="product_section">
       <h1>{name}</h1>
        <div className="scrollable_list">
          {
            data.map(product => <ProductCard key={product.id} id={product.id} type={product.type} image={product.image} name={product.name} price={product.price} />)
          }
        </div>
        <Link to={"/collection"} className="btn bm">View collection</Link>
    </section>
  )
}