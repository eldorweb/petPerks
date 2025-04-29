import { useEffect, useState } from "react";
import { BlogMocdata } from "../mocData/blogMocdata"
import {  useParams } from "react-router";
import user from '../assets/png/home/user1.jpg'
import Loader from "../components/loader";

const BlogDetail = () => {
    let { id } = useParams();
    const data = BlogMocdata.find((value) => value.id === Number(id));
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
        <div>
            <div className="flex flex-col justify-center pt-[47px] pb-[100px] bg-[#FFEDE9]">
                <h1 className="text-[#000] text-[40px] font-[lufga500] text-center mb-[15px]">{data?.blog.title}</h1>
                <div className="flex items-center mb-[50px] justify-center">
                    <p className="px-[10px] py-[5px] rounded-[5px] bg-[#fff] text-[#000] text-[13px] font-[lufga500] uppercase mr-[28px]">{data?.blog.data}</p>
                    <div className="flex mr-[28px] gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_446_13351)">
                                <path d="M10.0007 9.99967C11.8423 9.99967 13.334 8.50801 13.334 6.66634C13.334 4.82467 11.8423 3.33301 10.0007 3.33301C8.15898 3.33301 6.66732 4.82467 6.66732 6.66634C6.66732 8.50801 8.15898 9.99967 10.0007 9.99967ZM10.0007 11.6663C7.77565 11.6663 3.33398 12.783 3.33398 14.9997V15.833C3.33398 16.2913 3.70898 16.6663 4.16732 16.6663H15.834C16.2923 16.6663 16.6673 16.2913 16.6673 15.833V14.9997C16.6673 12.783 12.2256 11.6663 10.0007 11.6663Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_446_13351">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-[#000] text-[14px]">{data?.blog.author}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_446_13356)">
                                <path d="M16.666 1.66699H3.33268C2.41602 1.66699 1.67435 2.41699 1.67435 3.33366L1.66602 18.3337L4.99935 15.0003H16.666C17.5827 15.0003 18.3327 14.2503 18.3327 13.3337V3.33366C18.3327 2.41699 17.5827 1.66699 16.666 1.66699ZM7.49935 9.16699H5.83268V7.50032H7.49935V9.16699ZM10.8327 9.16699H9.16601V7.50032H10.8327V9.16699ZM14.166 9.16699H12.4993V7.50032H14.166V9.16699Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_446_13356">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-[#000] text-[14px]">{data?.blog.comment}</p>
                    </div>
                </div>
                <div className="flex gap-[30px] w-[100%] px-[30px] mb-[50px]">
                    <img src={data?.blog.photo} alt="" className="rounded-[20px] w-[49%]" />
                    <img src={data?.blog.photo1} alt="" className="rounded-[20px] w-[49%]" />
                </div>
                <p className="px-[450px] text-[18px] mb-[30px]">{data?.blog.text}</p>
                <div className="border-[1px] rounded-[20px] ml-[450px] mr-[600px] mb-[30px] pt-[22px] pb-[13px] pl-[30px] pr-[24px] relative">
                    <p className="w-[80%] text-[22px] mb-[20px]">Unlocking the Secrets of Sustainable Fashion: Eco-Friendly Choices for a Stylish and Responsible Wardrobe</p>
                    <div className="flex items-center">
                        <div className="w-[36px] h-[2px] bg-[#000] mr-[10px]"></div>
                        <p className="text-[15px] font-[lufga500]">Ronald M. Spino</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-3 bottom-3" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path d="M14.1943 9.41211C6.36815 9.41211 0.00195312 15.7783 0.00195312 23.6045C0.00195312 31.1543 5.92675 37.3466 13.3711 37.7744C13.5 39.166 13.4033 42.9541 9.77335 48.2236C9.49895 48.6211 9.54875 49.1572 9.88956 49.498C11.375 50.9834 12.293 51.9189 12.9355 52.5732C13.7764 53.4287 14.1602 53.8193 14.7217 54.3291C14.9121 54.5019 15.1523 54.5888 15.3936 54.5888C15.6279 54.5888 15.8613 54.5068 16.0498 54.3437C22.375 48.8398 29.4014 37.4677 28.3848 23.5322C27.7891 15.3506 21.8213 9.41211 14.1943 9.41211ZM15.4033 52.2226C15.1309 51.9541 14.8203 51.6377 14.3623 51.1718C13.8057 50.6045 13.042 49.8271 11.8838 48.665C16.2891 41.8769 15.457 37.042 15.0928 36.3486C14.9199 36.0195 14.5654 35.7978 14.1943 35.7978C7.47165 35.7978 2.00195 30.3281 2.00195 23.6045C2.00195 16.8818 7.47165 11.4121 14.1943 11.4121C20.7432 11.4121 25.8721 16.5703 26.3906 23.6767C27.5332 39.3506 18.2178 49.5273 15.4033 52.2226Z" fill="black" />
                        <path d="M63.9004 23.5322C63.3027 15.3516 57.334 9.41211 49.709 9.41211C41.8828 9.41211 35.5156 15.7783 35.5156 23.6045C35.5156 31.1543 41.4414 37.3466 48.8867 37.7744C49.0156 39.165 48.9179 42.9511 45.2871 48.2236C45.0127 48.6211 45.0625 49.1572 45.4033 49.498C46.8828 50.9775 47.7988 51.9111 48.4414 52.5644C49.2861 53.4257 49.6719 53.8183 50.2363 54.33C50.4267 54.5019 50.6679 54.5888 50.9082 54.5888C51.1426 54.5888 51.376 54.5068 51.5644 54.3427C57.8896 48.8388 64.916 37.4668 63.9004 23.5322ZM50.9179 52.2226C50.6435 51.9521 50.3301 51.6338 49.8681 51.1631C49.3115 50.5966 48.5508 49.8213 47.3974 48.665C51.8027 41.8759 50.9717 37.042 50.6084 36.3486C50.4355 36.0205 50.0801 35.7978 49.709 35.7978C42.9853 35.7978 37.5156 30.3281 37.5156 23.6045C37.5156 16.8818 42.9853 11.4121 49.709 11.4121C56.2568 11.4121 61.3867 16.5703 61.9062 23.6777C63.0478 39.3496 53.7324 49.5273 50.9179 52.2226Z" fill="black" />
                    </svg>
                </div>
                <p className="px-[450px] text-[18px] mb-[54px]">{data?.blog.text1}</p>
                <div className="grid grid-cols-3 gap-[30px] px-[315px] mb-[50px]">
                    <img src={data?.blog.photo2} alt="img" className="w-[410px] h-[418px] rounded-[20px] object-fill" />
                    <img src={data?.blog.photo3} alt="img" className="w-[410px] h-[418px] rounded-[20px] object-fill" />
                    <img src={data?.blog.photo4} alt="img" className="w-[410px] h-[418px] rounded-[20px] object-fill" />
                    <img src={data?.blog.photo5} alt="img" className="w-[410px] h-[418px] rounded-[20px] object-fill" />
                    <img src={data?.blog.photo6} alt="img" className="w-[410px] h-[418px] rounded-[20px] object-fill" />
                    <img src={data?.blog.photo6} alt="img" className="w-[410px] h-[418px] rounded-[20px] object-fill" />
                </div>
                <p className="px-[450px] text-[18px] mb-[54px]">{data?.blog.text1}</p>
                <img src={data?.blog.photo2} alt="img" className="w-[100%] h-[578px] object-cover mb-[50px]" />
                <div className="px-[450px]">
                    <h2 className="text-[#000] text-[24px] font-[lufga600]  mb-[10px]">Additional information </h2>
                    <p className="text-[18px] mb-[24px]">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="flex justify-between">
                        <div className="gap-[18px] mb-[20px]">
                            <div className="flex items-center mb-[18px]">
                                <div className="p-[8px] w-[40px] h-[40px] rounded-[40px] border-[1px] mr-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M20.2969 6.5L9.29688 17.5L4.29688 12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className="text-[16px] font-[lufga500]">{data?.blog.li1}</h4>
                            </div>
                            <div className="flex items-center mb-[18px]">
                                <div className="p-[8px] w-[40px] h-[40px] rounded-[40px] border-[1px] mr-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M20.2969 6.5L9.29688 17.5L4.29688 12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className="text-[16px] font-[lufga500]">{data?.blog.li2}</h4>
                            </div>
                            <div className="flex items-center">
                                <div className="p-[8px] w-[40px] h-[40px] rounded-[40px] border-[1px] mr-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M20.2969 6.5L9.29688 17.5L4.29688 12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className="text-[16px] font-[lufga500]">{data?.blog.li3}</h4>
                            </div>
                        </div>
                        <div className="gap-[18px]">
                            <div className="flex items-center mb-[18px]">
                                <div className="p-[8px] w-[40px] h-[40px] rounded-[40px] border-[1px] mr-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M20.2969 6.5L9.29688 17.5L4.29688 12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className="text-[16px] font-[lufga500]">{data?.blog.li4}</h4>
                            </div>
                            <div className="flex items-center mb-[18px]">
                                <div className="p-[8px] w-[40px] h-[40px] rounded-[40px] border-[1px] mr-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M20.2969 6.5L9.29688 17.5L4.29688 12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className="text-[16px] font-[lufga500]">{data?.blog.li5}</h4>
                            </div>
                            <div className="flex items-center">
                                <div className="p-[8px] w-[40px] h-[40px] rounded-[40px] border-[1px] mr-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M20.2969 6.5L9.29688 17.5L4.29688 12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className="text-[16px] font-[lufga500]">{data?.blog.li6}</h4>
                            </div>
                        </div>
                    </div>
                    <p className="text-[18px] mb-[30px]">{data?.blog.text1}</p>
                    <div className="flex items-center py-[20px] border-[#00000010] border-y-[1px] justify-between mb-[75px]">
                        <div className="flex gap-[20px]">
                            <p className="text-[14px] font-[lufga500] capitalize">Tags :</p>
                            <p className="text-[14px] font-[lufga400] capitalize">Plush toy</p>
                            <p className="text-[14px] font-[lufga400] capitalize">Dog Collars</p>
                            <p className="text-[14px] font-[lufga400] capitalize">Dog training</p>
                            <p className="text-[14px] font-[lufga400] capitalize">Pet Bed</p>
                            <p className="text-[14px] font-[lufga400] capitalize">Dog Care</p>
                        </div>
                        <div className="flex items-center gap-[25px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_446_13383)">
                                    <path d="M8.97178 15.5376V8.45071H11.3496L11.7064 5.68799H8.97178V3.92439C8.97178 3.12477 9.19291 2.57984 10.3409 2.57984L11.8026 2.57924V0.108165C11.5498 0.0753151 10.6821 0 9.67215 0C7.56322 0 6.11942 1.28727 6.11942 3.65078V5.68799H3.73438V8.45071H6.11942V15.5376H8.97178Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_446_13383">
                                        <rect width="15.5376" height="15.5376" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <g clipPath="url(#clip0_446_13386)">
                                    <path d="M16.0747 2.95156C15.4969 3.20502 14.8813 3.37302 14.2394 3.45459C14.8997 3.06032 15.4037 2.44076 15.6407 1.69398C15.025 2.06106 14.3452 2.32034 13.6208 2.46504C13.0362 1.84256 12.203 1.45703 11.294 1.45703C9.53049 1.45703 8.11073 2.88844 8.11073 4.64322C8.11073 4.8957 8.1321 5.13848 8.18454 5.3696C5.53634 5.24045 3.19307 3.97122 1.61892 2.03775C1.3441 2.51456 1.18289 3.06032 1.18289 3.64784C1.18289 4.75101 1.75099 5.72891 2.59779 6.29506C2.08602 6.28535 1.58396 6.13677 1.15861 5.90274C1.15861 5.91245 1.15861 5.92507 1.15861 5.9377C1.15861 7.48563 2.26276 8.77137 3.71067 9.06756C3.45139 9.13845 3.1688 9.17244 2.87552 9.17244C2.67159 9.17244 2.46572 9.16078 2.27247 9.11806C2.68519 10.3795 3.85634 11.3069 5.2489 11.337C4.16515 12.1848 2.7891 12.6956 1.29942 12.6956C1.0382 12.6956 0.787654 12.6839 0.537109 12.6519C1.94812 13.5618 3.62036 14.0814 5.4237 14.0814C11.2853 14.0814 14.4899 9.22585 14.4899 5.01709C14.4899 4.87628 14.4851 4.74033 14.4783 4.60534C15.1104 4.1567 15.6416 3.59637 16.0747 2.95156Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_446_13386">
                                        <rect width="15.5376" height="15.5376" fill="white" transform="translate(0.537109)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <g clipPath="url(#clip0_446_13390)">
                                    <path d="M13.7718 4.03068C13.7397 3.30223 13.6219 2.80143 13.4531 2.36748C13.279 1.90685 13.0112 1.49445 12.6603 1.15162C12.3175 0.803458 11.9024 0.532919 11.4471 0.361556C11.0106 0.192809 10.5125 0.0750104 9.784 0.0428929C9.05011 0.0080555 8.81713 0 6.95579 0C5.09444 0 4.86146 0.0080555 4.13029 0.0401729C3.40184 0.0722903 2.90104 0.190194 2.4672 0.358836C2.00646 0.532919 1.59406 0.800738 1.25123 1.15162C0.903068 1.49445 0.632633 1.90957 0.461166 2.36487C0.292418 2.80143 0.17462 3.29951 0.142502 4.02796C0.107665 4.76185 0.0996094 4.99483 0.0996094 6.85618C0.0996094 8.71752 0.107665 8.9505 0.139782 9.68167C0.1719 10.4101 0.289803 10.9109 0.45855 11.3449C0.632633 11.8055 0.903068 12.2179 1.25123 12.5607C1.59406 12.9089 2.00918 13.1794 2.46448 13.3508C2.90104 13.5195 3.39912 13.6373 4.12768 13.6695C4.85874 13.7017 5.09183 13.7096 6.95317 13.7096C8.81452 13.7096 9.0475 13.7017 9.77867 13.6695C10.5071 13.6373 11.0079 13.5195 11.4418 13.3508C12.3631 12.9946 13.0916 12.2661 13.4478 11.3449C13.6164 10.9083 13.7343 10.4101 13.7665 9.68167C13.7986 8.9505 13.8066 8.71752 13.8066 6.85618C13.8066 4.99483 13.8039 4.76185 13.7718 4.03068ZM12.5372 9.62811C12.5077 10.2977 12.3952 10.6592 12.3015 10.9003C12.0711 11.4975 11.5971 11.9715 10.9999 12.2019C10.7588 12.2956 10.3947 12.4081 9.72772 12.4375C9.00461 12.4697 8.78774 12.4777 6.95851 12.4777C5.12928 12.4777 4.90969 12.4697 4.18919 12.4375C3.51964 12.4081 3.15809 12.2956 2.91705 12.2019C2.61983 12.092 2.34929 11.918 2.1297 11.6903C1.90206 11.468 1.72797 11.2002 1.61812 10.903C1.52439 10.6619 1.41192 10.2977 1.38253 9.63083C1.35031 8.90772 1.34235 8.69074 1.34235 6.86151C1.34235 5.03229 1.35031 4.81269 1.38253 4.0923C1.41192 3.42275 1.52439 3.0612 1.61812 2.82016C1.72797 2.52284 1.90206 2.2524 2.13242 2.03271C2.35463 1.80506 2.62245 1.63098 2.91977 1.52124C3.16081 1.4275 3.52508 1.31504 4.19191 1.28553C4.91502 1.25342 5.132 1.24536 6.96112 1.24536C8.79307 1.24536 9.00994 1.25342 9.73044 1.28553C10.4 1.31504 10.7615 1.4275 11.0026 1.52124C11.2998 1.63098 11.5703 1.80506 11.7899 2.03271C12.0176 2.25502 12.1917 2.52284 12.3015 2.82016C12.3952 3.0612 12.5077 3.42537 12.5372 4.0923C12.5693 4.81541 12.5774 5.03229 12.5774 6.86151C12.5774 8.69074 12.5693 8.905 12.5372 9.62811Z" fill="black" />
                                    <path d="M6.95737 3.33398C5.01307 3.33398 3.43555 4.9114 3.43555 6.85581C3.43555 8.80022 5.01307 10.3776 6.95737 10.3776C8.90178 10.3776 10.4792 8.80022 10.4792 6.85581C10.4792 4.9114 8.90178 3.33398 6.95737 3.33398ZM6.95737 9.14033C5.69601 9.14033 4.67285 8.11728 4.67285 6.85581C4.67285 5.59434 5.69601 4.57129 6.95737 4.57129C8.21884 4.57129 9.24189 5.59434 9.24189 6.85581C9.24189 8.11728 8.21884 9.14033 6.95737 9.14033Z" fill="black" />
                                    <path d="M11.4394 3.19523C11.4394 3.64927 11.0712 4.01742 10.6171 4.01742C10.1631 4.01742 9.79492 3.64927 9.79492 3.19523C9.79492 2.74109 10.1631 2.37305 10.6171 2.37305C11.0712 2.37305 11.4394 2.74109 11.4394 3.19523Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_446_13390">
                                        <rect width="13.7097" height="13.7097" fill="white" transform="translate(0.0761719)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <g clipPath="url(#clip0_446_13394)">
                                    <path d="M1.28971 14.8655H3.30962C3.58829 14.8655 3.81418 14.6396 3.81418 14.3609V5.53189C3.81418 5.2532 3.58829 5.02734 3.30962 5.02734H1.28971C1.01101 5.02734 0.785156 5.2532 0.785156 5.53189V14.3609C0.785156 14.6396 1.01101 14.8655 1.28971 14.8655Z" fill="black" />
                                    <path d="M1.28971 3.47468H3.30962C3.58829 3.47468 3.81418 3.24879 3.81418 2.97012V1.17643C3.81418 0.897756 3.58829 0.671875 3.30962 0.671875H1.28971C1.01101 0.671875 0.785156 0.897756 0.785156 1.17643V2.97012C0.785156 3.24879 1.01101 3.47468 1.28971 3.47468Z" fill="black" />
                                    <path d="M15.5633 6.05037C15.2795 5.67675 14.861 5.3695 14.3076 5.12866C13.7542 4.888 13.1433 4.76758 12.475 4.76758C11.1182 4.76758 9.96856 5.28537 9.02605 6.32114C8.83851 6.52724 8.70215 6.48218 8.70215 6.20348V5.53087C8.70215 5.25217 8.47624 5.02632 8.19757 5.02632H6.39322C6.11453 5.02632 5.88867 5.25217 5.88867 5.53087V14.3599C5.88867 14.6386 6.11455 14.8645 6.39322 14.8645H8.41314C8.69184 14.8645 8.91769 14.6386 8.91769 14.3599V11.2894C8.91769 10.0102 8.99493 9.13342 9.14942 8.65914C9.30385 8.18486 9.5896 7.80402 10.0064 7.51655C10.4232 7.22908 10.8939 7.08528 11.4186 7.08528C11.8282 7.08528 12.1786 7.18591 12.4696 7.38719C12.7607 7.58845 12.9709 7.87038 13.1003 8.23338C13.2297 8.59632 13.2944 9.39578 13.2944 10.6319V14.3599C13.2944 14.6385 13.5202 14.8644 13.7989 14.8644H15.8188C16.0975 14.8644 16.3233 14.6385 16.3233 14.3599V9.35983C16.3233 8.47596 16.2676 7.79679 16.1563 7.32252C16.045 6.84824 15.8474 6.42419 15.5633 6.05037Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_446_13394">
                                        <rect width="15.5376" height="15.5376" fill="white" transform="translate(0.785156)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-[18px] font-[lufga500] capitalize mb-[12px]">Comments (02)</h2>
                    <p className="text-[14px] capitalize mb-[45px]">There are many variations of passages of Lorem Ipsum available.</p>
                    <div className="mb-[60px]">
                        <div className="flex items-center mb-[50px]">
                            <img src={user} alt="img" className="w-[80px] h-[80px] object-cover rounded-[80px] mr-[20px]" />
                            <div className="border-b-[1px] border-[#000] pb-[30px]">
                                <div className="flex justify-between w-[100%]">
                                    <p className="text-[16px] font-[lufga500] capitalize">Monsur Rahman Lito</p>
                                    <button className="text-[#fff] text-[12px] uppercase font-[lufga500] px-[10px] py-[3px] rounded-[5px] bg-[#000]">Reply</button>
                                </div>
                                <p className="text-[14px] w-[95%]">{data?.blog.text1}</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-[50px] w-[90%] ml-auto">
                            <img src={user} alt="img" className="w-[80px] h-[80px] object-cover rounded-[80px] mr-[20px]" />
                            <div className="border-b-[1px] border-[#000]  pb-[30px]">
                                <div className="flex justify-between w-[100%]">
                                    <p className="text-[16px] font-[lufga500] capitalize">Monsur Rahman Lito</p>
                                    <button className="text-[#fff] text-[12px] uppercase font-[lufga500] px-[10px] py-[3px] rounded-[5px] bg-[#000]">Reply</button>
                                </div>
                                <p className="text-[14px] w-[95%]">{data?.blog.text1}</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-[50px]">
                            <img src={user} alt="img" className="w-[80px] h-[80px] object-cover rounded-[80px] mr-[20px]" />
                            <div className="border-b-[1px] border-[#000] pb-[30px]">
                                <div className="flex justify-between w-[100%]">
                                    <p className="text-[16px] font-[lufga500] capitalize">Monsur Rahman Lito</p>
                                    <button className="text-[#fff] text-[12px] uppercase font-[lufga500] px-[10px] py-[3px] rounded-[5px] bg-[#000]">Reply</button>
                                </div>
                                <p className="text-[14px] w-[95%]">{data?.blog.text1}</p>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-[18px] font-[lufga500] capitalize mb-[12px]">Good Comments</h3>
                    <p className="text-[14px] capitalize mb-[43px]">There are many variations of passages of Lorem Ipsum available.</p>
                    <form action="post" className="">
                        <div className="flex justify-between mb-[30px]">
                            <input type="text" className="border-[1px] rounded-[10px] w-[48%] pl-[24px] py-[15px] outline-0" placeholder="Author"/>
                            <input type="email" className="border-[1px] rounded-[10px] w-[48%] pl-[24px] py-[15px] outline-0" placeholder="Email"/>
                        </div>
                        <textarea name="text" id="tttt" className="text-[15px] w-[100%] mb-[30px] h-[150px] capitalize pt-[15px] pl-[24px] rounded-[10px] border-[1px] placeholder:text-[15px]" placeholder="Type Comment Here"></textarea>
                        <input type="submit" value="Submit Now" className="text-[#fff] font-[lufga500]  capitalize text-[16px] py-[13px] px-[24px] bg-[#000] rounded-[10px] cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default BlogDetail