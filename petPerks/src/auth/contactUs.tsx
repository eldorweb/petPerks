import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

const ContactUs = () => {
    useKakaoLoader()
    return (
        <>
        <div className="flex bg-[#FFEDE9] px-[315px] py-[75px]">

            <div className="mr-[140px]">
                <div className="mb-[125px]">
                    <h2 className="text-[#000] font-[lufga600] text-[40px] mb-[25px]">DISCOVER US</h2>
                    <p className="w-[631px] text-[24px] ">
                        <span className="underline">PetPerks is here to help you;</span><br />
                        Our experts are available to answer any questions you might have. We’ve got the answers.
                    </p>
                </div>
                <div className="flex items-start justify-between">
                    <div className="flex flex-col w-[180px]">
                        <h4 className="text-[#000] font-[lufga600] text-[24px] mb-[5px]">Call Us</h4>
                        <p className="text-[18px] text-[#000]">+01-123-456-7890 +01-123-456-7890</p>
                    </div>
                    <div className="flex flex-col w-[180px]">
                        <h4 className="text-[#000] font-[lufga600] text-[24px] mb-[5px]">Email Us</h4>
                        <p className="text-[18px] text-[#000]">help@PetPerks.com</p>
                    </div>
                </div>
            </div>

            <div className="rounded-[20px] mb-[-150px] bg-[#000] w-[520px] shadow-[0px 30px 50px 0px rgba(0, 0, 0, 0.05)] text-[#fff] px-[55px] py-[75px]">
                <form action="get" className="">
                    <div className="flex flex-col mb-[20px]">
                        <label className="text-[16px] font-[lufga500] mb-[10px]">Your Name</label>
                        <input type="text" className="border-[1px] border-[#fff] rounded-[10px] text-[16px] px-[20px] py-[10px]" />
                    </div>
                    <div className="flex flex-col mb-[20px]">
                        <label className="text-[16px] font-[lufga500] mb-[10px]">Email Address</label>
                        <input type="email" className="border-[1px] border-[#fff] rounded-[10px] text-[16px] px-[20px] py-[10px]" />
                    </div>
                    <div className="flex flex-col mb-[20px]">
                        <label className="text-[16px] font-[lufga500] mb-[10px]">Phone Number</label>
                        <input type="phone" className="border-[1px] border-[#fff] rounded-[10px] text-[16px] px-[20px] py-[10px]" />
                    </div>
                    <div className="flex flex-col mb-[60px]">
                        <label className="text-[16px] font-[lufga500] mb-[10px]">Massage</label>
                        <textarea name="message" className="border-[1px]  border-[#fff] rounded-[10px] text-[16px] px-[20px] pb-[70px] pt-[10px]" id="textarea"></textarea>
                    </div>
                    <input type="submit" value="submit" className="bg-[#fff] w-[100%] text-[18px] font-[lufga500] rounded-[10px] px-[35px] py-[15px] text-[#000] uppercase hover:bg-amber-400 cursor-pointer" />
                </form>
            </div>



            </div>
                <Map // 지도를 표시할 Container
                    id="map"
                    center={{
                        // 지도의 중심좌표
                        lat: 33.450701,
                        lng: 126.570667,
                    }}
                    style={{
                        // 지도의 크기
                        width: "100%",
                        height: "660px",
                    }}
                    level={3} // 지도의 확대 레벨
                    className="-z-10"
                />
                </>
    )
}

export default ContactUs