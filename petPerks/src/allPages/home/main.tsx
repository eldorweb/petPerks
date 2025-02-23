import { StrictMode } from "react"
import HomeHeader from "./header"
import Category from "./category"

const HomeMain = () => {
    return (
        <StrictMode>
            <HomeHeader/>
            <Category/>
        </StrictMode>
    )
}

export default HomeMain