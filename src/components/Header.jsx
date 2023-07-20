import searchIcon from '../../public/icons/Search.svg'
import logo from '../../public/icons/Avion.svg'
import shoppingCartIcon from '../../public/icons/Shopping--cart.svg'
import userAvatarIcon from '../../public/icons/User--avatar.svg'

import HeroTop from "./HeroTop"
import { useState } from 'react'

export default function Header() {
    const [width] = useResize();
    return (
        <>
            <nav>
                <div className='top'>
                    {width > 700 && <img id='search-btn' src={searchIcon} alt="Search" />}
                    <img id='logo' src={logo} alt="" />
                    <div>
                        {width <= 700 && <img id='search-btn' src={searchIcon} alt="Search" />}
                        <img src={shoppingCartIcon} alt="" />
                        <img src={userAvatarIcon} alt="" />
                    </div>
                </div>
                <HeroTop />
            </nav>
        </>
    )
}



function useResize() {
    const [width,setWidth] = useState();
    window.addEventListener("resize", () => setWidth(window.innerWidth))

    return [width];
}