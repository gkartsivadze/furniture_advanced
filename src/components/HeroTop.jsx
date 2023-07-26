import { Link } from "react-router-dom";

export default function HeroTop() {
    return (
        <ul className="hero_top">
            <li><Link to={`/list/plant_pots`}>Plant pots</Link></li>
            <li><Link to={`/list/ceramic`}>Ceramics</Link></li>
            <li><Link to={`/list/tables`}>Tables</Link></li>
            <li><Link to={`/list/chairs`}>Chairs</Link></li>
            <li><Link to={`/list/crockery`}>Crockery</Link></li>
            <li><Link to={`/list/tableware`}>Tableware</Link></li>
            <li><Link to={`/list/cutlery`}>Cutlery</Link></li>
        </ul>
    )
}