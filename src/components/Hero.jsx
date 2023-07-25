import { useEffect } from 'react';
import chairImg from '../../public/chair-thumb.png'
import useResize from '../hook/useResize';
import { Link } from 'react-router-dom';

export default function Hero() {
    const [width] = useResize();
    return (
        <div id="hero">
            <div className='left'>
                <h2>The furniture brand for the future, with timeless designs</h2>
                <Link to={"collection"} className='btn btn_trans'>View collection</Link>
                <p className='bl'>
                    A new era in eco friendly furniture with Avelon, the French luxury retail brand
                    with nice fonts, tasteful colors and a beautiful way to display things digitally
                    using modern web technologies.
                </p>
            </div>
            {width > 1100 && <img src={chairImg} alt="Chair image" />}
        </div>
    )
}

