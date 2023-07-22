import FeaturedCard from "./FeaturedCard"

import { featured } from "../data/featuredData.json"

export default function FeaturedCardSection() {
    return (
        <section className="difference_section">
            <h3>What makes our brand different</h3>
            <div className="flex_list">
                {
                    featured.map(elem => <FeaturedCard key={elem.id} icon={elem.icon} header={elem.header} body={elem.body} />)
                }
            </div>
        </section>
    )
};


