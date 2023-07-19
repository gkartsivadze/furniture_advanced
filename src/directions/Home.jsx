import FeaturedCard from "../components/FeaturedCard"
import Hero from "../components/Hero"
import HeroTop from "../components/HeroTop"

import { featured } from "../data/featuredData.json"

function Home() {

  return (
    <main>
      <section id="welcome_section">
      <HeroTop />
      <Hero />
      </section>
      <section id="difference_section">
        <h3>What makes our brand different</h3>
        <div className="featured_list">
            {
              featured.map(elem => <FeaturedCard icon={elem.icon} header={elem.header} body={elem.body} />)
            }
        </div>
      </section>
    </main>
  )
}

export default Home
