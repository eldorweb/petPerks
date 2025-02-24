import { StrictMode } from "react"
import HomeHeader from "./header"
import Category from "./category"
import Service from "./service"
import Logo from "./logo"
import Galery from "./galery"

const HomeMain = () => {
    return (
        <StrictMode>
            <HomeHeader/>
            <Category/>
            <Service/>
            <Logo/>
            <Galery/>
        </StrictMode>
    )
}

export default HomeMain