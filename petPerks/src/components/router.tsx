import { Route, Routes } from "react-router"
import Footer from "./footer"
import Nav from "./nav"
import HomeMain from "../allPages/home/main"
import AboutMain from "../allPages/about/main"


const Router = () => {
    return (
        <>
        <Nav/>
        <Routes>
        <Route path='/' element ={<HomeMain />} />
        <Route path='/about' element ={<AboutMain />} />
        </Routes>
        <Footer/>

        </>
    )
}

export default Router