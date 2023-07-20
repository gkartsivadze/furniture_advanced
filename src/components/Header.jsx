import searchIcon from '../../public/icons/Search.svg'
import logo from '../../public/icons/Avion.svg'
import shoppingCartIcon from '../../public/icons/Shopping--cart.svg'
import userAvatarIcon from '../../public/icons/User--avatar.svg'

import HeroTop from "./HeroTop"

export default function Header() {
    return (
        <>
            <nav>
                <div className='top'>
                    <img id='search-btn' src={searchIcon} alt="Search" />
                    <img id='logo' src={logo} alt="" />
                    <div>
                        <img src={shoppingCartIcon} alt="" />
                        <img src={userAvatarIcon} alt="" />
                    </div>
                </div>
                <HeroTop />
            </nav>
        </>
    )
}