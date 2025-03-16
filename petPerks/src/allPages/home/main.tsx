import { StrictMode, useEffect, useState } from "react"
import HomeHeader from "./header"
import Category from "./category"
import Service from "./service"
import Logo from "./logo"
import Galery from "./galery"
import PetFoods from "./petFoods"
import PetLovers from "./petLovers"
import Post from "./post"
import loadingGif from '../../allPages/home/loading.gif'
import Skeleton from "react-loading-skeleton"

const HomeMain = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(()=>{
        window.scrollTo(0, 0); 
    },[])

    useEffect(() => {
        const fetchTodos = async () => {
            // first it will try the function
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (!response) {
                    console.log("Broken URL");
                    // it will throw error to error function
                    throw new Error('Failed to fetching URL 404');
                }
                // the files is always designed by Json
                const data = await response.json();
                setTodos(data);
                // when it catch the error
            } catch (err) {
                setError(err.message)
                // for the loading part
            } finally {
                setLoading(false)
            }
        };
        // we have to call it out(function)
        setTimeout(fetchTodos, 2000);
        
    }, [1000]);
    // loading part
    if (loading) return <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={loadingGif} />
    </div>
    // ______________________________-
    // printing error 
    if (error) return <p>Error: {error}</p>
    return (
        <StrictMode>
            {loading && <Skeleton count={10}/>}
            <HomeHeader />
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