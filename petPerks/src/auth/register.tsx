import { useEffect, useState } from 'react';
import regImg from '../assets/png/home/regImg.png'
import Loader from '../components/loader';
import { Link, useNavigate } from 'react-router';
import AOS from 'aos'
import "aos/dist/aos.css";

const RegisterMain = () => {
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
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    return (
        isLoading ? <Loader /> :
            <div className="flex bg-linear-to-r from-#FFC7BB from-50% to-#FFEDE9 to-100%">

                <div className="flex flex-col w-[50%] bg-[#FFC7BB] pt-[60px] pl-[81px] relative" data-aos="fade-left">
                    <h2 className="text-[#000] font-[lufga600] text-[40px] mb-[16px]">My Account</h2>
                    <p className="text-[#000] text-[16px] mb-[16px]">Home  {`>`}  My Account</p>
                    <div className="before:w-[515px] before:bg-amber-50 before:h-[300px] before:absolute before:top-[40%] before:left-0 before:content-['']">
                    </div>
                    <img src={regImg} alt="img" className="w-[615px] ml-auto mr-auto z-20" />

                </div>


                <div className="w-[50%] bg-[#FFEDE9] pt-[80px] px-[227px] pb-[128px]" data-aos="fade-right">
                    <div className="border-[1px]  p-[80px] rounded-[30px] flex flex-col items-center justify-center">
                        <h3 className="text-[#000] font-[lufga600] text-[28px] mb-[5px]">Registration Now</h3>
                        <p className="text-[#00000080] text-[15px] mb-[36px]">Welcome please registration to your account</p>
                        <form action="get" className="gap-[30px] mb-[44px] flex flex-col w-[100%]">
                            <div className="flex flex-col">
                                <label htmlFor="username text-start" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]">Username</label>
                                <input type="text" className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' placeholder='Username' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]">Email Address</label>
                                <input type="email" name="email" id="email" placeholder='Email Address' className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]">Password</label>
                                <input type="password" name="password" id="password" placeholder='Password' className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]">Confirm Password</label>
                                <input type="password" name="password" id="password" placeholder='Password' className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' />
                            </div>
                        </form>
                        <div className="flex gap-[5px]">
                            <div className="rounded-[10px] px-[35px] py-[15px] border-[1px] text-[16px] font-[lufga500] uppercase hover:bg-[#000] hover:text-[#fff] cursor-pointer">Register</div>
                            <Link to={"/login"}><div className="rounded-[10px] px-[35px] py-[15px] border-[1px] text-[16px] font-[lufga500] uppercase hover:bg-[#000] hover:text-[#fff] cursor-pointer">Sign In</div> </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default RegisterMain