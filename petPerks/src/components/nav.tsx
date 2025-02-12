import { Link } from "react-router"
import { NavStyle } from "../style/navStyle"

const Nav = () => {
    return (
    <NavStyle>
    <div className="container">
        <Link to={"/about"}>
        <p>home</p>
        </Link>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
    </div>
    </NavStyle>
    )
}

export default Nav