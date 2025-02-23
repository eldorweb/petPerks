import { HomeStyle } from "../../style/homeStyle"
// import headerStar from '../../assets/svg/home/headerStar.svg'
import paw from '../../assets/svg/home/paws.svg'
import yellowDog from '../../assets/png/home/yellowDog.jpg'
import goldStar from '../../assets/svg/home/goldStar.svg'
import user1 from '../../assets/png/home/user1.jpg'
import user2 from '../../assets/png/home/user2.jpg'
import user3 from '../../assets/png/home/user3.jpg'
import user4 from '../../assets/png/home/user4.jpg'
import headerImg from '../../assets/png/home/headerImg.png'

const HomeHeader = () => {
    return (
        <HomeStyle>
            <div className="header">

                <div className="forBgimg">
                    <div className="header_left">
                        <div className="vertical1">
                            <a href="https://www.instagram.com/">Instagram</a>
                            <a href="https://www.facebook.com/">Facebook</a>
                            <a href="https://x.com/">twitter</a>
                        </div>
                        <div className="vertical2">Let’s talk</div>
                    </div>


                    <div className="header_right">
                        <div className="right_1">
                            <h1>We Give Preference <br />
                                To Your Pets</h1>
                            <p>No code need. Plus free shippng on <span>$99+</span> orders!</p>
                            <button>Adopt A Pet <img src={paw} alt="paw" /></button>
                            <div className="wrapper">
                                <img className="img1" src={yellowDog} alt="dog" width='160px' />
                                <div className="owners">
                                    <h3>Our happy pet owners</h3>
                                    <p><img src={goldStar} alt="goldStar" />4.6 (<span>7.2K Reviews</span>)</p>
                                    <div className="users">
                                        <img src={user1} alt="user" width='45px' />
                                        <img src={user2} alt="user" width='45px' />
                                        <img src={user3} alt="user" width='45px' />
                                        <img src={user4} alt="user" width='45px' />
                                        <div>+6k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_2">
                            <img src={headerImg} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </HomeStyle>
    )
}

export default HomeHeader