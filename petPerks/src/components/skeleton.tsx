import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const SkeletonCart = () => {
    return (
        <>
            <SkeletonTheme baseColor="#20202040" highlightColor="#4444448a">
            <div className="flex bg-linear-to-r from-#FFC7BB from-50% to-#FFEDE9 to-100%">

<div className="flex flex-col w-[50%] bg-[#FFC7BB] pt-[60px] pl-[81px] relative">
    <h2><Skeleton count={1}/></h2>
    <p className="text-[#000] text-[16px] mb-[16px]"><Skeleton count={1}/></p>
    <Skeleton count={1} width={515} height={824}/>

</div>


<div className="w-[50%] bg-[#FFEDE9] pt-[134px] px-[227px] pb-[128px]">
    <div className="border-[1px] p-[80px] rounded-[30px] flex flex-col items-center justify-center">
        <h3 className="text-[#000] font-[lufga600] text-[28px] mb-[5px]"><Skeleton count={1}/></h3>
        <p className="text-[#00000080] text-[15px] mb-[36px]"><Skeleton count={1}/></p>
        <form action="get" className="gap-[30px] mb-[44px] flex flex-col w-[100%]">
            <div className="flex flex-col">
                <label htmlFor="email" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]"><Skeleton count={1}/></label>
                <Skeleton count={1} width={360} height={50}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="text-[#000] text-[16px] font-[lufga500] mb-[5px]"><Skeleton count={1}/></label>
                <Skeleton count={1} width={360} height={50}/>
            </div>
        </form>
        <div className="flex gap-[5px]">
        <Skeleton count={1} width={58} height={20}/>
        <Skeleton width={58} height={20}/>
        </div>
    </div>
</div>
</div>
            </SkeletonTheme>
        </>
    )
}

export default SkeletonCart