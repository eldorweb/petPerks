import { useEffect, useState } from 'react';
import regImg from '../assets/png/home/regImg.png'
import Loader from '../components/loader';
import { Link, useNavigate } from 'react-router';
import AOS from 'aos'
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setIsLoading(true);

        if (!firstName || !email || !password) {
            setError("All fields are required.");
            setIsLoading(false);
            toast.error("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match. Please confirm.");
            setIsLoading(false);
            toast.error("Passwords do not match. Please confirm.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Invalid email format.");
            setIsLoading(false);
            toast.error("Invalid email format.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            setIsLoading(false);
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        ;

        const payload = {
            firstName,
            email,
            password,
            role: "user",
        };

        try {
            const response = await axios.post(
                "http://localhost:8080/auth/register",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Registration response:", response.data);
            setSuccess("Registration successful!");
            toast.success("User successfully registered!");
            navigate("/home");
        } catch (error: any) {
            let message = "Failed to register user. Please try again.";
            if (error.response) {
                if (error.response.data?.error) {
                    message = error.response.data.error;
                } else if (Array.isArray(error.response.data?.errors) && error.response.data.errors.length > 0) {
                    message = error.response.data.errors[0].msg;
                }
            } else if (error.request) {
                message = "Unable to connect to the server. Please check your network or try again later.";
                console.error("No response received:", error.request);
            } else {
                message = "An unexpected error occurred. Please try again.";
                console.error("Error:", error.message);
            }
            setError(message);
            toast.error(message);
            console.error("Full error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

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
                        <form onSubmit={handleSubmit} className="gap-[30px] mb-[44px] flex flex-col w-[100%]">
                            <div className="flex flex-col">
                                <label htmlFor="username text-start" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]">Username</label>
                                <input type="text" value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} required className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' placeholder='Username' id='username' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]">Email Address</label>
                                <input type="email" required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder='Email Address' className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' />
                            </div>
                            <label htmlFor="password" className="text-[#000] text-[16px] font-[lufga500] mb-[-20px]">Password</label>
                            <div className="flex flex-col" style={{ position: "relative", width: "100%" }}>
                                <input name="password" id="password" placeholder='Password' type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ paddingRight: "40px", width: "100%", boxSizing: "border-box" }} className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' />
                                <span
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        color: "#000",
                                    }}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </span>
                            </div>
                            {error && (
                                <p style={{ color: "red" }} role="alert">
                                    {error}
                                </p>
                            )}
                            {success && (
                                <p style={{ color: "green" }} role="alert">
                                    {success}
                                </p>
                            )}
                            <label htmlFor="ConfirmPassword" className="text-[#000] text-[16px] font-[lufga500] mb-[-20px]">Confirm Password</label>
                            <div className="flex flex-col" style={{ position: "relative", width: "100%" }}>
                                <input type={showConfirmPassword ? "text" : "password"}
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    style={{ paddingRight: "40px", width: "100%", boxSizing: "border-box" }} name="password" id="ConfirmPassword" placeholder='Password' className='border-[1px] rounded-[10px] py-[18px] pl-[24px] placeholder:text-[#000] placeholder:text-[15px]' />
                                <span
                                    onClick={toggleConfirmPasswordVisibility}
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        color: "#000",
                                    }}
                                >
                                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </span>
                            </div>
                            <div className="flex gap-[5px] ml-auto mr-auto">
                                <button disabled={isLoading} type="submit" className="rounded-[10px] px-[25px] py-[15px] border-[1px] text-[16px] font-[lufga500] uppercase hover:bg-[#000] hover:text-[#fff] cursor-pointer">{isLoading ? "Registering..." : "Register"}</button>
                                <Link to={"/login"}><div className="rounded-[10px] px-[35px] py-[15px] border-[1px] text-[16px] font-[lufga500] uppercase hover:bg-[#000] hover:text-[#fff] cursor-pointer">Sign In</div> </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default RegisterMain