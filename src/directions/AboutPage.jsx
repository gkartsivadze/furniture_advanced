import FeaturedCardSection from '../components/FeaturedCardSection';
import GetInTouch from '../components/GetInTouch';
import SignUpSection from '../components/SignUpSection';

import '../styling/about.scss'

export default function AboutPage() {
    return (
        <main>
            <section id="header_container">
                <h1>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
            </section>
            <GetInTouch />
            <FeaturedCardSection />
            <SignUpSection /> 
        </main>
    )
}
