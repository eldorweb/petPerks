import img1 from '../../assets/png/home/galery1.jpg'
import img2 from '../../assets/png/home/galery3.jpg'
import img3 from '../../assets/png/home/galery5.jpg'
import img4 from '../../assets/png/home/galery8.jpg'
import img5 from '../../assets/png/home/galery9.jpg'
import img6 from '../../assets/png/home/orderTracking.webp'
import spinner from '../../assets/svg/about/Spinner.svg'
import search from '../../assets/svg/about/search-normal.svg'
import image1 from '../../assets/png/home/galery6.jpg'
import image2 from '../../assets/png/home/galery7.jpg'
import image3 from '../../assets/png/home/galery4.jpg'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import Loader from '../../components/loader'

const BlogMain = () => {
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
        <div className="">
            <div className="relative">
                <div className="py-[89px] h-[277px] bg-[url('https://images.unsplash.com/photo-1444212477490-ca407925329e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhbGtpbmd3aXRoJTIwZG9nfGVufDB8fDB8fHww')] bg-center bg-cover bg-no-repeat text-center ">
                    <div className="bg-[#2D0B03CC] h-[100%] w-[100%] -z-0 absolute top-0 flex flex-col justify-center">
                        <h1 className="text-[#fff] font-[lufga600] text-[40px] mb-[16px]">Blog Post</h1>
                        <p className="text-[#fff] text-[16px] fonr-[lufga400]">Home   {'>'}  Blog Post</p>
                    </div>
                </div>
            </div>
            <div className="py-[103px] px-[314px] flex">
                <div className="mr-[55px] w-[100%]">
                    <div className="grid grid-cols-2 gap-x-[30px] gap-y-[50px] mb-[70px]">
                        {/*  */}
                        <Link to={"/blog/blogDetail/1"}>
                        <div className="flex flex-col items-center relative hoverImg">
                            <img src={img1} alt="img1" className="w-[410px] h-[475px] object-cover object-top rounded-[20px] cursor-pointer" />
                            <div className="wrapper absolute bottom-[30px] flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                                <div className="text-[#000] text-[13px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[5px] px-[10px] rounded-[5px] w-[40%]">12 Jan 2024</div>
                                <div className=" text-[#fff] font-[lufga500] text-[20px] capitalize mb-[18px] w-[307px]">Whisker Wonderland:  Gateway to Pet Bliss Chronicles Tales</div>
                                <a href="#" className="">
                                    <div className="text-[#fff] text-[14px] font-[lufga500] capitalize">Read More <span className=''>{'>'}</span></div>
                                </a>
                            </div>
                        </div>
                        </Link>
                        {/*  */}

                        {/*  */}
                        <Link to={"/blog/blogDetail/2"}>
                        <div className="flex flex-col items-center relative hoverImg">
                            <img src={img2} alt="img1" className="w-[410px] h-[475px] object-cover object-top rounded-[20px] cursor-pointer" />
                            <div className="wrapper absolute bottom-[30px] flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                                <div className="text-[#000] text-[13px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[5px] px-[10px] rounded-[5px] w-[40%]">12 Jan 2024</div>
                                <div className=" text-[#fff] font-[lufga500] text-[20px] capitalize mb-[18px] w-[307px]">Pet Paloza: Where Every Pet is the Star Pet Happiness</div>
                                <a href="#" className="">
                                    <div className="text-[#fff] text-[14px] font-[lufga500] capitalize">Read More <span className=''>{'>'}</span></div>
                                </a>
                            </div>
                        </div>
                        </Link>
                        {/*  */}

                        {/*  */}
                        <Link to={"/blog/blogDetail/3"}>
                        <div className="flex flex-col items-center relative hoverImg">
                            <img src={img3} alt="img1" className="w-[410px] h-[475px] object-cover object-top rounded-[20px] cursor-pointer" />
                            <div className="wrapper absolute bottom-[30px] flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                                <div className="text-[#000] text-[13px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[5px] px-[10px] rounded-[5px] w-[40%]">12 Jan 2024</div>
                                <div className=" text-[#fff] font-[lufga500] text-[20px] capitalize mb-[18px] w-[307px]">Critter Chronicles: Tales from the Pet Kingdom</div>
                                <a href="#" className="">
                                    <div className="text-[#fff] text-[14px] font-[lufga500] capitalize">Read More <span className=''>{'>'}</span></div>
                                </a>
                            </div>
                        </div>
                        </Link>
                        {/*  */}

                        {/*  */}
                        <Link to={"/blog/blogDetail/4"}>
                        <div className="flex flex-col items-center relative hoverImg">
                            <img src={img4} alt="img1" className="w-[410px] h-[475px] object-cover object-top rounded-[20px] cursor-pointer" />
                            <div className="wrapper absolute bottom-[30px] flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                                <div className="text-[#000] text-[13px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[5px] px-[10px] rounded-[5px] w-[40%]">12 Jan 2024</div>
                                <div className=" text-[#fff] font-[lufga500] text-[20px] capitalize mb-[18px] w-[307px]">Paws & Reflect: Your For Join Source Pet Happiness</div>
                                <a href="#" className="">
                                    <div className="text-[#fff] text-[14px] font-[lufga500] capitalize">Read More <span className=''>{'>'}</span></div>
                                </a>
                            </div>
                        </div>
                        </Link>
                        {/*  */}

                        {/*  */}
                        <Link to={"/blog/blogDetail/5"}>
                        <div className="flex flex-col items-center relative hoverImg">
                            <img src={img5} alt="img1" className="w-[410px] h-[475px] object-cover object-top rounded-[20px] cursor-pointer" />
                            <div className="wrapper absolute bottom-[30px] flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                                <div className="text-[#000] text-[13px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[5px] px-[10px] rounded-[5px] w-[40%]">12 Jan 2024</div>
                                <div className=" text-[#fff] font-[lufga500] text-[20px] capitalize mb-[18px] w-[307px]">Critter Chronicles: Tales from the Pet Kingdom</div>
                                <a href="#" className="">
                                    <div className="text-[#fff] text-[14px] font-[lufga500] capitalize">Read More <span className=''>{'>'}</span></div>
                                </a>
                            </div>
                        </div>
                        </Link>
                        {/*  */}

                        {/*  */}
                        <Link to={"/blog/blogDetail/6"}>
                        <div className="flex flex-col items-center relative hoverImg">
                            <img src={img6} alt="img1" className="w-[410px] h-[475px] object-cover object-top rounded-[20px] cursor-pointer" />
                            <div className="wrapper absolute bottom-[30px] flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                                <div className="text-[#000] text-[13px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[5px] px-[10px] rounded-[5px] w-[40%]">12 Jan 2024</div>
                                <div className=" text-[#fff] font-[lufga500] text-[20px] capitalize mb-[18px] w-[307px]">Pawsitive Vibes Only: Join the Pet-Revolution</div>
                                <a href="#" className="">
                                    <div className="text-[#fff] text-[14px] font-[lufga500] capitalize">Read More <span className=''>{'>'}</span></div>
                                </a>
                            </div>
                        </div>
                        </Link>
                        {/*  */}
                    </div>
                    <div className="flex items-center justify-center pb-[40px]"><button className="bg-[#000] text-[#fff] py-[13px] px-[30px] rounded-[10px] cursor-pointer hover:opacity-[0.8] text-[16px] font-[lufga500] flex items-center"><img src={spinner} alt="spinner" className='mr-[10px]' />Loadmore....</button></div>
                </div>

                <div className="w-[50%]">
                    <h3 className="text-[20px] text-[#000] font-[lufga500] mb-[15px]">Search</h3>
                    <form action="#" method="post" className='rounded-[10px] border-[1px] flex items-center relative mb-[50px]'>
                        <input type="text" placeholder='Search Here' className='py-[20px] pl-[25px] pr-[20px] outline-0' />
                        <img src={search} alt="search" className='w-[20px] absolute right-[20px]' />
                    </form>
                    <h3 className="text-[20px] font-[lufga500] mb-[15px]">Category</h3>
                    <div className="flex flex-col mb-[50px]">
                        {/*  */}
                        <div className="flex items-center justify-between mb-[25px]">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='mr-[14.5px]'>
                                    <path d="M8.895 1.87695L8.3129 2.53546L13.433 7.0615H0V7.94041H13.433L8.3129 12.4665L8.895 13.125L15 7.72833V7.27358L8.895 1.87695Z" fill="black" />
                                </svg>
                                <p className="text-[15px] font-[lufga400] capitalize">Dog Food</p>
                            </div>
                            <div className="text-[13px] capitalize">(10)</div>
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="flex items-center justify-between mb-[25px]">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='mr-[14.5px]'>
                                    <path d="M8.895 1.87695L8.3129 2.53546L13.433 7.0615H0V7.94041H13.433L8.3129 12.4665L8.895 13.125L15 7.72833V7.27358L8.895 1.87695Z" fill="black" />
                                </svg>
                                <p className="text-[15px] font-[lufga400] capitalize">Dog Toys</p>
                            </div>
                            <div className="text-[13px] capitalize">(5)</div>
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="flex items-center justify-between mb-[25px]">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='mr-[14.5px]'>
                                    <path d="M8.895 1.87695L8.3129 2.53546L13.433 7.0615H0V7.94041H13.433L8.3129 12.4665L8.895 13.125L15 7.72833V7.27358L8.895 1.87695Z" fill="black" />
                                </svg>
                                <p className="text-[15px] font-[lufga400] capitalize">Dog Health</p>
                            </div>
                            <div className="text-[13px] capitalize">(17)</div>
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="flex items-center justify-between mb-[25px]">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='mr-[14.5px]'>
                                    <path d="M8.895 1.87695L8.3129 2.53546L13.433 7.0615H0V7.94041H13.433L8.3129 12.4665L8.895 13.125L15 7.72833V7.27358L8.895 1.87695Z" fill="black" />
                                </svg>
                                <p className="text-[15px] font-[lufga400] capitalize">Dog Beds</p>
                            </div>
                            <div className="text-[13px] capitalize">(13)</div>
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="flex items-center justify-between mb-[25px]">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='mr-[14.5px]'>
                                    <path d="M8.895 1.87695L8.3129 2.53546L13.433 7.0615H0V7.94041H13.433L8.3129 12.4665L8.895 13.125L15 7.72833V7.27358L8.895 1.87695Z" fill="black" />
                                </svg>
                                <p className="text-[15px] font-[lufga400] capitalize">Dog Bowls</p>
                            </div>
                            <div className="text-[13px] capitalize">(6)</div>
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="flex items-center justify-between mb-[25px]">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='mr-[14.5px]'>
                                    <path d="M8.895 1.87695L8.3129 2.53546L13.433 7.0615H0V7.94041H13.433L8.3129 12.4665L8.895 13.125L15 7.72833V7.27358L8.895 1.87695Z" fill="black" />
                                </svg>
                                <p className="text-[15px] font-[lufga400] capitalize">Dog Gadgets</p>
                            </div>
                            <div className="text-[13px] capitalize">(17)</div>
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="flex items-center justify-between mb-[25px]">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='mr-[14.5px]'>
                                    <path d="M8.895 1.87695L8.3129 2.53546L13.433 7.0615H0V7.94041H13.433L8.3129 12.4665L8.895 13.125L15 7.72833V7.27358L8.895 1.87695Z" fill="black" />
                                </svg>
                                <p className="text-[15px] font-[lufga400] capitalize">Dog Products</p>
                            </div>
                            <div className="text-[13px] capitalize">(13)</div>
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="flex items-center justify-between mb-[25px]">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='mr-[14.5px]'>
                                    <path d="M8.895 1.87695L8.3129 2.53546L13.433 7.0615H0V7.94041H13.433L8.3129 12.4665L8.895 13.125L15 7.72833V7.27358L8.895 1.87695Z" fill="black" />
                                </svg>
                                <p className="text-[15px] font-[lufga400] capitalize">Dog Jackets</p>
                            </div>
                            <div className="text-[13px] capitalize">(6)</div>
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="flex items-center justify-between mb-[25px]">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='mr-[14.5px]'>
                                    <path d="M8.895 1.87695L8.3129 2.53546L13.433 7.0615H0V7.94041H13.433L8.3129 12.4665L8.895 13.125L15 7.72833V7.27358L8.895 1.87695Z" fill="black" />
                                </svg>
                                <p className="text-[15px] font-[lufga400] capitalize">Dog Coat</p>
                            </div>
                            <div className="text-[13px] capitalize">(22)</div>
                        </div>
                        {/*  */}
                    </div>
                    <div className="mb-[50px] w-[90%]">
                        <h2 className="text-[20px] font-[lufga500] mb-[15px]">Latest Post</h2>
                        <div className="flex items-center mb-[25px]">
                            <img src={image1} alt="" className="w-[120px] h-[100px] rounded-[15px] mr-[20px] object-cover" />
                            <div className="flex flex-col">
                                <p className='text-[13px] font-[lufga500] uppercase mb-[8px]'>12 Jan 2024</p>
                                <p className='text-[16px] font-[lufga500] capitalize'>Paws & Reflect: Your For Join Source Pet Happiness</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-[25px]">
                            <img src={image2} alt="" className="w-[120px] h-[100px] rounded-[15px] mr-[20px] object-cover" />
                            <div className="flex flex-col">
                                <p className='text-[13px] font-[lufga500] uppercase mb-[8px]'>12 Jan 2024</p>
                                <p className='text-[16px] font-[lufga500] capitalize'>Critter Chronicles: Tales from the Pet Kingdom</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img src={image3} alt="" className="w-[120px] h-[100px] rounded-[15px] mr-[20px] object-cover" />
                            <div className="flex flex-col">
                                <p className='text-[13px] font-[lufga500] uppercase mb-[8px]'>12 Jan 2024</p>
                                <p className='text-[16px] font-[lufga500] capitalize'>Paws & Reflect: Your For Join Source Pet Happiness</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%]">
                        <h3 className="font-[lufga500] text-[20px] capitalize mb-[15px]">Tags</h3>
                        <div className="flex flex-wrap gap-[10px]">
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Plush Toys</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Dog Collars</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Cotton</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Training</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Pet Bed</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Dried Food</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Elevated Beds</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Health Products</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogMain