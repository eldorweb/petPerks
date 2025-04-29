import { StrictMode, useEffect, useState } from "react"
import HomeHeader from "./header"
import Category from "./category"
import Service from "./service"
import Logo from "./logo"
import Galery from "./galery"
import PetFoods from "./petFoods"
import PetLovers from "./petLovers"
import Post from "./post"
import Loader from "../../components/loader"

const HomeMain = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        window.scrollTo(0, 0); 
    },[])

    useEffect(() => {
        const fakeDataFetch = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
        fakeDataFetch();
    }, [])
    return (
        isLoading ? <Loader /> :
        <StrictMode >
            <HomeHeader/>
            <Category />
            <Service />
            <Logo />
            <PetFoods />
            <Galery />
            <PetLovers />
            <Post />
        </StrictMode>
    )
}

export default HomeMain