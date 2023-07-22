import Hero from "../../components/Hero"
import ProductListSection from "../../components/ProductListSection"
import FeaturedCardSection from "../../components/FeaturedCardSection"
import SignUpSection from "../../components/SignUpSection"

import {  products } from "../../data/featuredData.json"

import backImage from "../../../public/back.png"

import '../../home.scss'

export default function Home() {

  return (
    <main>
      <section id="welcome_section">
        <Hero />
      </section>
      <FeaturedCardSection />
      <ProductListSection name="New ceramics" data={products} />
      <ProductListSection name="Our popular products" data={products.filter(x => x.popular == true)} />
      <SignUpSection />
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