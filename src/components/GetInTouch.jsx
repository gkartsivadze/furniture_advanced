import backImage from "../../public/back.png"

export default function GetInTouch() {
    return (
        <section id="get_in_touch_section">
            <div className="left">
                <h1>From a studio in London to a global brand with over 400 outlets</h1>
                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                <button className="btn">Get in touch</button>
            </div>
            <img src={backImage} alt="" />
        </section>
    )
};
