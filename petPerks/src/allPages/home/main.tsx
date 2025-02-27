import { StrictMode } from "react"
import HomeHeader from "./header"
import Category from "./category"
import Service from "./service"
import Logo from "./logo"
import Galery from "./galery"
import PetFoods from "./petFoods"

const HomeMain = () => {
    return (
        <StrictMode>
            <HomeHeader/>
            <Category/>
            <Service/>
            <Logo/>
            <Galery/>
            <PetFoods />
        </StrictMode>
    )
}

export default HomeMain