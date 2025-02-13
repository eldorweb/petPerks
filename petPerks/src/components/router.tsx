import { Route, Routes } from "react-router"
import Footer from "./footer"
import Nav from "./nav"
import HomeMain from "../allPages/home/main"
import AboutMain from "../allPages/about/main"
import ShopMain from "../allPages/shop/main"
import BlogMain from "../allPages/blog/main"
import PortfolioMain from "../allPages/portfolio/main"
import PagesMain from "../allPages/pages/main"
import LoginMain from "../auth/login"
import RegisterMain from "../auth/register"


const Router = () => {
    return (
        <>
        <Nav/>
        <Routes>
        <Route path='/' element ={<HomeMain />} />
        <Route path='/about' element ={<AboutMain />} />
        <Route path='/shop' element ={<ShopMain />} />
        <Route path='/blog' element ={<BlogMain />} />
        <Route path='/portfolio' element ={<PortfolioMain />} />
        <Route path='/pages' element ={<PagesMain />} />
        <Route path='/login' element ={<LoginMain />} />
        <Route path='/register' element ={<RegisterMain />} />
        </Routes>
        <Footer/>

        </>
    )
}

export default Router