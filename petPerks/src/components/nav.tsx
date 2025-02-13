import { NavLink, NavStyle } from "../style/navStyle"
import logo from '../assets/svg/nav/logo.svg'
import search from '../assets/svg/nav/navSearch.svg'
import heart from '../assets/svg/nav/navHeart.svg'
import burger from '../assets/svg/nav/navBurger.svg'
import shopCart from '../assets/svg/nav/navShoppingCart.svg'

const Nav = () => {
    return (
    <NavStyle>
    <div className="container">

        <div className="logo_div">
            <img src={logo} alt="logo" className="logo"/>
            <h2 className="logo_title">PetPerks</h2>
        </div>

        <div className="nav_div">
            <NavLink to={'/'} className="nav_link">
            <div className="link">Home</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fill-opacity="0.4"/>
            </svg>
            </NavLink>
            <NavLink to={'/shop'} className="nav_link">
            <div className="link">Shop</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fill-opacity="0.4"/>
            </svg>
            </NavLink>
            <NavLink to={'/blog'} className="nav_link">
            <div className="link">Blog</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fill-opacity="0.4"/>
            </svg>
            </NavLink>
            <NavLink to={'/portfolio'} className="nav_link">
            <div className="link">Portfolio</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fill-opacity="0.4"/>
            </svg>
            </NavLink>
            <NavLink to={'/pages'} className="nav_link">
            <div className="link">Pages</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fill-opacity="0.4"/>
            </svg>
            </NavLink>
        </div>

        <div className="nav_right">
            <div className="login_div">
                <NavLink to={'/login'}>Login/</NavLink>
                <NavLink to={'/register'}>Register</NavLink>
            </div>
            <div className="icon_div">
                <img src={search} alt="search" />
                <img src={heart} alt="heart" />
                <img src={shopCart} alt="shoppingCart" />
            </div>
            <img src={burger} alt="nav_burger" className="nav_burger" id="nav_burger" />
        </div>
    </div>
    </NavStyle>
    )
}

export default Nav
