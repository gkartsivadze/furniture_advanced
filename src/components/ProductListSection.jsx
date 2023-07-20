import ProductCard from "./ProductCard"

export default function ProductListSection({ name, data }) {
    return (
        <section id="product_section">
        <h1>{name}</h1>
        <div className="flex_list">
          {
            data.map(product => <ProductCard key={product.id} type={product.type} image={product.image} name={product.name} price={product.price} />)
          }
        </div>
        <button className="btn bm">View collection</button>
      </section>
    )
}