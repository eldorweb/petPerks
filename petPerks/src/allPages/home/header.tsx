import { HomeStyle } from "../../style/homeStyle"
import headerStar from '../../assets/svg/home/headerStar.svg'
import paw from '../../assets/svg/home/paws.svg'
import yellowDog from '../../assets/png/home/yellowDog.jpg'
import goldStar from '../../assets/svg/home/goldStar.svg'
import user1 from '../../assets/png/home/user1.jpg'
import user2 from '../../assets/png/home/user2.jpg'
import user3 from '../../assets/png/home/user3.jpg'
import user4 from '../../assets/png/home/user4.jpg'
import zbigimg from '../../assets/png/home/zbigimg.png'
import dogface1 from '../../assets/png/home/dogFace1.jpg'
import dogface2 from '../../assets/png/home/dogFace2.jpg'
import rect from '../../assets/svg/home/zrectangle.svg'
import zdogface from '../../assets/png/home/zdogface.png'

const HomeHeader = () => {
    return (
        <HomeStyle className="header">
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
                    To Your <img src={headerStar} alt="dog" /> Pets</h1>
                    <p>No code need. Plus free shippng on $99+ orders!</p>
                    <button>Adopt A Pet <img src={paw} alt="paw" /></button>
                    <div className="wrapper">
                        <img src={yellowDog} alt="dog" width='160px'/>
                        <div className="owners">
                            <h3>Our happy pet owners</h3>
                            <p><img src={goldStar} alt="goldStar" />4.6 (7.2K Reviews)</p>
                            <div className="users">
                                <img src={user1} alt="user"  width='45px'/>
                                <img src={user2} alt="user"  width='45px'/>
                                <img src={user3} alt="user"  width='45px'/>
                                <img src={user4} alt="user"  width='45px'/>
                                <div>+6k</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right_2">
                    <img src={zbigimg} alt="img" />
                    <img src={dogface1} alt="dogFace" width='141px'/>
                    <img src={dogface2} alt="dogFace" width='141px'/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
  <g clip-path="url(#clip0_446_8418)">
    <path d="M70.6589 73.8392C70.5902 69.6022 68.9005 65.5527 65.9373 62.5236C62.9741 59.4945 58.9627 57.716 54.7283 57.5542L35.8323 56.8193C25.2087 56.1952 19.4005 69.8246 27.2168 77.0506C31.3592 81.064 36.7448 82.3463 41.0207 86.8783C45.6148 91.4137 47.1084 96.6608 50.798 101.156C57.9336 108.793 71.3802 103.193 70.9681 92.7367L70.6589 73.8392Z" fill="#FFE0D9"/>
    <path d="M100.85 77.3939C97.8479 72.8164 90.7042 74.0604 86.2776 76.8955C72.6461 85.7451 81.2722 98.9068 94.8471 90.6831C100.614 87.1069 103.254 81.2589 100.85 77.3939Z" fill="#FFE0D9"/>
    <path d="M78.7776 67.1366C82.5145 70.9565 89.8957 69.8146 95.2235 64.6027C107.677 51.6729 94.8733 38.5846 81.6825 50.7605C76.3547 55.9723 75.0507 63.3267 78.7776 67.1366Z" fill="#FFE0D9"/>
    <path d="M52.017 41.8726C54.9586 37.5196 56.3497 30.3949 51.8392 27.2923C43.0776 21.9354 30.8585 39.7902 37.6233 46.7859C41.6087 50.5986 47.9625 47.9438 52.017 41.8726Z" fill="#FFE0D9"/>
    <path d="M61.6079 49.5851C65.3349 53.395 72.7162 52.2531 78.044 47.0412C90.5071 34.1214 77.7036 21.0331 64.503 33.1989C59.1752 38.4108 57.8711 45.7652 61.6079 49.5851Z" fill="#FFE0D9"/>
  </g>
  <defs>
    <clipPath id="clip0_446_8418">
      <rect width="90" height="90" fill="white" transform="translate(64.9116 0.576172) rotate(45.6303)"/>
    </clipPath>
  </defs>
                    </svg>
                    <div className="rectangle">
                        <img src={rect} alt="rectangle" />
                        <img src={zdogface} alt="dogface" width='212px'/>
                        <h3>We love dogs</h3>
                    </div>
                </div>
            </div>
        </HomeStyle>
    )
}

export default HomeHeader