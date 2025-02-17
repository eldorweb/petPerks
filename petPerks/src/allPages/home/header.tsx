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
import dogface1 from '../../assets/svg/home/zstar1.svg'
import dogface2 from '../../assets/svg/home/zcircle2.svg'
import rect from '../../assets/svg/home/zrectangle.svg'
import zdogface from '../../assets/png/home/zdogface.png'

const HomeHeader = () => {
    return (
        <HomeStyle>
        <div className="header">


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
                    To Your <img src={headerStar} alt="dog" className="header_right_bgimg"/> Pets</h1>
                    <p>No code need. Plus free shippng on <span>$99+</span> orders!</p>
                    <button>Adopt A Pet <img src={paw} alt="paw" /></button>
                    <div className="wrapper">
                        <img className="img1" src={yellowDog} alt="dog" width='160px'/>
                        <div className="owners">
                            <h3>Our happy pet owners</h3>
                            <p><img src={goldStar} alt="goldStar" />4.6 (<span>7.2K Reviews</span>)</p>
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
                    <img src={zbigimg} className="img1" alt="img" width='660px'/>
                    <svg className="img2" xmlns="http://www.w3.org/2000/svg" width="327" height="333" viewBox="0 0 327 333" fill="none">
  <g filter="url(#filter0_d_446_8410)">
    <path d="M139.302 82.4866C141.273 79.4419 145.727 79.4419 147.698 82.4866L156.543 96.155C157.829 98.142 160.332 98.9553 162.54 98.1035L177.73 92.2447C181.114 90.9396 184.718 93.5581 184.522 97.1794L183.644 113.437C183.516 115.8 185.063 117.929 187.35 118.538L203.083 122.727C206.588 123.66 207.964 127.896 205.678 130.711L195.411 143.347C193.919 145.184 193.919 147.816 195.411 149.653L205.678 162.289C207.964 165.104 206.588 169.34 203.083 170.273L187.35 174.462C185.063 175.071 183.516 177.2 183.644 179.563L184.522 195.821C184.718 199.442 181.114 202.06 177.73 200.755L162.54 194.896C160.332 194.045 157.829 194.858 156.543 196.845L147.698 210.513C145.727 213.558 141.273 213.558 139.302 210.513L130.457 196.845C129.171 194.858 126.668 194.045 124.46 194.896L109.27 200.755C105.886 202.06 102.282 199.442 102.478 195.821L103.356 179.563C103.484 177.2 101.937 175.071 99.6496 174.462L83.9168 170.273C80.4123 169.34 79.0357 165.104 81.3225 162.289L91.5885 149.653C93.081 147.816 93.081 145.184 91.5885 143.347L81.3225 130.711C79.0357 127.896 80.4123 123.66 83.9168 122.727L99.6496 118.538C101.937 117.929 103.484 115.8 103.356 113.437L102.478 97.1794C102.282 93.5581 105.886 90.9396 109.27 92.2447L124.46 98.1035C126.668 98.9553 129.171 98.142 130.457 96.155L139.302 82.4866Z" fill="#999999"/>
    <path d="M141.401 83.8448C142.386 82.3225 144.614 82.3225 145.599 83.8448L154.444 97.5132C156.373 100.494 160.127 101.714 163.44 100.436L178.63 94.5772C180.322 93.9247 182.124 95.2339 182.026 97.0446L181.148 113.302C180.956 116.847 183.277 120.04 186.707 120.954L202.44 125.142C204.192 125.609 204.881 127.727 203.737 129.135L193.471 141.771C191.232 144.526 191.232 148.474 193.471 151.229L203.737 163.865C204.881 165.273 204.192 167.391 202.44 167.858L186.707 172.046C183.277 172.96 180.956 176.153 181.148 179.698L182.026 195.955C182.124 197.766 180.322 199.075 178.63 198.423L163.44 192.564C160.127 191.286 156.373 192.506 154.444 195.487L145.599 209.155C144.614 210.678 142.386 210.678 141.401 209.155L132.556 195.487C130.627 192.506 126.873 191.286 123.56 192.564L108.37 198.423C106.678 199.075 104.876 197.766 104.974 195.955L105.852 179.698C106.044 176.153 103.723 172.96 100.293 172.046L84.56 167.858C82.8077 167.391 82.1194 165.273 83.2628 163.865L93.5289 151.229C95.7675 148.474 95.7675 144.526 93.5289 141.771L83.2628 129.135C82.1194 127.727 82.8077 125.609 84.56 125.142L100.293 120.954C103.723 120.04 106.044 116.847 105.852 113.302L104.974 97.0446C104.876 95.2339 106.678 93.9247 108.37 94.5772L123.56 100.436C126.873 101.714 130.627 100.494 132.556 97.5132L141.401 83.8448Z" stroke="#FFFBFA" stroke-width="5"/>
  </g>
  <defs>
    <filter id="filter0_d_446_8410" x="0.19989" y="0.203125" width="326.6" height="332.594" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="20" dy="20"/>
      <feGaussianBlur stdDeviation="50"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.758333 0 0 0 0 0.367964 0 0 0 0 0.281215 0 0 0 0.4 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_446_8410"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_446_8410" result="shape"/>
    </filter>
  </defs>
                    </svg>
                    <svg className="img3" xmlns="http://www.w3.org/2000/svg" width="244" height="283" viewBox="0 0 244 283" fill="none">
  <g filter="url(#filter0_d_446_8406)">
    <path d="M110.875 81.847C117.836 79.9819 125.164 79.9819 132.125 81.847C139.086 83.712 145.433 87.3765 150.528 92.472C155.624 97.5674 159.288 103.914 161.153 110.875C163.018 117.836 163.018 125.164 161.153 132.125C159.288 139.086 155.624 145.433 150.528 150.528C145.433 155.624 139.086 159.288 132.125 161.153C125.164 163.018 117.836 163.018 110.875 161.153C103.914 159.288 97.5674 155.624 92.472 150.528C87.3765 145.433 83.712 139.086 81.847 132.125C79.9819 125.164 79.9819 117.836 81.847 110.875C83.712 103.914 87.3765 97.5674 92.472 92.472C97.5674 87.3765 103.914 83.712 110.875 81.847Z" fill="#999999"/>
    <path d="M111.393 83.7788C118.014 82.0046 124.986 82.0046 131.607 83.7788C138.229 85.553 144.267 89.0389 149.114 93.8862C153.961 98.7334 157.447 104.771 159.221 111.393C160.995 118.014 160.995 124.986 159.221 131.607C157.447 138.229 153.961 144.267 149.114 149.114C144.267 153.961 138.229 157.447 131.607 159.221C124.986 160.995 118.014 160.995 111.393 159.221C104.771 157.447 98.7334 153.961 93.8862 149.114C89.0389 144.267 85.553 138.229 83.7788 131.607C82.0046 124.986 82.0046 118.014 83.7788 111.393C85.553 104.771 89.0389 98.7334 93.8862 93.8862C98.7334 89.0389 104.771 85.553 111.393 83.7788Z" stroke="#FFFBFA" stroke-width="4"/>
  </g>
  <defs>
    <filter id="filter0_d_446_8406" x="0.44812" y="0.448242" width="282.104" height="282.104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="20" dy="20"/>
      <feGaussianBlur stdDeviation="50"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.756863 0 0 0 0 0.368627 0 0 0 0 0.282353 0 0 0 0.4 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_446_8406"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_446_8406" result="shape"/>
    </filter>
  </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none" className="img4">
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
                        <img src={rect} alt="rectangle" className="img5"/>
                        <img src={zdogface} alt="dogface" width='212px' className='img6'/>
                        <h3>We love dogs</h3>
                    </div>
                </div>


            </div>
        </div>
        </HomeStyle>
    )
}

export default HomeHeader