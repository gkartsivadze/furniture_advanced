import searchIcon from '../../public/icons/Search.svg'
import logo from '../../public/icons/Avion.svg'
import shoppingCartIcon from '../../public/icons/Shopping--cart.svg'
import userAvatarIcon from '../../public/icons/User--avatar.svg'

export default function Header() {
    return (
        <nav>
            <img src={searchIcon} alt="Search" />
            <img src={logo} alt="" />
            <div>
                <img src={shoppingCartIcon} alt="" />
                <img src={userAvatarIcon} alt="" />
            </div>
        </nav>
    )
}