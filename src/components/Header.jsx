import searchIcon from '../../public/icons/Search.svg'
import logo from '../../public/icons/Avion.svg'
import shoppingCartIcon from '../../public/icons/Shopping--cart.svg'
import userAvatarIcon from '../../public/icons/User--avatar.svg'

import HeroTop from "./HeroTop"

import useResize from '../hook/useResize'
import { Link } from 'react-router-dom'

export default function Header() {
    const [width] = useResize();
    return (
        <>
            <nav>
                <div className='top'>
                    {width > 700 && <img id='search-btn' src={searchIcon} alt="Search" />}
                    <Link to="/"><img id='logo' src={logo} alt="" /></Link>
                    <div>
                        {width <= 700 && <img id='search-btn' src={searchIcon} alt="Search" />}
                        <Link to="cart" className='btn btn_trans'><img src={shoppingCartIcon} alt="" /></Link>
                        <img src={userAvatarIcon} alt="" />
                    </div>
                </div>
                <HeroTop />
            </nav>
        </>
    )
}