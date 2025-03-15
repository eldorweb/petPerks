import { Route, Routes } from "react-router"
import Footer from "./footer"
import Nav from "./nav"
import HomeMain from "../allPages/home/main"
import AboutMain from "../allPages/about/main"
import ShopMain from "../allPages/shop/main"
import BlogMain from "../allPages/blog/main"
import PortfolioMain from "../allPages/portfolio/main"
import LoginMain from "../auth/login"
import RegisterMain from "../auth/register"
import OrderTracking from "./orderTracking"
import Favorites from "./favorites"
import ShopCart from "./shopCart"
import UnderConst from "../add/underConst"
import ReadyLaunch from "../add/readyLaunch"
import ContactUs from "../auth/contactUs"
import Pagesmain from "../allPages/shop/pages/main"
import Faqs from "./faqs"
import PricingTable from "./pricingTable"
import ShopDetail from "../detail/shopDetail"
import Page404 from "../add/404page"
import BlogDetail from "../detail/blogDetail"


const Router = () => {
    return (
        <div style={{maxWidth:"1920px", marginInline:"auto"}}>
        <Nav/>
        <Routes>
        <Route path='/' element ={<HomeMain />} />
        <Route path='/shop/petFood/:id' element ={<ShopDetail />} />
        <Route path='/shop/petFood/:id/petFood/:id' element ={<ShopDetail />} />
        <Route path='/petFood/:id' element ={<ShopDetail />} />
        <Route path='/about' element ={<AboutMain />} />
        <Route path='/shop' element ={<ShopMain />} />
        <Route path='/blog' element ={<BlogMain />} />
        <Route path='/blog/blogDetail' element ={<BlogDetail />} />
        <Route path='/portfolio' element ={<PortfolioMain />} />
        <Route path='/pages' element ={<Pagesmain />} />
        <Route path='/login' element ={<LoginMain />} />
        <Route path='/register' element ={<RegisterMain />} />
        <Route path='*' element={<Page404/>} />
        <Route path='/orderTracking' element={<OrderTracking/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/shopCarts' element={<ShopCart/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/underConst' element={<UnderConst/>} />
        <Route path='/readyLaunch' element={<ReadyLaunch/>} />
        <Route path='/faqs' element={<Faqs/>} />
        <Route path='/price' element={<PricingTable/>} />

        </Routes>
        <Footer/>

        </div>
    )
}

export default Router