
// linear-gradient(to right, #544a7d, #ffd452);
const Favorites = () => {
    return (
        <div className="flex flex-col">
            <div className="relative">
                <div className="py-[89px] h-[277px] bg-[url('https://images.unsplash.com/photo-1444212477490-ca407925329e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhbGtpbmd3aXRoJTIwZG9nfGVufDB8fDB8fHww')] bg-center bg-cover bg-no-repeat text-center ">
                    <div className="bg-[#2D0B03CC] h-[100%] w-[100%] -z-0 absolute top-0 flex flex-col justify-center">
                    <h1 className="text-[#fff] font-[lufga600] text-[40px] mb-[16px]">Wishlist</h1>
                    <p className="text-[#fff] text-[16px] fonr-[lufga400]">Home   {'>'}  Wishlist</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center  pt-[86px] pb-[100px]">
                <table className=" text-start">
                    <thead className="">
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <th className="text-start text-[20px] font-[lufga600] ">Product</th>
                            <th className="text-start text-[20px] font-[lufga600] pr-[50px]">Price</th>
                            <th className="text-start text-[20px] font-[lufga600] pr-[80px]">Stock</th>
                            <th className="text-start text-[20px] font-[lufga600] pr-[20px]"></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {/*  */}
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <td className="">
                                <div className="flex items-center">
                                    <img src={'https://m.media-amazon.com/images/I/61qjyzM3+BL._AC_SX148_SY213_QL70_.jpg'} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize pr-[126px]">Brush for Dogs and Cats</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize mr-[50px] pr-[100px]">$40.00 <br /><span className="text-[14px] font-[lufga400] text-[#000] opacity-[0.5] capitalize pr-[40px]">$45.00</span></td>
                            <td className="font-[lufga500] text-[16px] text-[#000]">In Stock</td>
                            <td className="">
                                <div className="flex items-center justify-between">
                                    <button className="font-[lufga500] text-[16px] capitalize text-[#fff] bg-[#000] border-none rounded-[10px] px-[24px] py-[12px] mr-[25px] cursor-pointer">Add To Cart</button>
                                    <button className="bg-[#000] rounded-[60px] p-[11px] cursor-pointer">
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
                                    <img src={'https://m.media-amazon.com/images/I/61qjyzM3+BL._AC_SX148_SY213_QL70_.jpg'} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize pr-[126px]">Brush for Dogs and Cats</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize mr-[50px] pr-[100px]">$40.00 <br /><span className="text-[14px] font-[lufga400] text-[#000] opacity-[0.5] capitalize pr-[40px]">$45.00</span></td>
                            <td className="font-[lufga500] text-[16px] text-[#000]">In Stock</td>
                            <td className="">
                                <div className="flex items-center justify-between">
                                    <button className="font-[lufga500] text-[16px] capitalize text-[#fff] bg-[#000] border-none rounded-[10px] px-[24px] py-[12px] mr-[25px] cursor-pointer">Add To Cart</button>
                                    <button className="bg-[#000] rounded-[60px] p-[11px] cursor-pointer">
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
                                    <img src={'https://m.media-amazon.com/images/I/61qjyzM3+BL._AC_SX148_SY213_QL70_.jpg'} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize pr-[126px]">Brush for Dogs and Cats</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize mr-[50px] pr-[100px]">$40.00 <br /><span className="text-[14px] font-[lufga400] text-[#000] opacity-[0.5] capitalize pr-[40px]">$45.00</span></td>
                            <td className="font-[lufga500] text-[16px] text-[#000]">In Stock</td>
                            <td className="">
                                <div className="flex items-center justify-between">
                                    <button className="font-[lufga500] text-[16px] capitalize text-[#fff] bg-[#000] border-none rounded-[10px] px-[24px] py-[12px] mr-[25px] cursor-pointer">Add To Cart</button>
                                    <button className="bg-[#000] rounded-[60px] p-[11px] cursor-pointer">
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
                                    <img src={'https://m.media-amazon.com/images/I/61qjyzM3+BL._AC_SX148_SY213_QL70_.jpg'} alt="" className="w-[80px] h-[80px] rounded-2xl my-[20px] mr-[20px] border-[1px]" />
                                    <p className="font-[lufga500] text-[20px] text-[#000] capitalize pr-[126px]">Brush for Dogs and Cats</p>
                                </div>
                            </td>
                            <td className="text-[16px] font-[lufga500] text-[#000] capitalize mr-[50px] pr-[100px]">$40.00 <br /><span className="text-[14px] font-[lufga400] text-[#000] opacity-[0.5] capitalize pr-[40px]">$45.00</span></td>
                            <td className="font-[lufga500] text-[16px] text-[#000]">In Stock</td>
                            <td className="">
                                <div className="flex items-center justify-between">
                                    <button className="font-[lufga500] text-[16px] capitalize text-[#fff] bg-[#000] border-none rounded-[10px] px-[24px] py-[12px] mr-[25px] cursor-pointer">Add To Cart</button>
                                    <button className="bg-[#000] rounded-[60px] p-[11px] cursor-pointer">
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
            </div>
        </div>
    )
}

export default Favorites