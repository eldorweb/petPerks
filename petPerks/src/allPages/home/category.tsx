import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cdog from '../../assets/png/home/Cdogs.png'
import ccat from '../../assets/png/home/Ccats.png'
import crabbits from '../../assets/png/home/Crabbits.png'
import cparrot from '../../assets/png/home/Ccarrots.png'
import chamster from '../../assets/png/home/Chamsters.png'
import { CategoryStyle } from "../../style/homeStyle";
import { FiChevronLeft } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";


const Category = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const ButtonGroup = ({ next, previous }: any) => {
        // const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group relative mb-4 right-[30px] bottom-[260px] gap-4 flex justify-end 
            items-center w-full ">
                <button className='block rounded-[20px]  p-3 bg-slate-300' onClick={() =>
                    previous()}> <FiChevronLeft /></button>
                <button onClick={() => next()}><span className='rounded-[20px] block p-3 bg-slate-300' ><BiChevronRight /></span></button>
            </div>

        );
    };
    return (
        <CategoryStyle>
            <h2>Find product Category</h2>
            <Carousel
                responsive={responsive}
                autoPlay={true} 
                autoPlaySpeed={3000}
                keyBoardControl={true}
                className="carousel"
                arrows={false}
                infinite={true}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
            >
                <div className="d1">
                    <p>Dogs</p>
                    <img src={cdog} draggable={false} alt="dogs" />
                </div>
                <div className="d2">
                    <p>Cats</p>
                    <img src={ccat} draggable={false} alt="dogs" />
                </div>
                <div className="d3">
                    <p>Rabbits</p>
                    <img src={crabbits} draggable={false} alt="dogs" />
                </div>
                <div className="d4">
                    <p>Parrot</p>
                    <img src={cparrot} draggable={false} alt="dogs" />
                </div>
                <div className="d5">
                    <p>Hamster</p>
                    <img src={chamster} draggable={false} alt="dogs" />
                </div>
                <div className="d1">
                    <p>Dogs</p>
                    <img src={cdog} draggable={false} alt="dogs" />
                </div>
                <div className="d2">
                    <p>Cats</p>
                    <img src={ccat} draggable={false} alt="dogs" />
                </div>
            </Carousel>
        </CategoryStyle>
    )
}


export default Category