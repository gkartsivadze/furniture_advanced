export default function FeaturedCard({icon, header, body}) {
    return (
    <div className="featured_card">
        <img src={icon} alt="" />
        <h4>{header}</h4>
        <p className="bm">{body}</p>
    </div>
    )
}