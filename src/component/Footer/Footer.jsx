import "./Footer.css"
import icon from"../../assets/Social.png"
import envelop from"../../assets/Frame.png"
import payment from "../../assets/payment.png"
export default function Footer() {
  return (
    <>
    
    <section className="footer">
        <div className="child">
        <div className="heading">
            <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        </div>
        <div className="second">
           <div className="input">
              <img src={envelop}alt="" />
              <input className="myinput" type="email" placeholder="Enter your email address"/>
           </div>
          <div className="btn6">
              <button>Subscribe to Newsletter</button>
          </div>
        </div>
    </div>
      <div className="minifoter">
        <div className="bigtext">
            <h1 className="logo">SHOP.CO</h1>
            <p className="vb">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <img src={icon} alt="" />
        </div>
        <div>
            <h3>
                Company
            </h3>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">Career</a></li>
            </ul>
        </div>
        <div>
            <h3>
                Help
            </h3>
            <ul>
                <li><a href="">Customer Support</a></li>
                <li><a href="">Delivery Details</a></li>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Privacy Policy</a></li>
            </ul>
        </div>
        <div>
            <h3>
                FAQ
            </h3>
            <ul>
                <li><a href="">Account</a></li>
                <li><a href="">Manage Deliveries</a></li>
                <li><a href="">Orders</a></li>
                <li><a href="">Payments</a></li>
            </ul>
        </div>
        <div>
            <h3>
                Resources
            </h3>
            <ul>
                <li><a href="">Free eBooks</a></li>
                <li><a href="">Development</a></li>
                <li><a href="">How to-Blog</a></li>
                <li><a href="">Youtube Playlist</a></li>
            </ul>
        </div>
      </div>
    </section>
    <div className="papa">
        <div className="spacer"></div>
    </div>
    <div className="copywrite">
        <div className="copy">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
        </div>
        <div className="pay">
            <img src={payment} alt="" />
        </div> 
    </div>
    </>
  )
}
