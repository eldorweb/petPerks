import { NavLink, NavStyle } from "../style/navStyle"
import logo from '../assets/svg/nav/logo.svg'
import burger from '../assets/svg/nav/navBurger.svg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { FoodMocdata } from "../mocData/FoodMocdata";
import { Link } from "react-router";
import AOS from 'aos'
import "aos/dist/aos.css";


const style = {
    position: 'absolute',
    top: 0,
    width: '100%',
    bgcolor: '#FFEDE9',
    boxShadow: 24,
    py: '78px',
    px: '200px',
};

// const BootstrapInput = styled(InputBase)(() => ({
//     '& .MuiInputBase-input': {
//         // borderRadius: 4,
//         position: 'relative',
//         border: "none",
//         color:"black",
//         fontSize: 20,
//         paddingBottom:20,
//         // padding: '10px 30px 25px 0',
//         // Use the system font instead of the default Roboto font.
//         // fontFamily: [
//         //     '-apple-system',
//         //     'BlinkMacSystemFont',
//         //     '"Segoe UI"',
//         //     'Roboto',
//         //     '"Helvetica Neue"',
//         //     'Arial',
//         //     'sans-serif',
//         //     '"Apple Color Emoji"',
//         //     '"Segoe UI Emoji"',
//         //     '"Segoe UI Symbol"',
//         // ].join(','),
//         // '&:focus': {
//         //     borderRadius: 4,
//         //     borderColor: '#80bdff',
//         //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//         // },
//     },
// }));

