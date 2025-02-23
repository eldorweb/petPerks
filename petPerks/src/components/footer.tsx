import { FooterLink, FooterStyle } from "../style/footerStyle"
import logo from '../assets/svg/nav/logo.svg'
import img1 from '../assets/png/footer/DogHarnes.jpeg'
import img2 from '../assets/png/footer/dogBed.jpg'
import img3 from '../assets/png/footer/dogBone.jpg'
import card from '../assets/png/footer/card.png'


const Footer = () => {
    return (
    <FooterStyle className="footer">
        <div className="bgimg">
        <div className="footerTop">
        <div className="footerFirst">
        <FooterLink to={'/'} className='footerLogo'>
            <img src={logo} alt="logo" />
            <div className="logoName">PetPerks</div>
        </FooterLink>
        <div className="first_address">
        Address : 451 Wall Street, UK, London <br />
        E-mail : example@info.com <br />
        Phone : (064) 332-1233 <br />
        </div>
        <div className="first_subscribe">
            <p>subscribe to our newsletter</p>
            <input type="text" placeholder="Your Email Address"  className="inputArrow"/>
        </div>
        </div>


        <div className="footerSecond">
            <h2>Recent Posts</h2>
            <div className="second_div">
                <img src={img1} alt="dog Photo" />
                <div className="wrapper">
                    <h3>Dog Harness Body Belt</h3>
                    <p>July 23, 2024</p>
                </div>
            </div>
            <div className="second_div">
                <img src={img2} alt="dog Photo" />
                <div className="wrapper">
                    <h3>Pet Beds for Small</h3>
                    <p>July 23, 2024</p>
                </div>
            </div>
            <div className="second_div">
                <img src={img3} alt="dog Photo" />
                <div className="wrapper">
                    <h3>Goofy Tails Wood Dog</h3>
                    <p>July 23, 2024</p>
                </div>
            </div>
        </div>

        <div className="footerThird">
            <h2>Our Stores</h2>
            <ul>
                <li>New York</li>
                <li>London SF</li>
                <li>Edinburg</li>
                <li>Los Angeles</li>
                <li>Chicago</li>
                <li>Las Vegas</li>
            </ul>
        </div>
        

        <div className="footerThird">
            <h2>Useful Links</h2>
            <ul>
                <li>Privacy Policy</li>
                <li>Returns</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Latest News</li>
                <li>Our Sitemap</li>
            </ul>
        </div>


        <div className="footerThird last">
            <h2>Footer Menu</h2>
            <ul>
                <li>Instagram profile</li>
                <li>New Collection</li>
                <li>Woman Dress</li>
                <li>Contact Us</li>
                <li>Latest News</li>
            </ul>
        </div>
        </div>

        <div className="footerBottom">
            <h3>© 2024 DexignZone Theme. All Rights Reserved.</h3>
            <div className="bottomDiv">
                <p>We accept:</p>
                <img src={card} alt="card" />
            </div>
        </div>
        
        </div>
    </FooterStyle>
    )
}

export default Footer