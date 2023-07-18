import chairImg from '../../public/chair.png'

export default function Hero() {
    return (
        <section>
            <div className='left'>
                <h2>The furniture brand for the future, with timeless designs</h2>
                <button>View collection</button>
                <p>
                    A new era in eco friendly furniture with Avelon, the French luxury retail brand
                    with nice fonts, tasteful colors and a beautiful way to display things digitally
                    using modern web technologies.
                </p>
            </div>
            <img src={chairImg} alt="" />
        </section>
    )
}