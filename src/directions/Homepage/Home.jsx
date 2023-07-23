import Hero from "../../components/Hero"
import ProductListSection from "../../components/ProductListSection"
import FeaturedCardSection from "../../components/FeaturedCardSection"
import SignUpSection from "../../components/SignUpSection"
import GetInTouch from "../../components/GetInTouch"

import {  products } from "../../data/featuredData.json"

import '../../styling/home.scss'

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
      <GetInTouch />
    </main>
  )
}