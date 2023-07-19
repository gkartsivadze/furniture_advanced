import FeaturedCard from "../components/FeaturedCard"
import ProductCard from "../components/ProductCard"
import Hero from "../components/Hero"
import HeroTop from "../components/HeroTop"

import { featured, products } from "../data/featuredData.json"

function Home() {

  return (
    <main>
      <section id="welcome_section">
      <HeroTop />
      <Hero />
      </section>
      <section id="difference_section">
        <h3>What makes our brand different</h3>
        <div className="flex_list">
            {
              featured.map(elem => <FeaturedCard key={elem.id} icon={elem.icon} header={elem.header} body={elem.body} />)
            }
        </div>
      </section>
      <section id="product_section">
        <h1>New ceramics</h1>
        <div className="flex_list">
          {
            products.map(product => <ProductCard key={product.id} type={product.type} image={product.image} name={product.name} price={product.price} />)
          }
        </div>
        <button className="btn bm">View collection</button>
      </section>
    </main>
  )
}

export default Home
