import groupCircle from '../../assets/svg/home/GroupCircle.svg'
import { useState } from "react"
import DogsFood from './petFoods/dogsFood'
import CatsFood from './petFoods/catsFood'
import RabbitsFood from './petFoods/rabbitsFood'
import ParrotsFood from './petFoods/parrotsFood'
import HamsterFood from './petFoods/hamsterFood'


const PetFoods = () => {
    const [select, setSelect] = useState("dogsFood")

    const handleSelect = (value: string) => {
        setSelect(value);
    }


    let food = document.querySelectorAll('.food');
    food.forEach((value) => {
        value.addEventListener('click', () => {
            food.forEach(value => {
                value.classList.remove('active')
            })
            value.classList.add('active')
        })
    })
    
    return (
        <div className="flex flex-col pt-[100px] pb-[120px] mr-auto ml-auto px-[316px] border-b-1">
            <div className="flex mb-[60px] items-center justify-between">
                <div className="">
                    <h2 className="w-[589px] text-black text-[55px] leading-[65px] font-[50px] mb-[22px] font-[lufga600]">Reliable Healthy Food For Your Pet</h2>
                    <div className="flex gap-[25px]">
                    <button className="cursor-pointer food bg-[#FFFBFA] text-[#000] border-[1px] px-[25px] py-[10px] rounded-[30px] text-[16px] active" onClick={() => handleSelect('dogsFood')}>Dogs Food</button>
                    <button className="cursor-pointer food bg-[#FFFBFA] text-[#000] border-[1px] px-[25px] py-[10px] rounded-[30px] text-[16px]" onClick={() => handleSelect('catsFood')}>Cats Food</button>
                    <button className="cursor-pointer food bg-[#FFFBFA] text-[#000] border-[1px] px-[25px] py-[10px] rounded-[30px] text-[16px]" onClick={() => handleSelect('rabbitsFood')}>Rabbits Food</button>
                    <button className="cursor-pointer food bg-[#FFFBFA] text-[#000] border-[1px] px-[25px] py-[10px] rounded-[30px] text-[16px]" onClick={() => handleSelect('parrotFood')}>Parrot Food</button>
                    <button className="cursor-pointer food bg-[#FFFBFA] text-[#000] border-[1px] px-[25px] py-[10px] rounded-[30px] text-[16px]" onClick={() => handleSelect('hamsterFood')}>Hamster Food</button>
                    </div>
                </div>
                <img src={groupCircle} alt="img" className="w-[200px]" />
            </div>
            <div className="">
                {select === "dogsFood" && <DogsFood />}
                {select === "catsFood" && <CatsFood />}
                {select === "rabbitsFood" && <RabbitsFood />}
                {select === "parrotFood" && <ParrotsFood />}
                {select === "hamsterFood" && <HamsterFood />}
            {/* {
                FoodMocdata.map(value => {
                    return <div className="border-2">
                        <img src={value.menu.photo} alt="" className="w-[225px]" />
                        </div>
                })
            } */}
                </div>
            </div>
    )
}

export default PetFoods