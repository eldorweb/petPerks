import img1 from '../../assets/png/home/galery7.jpg'
import img2 from '../../assets/png/home/galery3.jpg'
import person from '../../assets/png/home/user1.jpg'
import person2 from '../../assets/png/home/galery8.jpg'
import PetLovers from '../home/petLovers'
import logo1 from '../../assets/svg/Logo1.svg'
import logo2 from '../../assets/svg/Logo2.svg'
import logo3 from '../../assets/svg/Logo3.svg'
import logo4 from '../../assets/svg/Logo4.svg'
import logo5 from '../../assets/svg/Logo5.svg'
import logo6 from '../../assets/svg/Logo6.svg'
import logo7 from '../../assets/svg/Logo7.svg'
import logo8 from '../../assets/svg/Logo8.svg'
import { useState } from 'react'

const AboutMain = () => {
    const [toggled, setToggled] = useState(false)
    const [toggled1, setToggled1] = useState(false)
    const [toggled2, setToggled2] = useState(false)
    const [toggled3, setToggled3] = useState(false)
    const [toggled4, setToggled4] = useState(false)


    return (
        <div className="mr-auto ml-auto">
            <div className="relative">
                <div className="py-[89px] h-[277px] bg-[url('https://images.unsplash.com/photo-1444212477490-ca407925329e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhbGtpbmd3aXRoJTIwZG9nfGVufDB8fDB8fHww')] bg-center bg-cover bg-no-repeat text-center ">
                    <div className=" py-[89px] bg-[#2D0B03CC] w-[100%] -z-0 absolute top-0">
                        <h1 className="text-[#fff] font-[lufga600] text-[40px] mb-[16px]">About Us</h1>
                        <p className="text-[#fff] text-[16px] fonr-[lufga400]">Home   {'>'}  About us</p>
                    </div>
                </div>
            </div>
            <div className="flex pt-[130px] pb-[190px] mr-auto ml-auto px-[311px]">
                <div className="w-[50%] mr-[35px]">
                    <div className="flex mb-[31px]">
                        <img src={img1} alt="img" className="w-[409px] h-[261px] object-fill rounded-tl-[150px] mr-[30px]" />
                        <img src={img2} alt="img" className="w-[190px] h-[261px] object-fill rounded-t-[150px]" />
                    </div>
                    <div className="flex flex-col justify-center gap-[10px]">
                        {/*  */}
                        <div className="flex flex-col">
                            <div className={`flex-col cursor-pointer  py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px] ${toggled ? "toggled" : " "}`} id='fn' onClick={() => setToggled(!toggled)}>
                                <div className="flex items-center justify-between mb-[10px]">
                                <p className="text-[#000] text-[18px]">How can I contact customer support?</p>
                                <div className={`flex `}  >
                                        <div className={`items-center justify-center bg-[#000] rounded-[15px] hidden`} id='minus'>
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
                                    <p className="py-[20px] border-[1px] rounded-2xl p-[20px] hidden" id='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis ratione quisquam labore quam sint, a quia ipsam. Natus distinctio doloremque cupiditate molestiae exercitationem, in porro inventore reiciendis praesentium, corrupti cum, quo iste velit esse culpa quos provident nulla veniam? Eaque itaque eveniet nemo a architecto perferendis dolor aspernatur quaerat odit corrupti similique provident quos repudiandae aperiam vitae error praesentium amet recusandae nostrum aut laudantium, magnam id sed rerum? Maiores iure praesentium deleniti dolores consequatur magni aliquid excepturi officia odio ab. Quaerat maiores veritatis rem, soluta, quas nisi temporibus porro eligendi, culpa ratione exercitationem inventore quod consequatur officia. Mollitia, fuga.</p>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex flex-col">
                            <div className={`flex-col cursor-pointer  py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px] ${toggled1 ? "toggled" : " "}`} id='fn' onClick={() => setToggled1(!toggled1)}>
                                <div className="flex items-center justify-between mb-[10px]">
                                <p className="text-[#000] text-[18px]">How can I contact customer support?</p>
                                <div className={`flex `}  >
                                        <div className={`items-center justify-center bg-[#000] rounded-[15px] hidden`} id='minus'>
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
                                    <p className="py-[20px] border-[1px] rounded-2xl p-[20px] hidden" id='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis ratione quisquam labore quam sint, a quia ipsam. Natus distinctio doloremque cupiditate molestiae exercitationem, in porro inventore reiciendis praesentium, corrupti cum, quo iste velit esse culpa quos provident nulla veniam? Eaque itaque eveniet nemo a architecto perferendis dolor aspernatur quaerat odit corrupti similique provident quos repudiandae aperiam vitae error praesentium amet recusandae nostrum aut laudantium, magnam id sed rerum? Maiores iure praesentium deleniti dolores consequatur magni aliquid excepturi officia odio ab. Quaerat maiores veritatis rem, soluta, quas nisi temporibus porro eligendi, culpa ratione exercitationem inventore quod consequatur officia. Mollitia, fuga.</p>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex flex-col">
                            <div className={`flex-col cursor-pointer  py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px] ${toggled2? "toggled" : " "}`} id='fn' onClick={() => setToggled2(!toggled2)}>
                                <div className="flex items-center justify-between mb-[10px]">
                                <p className="text-[#000] text-[18px]">How can I contact customer support?</p>
                                <div className={`flex `}  >
                                        <div className={`items-center justify-center bg-[#000] rounded-[15px] hidden`} id='minus'>
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
                                    <p className="py-[20px] border-[1px] rounded-2xl p-[20px] hidden" id='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis ratione quisquam labore quam sint, a quia ipsam. Natus distinctio doloremque cupiditate molestiae exercitationem, in porro inventore reiciendis praesentium, corrupti cum, quo iste velit esse culpa quos provident nulla veniam? Eaque itaque eveniet nemo a architecto perferendis dolor aspernatur quaerat odit corrupti similique provident quos repudiandae aperiam vitae error praesentium amet recusandae nostrum aut laudantium, magnam id sed rerum? Maiores iure praesentium deleniti dolores consequatur magni aliquid excepturi officia odio ab. Quaerat maiores veritatis rem, soluta, quas nisi temporibus porro eligendi, culpa ratione exercitationem inventore quod consequatur officia. Mollitia, fuga.</p>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex flex-col">
                            <div className={`flex-col cursor-pointer  py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px] ${toggled3 ? "toggled" : " "}`} id='fn' onClick={() => setToggled3(!toggled3)}>
                                <div className="flex items-center justify-between mb-[10px]">
                                <p className="text-[#000] text-[18px]">How can I contact customer support?</p>
                                <div className={`flex `}  >
                                        <div className={`items-center justify-center bg-[#000] rounded-[15px] hidden`} id='minus'>
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
                                    <p className="py-[20px] border-[1px] rounded-2xl p-[20px] hidden" id='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis ratione quisquam labore quam sint, a quia ipsam. Natus distinctio doloremque cupiditate molestiae exercitationem, in porro inventore reiciendis praesentium, corrupti cum, quo iste velit esse culpa quos provident nulla veniam? Eaque itaque eveniet nemo a architecto perferendis dolor aspernatur quaerat odit corrupti similique provident quos repudiandae aperiam vitae error praesentium amet recusandae nostrum aut laudantium, magnam id sed rerum? Maiores iure praesentium deleniti dolores consequatur magni aliquid excepturi officia odio ab. Quaerat maiores veritatis rem, soluta, quas nisi temporibus porro eligendi, culpa ratione exercitationem inventore quod consequatur officia. Mollitia, fuga.</p>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="flex flex-col">
                            <div className={`flex-col cursor-pointer  py-[18.5px] px-[23.5px] border-[1px] rounded-[10px] mb-[20px] ${toggled4 ? "toggled" : " "}`} id='fn' onClick={() => setToggled4(!toggled4)}>
                                <div className="flex items-center justify-between mb-[10px]">
                                <p className="text-[#000] text-[18px]">How can I contact customer support?</p>
                                <div className={`flex `}  >
                                        <div className={`items-center justify-center bg-[#000] rounded-[15px] hidden`} id='minus'>
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
                                    <p className="py-[20px] border-[1px] rounded-2xl p-[20px] hidden" id='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis ratione quisquam labore quam sint, a quia ipsam. Natus distinctio doloremque cupiditate molestiae exercitationem, in porro inventore reiciendis praesentium, corrupti cum, quo iste velit esse culpa quos provident nulla veniam? Eaque itaque eveniet nemo a architecto perferendis dolor aspernatur quaerat odit corrupti similique provident quos repudiandae aperiam vitae error praesentium amet recusandae nostrum aut laudantium, magnam id sed rerum? Maiores iure praesentium deleniti dolores consequatur magni aliquid excepturi officia odio ab. Quaerat maiores veritatis rem, soluta, quas nisi temporibus porro eligendi, culpa ratione exercitationem inventore quod consequatur officia. Mollitia, fuga.</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex">
                            <div className="mr-[81px]">
                                <h1 className="text-[#000] font-[lufga500] text-[80px]">50+</h1>
                                <p className="text-[20px] capitalize">Items Sale</p>
                            </div>
                            <div className="">
                                <h1 className="text-[#000] font-[lufga500] text-[80px]">400%</h1>
                                <p className="text-[20px] capitalize">Return on investment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] pt-[20px]">
                    <h2 className="mb-[15px] text-[#000] font-[lufga600] text-[42px]">The personality and style you want stars our pet care show!</h2>
                    <p className="mb-[33px] text-[#000] font-[lufga400] text-[16px]">
                        At Untouch, we are on a mission to redefine fashion by blending style, quality, and individuality into every garment we offer. We believe that what you wear is an extension of your unique personality, and it and aspirations.
                    </p>
                    <div className="flex items-center mb-[34px]">
                        <img src={person} alt="petlover" className="w-[60px] h-[60px] rounded-[30px] object-cover mr-[16px]" />
                        <div className="flex flex-col justify-center">
                            <p className=" text-[#000] text-[22px] font-[lufga600] capitalize">Kenneth Fong</p>
                            <p className="text-[#000] text-[16px] capitalize">Ceo and founder</p>
                        </div>
                    </div>
                    <img src={person2} alt="img" className="w-[631px] h-[567px] rounded-tr-[150px] object-cover" />
                </div>
            </div>
            <PetLovers />
            <div className="flex mr-auto ml-auto px-[314px] py-[90px]">
                <div className="mr-[20px]">
                    <h3 className="text-[28px] font-[lufga500] w-[45%] mb-[15px]">
                        We’re just keep growing with 6.3k trusted companies
                    </h3>
                    <p className='w-[80%] text-[#000] text-[16px]'>Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.</p>
                </div>
                <div className="grid grid-cols-4 gap-[30px]">
                    <img src={logo1} alt="img" className="" />
                    <img src={logo2} alt="img" className="" />
                    <img src={logo3} alt="img" className="" />
                    <img src={logo4} alt="img" className="" />
                    <img src={logo5} alt="img" className="" />
                    <img src={logo6} alt="img" className="" />
                    <img src={logo7} alt="img" className="" />
                    <img src={logo8} alt="img" className="" />
                </div>
            </div>
        </div>
    )
}

export default AboutMain