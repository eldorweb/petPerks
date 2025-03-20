

const Faqs = () => {
    return (
        <div className="mr-auto ml-auto">
            <div className="relative">
                <div className="py-[89px] bg-[#2D0B03CC] text-center flex flex-col items-center">
                    <h1 className="text-[#fff] font-[lufga600] text-[40px] mb-[16px]">How can we help you?</h1>
                    <p className="text-[#fff] text-[16px] fonr-[lufga400] mb-[36px]">Home   {'>'}  Faqs</p>
                    <div className="relative">
                        <form action="for" className="flex after:content-['🔍'] after:absolute after:right-[20px] after:top-[15px]">
                            <input type="text" className="border-[1px] text-[#fff] outline-0 border-[#fff] rounded-[20px] py-[13px] pl-[23px] pr-[200px] placeholder:text-[#fff] placeholder:text-[15px] " placeholder="Search Product" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[25px] mx-auto px-[314px] py-[80px]">
                        {/*  */}
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                                <p className="text-[#000] text-[18px]">How can I contact customer support?</p>
                                <div className="flex" id='fn'>
                                    <div className="items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className="py-[20px] hidden" id='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis ratione quisquam labore quam sint, a quia ipsam. Natus distinctio doloremque cupiditate molestiae exercitationem, in porro inventore reiciendis praesentium, corrupti cum, quo iste velit esse culpa quos provident nulla veniam? Eaque itaque eveniet nemo a architecto perferendis dolor aspernatur quaerat odit corrupti similique provident quos repudiandae aperiam vitae error praesentium amet recusandae nostrum aut laudantium, magnam id sed rerum? Maiores iure praesentium deleniti dolores consequatur magni aliquid excepturi officia odio ab. Quaerat maiores veritatis rem, soluta, quas nisi temporibus porro eligendi, culpa ratione exercitationem inventore quod consequatur officia. Mollitia, fuga.</p>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">Can I cancel my order?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">Do you offer international shipping?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">Can I track my order in real-time?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">How do I know if a product is in stock?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">How do I know if a product is in stock?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">How do I know if a product is in stock?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">How do I know if a product is in stock?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">How do I know if a product is in stock?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">How do I know if a product is in stock?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex items-center justify-between py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px]">
                            <p className="text-[#000] text-[18px]">How do I know if a product is in stock?</p>
                            <div className="flex">
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px] hidden" id='minus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center bg-[#000] rounded-[15px]" id='plus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.5 4.25V14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.25 9.5H14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <p className="text-[#000] text-[16px]">It is a long established fact that a reader will be distracted and by the readable content of a page when looking at don't look even slightly believable.</p>
                    </div>
        </div>
    )
}

export default Faqs