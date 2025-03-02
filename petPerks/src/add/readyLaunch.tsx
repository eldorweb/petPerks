import Logo from "../assets/svg/nav/logo.svg"
import bone from '../assets/png/bone.svg'
import { useEffect, useState } from "react"

const ReadyLaunch = () => {
    const [days, setDays] = useState(10)
    const [hours, setHours] = useState(10)
    const [minutes, setMinutes] = useState(10)
    const [seconds, setSeconds] = useState(10)


    useEffect(() => {
        const countdown = () => {
            const endDate = new Date("December 31, 2025 24:00:00").getTime()
            const today = new Date().getTime()

            const timeDiff = endDate - today

            const seconds = 1000
            const minutes = seconds * 60
            const hours = minutes * 60
            const days = hours * 24

            let timeDays = Math.floor(timeDiff / days)
            let timeHours = Math.floor((timeDiff % days) / hours)
            let timeMinutes = Math.floor((timeDiff % hours) / minutes)
            let timeSeconds = Math.floor((timeDiff % minutes) / seconds)

            timeHours = timeHours < 10 ? "0" + timeHours : timeHours
            timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
            timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

            setDays(timeDays)
            setHours(timeHours)
            setMinutes(timeMinutes)
            setSeconds(timeSeconds)
        }

        setInterval(countdown, 1000)
    }, [])


    return (
        <div className="underConst h-[800px] mr-auto ml-auto w-[100%] flex flex-col justify-center items-center">
            <div className="flex items-center">
                <img src={Logo} alt="logo" className="mr-3 w-[42px]" />
                <h4 className="text-[#000] font-[Jost] text-[30px] font-semibold capitalize">PetPerks</h4>
            </div>
            <h2 className="capitalize text-[#000] font-[lufga600] text-[65px] w-[50%] text-center">Our awesome new site is almost ready to launch!</h2>
            <div className="relative">
                <div className="mt-[-340px] mb-[-300px] relative -z-10">
                    <img src={bone} alt="" className="" />
                    <div className="absolute top-[43%] left-[20%] gap-[20px] flex">

                        <div className="flex flex-col bg-[#fff] rounded-[15px] px-[32px] py-[12px] text-center">
                            <span className="text-[#000] font-[lufga600] text-[60px]" id="days">{days}</span>
                            <p className="uppercase text-[15px] font-[lufga500]">Days</p>
                        </div>

                        <div className="flex flex-col bg-[#fff] rounded-[15px] px-[32px] py-[12px] text-center">
                            <span className="text-[#000] font-[lufga600] text-[60px]" id="hours">{hours}</span>
                            <p className="uppercase text-[15px] font-[lufga500]">Hours</p>
                        </div>

                        <div className="flex flex-col bg-[#fff] rounded-[15px] px-[32px] py-[12px] text-center">
                            <span className="text-[#000] font-[lufga600] text-[60px] " id="minutes">{minutes}</span>
                            <p className="uppercase text-[15px] font-[lufga500]">Minutes</p>
                        </div>

                        <div className="flex flex-col bg-[#fff] rounded-[15px] px-[32px] py-[12px] text-center">
                            <span className="text-[#000] font-[lufga600] text-[60px]" id="seconds">{seconds}</span>
                            <p className="uppercase text-[15px] font-[lufga500]">Seconds</p>
                        </div>

                    </div>
                </div>
            </div>
            <form className="flex mb-[20px]">
                <input type="email" name="email" id="email" className='border-[1px] rounded-[10px] mr-[20px] pr-[100px] pl-[20px] py-[10px] placeholder:text-[15px] placeholder:text-[#000]' placeholder='Your Email Address' />
                <input type="button" value="subscribe" className='rounded-[10px] border-[1px] px-[32px] py-[15.5px] text-[#000] font-[lufga500] text-[16px] hover:bg-[#000] hover:text-[#fff] capitalize' />
            </form>
            <div className="underSvg">
                <svg xmlns="http://www.w3.org/2000/svg" width="225" height="45" viewBox="0 0 225 45" fill="none">
                    <rect x="0.5" y="0.5" width="44" height="44" rx="22" fill="black" stroke="black" />
                    <path d="M23.5158 31.0902V23.6265H26.0201L26.3958 20.7169H23.5158V18.8596C23.5158 18.0175 23.7487 17.4436 24.9577 17.4436L26.4971 17.4429V14.8405C26.2309 14.8059 25.3171 14.7266 24.2534 14.7266C22.0324 14.7266 20.5118 16.0823 20.5118 18.5714V20.7169H18V23.6265H20.5118V31.0902H23.5158Z" fill="white" />
                    <rect x="60.5" y="0.5" width="44" height="44" rx="22" fill="black" stroke="black" />
                    <path d="M90.9964 17.1189C90.3879 17.3858 89.7395 17.5628 89.0635 17.6487C89.7589 17.2334 90.2897 16.5809 90.5393 15.7945C89.8909 16.1811 89.175 16.4541 88.412 16.6065C87.7963 15.9509 86.9188 15.5449 85.9616 15.5449C84.1043 15.5449 82.6091 17.0524 82.6091 18.9005C82.6091 19.1664 82.6316 19.4221 82.6868 19.6655C79.8978 19.5295 77.43 18.1928 75.7721 16.1565C75.4827 16.6587 75.3129 17.2334 75.3129 17.8522C75.3129 19.014 75.9112 20.0439 76.803 20.6401C76.2641 20.6299 75.7353 20.4734 75.2874 20.227C75.2874 20.2372 75.2874 20.2505 75.2874 20.2638C75.2874 21.894 76.4502 23.2481 77.9751 23.56C77.702 23.6347 77.4044 23.6705 77.0955 23.6705C76.8808 23.6705 76.6639 23.6582 76.4604 23.6132C76.8951 24.9417 78.1285 25.9184 79.5951 25.9501C78.4537 26.843 77.0045 27.3809 75.4357 27.3809C75.1605 27.3809 74.8967 27.3687 74.6328 27.3349C76.1188 28.2932 77.88 28.8404 79.7792 28.8404C85.9524 28.8404 89.3274 23.7267 89.3274 19.2942C89.3274 19.1459 89.3222 19.0028 89.3151 18.8606C89.9809 18.3881 90.5403 17.798 90.9964 17.1189Z" fill="white" />
                    <rect x="120.5" y="0.5" width="44" height="44" rx="22" fill="black" stroke="black" />
                    <path d="M150.851 19.5375C150.813 18.6681 150.672 18.0703 150.471 17.5523C150.263 17.0026 149.943 16.5103 149.524 16.1011C149.115 15.6856 148.62 15.3626 148.076 15.1581C147.555 14.9567 146.961 14.8161 146.091 14.7778C145.215 14.7362 144.937 14.7266 142.716 14.7266C140.494 14.7266 140.216 14.7362 139.343 14.7745C138.474 14.8128 137.876 14.9536 137.358 15.1549C136.808 15.3626 136.316 15.6823 135.907 16.1011C135.491 16.5103 135.168 17.0058 134.964 17.5492C134.762 18.0703 134.622 18.6648 134.583 19.5343C134.542 20.4102 134.532 20.6883 134.532 22.91C134.532 25.1316 134.542 25.4097 134.58 26.2824C134.619 27.1519 134.759 27.7497 134.961 28.2676C135.168 28.8174 135.491 29.3096 135.907 29.7188C136.316 30.1344 136.811 30.4573 137.355 30.6618C137.876 30.8633 138.47 31.0039 139.34 31.0422C140.213 31.0807 140.491 31.0901 142.713 31.0901C144.934 31.0901 145.212 31.0807 146.085 31.0422C146.954 31.0039 147.552 30.8633 148.07 30.6618C149.17 30.2367 150.039 29.3672 150.464 28.2676C150.666 27.7465 150.806 27.1519 150.845 26.2824C150.883 25.4097 150.893 25.1316 150.893 22.91C150.893 20.6883 150.889 20.4102 150.851 19.5375ZM149.378 26.2185C149.342 27.0177 149.208 27.4492 149.096 27.7369C148.821 28.4498 148.255 29.0156 147.543 29.2905C147.255 29.4024 146.82 29.5367 146.024 29.5717C145.161 29.6102 144.902 29.6197 142.719 29.6197C140.536 29.6197 140.273 29.6102 139.413 29.5717C138.614 29.5367 138.183 29.4024 137.895 29.2905C137.54 29.1594 137.217 28.9516 136.955 28.6799C136.684 28.4146 136.476 28.0949 136.345 27.7402C136.233 27.4525 136.099 27.0177 136.063 26.2218C136.025 25.3587 136.016 25.0997 136.016 22.9163C136.016 20.733 136.025 20.4709 136.063 19.6111C136.099 18.8119 136.233 18.3804 136.345 18.0927C136.476 17.7378 136.684 17.415 136.959 17.1528C137.224 16.8811 137.543 16.6733 137.898 16.5423C138.186 16.4304 138.621 16.2962 139.417 16.261C140.28 16.2226 140.539 16.213 142.722 16.213C144.909 16.213 145.167 16.2226 146.027 16.261C146.827 16.2962 147.258 16.4304 147.546 16.5423C147.901 16.6733 148.223 16.8811 148.486 17.1528C148.757 17.4181 148.965 17.7378 149.096 18.0927C149.208 18.3804 149.342 18.815 149.378 19.6111C149.416 20.4742 149.425 20.733 149.425 22.9163C149.425 25.0997 149.416 25.3554 149.378 26.2185Z" fill="white" />
                    <path d="M142.715 18.707C140.395 18.707 138.512 20.5898 138.512 22.9106C138.512 25.2314 140.395 27.1142 142.715 27.1142C145.036 27.1142 146.919 25.2314 146.919 22.9106C146.919 20.5898 145.036 18.707 142.715 18.707ZM142.715 25.6374C141.21 25.6374 139.989 24.4163 139.989 22.9106C139.989 21.405 141.21 20.1839 142.715 20.1839C144.221 20.1839 145.442 21.405 145.442 22.9106C145.442 24.4163 144.221 25.6374 142.715 25.6374Z" fill="white" />
                    <path d="M148.066 18.5399C148.066 19.0819 147.627 19.5213 147.085 19.5213C146.543 19.5213 146.104 19.0819 146.104 18.5399C146.104 17.9979 146.543 17.5586 147.085 17.5586C147.627 17.5586 148.066 17.9979 148.066 18.5399Z" fill="white" />
                    <rect x="180.5" y="0.5" width="44" height="44" rx="22" fill="black" stroke="black" />
                    <path d="M210.677 31.0902V31.0895H210.681V25.0881C210.681 22.1522 210.049 19.8906 206.617 19.8906C204.967 19.8906 203.86 20.7961 203.408 21.6545H203.36V20.1647H200.105V31.0895H203.494V25.6799C203.494 24.2556 203.764 22.8784 205.528 22.8784C207.266 22.8784 207.292 24.5038 207.292 25.7713V31.0902H210.677Z" fill="white" />
                    <path d="M194.588 20.166H197.981V31.0908H194.588V20.166Z" fill="white" />
                    <path d="M196.282 14.7266C195.198 14.7266 194.317 15.6068 194.317 16.6916C194.317 17.7763 195.198 18.675 196.282 18.675C197.367 18.675 198.247 17.7763 198.247 16.6916C198.247 15.6068 197.366 14.7266 196.282 14.7266V14.7266Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default ReadyLaunch