import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Category = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <h2>Find product Category</h2>
            <Carousel 
            responsive={responsive}
            autoPlay={true} 
            autoPlaySpeed={3000}
            keyBoardControl={true}
            >
                <div>
                    <p>Dogs</p>
                    <img src="" alt="" />
                </div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>
            </Carousel>
        </div>
    )
}


export default Category