import { useEffect, useState } from "react";
import dogChew from '../assets/png/home/cart/dogCewToys.jpg'
import petBed from '../assets/png/home/foods/dogBed.png'
import petBelt from '../assets/png/home/foods/dogBelt.png'
import petCloth from '../assets/png/home/foods/dogCloth.png'
import petToy from '../assets/png/home/foods/dogToy.png'
import plane from '../assets/svg/home/air-plane.svg'
import box from '../assets/svg/home/box-tick.svg'
import Loader from "./loader";

const ShopCart = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);

    function handleIncrement1() {
        if (count1 < 100) {
            setCount1(count1 + 1);
        }
    }
    function handleDecrement1() {
        if (count1 > 0) {
            setCount1(count1 - 1);
        }
    }
    function handleIncrement2() {
        if (count2 < 100) {
            setCount2(count2 + 1);
        }
    }
    function handleDecrement2() {
        if (count2 > 0) {
            setCount2(count2 - 1);
        }
    }
    function handleIncrement3() {
        if (count3 < 100) {
            setCount3(count3 + 1);
        }
    }
    function handleDecrement3() {
        if (count3 > 0) {
            setCount3(count3 - 1);
        }
    }
    function handleIncrement4() {
        if (count4 < 100) {
            setCount4(count4 + 1);
        }
    }
    function handleDecrement4() {
        if (count4 > 0) {
            setCount4(count4 - 1);
        }
    }
    function handleIncrement5() {
        if (count5 < 100) {
            setCount5(count5 + 1);
        }
    }
    function handleDecrement5() {
        if (count5 > 0) {
            setCount5(count5 - 1);
        }
    }
    function handleIncrement6() {
        if (count6 < 100) {
            setCount6(count6 + 1);
        }
    }
    function handleDecrement6() {
        if (count6 > 0) {
            setCount6(count6 - 1);
        }
    }

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
        <div className="flex flex-col text-center">
            <div className="py-[89px] bg-[#2D0B03CC]">
                <h1 className="text-[#fff] font-[lufga600] text-[40px] mb-[16px]">Cart</h1>
                <p className="text-[#fff] text-[16px] fonr-[lufga400]">Home   {'>'}  Cart</p>
            </div>
            <div className="py-[91px] px-[316px] flex justify-between">
                <div className="w-[60%]">
                <table className=" text-start">
                    <thead className="">
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <th className="text-start text-[20px] font-[lufga600] ">Product</th>
                            <th className="text-start text-[20px] font-[lufga600] pr-[50px]">Price</th>
                            <th className="text-start text-[20px] font-[lufga600] pr-[80px]">Quantity</th>
                            <th className="text-start text-[20px] font-[lufga600] pr-[32px]">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {/*  */}
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <td className="">
                                <div className="flex items-center">
                                    <img src={'https://m.media-amazon.com/images/I/61qjyzM3+BL._AC_SX148_SY213_QL70_.jpg'} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize">Brush for Dogs and Cats</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize opacity-[0.5] mr-[50px]">$40.00</td>
                            <td className="">
                                <div className="flex items-center gap-[10px]">
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleDecrement1}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className="w-[15px] text-center">{count1}</div>
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleIncrement1}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9 3.75V14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="">
                                <div className="flex items-center w-[135px] justify-between">
                                    <p className="text-[16px] font-[lufga500] text-[#000] mr-[33px]">$160.00</p>
                                    <button className="bg-[#000] rounded-[60px] p-[11px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 5L5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/*  */}

                        {/*  */}
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <td className="">
                                <div className="flex items-center">
                                    <img src={dogChew} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize">Goofy Tails Wood Dog Free Dog Chew Toys</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize opacity-[0.5] mr-[50px]">$40.00</td>
                            <td className="">
                                <div className="flex items-center gap-[10px]">
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleDecrement2}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className="w-[15px] text-center">{count2}</div>
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleIncrement2}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9 3.75V14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="">
                                <div className="flex items-center w-[135px] justify-between">
                                    <p className="text-[16px] font-[lufga500] text-[#000] mr-[33px]">$120.00</p>
                                    <button className="bg-[#000] rounded-[60px] p-[11px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 5L5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/*  */}

                        {/*  */}
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <td className="">
                                <div className="flex items-center">
                                    <img src={petBed} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize">Pet Bed For Dog</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize opacity-[0.5] mr-[50px]">$40.00</td>
                            <td className="">
                                <div className="flex items-center gap-[10px]">
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleDecrement3}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className="w-[15px] text-center">{count3}</div>
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleIncrement3}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9 3.75V14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="">
                                <div className="flex items-center w-[135px] justify-between">
                                    <p className="text-[16px] font-[lufga500] text-[#000] mr-[33px]">$40.00</p>
                                    <button className="bg-[#000] rounded-[60px] p-[11px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 5L5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/*  */}
                        {/*  */}
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <td className="">
                                <div className="flex items-center">
                                    <img src={petBelt} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize">Dog Harness, Adjustable For Large Dog Body Belt</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize opacity-[0.5] mr-[50px]">$40.00</td>
                            <td className="">
                                <div className="flex items-center gap-[10px]">
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleDecrement4}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className="w-[15px] text-center">{count4}</div>
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleIncrement4}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9 3.75V14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="">
                                <div className="flex items-center w-[135px] justify-between">
                                    <p className="text-[16px] font-[lufga500] text-[#000] mr-[33px]">$160.00</p>
                                    <button className="bg-[#000] rounded-[60px] p-[11px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 5L5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/*  */}
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <td className="">
                                <div className="flex items-center">
                                    <img src={petCloth} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize">Dog Winter Sweater for Golden  Retrievers</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize opacity-[0.5] mr-[50px]">$40.00</td>
                            <td className="">
                                <div className="flex items-center gap-[10px]">
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleDecrement5}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className="w-[15px] text-center">{count5}</div>
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleIncrement5}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9 3.75V14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="">
                                <div className="flex items-center w-[135px] justify-between">
                                    <p className="text-[16px] font-[lufga500] text-[#000] mr-[33px]">$120.00</p>
                                    <button className="bg-[#000] rounded-[60px] p-[11px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 5L5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/*  */}
                        {/*  */}
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <td className="">
                                <div className="flex items-center">
                                    <img src={petToy} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize">dog chew toys</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize opacity-[0.5] mr-[50px]">$40.00</td>
                            <td className="">
                                <div className="flex items-center gap-[10px]">
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleDecrement6}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className="w-[15px] text-center">{count6}</div>
                                    <button className="rounded-[30px] border-none bg-[#000] px-[8px] py-[8px] text-[#fff]" onClick={handleIncrement6}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9 3.75V14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="">
                                <div className="flex items-center w-[135px] justify-between">
                                    <p className="text-[16px] font-[lufga500] text-[#000] mr-[33px]">$40.00</p>
                                    <button className="bg-[#000] rounded-[60px] p-[11px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 5L5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/*  */}
                    </tbody>
                </table>
                    <div className="flex justify-between items-center mt-[30px]">
                        <form className="flex w-[420px] border-[1px] rounded-[10px] items-center justify-between py-[7.5px] px-[20px]">
                            <label htmlFor="form" className="font-[lufga400] text-[15px] text-[#000]">Coupon Code</label>
                            <input type="text" className="text-end placeholder:font-[lufga500] placeholder:text-[15px] p-[10px] outline-none" placeholder="Apply Coupon"/>
                        </form>
                        <button className="text-[#fff] text-[16px] font-[lufga500] cursor-pointer uppercase py-[15px] px-[35px] border-none rounded-[10px] bg-[#000]">Update Cart</button>
                    </div>
                </div>


                <div className="">
                    <h2 className="text-[20px] font-[lufga500] text-[#000] mb-[17px] text-start">Cart Total</h2>
                    <div className="border-[1px] rounded-[20px] p-[30px] w-[400px] flex flex-col">
                        <div className="text-center text-[#000] font-[lufga400] text-[16px] capitalize px-[70px] py-[15px] mb-[21px] rounded-[10px] border-[1px] ">Bank Offer 5% Cashback</div>
                        <div className="flex py-[20px] pl-[19px] border-[1px] rounded-[20px] mb-[20px]">
                            <img src={plane} alt="airplane" className="w-[45px] h-[45px] mr-[15px]" />
                            <div className="flex flex-col items-start">
                                <p className="font-[lufga400] text-[13px] text-[#000] mb-[5px]">Free</p>
                                <p className="text-[#000] text-[16px] font-[lufga500]">Shipping</p>
                            </div>
                        </div>
                        <div className="border-[1px] rounded-[10px] pt-[21px] pb-[16px] pl-[16px] pr-[13px] flex items-center mb-[37px]">
                            <img src={box} alt="box" className="w-[50px] mr-[22px]" />
                            <div className="flex flex-col items-start">
                                <h4 className="font-[lufga500] text-[16px] text-[#000] mb-[5px]">Enjoy The Product</h4>
                                <p className="text-[14px] font-[lufga400] text-[#000] text-start">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            </div>
                        </div>
                        <div className="flex pb-[13px] border-b-[1px] border-[#00000066] mb-[24px]">
                            <input type="checkbox" name="check" id="check" className="appearance-none h-[20px] w-[20px] border-[1px] rounded-[10px] cursor-pointer flex items-center justify-center outline-none after:content-['✔️'] after:text-[15px] after:text-[#fff] after:hidden checked:after:block after:rounded-[10px] mr-[10px]"/>
                            <div className="font-[lufga500] text-[16px] text-[#000]">You will save ₹504 on this order</div>
                        </div>
                        <div className="flex items-center justify-between pb-[29px]">
                            <p className="text-[#000] font-[lufga500] text-[16px]">Total Amount</p>
                            <p className="text-[#000] font-[lufga500] text-[24px]">$125.75</p>
                        </div>
                        <button className="cursor-pointer flex text-[16px] text-center items-center justify-center font-[lufga500] text-[#fff] uppercase px-[35px] py-[15px] rounded-[10px] bg-[#000]">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCart