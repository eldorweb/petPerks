import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import friendship from '../../assets/png/home/dogCatFriendship.png'
import lover1 from '../../assets/png/home/user1.jpg'
import lover2 from '../../assets/png/home/user2.jpg'
import lover3 from '../../assets/png/home/user3.jpg'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';


const PetLovers = () => {
    let arrows = document.querySelectorAll('.arrow');
    arrows.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            arrows.forEach(arrow => {
                arrow.classList.remove('active')
            })
            arrow.classList.add('active')
        })
    })


    return (
        <div className="pb-[80px] px-[80px] relative">
            <div className="flex bg-[#FFFBFA] rounded-[60px] pl-[235px] py-[95px] pr-[100px]">
                <Carousel
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    renderArrowPrev={(clickHandler) => {
                        return (
                            <div
                                className='absolute bottom-0 right-[200px] flex justify-center items-center p-3 opacity-100 rounded-[50px] hover:opacity-70 cursor-pointer z-20'
                                onClick={clickHandler}
                            >
                                <FaArrowCircleLeft className="w-9 h-9 arrow" />
                            </div>
                        );
                    }}
                    renderArrowNext={(clickHandler) => {
                        return (
                            <div
                                className='absolute bottom-0 right-[150px] flex justify-center items-center p-3 opacity-100 hover:opacity-70 cursor-pointer z-20 rounded-[50%]'
                                onClick={clickHandler}
                            >
                                <FaArrowCircleRight className="w-9 h-9 arrow" />
                            </div>
                        );
                    }}
                    className='w-[50%] relative'>
                    <div className='flex flex-col items-start'>
                        <h2 className="w-[430px] text-[#000] font-[lufga600] text-[55px] mb-[30px] text-start">What pet lovers say about us?</h2>
                        <p className="mb-[30px] text-[#24262B] text-[20px] text-start w-[556px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div className="flex items-center w-[50%]">
                            <div className="w-[20%] mr-[20px]">
                                <img src={lover1} alt="lover1" className="w-[20%] h-[80px] rounded-[80px]" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#000] text-[22px] font-[lufga600] mb-[5px]">Kenneth Fong</h4>
                                <p className="text-[#00000099] text-[14px]">Postgraduate Student</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-start'>
                        <h2 className="w-[430px] text-[#000] font-[lufga600] text-[55px] mb-[30px] text-start">What pet lovers say about us?</h2>
                        <p className="mb-[30px] text-[#24262B] text-[20px] text-start w-[556px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div className="flex items-center w-[50%]">
                            <div className="w-[20%] mr-[20px]">
                                <img src={lover2} alt="lover1" className="w-[20%] h-[80px] rounded-[80px]" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#000] text-[22px] font-[lufga600] mb-[5px]">Kenneth Fong</h4>
                                <p className="text-[#00000099] text-[14px]">Postgraduate Student</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-start'>
                        <h2 className="w-[430px] text-[#000] font-[lufga600] text-[55px] mb-[30px] text-start">What pet lovers say about us?</h2>
                        <p className="mb-[30px] text-[#24262B] text-[20px] text-start w-[556px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div className="flex items-center w-[50%]">
                            <div className="w-[20%] mr-[20px]">
                                <img src={lover3} alt="lover1" className="w-[20%] h-[80px] rounded-[80px]" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#000] text-[22px] font-[lufga600] mb-[5px]">Kenneth Fong</h4>
                                <p className="text-[#00000099] text-[14px]">Postgraduate Student</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <img src={friendship} alt="" className="w-[42%] absolute right-[100px] top-[-50px]" />
            </div>
        </div>
    )
}

export default PetLovers