 import TextInput from "./TextInput"

import { socialNetworks } from "../data/featuredData.json"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <div className="top">
                <ul>
                    <li>Menu</li>
                    <li><a href="#">New arrivals</a></li>
                    <li><a href="#">Best sellers</a></li>
                    <li><a href="#">Recently viewed</a></li>
                    <li><a href="#">Popular this week</a></li>
                    <li><a href="#">All products</a></li>
                </ul>
                <ul>
                    <li>Categories</li>
                    <li><a href="#">Crockery</a></li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Homeware</a></li>
                    <li><a href="#">Plant pots</a></li>
                    <li><a href="#">Chairs</a></li>
                    <li><a href="#">Crockery</a></li>
                </ul>
                <ul>
                    <li>Our company</li>
                    <li><Link to="/about">About us</Link></li>
                    <li><a href="#">Vacancies</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Returns policy</a></li>
                </ul>
                <ul className="custom_text_input">
                    <li>Join our mailing list</li>
                    <li className="container">
                        <TextInput />
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <h3>Copyright 2022 Avion LTD</h3>
                <div className="social_links">
                    {socialNetworks.map(soc => <a key={soc.name} href={soc.link} target="_blank"><img src={soc.icon} alt="" /></a>)}
                </div>
            </div>
        </footer>
    )
}