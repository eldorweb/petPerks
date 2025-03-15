import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import styled from "styled-components";
import ShopPic from "./shopGrid/shopPic";
import ShopBigPic from "./shopGrid/shopBigPic";
import ShopList from "./shopGrid/shopList";

function valuetext(value: number) {
    return `${value}°C`;
}
const PrettoSlider = styled(Slider)({
    color: '#000',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
        backgroundColor: '#000',
    },
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#FFFAF3',
        border: '2px solid #000',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&::before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&::before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});
const ShopMain = () => {
    const [value, setValue] = React.useState<number[]>([49, 346]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    React.useEffect(()=>{
        window.scrollTo(0, 0); 
    },[])
    const [select, setSelect] = React.useState("shopPic")
    const handleSelect = (value: string) => {
        setSelect(value);
    }
    return (
        <div className="mx-auto">
            <div className="relative">
                <div className="py-[89px] h-[277px] bg-[url('https://images.unsplash.com/photo-1444212477490-ca407925329e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhbGtpbmd3aXRoJTIwZG9nfGVufDB8fDB8fHww')] bg-center bg-cover bg-no-repeat text-center ">
                    <div className="bg-[#2D0B03CC] h-[100%] w-[100%] -z-0 absolute top-0 flex flex-col justify-center">
                        <h1 className="text-[#fff] font-[lufga600] text-[40px] mb-[16px]">Shop Standard</h1>
                        <p className="text-[#fff] text-[16px] fonr-[lufga400]">Home   {'>'}  Shop Standard</p>
                    </div>
                </div>
            </div>
            <div className="pt-[23px] pb-[108px] px-[80px]">
                <div className="flex mx-auto items-center justify-between">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-[9px]" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M5.95894 21.1658L5.95894 18.886C7.61448 18.4361 8.5918 16.7292 8.14185 15.0737C7.85285 14.0104 7.02223 13.1798 5.95894 12.8908L5.95894 2.83429C5.95894 2.37411 5.58589 2.00105 5.1257 2.00105C4.66551 2.00105 4.29247 2.37411 4.29247 2.83429L4.29247 12.8908C2.63689 13.3407 1.65956 15.0476 2.10952 16.7031C2.39851 17.7664 3.22913 18.597 4.29243 18.886L4.29243 21.1658C4.29243 21.626 4.66548 21.999 5.12566 21.999C5.58585 21.999 5.95894 21.626 5.95894 21.1658Z" fill="black" />
                            <path d="M11.3431 2.83429L11.3431 5.11407C9.68775 5.56312 8.70988 7.26901 9.15889 8.92431C9.44758 9.98846 10.2789 10.8198 11.3431 11.1085L11.3431 21.1658C11.3431 21.626 11.7161 21.999 12.1763 21.999C12.6365 21.999 13.0095 21.626 13.0095 21.1658L13.0095 11.1085C14.6648 10.6594 15.6427 8.95353 15.1937 7.29822C14.905 6.23407 14.0737 5.40275 13.0095 5.11406L13.0095 2.83429C13.0095 2.37411 12.6365 2.00105 12.1763 2.00105C11.7161 2.00105 11.3431 2.37411 11.3431 2.83429Z" fill="black" />
                            <path d="M18.3959 2.83429L18.3959 12.8908C16.7404 13.3407 15.7631 15.0476 16.213 16.7031C16.502 17.7664 17.3327 18.597 18.3959 18.886L18.3959 21.1658C18.3959 21.626 18.769 21.999 19.2292 21.999C19.6894 21.999 20.0624 21.626 20.0624 21.1658L20.0624 18.886C21.718 18.4361 22.6953 16.7292 22.2453 15.0737C21.9563 14.0104 21.1257 13.1798 20.0624 12.8908L20.0624 2.83429C20.0624 2.37411 19.6894 2.00105 19.2292 2.00105C18.769 2.00105 18.3959 2.37411 18.3959 2.83429Z" fill="black" />
                        </svg>
                        <p className="text-[#000] text-[16px]">Filters</p>
                    </div>
                    {/*  */}
                    <div className="flex items-center gap-[10px]">
                        <div className="rounded-[15px] border-[1px] px-[10px] py-[6px] flex items-center cursor-pointer btnhover">
                            <p className="text-[13px] text-[#000] capitalize mr-[5px]">Dog Food</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 4L4 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 4L12 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/*  */}
                        <div className="rounded-[15px] border-[1px] px-[10px] py-[6px] flex items-center cursor-pointer btnhover">
                            <p className="text-[13px] text-[#000] capitalize mr-[5px]">Dog Toys</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 4L4 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 4L12 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/*  */}
                        <div className="rounded-[15px] border-[1px] px-[10px] py-[6px] flex items-center cursor-pointer btnhover mr-[20px]">
                            <p className="text-[13px] text-[#000] capitalize mr-[5px]">Dog Health</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 4L4 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 4L12 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/*  */}
                        <p className="text-[14px] text-[#000]">Showing 1–5 Of 50 Results</p>
                    </div>
                    <div className="flex items-center">
                        {/*  */}
                        <div className="relative inline-block text-left pr-[20px] border-r-[1px] border-r-[#D7D7D7]" id="menu-button">
                            <div>
                                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900" aria-expanded="true" aria-haspopup="true">
                                    Default sorting
                                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* <!--
                            Dropdown menu, show/hide based on menu state.

                            Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                            Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
  --> */}
                            <div className="absolute right-0 z-10 top-[20px] mt-2 w-56 hidden origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" id="dropdown" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                                <div className="py-1" role="none">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-0">Account settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-1">Support</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">License</a>
                                    <form method="POST" action="#" role="none">
                                        <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" id="menu-item-3">Sign out</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="relative inline-block text-left pr-[20px] mr-[20px] border-r-[1px] border-r-[#D7D7D7]" id="menu-button">
                            <div>
                                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900" aria-expanded="true" aria-haspopup="true">
                                    Categories
                                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* <!--
                            Dropdown menu, show/hide based on menu state.

                            Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                            Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
  --> */}
                            <div className="absolute right-0 top-[20px] z-10 mt-2 w-56 hidden origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" id="dropdown" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                                <div className="py-1" role="none">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-0">Account settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-1">Support</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">License</a>
                                    <form method="POST" action="#" role="none">
                                        <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" id="menu-item-3">Sign out</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex items-center gap-[24px]">
                            {/*  */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={() => handleSelect('shopList')} width="20" height="21" viewBox="0 0 20 21" fill="#fff">
                                <g opacity="0.4" className="hover:opacity-100">
                                    <path d="M0 8.00032H5V13.0003H0V8.00032ZM20 8.00032H6.66667V13.0003H20V8.00032ZM6.66667 6.33366H20V4.66699C20 3.28866 18.8783 2.16699 17.5 2.16699H6.66667V6.33366ZM5 6.33366V2.16699H2.5C1.12167 2.16699 0 3.28866 0 4.66699V6.33366H5ZM6.66667 14.667V18.8337H20V14.667H6.66667ZM5 14.667H0V18.8337H5V14.667Z" fill="black" />
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={() => handleSelect('shopBigPic')} width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <g opacity="0.4" clipPath="url(#clip0_446_11191)" className="hover:opacity-100">
                                    <path d="M3.33332 0.5H5.83332C7.67426 0.5 9.16664 1.99238 9.16664 3.83332V6.33332C9.16664 8.17426 7.67426 9.66664 5.83332 9.66664H3.33332C1.49238 9.66668 0 8.1743 0 6.33332V3.83332C0 1.99238 1.49238 0.5 3.33332 0.5Z" fill="black" />
                                    <path d="M14.1663 0.5H16.6663C18.5073 0.5 19.9996 1.99238 19.9996 3.83332V6.33332C19.9996 8.17426 18.5073 9.66664 16.6663 9.66664H14.1663C12.3254 9.66664 10.833 8.17426 10.833 6.33332V3.83332C10.833 1.99238 12.3254 0.5 14.1663 0.5Z" fill="black" />
                                    <path d="M3.33332 11.333H5.83332C7.67426 11.333 9.16664 12.8254 9.16664 14.6663V17.1663C9.16664 19.0073 7.67426 20.4996 5.83332 20.4996H3.33332C1.49238 20.4997 0 19.0073 0 17.1664V14.6664C0 12.8254 1.49238 11.333 3.33332 11.333Z" fill="black" />
                                    <path d="M14.1663 11.333H16.6663C18.5073 11.333 19.9996 12.8254 19.9996 14.6663V17.1663C19.9996 19.0073 18.5073 20.4997 16.6663 20.4997H14.1663C12.3254 20.4997 10.833 19.0073 10.833 17.1664V14.6664C10.833 12.8254 12.3254 11.333 14.1663 11.333Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_446_11191">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={() => handleSelect('shopPic')} width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <g clipPath="url(#clip0_446_11197)">
                                    <path d="M4.16667 0.5H0.833333C0.373333 0.5 0 0.873333 0 1.33333V4.66667C0 5.12667 0.373333 5.5 0.833333 5.5H4.16667C4.62667 5.5 5 5.12667 5 4.66667V1.33333C5 0.873333 4.62667 0.5 4.16667 0.5Z" fill="black" />
                                    <path d="M4.16667 8H0.833333C0.373333 8 0 8.37333 0 8.83333V12.1667C0 12.6267 0.373333 13 0.833333 13H4.16667C4.62667 13 5 12.6267 5 12.1667V8.83333C5 8.37333 4.62667 8 4.16667 8Z" fill="black" />
                                    <path d="M4.16667 15.5H0.833333C0.373333 15.5 0 15.8733 0 16.3333V19.6667C0 20.1267 0.373333 20.5 0.833333 20.5H4.16667C4.62667 20.5 5 20.1267 5 19.6667V16.3333C5 15.8733 4.62667 15.5 4.16667 15.5Z" fill="black" />
                                    <path d="M11.6667 0.5H8.33333C7.87333 0.5 7.5 0.873333 7.5 1.33333V4.66667C7.5 5.12667 7.87333 5.5 8.33333 5.5H11.6667C12.1267 5.5 12.5 5.12667 12.5 4.66667V1.33333C12.5 0.873333 12.1267 0.5 11.6667 0.5Z" fill="black" />
                                    <path d="M11.6667 8H8.33333C7.87333 8 7.5 8.37333 7.5 8.83333V12.1667C7.5 12.6267 7.87333 13 8.33333 13H11.6667C12.1267 13 12.5 12.6267 12.5 12.1667V8.83333C12.5 8.37333 12.1267 8 11.6667 8Z" fill="black" />
                                    <path d="M11.6667 15.5H8.33333C7.87333 15.5 7.5 15.8733 7.5 16.3333V19.6667C7.5 20.1267 7.87333 20.5 8.33333 20.5H11.6667C12.1267 20.5 12.5 20.1267 12.5 19.6667V16.3333C12.5 15.8733 12.1267 15.5 11.6667 15.5Z" fill="black" />
                                    <path d="M19.1667 0.5H15.8333C15.3733 0.5 15 0.873333 15 1.33333V4.66667C15 5.12667 15.3733 5.5 15.8333 5.5H19.1667C19.6267 5.5 20 5.12667 20 4.66667V1.33333C20 0.873333 19.6267 0.5 19.1667 0.5Z" fill="black" />
                                    <path d="M19.1667 8H15.8333C15.3733 8 15 8.37333 15 8.83333V12.1667C15 12.6267 15.3733 13 15.8333 13H19.1667C19.6267 13 20 12.6267 20 12.1667V8.83333C20 8.37333 19.6267 8 19.1667 8Z" fill="black" />
                                    <path d="M19.1667 15.5H15.8333C15.3733 15.5 15 15.8733 15 16.3333V19.6667C15 20.1267 15.3733 20.5 15.8333 20.5H19.1667C19.6267 20.5 20 20.1267 20 19.6667V16.3333C20 15.8733 19.6267 15.5 19.1667 15.5Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_446_11197">
                                        <rect y="0.5" width="20" height="20" rx="3" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {/*  */}
                        </div>
                    </div>
                </div>
                <div className="flex pt-[30px] pb-[108px]">
                    <div className="mr-[31px] w-[30%]">
                        <form action="post" className="mb-[50px] relative flex items-center">
                            <input type="text" placeholder="Search Product" className="border-[1px] rounded-[10px] w-[100%] py-[13px] pl-[23px] placeholder:text-[15px] placeholder:text-[#000] placeholder:capitalize" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-[20px]" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M9.49967 15.8333C13.1816 15.8333 16.1663 12.8486 16.1663 9.16667C16.1663 5.48477 13.1816 2.5 9.49967 2.5C5.81778 2.5 2.83301 5.48477 2.83301 9.16667C2.83301 12.8486 5.81778 15.8333 9.49967 15.8333Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.833 17.5L14.208 13.875" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </form>
                        <h2 className="mb-[15px] text-[20px] font-[lufga500] capitalize">Price</h2>

                        {/*  */}
                        <Box sx={{ width: 390 }}>
                            <PrettoSlider
                                getAriaLabel={() => 'Temperature'}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                defaultValue={[49, 346]}
                                min={0}
                                max={400}
                                className="mb-[15px]"
                            />
                            <div className="flex items-center justify-between mb-[50px]">
                                <h2 className="text-[14px] capitalize">mini price: ${value[0]}</h2>
                                <h2 className="text-[14px] capitalize w-[28%]">max price: ${value[1]}</h2>
                            </div>
                        </Box>
                        {/*  */}
                        <h2 className="capitalize font-[lufga500] text-[20px] mb-[25px]">category</h2>
                        <div className="flex flex-col mb-[50px]">
                            {/*  */}
                            <div className="flex items-center justify-between mb-[10px]">
                                <div className="flex items-center">
                                    <p className="text-[15px] font-[lufga400] capitalize">Dog Food</p>
                                </div>
                                <div className="text-[13px] capitalize">(10)</div>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className="flex items-center justify-between mb-[10px]">
                                <div className="flex items-center">
                                    <p className="text-[15px] font-[lufga400] capitalize">Dog Toys</p>
                                </div>
                                <div className="text-[13px] capitalize">(5)</div>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className="flex items-center justify-between mb-[10px]">
                                <div className="flex items-center">
                                    <p className="text-[15px] font-[lufga400] capitalize">Dog Health</p>
                                </div>
                                <div className="text-[13px] capitalize">(17)</div>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className="flex items-center justify-between mb-[10px]">
                                <div className="flex items-center">
                                    <p className="text-[15px] font-[lufga400] capitalize">Dog Beds</p>
                                </div>
                                <div className="text-[13px] capitalize">(13)</div>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className="flex items-center justify-between mb-[10px]">
                                <div className="flex items-center">
                                    <p className="text-[15px] font-[lufga400] capitalize">Dog Bowls</p>
                                </div>
                                <div className="text-[13px] capitalize">(6)</div>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className="flex items-center justify-between mb-[10px]">
                                <div className="flex items-center">
                                    <p className="text-[15px] font-[lufga400] capitalize">Dog Gadgets</p>
                                </div>
                                <div className="text-[13px] capitalize">(17)</div>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className="flex items-center justify-between mb-[10px]">
                                <div className="flex items-center">
                                    <p className="text-[15px] font-[lufga400] capitalize">Dog Products</p>
                                </div>
                                <div className="text-[13px] capitalize">(13)</div>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className="flex items-center justify-between mb-[10px]">
                                <div className="flex items-center">
                                    <p className="text-[15px] font-[lufga400] capitalize">Dog Jackets</p>
                                </div>
                                <div className="text-[13px] capitalize">(6)</div>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className="flex items-center justify-between mb-[10px]">
                                <div className="flex items-center">
                                    <p className="text-[15px] font-[lufga400] capitalize">Dog Coat</p>
                                </div>
                                <div className="text-[13px] capitalize">(22)</div>
                            </div>
                            {/*  */}
                        </div>
                        <h3 className="font-[lufga500] text-[20px] capitalize mb-[15px]">Tags</h3>
                        <div className="flex flex-wrap gap-[10px]">
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Plush Toys</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Dog Collars</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Cotton</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Training</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Pet Bed</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Dried Food</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Elevated Beds</div>
                            <div className="text-[14px] capitalize px-[15px] py-[4px] border-[1px] rounded-[8px] cursor-pointer hover:bg-[#000] hover:text-[#fff]">Health Products</div>
                        </div>
                    </div>







                    <div className="">
                        {select === "shopPic" && <ShopPic />}
                        {select === "shopBigPic" && <ShopBigPic />}
                        {select === "shopList" && <ShopList />}
                        
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ShopMain