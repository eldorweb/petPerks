import { StrictMode } from "react"
import HomeHeader from "./header"
import Category from "./category"
import Service from "./service"

const HomeMain = () => {
    return (
        <StrictMode>
            <HomeHeader/>
            <Category/>
            <Service/>
        </StrictMode>
    )
}

export default HomeMain