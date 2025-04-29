import { useEffect, useState } from "react"
import PorAll from "./porCategory/porAll"
import PorDog from "./porCategory/porDog"
import PorCat from "./porCategory/porCat"
import PorPar from "./porCategory/porPar"
import PorHams from "./porCategory/porHams"
import PorRab from "./porCategory/porRab"
import Loader from "../../components/loader"

const PortfolioMain = () => {
    const [select, setSelect] = useState("porAll")

    const handleSelect = (category:string) => {
        setSelect(category);
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
        <div className="" >
            <div className="relative">
                <div className="py-[89px] h-[277px] bg-[url('https://images.unsplash.com/photo-1444212477490-ca407925329e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhbGtpbmd3aXRoJTIwZG9nfGVufDB8fDB8fHww')] bg-center bg-cover bg-no-repeat text-center ">
                    <div className="bg-[#2D0B03CC] py-[89px] to-[] w-[100%] -z-0 absolute top-0">
                        <h1 className="text-[#fff] font-[lufga600] text-[40px] mb-[16px]">Portfolio</h1>
                        <p className="text-[#fff] text-[16px] fonr-[lufga400]">Home   {'>'}  Portfolio</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center pt-[23px] pb-[22px] gap-[31px]'>
                <div className='button active cursor-pointer' onClick={() => handleSelect('porAll')}>All</div>
                <div className='button cursor-pointer' onClick={() => handleSelect('porDog')}>Dogs Food</div>
                <div className='button cursor-pointer' onClick={() => handleSelect('porCat')}>Cats Food</div>
                <div className='button cursor-pointer' onClick={() => handleSelect('porPar')}>Parrot Food</div>
                <div className='button cursor-pointer' onClick={() => handleSelect('porHams')}>Hamster Food</div>
                <div className='button cursor-pointer' onClick={() => handleSelect('porRab')}>Rabbits Food</div>
            </div>
            <div className="flex items-center justify-center">
            {select === "porAll" && <PorAll />}
            {select === "porDog" && <PorDog />}
            {select === "porCat" && <PorCat />}
            {select === "porPar" && <PorPar />}
            {select === "porHams" && <PorHams />}
            {select === "porRab" && <PorRab />}
            </div>
        </div>
    )
}

export default PortfolioMain