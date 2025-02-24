import groom from '../../../assets/png/home/grooming.svg'
import paw from '../../../assets/svg/home/paws.svg'
import dogGrooming from '../../../assets/png/home/dogGrooming.jpg'
import dogMp4 from '../../../assets/dogGrooming.mp4'
import bigStar from '../../../assets/svg/home/BigStar.svg'

const DogTran = () => {
  return (
    <div className="flex gap-[30px]">

      <div className="py-[44px] px-[36px] w-[50%] border-1 border-[#000] rounded-[20px]">
        <div className="flex items-center mb-[18px]">
          <img src={groom} alt="grooming" className='w-[30px] h-[30px] mr-[20px]'/>
          <h3 className='text-black text-[24px] font-bold'>Dog Training</h3>
        </div>
        <p className="mb-[80px] text-black text-[18px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
        <button className='bg-black rounded-[10px] px-[30px] py-[13px] flex items-center justify-center cursor-pointer text-white'>Add Service <img src={paw} alt="paw" className='ml-[10px]'/></button>
      </div>

      <div className="relative">
        <img src={dogGrooming} alt="" className='w-[410px] h-[272px] rounded-tr-[100px] mb-[30px]'/>
        <video src={dogMp4} controls={true} loop={true} className='w-[410px] h-[219px] rounded-2xl shadow-2xl shadow-amber-800'></video>
        <img src={bigStar} alt="img" className='absolute top-[-50px] left-[20px]'/>
        <p className="w-4 absolute top-[-25px] left-[55px]">50% Sale</p>
      </div>
    </div>
  )
}

export default DogTran