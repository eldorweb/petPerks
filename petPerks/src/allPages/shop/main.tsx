import { Link } from "react-router"
import { FoodMocdata } from "../../mocData/FoodMocdata"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import styled from "styled-components";
import { Input } from "@mui/material";

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
    const dogs = FoodMocdata.filter(value => value.type === 'dogsFood')
    const cats = FoodMocdata.filter(value => value.type === 'catsFood')
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="#fff">
                                <g opacity="0.4" className="hover:opacity-100">
                                    <path d="M0 8.00032H5V13.0003H0V8.00032ZM20 8.00032H6.66667V13.0003H20V8.00032ZM6.66667 6.33366H20V4.66699C20 3.28866 18.8783 2.16699 17.5 2.16699H6.66667V6.33366ZM5 6.33366V2.16699H2.5C1.12167 2.16699 0 3.28866 0 4.66699V6.33366H5ZM6.66667 14.667V18.8337H20V14.667H6.66667ZM5 14.667H0V18.8337H5V14.667Z" fill="black" />
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
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
                        <div className="grid grid-cols-4 gap-[30px]">
                            {
                                dogs.map((value) => {
                                    return <div className='flex flex-col border-[1px] rounded-[30px] relative petfoods' >

                                        <div className="heart_div absolute right-4 top-4 heart cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5998 6.65891L13.0426 7.19766C12.4621 7.75891 11.5415 7.75996 10.9597 7.19996L10.3972 6.65851C9.6401 5.92586 8.61275 5.50996 7.5363 5.50996C6.45985 5.50996 5.4325 5.92586 4.67535 6.65851L4.66132 6.67191C4.29192 7.02021 3.99982 7.43631 3.80092 7.89436C3.60205 8.35231 3.5 8.84376 3.5 9.33951C3.5 9.83526 3.60205 10.3267 3.80092 10.7847C3.99982 11.2427 4.29192 11.6588 4.66132 12.0071L4.67251 12.0177L10.9598 18.0694C11.5406 18.6285 12.4594 18.6285 13.0402 18.0694L19.3275 12.0177L19.3387 12.0071C19.7081 11.6588 20.0002 11.2427 20.1991 10.7847C20.3979 10.3267 20.5 9.83526 20.5 9.33951C20.5 8.84376 20.3979 8.35231 20.1991 7.89436C20.0002 7.43631 19.7081 7.02021 19.3387 6.67191L19.3248 6.65866C18.5672 5.92576 17.5394 5.50976 16.4624 5.50976C15.3855 5.50976 14.3574 5.92601 13.5998 6.65891ZM3.63229 5.58056C3.11613 6.06721 2.70552 6.65096 2.42504 7.29686C2.14457 7.94281 2 8.63751 2 9.33951C2 10.0415 2.14457 10.7362 2.42504 11.3821C2.70552 12.028 3.11613 12.6118 3.63229 13.0985L9.91955 19.1501C11.0812 20.2682 12.9188 20.2682 14.0804 19.1502L20.3677 13.0985C20.8838 12.6118 21.2945 12.028 21.5749 11.3821C21.8554 10.7362 22 10.0415 22 9.33951C22 8.63751 21.8554 7.94281 21.5749 7.29686C21.2945 6.65096 20.8838 6.06721 20.3677 5.58056C19.3273 4.57409 17.9243 4.00977 16.4624 4.00977C15.0006 4.00977 13.5976 4.57409 12.5572 5.58056L12 6.11931L11.4403 5.58056C10.4003 4.57424 8.99775 4.00998 7.5363 4.00998C6.0749 4.00998 4.67227 4.57424 3.63229 5.58056Z" fill="#000" />
                                            </svg>
                                        </div>
                                        <div className="hoverCart flex-col absolute top-4 left-4  items-center justify-center opacity-0">
                                            <div className="rounded-[12px] bg-[#FFEDE9] p-[5px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 9.25068H18.401L14.624 3.58468C14.394 3.23968 13.927 3.14568 13.584 3.37668C13.239 3.60668 13.146 4.07168 13.376 4.41668L16.599 9.25068H7.401L10.624 4.41668C10.854 4.07168 10.761 3.60668 10.416 3.37668C10.071 3.14668 9.606 3.23968 9.376 3.58468L5.599 9.25068H3C2.586 9.25068 2.25 9.58668 2.25 10.0007C2.25 10.4147 2.586 10.7507 3 10.7507H3.385L4.943 18.5397C5.199 19.8207 6.333 20.7507 7.64 20.7507H16.361C17.668 20.7507 18.801 19.8207 19.058 18.5397L20.616 10.7507H21.001C21.415 10.7507 21.751 10.4147 21.751 10.0007C21.751 9.58668 21.414 9.25068 21 9.25068ZM17.586 18.2457C17.469 18.8277 16.954 19.2507 16.36 19.2507H7.64C7.046 19.2507 6.531 18.8277 6.414 18.2457L4.915 10.7507H19.085L17.586 18.2457Z" fill="black" />
                                                    <path d="M14.75 14V16C14.75 16.414 14.414 16.75 14 16.75C13.586 16.75 13.25 16.414 13.25 16V14C13.25 13.586 13.586 13.25 14 13.25C14.414 13.25 14.75 13.586 14.75 14ZM10 13.25C9.586 13.25 9.25 13.586 9.25 14V16C9.25 16.414 9.586 16.75 10 16.75C10.414 16.75 10.75 16.414 10.75 16V14C10.75 13.586 10.414 13.25 10 13.25Z" fill="black" />
                                                </svg>
                                            </div>
                                            <div className="rounded-[12px] bg-[#FFEDE9] p-[5px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9869 10.3443C16.373 13.2425 13.3124 15.0429 10.0011 15.0429C6.68754 15.0429 3.62695 13.2425 2.01305 10.3443C1.88875 10.1193 1.88875 9.88141 2.01305 9.65656C3.62695 6.75844 6.68754 4.95828 10.0011 4.95828C13.3124 4.95828 16.373 6.75844 17.9869 9.65656C18.1134 9.88141 18.1134 10.1193 17.9869 10.3443ZM19.0179 9.08195C17.1961 5.8098 13.7411 3.77734 10.0011 3.77734C6.25887 3.77734 2.80391 5.8098 0.98211 9.08195C0.656329 9.66578 0.656329 10.3351 0.98211 10.9185C2.80391 14.1907 6.25887 16.2236 10.0011 16.2236C13.7411 16.2236 17.1961 14.1907 19.0179 10.9185C19.3436 10.3352 19.3436 9.66578 19.0179 9.08195ZM10.0011 12.4229C11.3363 12.4229 12.423 11.3362 12.423 10.0004C12.423 8.66445 11.3363 7.57781 10.0011 7.57781C8.66363 7.57781 7.57699 8.66445 7.57699 10.0004C7.57699 11.3362 8.66367 12.4229 10.0011 12.4229ZM10.0011 6.39687C8.01207 6.39687 6.39606 8.01355 6.39606 10.0004C6.39606 11.9877 8.01211 13.6037 10.0011 13.6037C11.9879 13.6037 13.6039 11.9876 13.6039 10.0004C13.6039 8.01355 11.9879 6.39687 10.0011 6.39687Z" fill="black" />
                                                </svg>
                                            </div>
                                            <div className="rounded-[12px] bg-[#FFEDE9] p-[5px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M20.531 5.4717L17.531 2.4717C17.238 2.1787 16.763 2.1787 16.47 2.4717C16.177 2.7647 16.177 3.2397 16.47 3.5327L18.19 5.2527H6.001C4.484 5.2527 3.251 6.4857 3.251 8.0027V11.0017C3.251 11.4157 3.587 11.7517 4.001 11.7517C4.415 11.7517 4.751 11.4157 4.751 11.0017V8.0027C4.751 7.3137 5.312 6.7527 6.001 6.7527H18.19L16.47 8.4727C16.177 8.7657 16.177 9.2407 16.47 9.5337C16.616 9.6797 16.808 9.7537 17 9.7537C17.192 9.7537 17.384 9.6807 17.53 9.5337L20.53 6.5337C20.823 6.2407 20.823 5.7657 20.53 5.4727L20.531 5.4717Z" fill="black" />
                                                    <path d="M19 12.249C18.586 12.249 18.25 12.585 18.25 12.999V15.998C18.25 16.687 17.689 17.248 17 17.248H5.811L7.531 15.528C7.824 15.235 7.824 14.76 7.531 14.467C7.238 14.174 6.763 14.174 6.47 14.467L3.47 17.467C3.177 17.76 3.177 18.235 3.47 18.528L6.47 21.528C6.616 21.674 6.808 21.748 7 21.748C7.192 21.748 7.384 21.675 7.53 21.528C7.823 21.235 7.823 20.76 7.53 20.467L5.81 18.747H16.999C18.516 18.747 19.749 17.514 19.749 15.997V12.998C19.749 12.584 19.413 12.248 18.999 12.248L19 12.249Z" fill="black" />
                                                </svg>
                                            </div>
                                        </div>
                                        <Link key={value.id} to={`./petFood/dogsfood/${value.id}`} className="cursor-pointer flex flex-col pb-[19px]">
                                            <img src={value.menu.photo} className="rounded-t-[30px] h-[280px] w-[100%] object-fill object-center border-b-[1px] flex" alt='none' />
                                            <div className="px-[19px] pt-[16px]">
                                                <h3 className="text-[15px] text-[#00000099] mb-1">{value.menu.subtitle || "none"}</h3>
                                                <h2 className="text-[#000] font-[lufga500] text-[16px] mb-[18px]">{value.menu.title}</h2>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <p className="text-[#000] text-[20px] font-[lufga500] mr-[5px]">{value.menu.sale}</p>
                                                        <p className="text-[#00000066] text-[16px] font-[lufga400]">{value.menu.cost}</p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-[5px]" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                            <path d="M9 0L11.3805 5.72348L17.5595 6.21885L12.8518 10.2515L14.2901 16.2812L9 13.05L3.70993 16.2812L5.14822 10.2515L0.440492 6.21885L6.61947 5.72348L9 0Z" fill="#FFA048" />
                                                        </svg>
                                                        <p className="">4.5</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>
                                })
                            }
                            {
                                cats.map((value) => {
                                    return <div className='flex flex-col border-[1px] rounded-[30px] relative petfoods' >

                                        <div className="heart_div absolute right-4 top-4 heart cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5998 6.65891L13.0426 7.19766C12.4621 7.75891 11.5415 7.75996 10.9597 7.19996L10.3972 6.65851C9.6401 5.92586 8.61275 5.50996 7.5363 5.50996C6.45985 5.50996 5.4325 5.92586 4.67535 6.65851L4.66132 6.67191C4.29192 7.02021 3.99982 7.43631 3.80092 7.89436C3.60205 8.35231 3.5 8.84376 3.5 9.33951C3.5 9.83526 3.60205 10.3267 3.80092 10.7847C3.99982 11.2427 4.29192 11.6588 4.66132 12.0071L4.67251 12.0177L10.9598 18.0694C11.5406 18.6285 12.4594 18.6285 13.0402 18.0694L19.3275 12.0177L19.3387 12.0071C19.7081 11.6588 20.0002 11.2427 20.1991 10.7847C20.3979 10.3267 20.5 9.83526 20.5 9.33951C20.5 8.84376 20.3979 8.35231 20.1991 7.89436C20.0002 7.43631 19.7081 7.02021 19.3387 6.67191L19.3248 6.65866C18.5672 5.92576 17.5394 5.50976 16.4624 5.50976C15.3855 5.50976 14.3574 5.92601 13.5998 6.65891ZM3.63229 5.58056C3.11613 6.06721 2.70552 6.65096 2.42504 7.29686C2.14457 7.94281 2 8.63751 2 9.33951C2 10.0415 2.14457 10.7362 2.42504 11.3821C2.70552 12.028 3.11613 12.6118 3.63229 13.0985L9.91955 19.1501C11.0812 20.2682 12.9188 20.2682 14.0804 19.1502L20.3677 13.0985C20.8838 12.6118 21.2945 12.028 21.5749 11.3821C21.8554 10.7362 22 10.0415 22 9.33951C22 8.63751 21.8554 7.94281 21.5749 7.29686C21.2945 6.65096 20.8838 6.06721 20.3677 5.58056C19.3273 4.57409 17.9243 4.00977 16.4624 4.00977C15.0006 4.00977 13.5976 4.57409 12.5572 5.58056L12 6.11931L11.4403 5.58056C10.4003 4.57424 8.99775 4.00998 7.5363 4.00998C6.0749 4.00998 4.67227 4.57424 3.63229 5.58056Z" fill="#000" />
                                            </svg>
                                        </div>
                                        <div className="hoverCart flex-col absolute top-4 left-4  items-center justify-center opacity-0">
                                            <div className="rounded-[12px] bg-[#FFEDE9] p-[5px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 9.25068H18.401L14.624 3.58468C14.394 3.23968 13.927 3.14568 13.584 3.37668C13.239 3.60668 13.146 4.07168 13.376 4.41668L16.599 9.25068H7.401L10.624 4.41668C10.854 4.07168 10.761 3.60668 10.416 3.37668C10.071 3.14668 9.606 3.23968 9.376 3.58468L5.599 9.25068H3C2.586 9.25068 2.25 9.58668 2.25 10.0007C2.25 10.4147 2.586 10.7507 3 10.7507H3.385L4.943 18.5397C5.199 19.8207 6.333 20.7507 7.64 20.7507H16.361C17.668 20.7507 18.801 19.8207 19.058 18.5397L20.616 10.7507H21.001C21.415 10.7507 21.751 10.4147 21.751 10.0007C21.751 9.58668 21.414 9.25068 21 9.25068ZM17.586 18.2457C17.469 18.8277 16.954 19.2507 16.36 19.2507H7.64C7.046 19.2507 6.531 18.8277 6.414 18.2457L4.915 10.7507H19.085L17.586 18.2457Z" fill="black" />
                                                    <path d="M14.75 14V16C14.75 16.414 14.414 16.75 14 16.75C13.586 16.75 13.25 16.414 13.25 16V14C13.25 13.586 13.586 13.25 14 13.25C14.414 13.25 14.75 13.586 14.75 14ZM10 13.25C9.586 13.25 9.25 13.586 9.25 14V16C9.25 16.414 9.586 16.75 10 16.75C10.414 16.75 10.75 16.414 10.75 16V14C10.75 13.586 10.414 13.25 10 13.25Z" fill="black" />
                                                </svg>
                                            </div>
                                            <div className="rounded-[12px] bg-[#FFEDE9] p-[5px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9869 10.3443C16.373 13.2425 13.3124 15.0429 10.0011 15.0429C6.68754 15.0429 3.62695 13.2425 2.01305 10.3443C1.88875 10.1193 1.88875 9.88141 2.01305 9.65656C3.62695 6.75844 6.68754 4.95828 10.0011 4.95828C13.3124 4.95828 16.373 6.75844 17.9869 9.65656C18.1134 9.88141 18.1134 10.1193 17.9869 10.3443ZM19.0179 9.08195C17.1961 5.8098 13.7411 3.77734 10.0011 3.77734C6.25887 3.77734 2.80391 5.8098 0.98211 9.08195C0.656329 9.66578 0.656329 10.3351 0.98211 10.9185C2.80391 14.1907 6.25887 16.2236 10.0011 16.2236C13.7411 16.2236 17.1961 14.1907 19.0179 10.9185C19.3436 10.3352 19.3436 9.66578 19.0179 9.08195ZM10.0011 12.4229C11.3363 12.4229 12.423 11.3362 12.423 10.0004C12.423 8.66445 11.3363 7.57781 10.0011 7.57781C8.66363 7.57781 7.57699 8.66445 7.57699 10.0004C7.57699 11.3362 8.66367 12.4229 10.0011 12.4229ZM10.0011 6.39687C8.01207 6.39687 6.39606 8.01355 6.39606 10.0004C6.39606 11.9877 8.01211 13.6037 10.0011 13.6037C11.9879 13.6037 13.6039 11.9876 13.6039 10.0004C13.6039 8.01355 11.9879 6.39687 10.0011 6.39687Z" fill="black" />
                                                </svg>
                                            </div>
                                            <div className="rounded-[12px] bg-[#FFEDE9] p-[5px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M20.531 5.4717L17.531 2.4717C17.238 2.1787 16.763 2.1787 16.47 2.4717C16.177 2.7647 16.177 3.2397 16.47 3.5327L18.19 5.2527H6.001C4.484 5.2527 3.251 6.4857 3.251 8.0027V11.0017C3.251 11.4157 3.587 11.7517 4.001 11.7517C4.415 11.7517 4.751 11.4157 4.751 11.0017V8.0027C4.751 7.3137 5.312 6.7527 6.001 6.7527H18.19L16.47 8.4727C16.177 8.7657 16.177 9.2407 16.47 9.5337C16.616 9.6797 16.808 9.7537 17 9.7537C17.192 9.7537 17.384 9.6807 17.53 9.5337L20.53 6.5337C20.823 6.2407 20.823 5.7657 20.53 5.4727L20.531 5.4717Z" fill="black" />
                                                    <path d="M19 12.249C18.586 12.249 18.25 12.585 18.25 12.999V15.998C18.25 16.687 17.689 17.248 17 17.248H5.811L7.531 15.528C7.824 15.235 7.824 14.76 7.531 14.467C7.238 14.174 6.763 14.174 6.47 14.467L3.47 17.467C3.177 17.76 3.177 18.235 3.47 18.528L6.47 21.528C6.616 21.674 6.808 21.748 7 21.748C7.192 21.748 7.384 21.675 7.53 21.528C7.823 21.235 7.823 20.76 7.53 20.467L5.81 18.747H16.999C18.516 18.747 19.749 17.514 19.749 15.997V12.998C19.749 12.584 19.413 12.248 18.999 12.248L19 12.249Z" fill="black" />
                                                </svg>
                                            </div>
                                        </div>
                                        <Link key={value.id} to={`./petFood/catsfood/${value.id}`} className="cursor-pointer flex flex-col pb-[19px]">
                                            <img src={value.menu.photo} className="rounded-t-[30px] h-[280px] w-[100%] object-fill object-center border-b-[1px] flex" alt='none' />
                                            <div className="px-[19px] pt-[16px]">
                                                <h3 className="text-[15px] text-[#00000099] mb-1">{value.menu.subtitle || "none"}</h3>
                                                <h2 className="text-[#000] font-[lufga500] text-[16px] mb-[18px]">{value.menu.title}</h2>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <p className="text-[#000] text-[20px] font-[lufga500] mr-[5px]">{value.menu.sale}</p>
                                                        <p className="text-[#00000066] text-[16px] font-[lufga400]">{value.menu.cost}</p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-[5px]" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                            <path d="M9 0L11.3805 5.72348L17.5595 6.21885L12.8518 10.2515L14.2901 16.2812L9 13.05L3.70993 16.2812L5.14822 10.2515L0.440492 6.21885L6.61947 5.72348L9 0Z" fill="#FFA048" />
                                                        </svg>
                                                        <p className="">4.5</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ShopMain