const Nav = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dogs = FoodMocdata.filter(value => value.type === 'dogsFood')

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });

        AOS.refresh();

        return () => {
            AOS.refreshHard();
        };
    }, []);
    return (
        <NavStyle data-aos="slide-down">
            <a href="/home" className="cursor-pointer">
                <div className="logo_div">
                    <img src={logo} alt="logo" className="logo cursor-pointer" />
                    <h2 className="logo_title">PetPerks</h2>
                </div>
            </a>

            <div className="nav_div">
                <NavLink to={'/home'} className="nav_link">
                    <div className="link">Home</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fillOpacity="0.4" />
                    </svg>
                </NavLink>
                <NavLink to={'/shop'} className="nav_link">
                    <div className="link">Shop</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fillOpacity="0.4" />
                    </svg>
                </NavLink>
                <NavLink to={'/blog'} className="nav_link">
                    <div className="link">Blog</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fillOpacity="0.4" />
                    </svg>
                </NavLink>
                <NavLink to={'/portfolio'} className="nav_link">
                    <div className="link">Portfolio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fillOpacity="0.4" />
                    </svg>
                </NavLink>
                <NavLink to={'/about'} className="nav_link">
                    <div className="link">About</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z" fill="black" fillOpacity="0.4" />
                    </svg>
                </NavLink>
            </div>

            <div className="nav_right">
                <div className="login_div">
                    <NavLink to={'/login'}>Login</NavLink>/
                    <NavLink to={'/register'}>Register</NavLink>
                </div>
                <div className="icon_div flex items-center">
                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <div className="flex flex-col">
                                    <div className="flex items-center border-b-[2px]">

                                        {/* <Box sx={{ minWidth: 241 }}>
                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel id="demo-simple-select-label" className="text-[20px] font-[lufga400] capitalize text-[#000]">All Categories</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                    input={<BootstrapInput />}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box> */}
                                        <ul>
                                            <li className="w-[240px]"><a href="#" className="flex items-center justify-between">All Categories <svg xmlns="http://www.w3.org/2000/svg" className="" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                                <path d="M7.24805 11.2344L14.248 18.2344L21.248 11.2344" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg></a>
                                                <ul className="dropdown">
                                                    <li><a href="#">Web Development</a></li>
                                                    <li><a href="#">Web Design</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Iconography</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="flex items-center justify-between pb-[10px] w-[100%]">
                                            <input type="text" className="w-[100%] font-[lufga400] placeholder:font-[lufga400] placeholder:text-[#000] placeholder:text-[20px] pl-[27px] border-l-[1px] border-l-[#00000066]" placeholder="Search Product" />
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="search (2) 1">
                                                    <path id="Vector" d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path id="Vector_2" d="M17.5 17.5L13.875 13.875" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex pt-[15px] mb-[35px]">
                                        <p className="mr-[15px] text-[15px] capitalize">Quick Search :</p>
                                        <div className="flex gap-[30px]">
                                            <p className="text-[15px] capitalize">Dog Food</p>
                                            <p className="text-[15px] capitalize">Dog Toys</p>
                                            <p className="text-[15px] capitalize">Dog Health</p>
                                            <p className="text-[15px] capitalize">Dog Bowls</p>
                                        </div>
                                    </div>
                                    <h3 className="text-[20px] font-[lufga500] mb-[25px]">You May Also Like</h3>
                                    {/*  */}
                                    <div className="flex gap-[10px]">
                                        {
                                            dogs.map((value) => {
                                                return <div className='flex flex-col rounded-[30px] relative petfoods' >

                                                    <Link key={value.id} to={`./petFood/${value.id}`} className="cursor-pointer flex flex-col">
                                                        <img src={value.menu.photo} className="rounded-[30px] h-[160px] w-[100%] object-fill object-center border-[1px] flex" alt='none' />
                                                        <div className="px-[19px] pt-[16px]">
                                                            <h2 className="text-[#000] font-[lufga500] text-[16px] mb-[18px]">{value.menu.title}</h2>
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center">
                                                                    <p className="text-[#000] text-[20px] font-[lufga500] mr-[5px]">{value.menu.sale}</p>
                                                                    <p className="text-[#00000066] text-[16px] font-[lufga400]">{value.menu.cost}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </Link>
                                                </div>
                                            })
                                        }
                                    </div>
                                    {/*  */}
                                </div>
                            </Box>
                        </Modal>
                    </div>
                    <svg onClick={handleOpen} className="search cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5 17.5L13.875 13.875" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <NavLink to={'/favorites'}><svg className="heart" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M17.3667 3.84124C16.9411 3.41541 16.4357 3.07761 15.8795 2.84714C15.3233 2.61667 14.7271 2.49805 14.1251 2.49805C13.523 2.49805 12.9268 2.61667 12.3706 2.84714C11.8144 3.07761 11.309 3.41541 10.8834 3.84124L10.0001 4.72457L9.11672 3.84124C8.25698 2.98149 7.09092 2.49849 5.87506 2.49849C4.6592 2.49849 3.49313 2.98149 2.63339 3.84124C1.77365 4.70098 1.29065 5.86704 1.29065 7.0829C1.29065 8.29876 1.77365 9.46483 2.63339 10.3246L3.51672 11.2079L10.0001 17.6912L16.4834 11.2079L17.3667 10.3246C17.7926 9.89894 18.1303 9.39358 18.3608 8.83736C18.5913 8.28115 18.7099 7.68497 18.7099 7.0829C18.7099 6.48083 18.5913 5.88465 18.3608 5.32844C18.1303 4.77222 17.7926 4.26686 17.3667 3.84124Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </NavLink>


                    <NavLink to={'/shopCarts'}><svg className="shoppingCart" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_446_8265)">
                            <path d="M7.49996 18.3337C7.9602 18.3337 8.33329 17.9606 8.33329 17.5003C8.33329 17.0401 7.9602 16.667 7.49996 16.667C7.03972 16.667 6.66663 17.0401 6.66663 17.5003C6.66663 17.9606 7.03972 18.3337 7.49996 18.3337Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.6667 18.3337C17.1269 18.3337 17.5 17.9606 17.5 17.5003C17.5 17.0401 17.1269 16.667 16.6667 16.667C16.2065 16.667 15.8334 17.0401 15.8334 17.5003C15.8334 17.9606 16.2065 18.3337 16.6667 18.3337Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.833374 0.833008H4.16671L6.40004 11.9913C6.47625 12.375 6.68496 12.7196 6.98966 12.9649C7.29436 13.2102 7.67562 13.3405 8.06671 13.333H16.1667C16.5578 13.3405 16.9391 13.2102 17.2438 12.9649C17.5485 12.7196 17.7572 12.375 17.8334 11.9913L19.1667 4.99967H5.00004" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_446_8265">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </NavLink>
                </div>
                <img src={burger} alt="nav_burger" className="nav_burger" id="nav_burger" />
            </div>
        </NavStyle>
    )
}

export default Nav
