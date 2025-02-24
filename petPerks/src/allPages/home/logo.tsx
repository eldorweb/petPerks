import logoipsum1 from '../../assets/svg/home/logoipsum1.svg'
import logoipsum2 from '../../assets/svg/home/logoipsum2.svg'
import logoipsum3 from '../../assets/svg/home/logoipsum3.svg'
import logoipsum4 from '../../assets/svg/home/logoipsum4.svg'
import logoipsum5 from '../../assets/svg/home/logoipsum5.svg'
import logoipsum6 from '../../assets/svg/home/logoipsum6.svg'
import logoipsum7 from '../../assets/svg/home/logoipsum7.svg'

const Logo = () => {
    return (
        <div className="flex py-[64px] px-[106px] bg-[#FFFBFA] items-center justify-between">
            <a href="#"><img src={logoipsum1} alt="logo" /></a>
            <a href="#"><img src={logoipsum2} alt="logo" /></a>
            <a href="#"><img src={logoipsum3} alt="logo" /></a>
            <a href="#"><img src={logoipsum4} alt="logo" /></a>
            <a href="#"><img src={logoipsum5} alt="logo" /></a>
            <a href="#"><img src={logoipsum6} alt="logo" /></a>
            <a href="#"><img src={logoipsum7} alt="logo" /></a>
        </div>
    )
}

export default Logo