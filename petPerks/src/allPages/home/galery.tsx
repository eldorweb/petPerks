import img1 from '../../assets/png/home/galery1.jpg'
import img2 from '../../assets/png/home/galery2.jpg'
import img3 from '../../assets/png/home/galery3.jpg'
import img4 from '../../assets/png/home/galery4.jpg'
import img5 from '../../assets/png/home/galery5.jpg'
import img6 from '../../assets/png/home/galery6.jpg'
import img7 from '../../assets/png/home/galery7.jpg'
import img8 from '../../assets/png/home/galery8.jpg'
import img9 from '../../assets/png/home/galery9.jpg'
import add from '../../assets/svg/home/add.svg'

const Galery = () => {
    return (
        <div className="flex p-[100px] gap-[30px] relative">


            <div className="grid grid-flow-col grid-rows-2 gap-[30px]">
                <img src={img1} alt="img" className="w-[300px] h-[340px] rounded-tl-[100px] object-center object-fill " />
                <img src={img2} alt="img" className="w-[300px] h-[240px] rounded-tr-[100px] object-center object-cover size-[200px]" />
                <img src={img3} alt="img" className="w-[300px] h-[340px] rounded-tr-[100px] object-center object-fill" />
                <img src={img4} alt="img" className="w-[300px] h-[240px] rounded-bl-[100px] object-left object-fill" />
            </div>


            <div className="">
                <img src={img5} alt="img" className='w-[410px] h-[610px] rounded-tl-[200px] rounded-tr-[200px]' />
                <div className="w-[410px] h-[610px] rounded-tl-[200px] rounded-tr-[200px] absolute bottom-[200px] bg-[#00000095]"></div>
                <div className="flex items-center justify-center bg-[#D9D9D9] rounded-[4px] w-[45px] h-[45px] absolute top-[50%] left-[50%] transform-[translate(-50%)]">
                    <img src={add} alt="add" className='w-[24px]' />
                </div>
            </div>

            <div className="grid grid-flow-col grid-rows-2 gap-[30px]">
                <img src={img8} alt="img" className="w-[300px] h-[340px] rounded-[200px] object-center object-fill " />
                <img src={img6} alt="img" className="w-[300px] h-[240px] rounded-tr-[200px] rounded-tl-[200px] object-center object-cover size-[200px]" />
                <img src={img9} alt="img" className="w-[300px] h-[340px] rounded-tr-[100px] object-center object-fill" />
                <img src={img7} alt="img" className="w-[300px] h-[240px] rounded-bl-[100px] object-left object-fill" />
            </div>
            
        </div>
    )
}

export default Galery