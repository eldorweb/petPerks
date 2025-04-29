import { useEffect, useState } from 'react';
import loginImg from '../assets/png/home/zbigimg.png'
import Loader from '../components/loader';
// import { toast, ToastContainer } from 'react-toastify'
import AOS from 'aos'
import "aos/dist/aos.css";
import { Link } from 'react-router';

const LoginMain = () => {
    // const notify = () => toast.error('Wow so easy !', {
    //     position: 'bottom-right',
    // });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const fakeDataFetch = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
        fakeDataFetch();
    }, [])
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });

        AOS.refresh();

        return () => {
            AOS.refreshHard();
        };
    }, []);
    return (
        isLoading ? <Loader /> :
            <div className="flex bg-linear-to-r from-#FFC7BB from-50% to-#FFEDE9 to-100%" >

                <div className="flex flex-col w-[50%] bg-[#FFC7BB] pt-[60px] pl-[81px] relative" data-aos="flip-left">
                    <h2 className="text-[#000] font-[lufga600] text-[40px] mb-[16px]">My Account</h2>
                    <p className="text-[#000] text-[16px] mb-[16px]">Home  {`>`}  My Account</p>
                    <div className="before:w-[350px] before:rounded-t-[300px] before:bg-amber-50 before:h-[500px] before:absolute before:top-[46%] before:left-[28%] before:content-['']">
                    </div>
                    <img src={loginImg} alt="img" className="w-[615px] ml-auto mr-auto z-20" />

                </div>


                <div className="w-[50%] bg-[#FFEDE9] pt-[134px] px-[227px] pb-[128px]" data-aos="fade-right">
                    <div className="border-[1px] p-[80px] rounded-[30px] flex flex-col items-center justify-center">
                        <h3 className="text-[#000] font-[lufga600] text-[28px] mb-[5px]">Welcome Back</h3>
                        <p className="text-[#00000080] text-[15px] mb-[36px]">Welcome please registration to your account</p>
                        <form action="get" className="gap-[30px] mb-[44px] flex flex-col w-[100%]">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]">Email Address</label>
                                <input type="email" name="email" id="email" placeholder='Email Address' className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]">Password</label>
                                <input type="password" name="password" id="password" placeholder='Password' className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' />
                            </div>
                        </form>
                        <div className="flex gap-[5px]">
                            <div className="rounded-[10px] px-[35px] py-[15px] border-[1px] text-[16px] font-[lufga500] uppercase hover:bg-[#000] hover:text-[#fff] cursor-pointer">Sign In</div>
                            <Link to={"/register"}><div className="rounded-[10px] px-[35px] py-[15px] border-[1px] text-[16px] font-[lufga500] uppercase hover:bg-[#000] hover:text-[#fff] cursor-pointer">Register</div></Link>
                            {/* <button className="cursor-pointer" onClick={notify}>click</button>
                            <ToastContainer /> */}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LoginMain