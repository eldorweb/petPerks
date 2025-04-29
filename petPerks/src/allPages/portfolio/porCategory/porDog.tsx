import { Link } from 'react-router'
import img1 from '../../../assets/png/home/galery1.jpg'
import img2 from '../../../assets/png/home/galery3.jpg'
import img3 from '../../../assets/png/home/galery5.jpg'
import img4 from '../../../assets/png/home/galery8.jpg'
import img5 from '../../../assets/png/home/galery9.jpg'
import { useEffect, useState } from 'react'
import Loader from '../../../components/loader'

const PorDog = () => {
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
        <div className='flex flex-col'>
            <div className="grid grid-cols-3 mx-auto px-[315px] border-t-[1px] border-t-[#0000001A] pt-[55px] pb-[50px] gap-[30px]">
                {/*  */}
                <Link to={"/blog/blogDetail/1"}>
                <div className="flex flex-col items-center relative hoverImg">
                    <img src={img5} alt="img1" className="w-[410px] h-[410px] object-cover object-top rounded-[20px] cursor-pointer" />
                    <div className="wrapper absolute bottom-[30px] opacity-0 flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                        <div className="text-[#000] text-[14px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[2px] px-[7px] rounded-[5px] w-[25%]">Dresses</div>
                        <div className=" text-[#fff] font-[lufga500] text-[20px]">Pet Paloza: Where Every Pet is the Star Pet Happiness</div>
                    </div>
                </div>
                </Link>
                {/*  */}
                {/*  */}
                <Link to={"/blog/blogDetail/2"}>
                <div className="flex flex-col items-center relative hoverImg">
                    <img src={img1} alt="img1" className="w-[410px] h-[410px] object-cover object-top rounded-[20px] cursor-pointer" />
                    <div className="wrapper absolute bottom-[30px] opacity-0 flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                        <div className="text-[#000] text-[14px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[2px] px-[7px] rounded-[5px] w-[25%]">Dresses</div>
                        <div className=" text-[#fff] font-[lufga500] text-[20px]">Pet Paloza: Where Every Pet is the Star Pet Happiness</div>
                    </div>
                </div>
                </Link>
                {/*  */}

                {/*  */}
                <Link to={"/blog/blogDetail/3"}>
                <div className="flex flex-col items-center relative hoverImg">
                    <img src={img3} alt="img1" className="w-[410px] h-[410px] object-cover object-top rounded-[20px] cursor-pointer" />
                    <div className="wrapper absolute bottom-[30px] opacity-0 flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                        <div className="text-[#000] text-[14px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[2px] px-[7px] rounded-[5px] w-[25%]">Dresses</div>
                        <div className=" text-[#fff] font-[lufga500] text-[20px]">Pet Paloza: Where Every Pet is the Star Pet Happiness</div>
                    </div>
                </div>
                </Link>
                {/*  */}

                {/*  */}
                <Link to={"/blog/blogDetail/4"}>
                <div className="flex flex-col items-center relative hoverImg">
                    <img src={img2} alt="img1" className="w-[410px] h-[410px] object-cover object-top rounded-[20px] cursor-pointer" />
                    <div className="wrapper absolute bottom-[30px] opacity-0 flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                        <div className="text-[#000] text-[14px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[2px] px-[7px] rounded-[5px] w-[25%]">Dresses</div>
                        <div className=" text-[#fff] font-[lufga500] text-[20px]">Pet Paloza: Where Every Pet is the Star Pet Happiness</div>
                    </div>
                </div>
                </Link>
                {/*  */}
                
                {/*  */}
                <Link to={"/blog/blogDetail/5"}>
                <div className="flex flex-col items-center relative hoverImg">
                    <img src={img4} alt="img1" className="w-[410px] h-[410px] object-cover rounded-[20px] cursor-pointer" />
                    <div className="wrapper absolute bottom-[30px] opacity-0 flex flex-col justify-center bg-[#00000099] backdrop-blur-[12.5px] w-[90%] py-[23px] pl-[30px] pr-[63px] rounded-[10px]">
                        <div className="text-[#000] text-[14px] font-[lufga500] capitalize mb-[10px] bg-[#fff] py-[2px] px-[7px] rounded-[5px] w-[25%]">Dresses</div>
                        <div className=" text-[#fff] font-[lufga500] text-[20px]">Pet Paloza: Where Every Pet is the Star Pet Happiness</div>
                    </div>
                </div>
                </Link>
                {/*  */}

            </div>
        </div>
    )
}

export default PorDog