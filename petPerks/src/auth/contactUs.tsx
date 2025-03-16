import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Snackbar } from "@mui/material";


const ContactUs = () => {
    const [open, setOpen] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_k1z5u5a', 'template_2r3841s', form.current, {
                publicKey: 'oLl3hbJRyBTAt_9zV',
            })
            .then(
                () => {
                    setOpen(true);
                    form.current.reset();
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
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

                <div className="rounded-[20px] mb-[-150px] z-10 bg-[#000] w-[520px] shadow-[0px 30px 50px 0px rgba(0, 0, 0, 0.05)] text-[#fff] px-[55px] py-[75px]">
                    <form action="get" className="" ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col mb-[20px]">
                            <label className="text-[16px] font-[lufga500] mb-[10px]">Your Name</label>
                            <input type="text" name="user_name" className="border-[1px] border-[#fff] rounded-[10px] text-[16px] px-[20px] py-[10px]" />
                        </div>
                        <div className="flex flex-col mb-[20px]">
                            <label className="text-[16px] font-[lufga500] mb-[10px]">Email Address</label>
                            <input type="email" name="user_email" className="border-[1px] border-[#fff] rounded-[10px] text-[16px] px-[20px] py-[10px]" />
                        </div>
                        <div className="flex flex-col mb-[20px]">
                            <label className="text-[16px] font-[lufga500] mb-[10px]">Phone Number</label>
                            <input type="phone" name="user_phone" className="border-[1px] border-[#fff] rounded-[10px] text-[16px] px-[20px] py-[10px]" />
                        </div>
                        <div className="flex flex-col mb-[60px]">
                            <label className="text-[16px] font-[lufga500] mb-[10px]">Massage</label>
                            <textarea name="message" className="border-[1px]  border-[#fff] rounded-[10px] text-[16px] px-[20px] pb-[70px] pt-[10px]" id="textarea"></textarea>
                        </div>
                        <input type="submit" value="submit" className="bg-[#fff] w-[100%] text-[18px] font-[lufga500] rounded-[10px] px-[35px] py-[15px] text-[#000] uppercase hover:bg-amber-400 cursor-pointer" />
                        <Snackbar
                            open={open}
                            autoHideDuration={5000}
                            onClose={handleClose}
                            message="Your message is successfully sent to the admin. Thank you very much!!!"
                        />
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
                className=""
            />

        </>
    )
}

export default ContactUs