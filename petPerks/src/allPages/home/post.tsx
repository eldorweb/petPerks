import Carousel from "react-multi-carousel";
import img1 from '../../assets/png/home/galery6.jpg'
import { Link } from "react-router";
import { BlogMocdata } from "../../mocData/blogMocdata";


const Post = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };


    return (
        <div className="flex flex-col pb-[126px] relative">
            <div className="flex px-[315px] items-center justify-between mb-[20px]">
                <h2 className="font-[lufga500] text-[55px] text-[#000] capitalize">Latest Post</h2>
                <Link to={'/blog'}>
                    <button className="font-[lufga500] text-[16px] text-[#FFFBFA] px-[30px] py-[13px] cursor-pointer bg-[#000] rounded-[15px]">View All</button>
                </Link>
            </div>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
                className="pb-5 after:absolute after:[''] after:w-[180px] after:h-[550px] after:rounded-[30px] after:bg-[#FFFBFA] after:opacity-60 top-0 z-20 before:absolute before:[''] before:w-[220px] before:h-[550px] before:rounded-[30px] before:bg-[#FFFBFA] before:opacity-80 before:top-0 before:right-0 before:z-20"
                centerMode={true}
            >
                {
                    // <Link key={value.id} to={`./petFood/${value.id}`}
                    BlogMocdata.map((value) => {
                        return <Link to={`/blog/blogDetail/${value.id}`} key={value.id}> 
                            <div className="bg-[#FFFBFA] rounded-[30px] w-[400px] p-[30px] pb-[50px] relative">
                                <div className="rounded-[30px] w-[390px] h-[530px] border-2 absolute top-[10px] -z-10"></div>
                                <img src={img1} className="w-[330px] h-[240px] mb-[35px] rounded-[15px]" alt="img1" />
                                <div className="text-[#FFFBFA] font-[lufga600] w-[92px] text-[13px] uppercase mb-[12px] bg-[#FE8F90] px-[10px] py-[5px] rounded-[6px]">12 Jan 2024</div>
                                <h4 className="text-[#000] font-[lufga500] text-start text-[20px] mb-[20px]">Uncovering the Beauty Benefits of Plant-Based Skincare</h4>
                                <div className="flex items-center">
                                    <button className="cursor-pointer font-[lufga500] text-[16px] text-[#000] uppercase px-[30px] py-[15px] rounded-[10px] border-[1px] border-[#000 bg-[#FFFBFA]]">Read more</button>
                                    <div className="border-2 rounded-2xl p-1 ml-[-15px] z-10 bg-[#fff] cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M3.33334 8H12.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 3.33398L12.6667 8.00065L8 12.6673" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    })
                }



            </Carousel>
        </div>
    )
}

export default Post