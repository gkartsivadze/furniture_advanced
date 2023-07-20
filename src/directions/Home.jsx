import FeaturedCard from "../components/FeaturedCard"
import Hero from "../components/Hero"
import TextInput from "../components/TextInput"
import ProductListSection from "../components/ProductListSection"

import { featured, products, popularProducts } from "../data/featuredData.json"

import backImage from "../../public/back.png"

import '../home.scss'

export default function Home() {
  return (
    <main>
      <section id="welcome_section">
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
      <ProductListSection name="New ceramics" data={products} />
      <ProductListSection name="Our popular products" data={popularProducts} />
      <section id="sign_up_section">
        <div>
          <h1>Join the club and get the benefits</h1>
          <p className="bm">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
        </div>
        <TextInput placeHolder="your@email.com" />
      </section>
      <section id="get_in_touch_section">
          <div className="left">
            <h1>From a studio in London to a global brand with over 400 outlets</h1>
            <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
            <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            <button className="btn">Get in touch</button>
          </div>
          <img src={backImage} alt="" />
      </section>
    </main>
  )
}

function useResize() {
  const [width,setWidth] = useState();
  window.addEventListener("resize", () => setWidth(window.innerWidth))

  return [width];
}