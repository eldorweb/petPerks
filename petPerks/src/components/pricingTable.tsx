import checkbox from '../assets/svg/about/Checkbox.svg'

const PricingTable = () => {
    return (
        <div className="">
            <div className="relative">
                <div className="py-[89px] h-[277px] bg-[url('https://images.unsplash.com/photo-1444212477490-ca407925329e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhbGtpbmd3aXRoJTIwZG9nfGVufDB8fDB8fHww')] bg-center bg-cover bg-no-repeat text-center ">
                    <div className="bg-[#2D0B03CC] h-[100%] w-[100%] -z-0 absolute top-0 flex flex-col justify-center">
                        <h1 className="text-[#fff] font-[lufga600] text-[40px] mb-[16px]">Pricing Table</h1>
                        <p className="text-[#fff] text-[16px] fonr-[lufga400]">Home   {'>'}  Pricing Table</p>
                    </div>
                </div>
            </div>
            <div className="py-[100px] mx-auto px-[315px]">
                <div className="flex gap-[30px] mb-[80px]">
                    {/*  */}
                    <div className="rounded-[30px] bg-[#fff] py-[42px] px-[40px]">
                        <h3 className="text-[#000] text-[24px] font-[lufga600] mb-[15px]">Basic Plan</h3>
                        <div className="flex items-center mb-[20px]" >
                            <p className="text-[#000] text-[60px] font-[lufga500]">$19</p>
                            <p className="text-[#000] text-[15px] font-[lufga500]">/ Month</p>
                        </div>
                        <p className="text-[#24262B] font-[lufga500] text-[16px] mb-[30px]">Basic Feature For  Up To 10 Users</p>
                        <button className="text-[16px] font-[lufga500] px-[112px] py-[15px] rounded-[10px] border-[1px] cursor-pointer hover:text-[#fff] hover:bg-[#000] mb-[30px]">Try for free</button>
                        <hr className="text-[#D7D7D7] mb-[30px]" />
                        <div className="flex flex-col">
                            <p className="text-[#000] text-[16px] font-[lufga500] mb-[10px]">Key Features:</p>
                            <p className="text-[#24262B] font-[lufga400] text-[14px] mb-[20px]">Everything in our free plan...</p>
                            <div className="">
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>Access to all features</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>Assisted onboarding support</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>CPM Overage: Unlimited</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px] opacity-50" />
                                    <p className='text-[16px] font-[lufga400] opacity-50'>Program reviews 1x a month</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px] opacity-50" />
                                    <p className='text-[16px] font-[lufga400] opacity-50'>CPM Overage: Unlimited</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px] opacity-50" />
                                    <p className='text-[16px] font-[lufga400] opacity-50'>Assisted onboarding support</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px] opacity-50" />
                                    <p className='text-[16px] font-[lufga400] opacity-50'>CPM Overage: Unlimited</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="rounded-[30px] bg-[#fff] py-[42px] px-[40px]">
                        <div className="flex  items-start  justify-between">
                            <h3 className="text-[#000] text-[24px] font-[lufga600] mb-[15px]">Popular plan</h3>
                            <div className="text-[16px] font-[lufga500] px-[24px] py-[6px] rounded-[4px] bg-[#FFEFEB]">Popular</div>
                        </div>
                        <div className="flex items-center mb-[20px]" >
                            <p className="text-[#000] text-[60px] font-[lufga500]">$39</p>
                            <p className="text-[#000] text-[15px] font-[lufga500]">/ Month</p>
                        </div>
                        <p className="text-[#24262B] font-[lufga500] text-[16px] mb-[30px]">Popular Feature For  Up To 10 Users</p>
                        <button className="text-[16px] font-[lufga500] px-[112px] py-[15px] rounded-[10px] border-[1px] cursor-pointer hover:text-[#fff] hover:bg-[#000] mb-[30px]">Try for free</button>
                        <hr className="text-[#D7D7D7] mb-[30px]" />
                        <div className="flex flex-col">
                            <p className="text-[#000] text-[16px] font-[lufga500] mb-[10px]">Key Features:</p>
                            <p className="text-[#24262B] font-[lufga400] text-[14px] mb-[20px]">Everything in our free plan...</p>
                            <div className="">
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>Access to all features</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>Assisted onboarding support</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>CPM Overage: Unlimited</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>Program reviews 1x a month</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>CPM Overage: Unlimited</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px] opacity-50" />
                                    <p className='text-[16px] font-[lufga400] opacity-50'>Assisted onboarding support</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px] opacity-50" />
                                    <p className='text-[16px] font-[lufga400] opacity-50'>CPM Overage: Unlimited</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="rounded-[30px] bg-[#fff] py-[42px] px-[40px]">
                            <h3 className="text-[#000] text-[24px] font-[lufga600] mb-[15px]">Enterprise plan</h3>
                        <div className="flex items-center mb-[20px]" >
                            <p className="text-[#000] text-[60px] font-[lufga500]">$69</p>
                            <p className="text-[#000] text-[15px] font-[lufga500]">/ Month</p>
                        </div>
                        <p className="text-[#24262B] font-[lufga500] text-[16px] mb-[30px]">Enterprise Feature For  Up To 10 Users</p>
                        <button className="text-[16px] font-[lufga500] px-[112px] py-[15px] rounded-[10px] border-[1px] cursor-pointer hover:text-[#fff] hover:bg-[#000] mb-[30px]">Try for free</button>
                        <hr className="text-[#D7D7D7] mb-[30px]" />
                        <div className="flex flex-col">
                            <p className="text-[#000] text-[16px] font-[lufga500] mb-[10px]">Key Features:</p>
                            <p className="text-[#24262B] font-[lufga400] text-[14px] mb-[20px]">Everything in our free plan...</p>
                            <div className="">
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>Access to all features</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>Assisted onboarding support</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>CPM Overage: Unlimited</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>Program reviews 1x a month</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>CPM Overage: Unlimited</p>
                                </div>
                                <div className="flex items-center mb-[16px]">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>Assisted onboarding support</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={checkbox} alt="checkbox" className="mr-[12px]" />
                                    <p className='text-[16px] font-[lufga400]'>CPM Overage: Unlimited</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
                <div className="flex items-center py-[25px] px-[248px] bg-[#000] rounded-[20px]">
                    <h4 className="text-[#fff] text-[24px] font-[lufga400] capitalize mr-[16px]">Questions ?</h4>
                    <p className="text-[#fff] text-[17px] mr-[81px]">Our experts will help find the grar that’s right for you</p>
                    <div className="text-[#000] text-[16px] font-[lufga500] px-[20px] py-[16px] rounded-[10px] bg-[#fff] hover:bg-[yellow] cursor-pointer hover:font-[lufga600]">Get In Touch</div>
                </div>
            </div>
        </div>
    )
}

export default PricingTable