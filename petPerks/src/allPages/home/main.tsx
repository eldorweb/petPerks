import { StrictMode } from "react"
import HomeHeader from "./header"
import Category from "./category"
import Service from "./service"
import Logo from "./logo"
import Galery from "./galery"
import PetFoods from "./petFoods"
import PetLovers from "./petLovers"
import Post from "./post"

const HomeMain = () => {
    return (
        <StrictMode>
            <HomeHeader/>
            <Category/>
            <Service/>
            <Logo/>
            <PetFoods />
            <Galery/>
            <PetLovers/>
            <Post/>
        </StrictMode>
    )
}

export default HomeMain