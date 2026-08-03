import"./Ratingg.css"
import star from "../../assets/star.png"
import dots from "../../assets/dots.png"
import icon from "../../assets/check.png"
import stars from "../../assets/stars.png"
import { Link } from "react-router-dom"
export default function Ratingg() {
  return (
    <>
    <div className="h1">
    <h1>Rating & Reviews</h1>
    <div className="big">
        <div className="small"></div>
    </div>
    </div>
    <section className="sec">
     <div className="p">
        <h1>All Reviews</h1>
        <p>(451)</p>
     </div>
     <div className="maindiv">
        <div className="review">
            <div className="dots">
              <img src={star}alt="" />
              <img src={dots}alt="" />
            </div>
            <h1 className="myheading">Samantha D. <span><img src={icon} alt="" /></span></h1>
            <p className="para">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            <p className="date">Posted on August 14, 2023</p>
        </div>
        <div className="review">
            <div className="dots">
              <img src={stars}alt="" />
              <img src={dots}alt="" />
            </div>
            <h1 className="myheading">Alex M. <span><img src={icon} alt="" /></span></h1>
            <p className="para">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
            <p className="date">Posted on August 15, 2023</p>
        </div>
        <div className="review">
            <div className="dots">
              <img src={star}alt="" />
              <img src={dots}alt="" />
            </div>
            <h1 className="myheading">Ethan R. <span><img src={icon} alt="" /></span></h1>
            <p className="para">"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
            </p>
            <p className="date">Posted on August 16, 2023</p>
        </div>
        <div className="review">
            <div className="dots">
              <img src={stars}alt="" />
              <img src={dots}alt="" />
            </div>
            <h1 className="myheading">Liam K. <span><img src={icon} alt="" /></span></h1>
            <p className="para">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
            <p className="date">Posted on August 20, 2023</p>
        </div>
        <div className="review">
            <div className="dots">
              <img src={stars}alt="" />
              <img src={dots}alt="" />
            </div>
            <h1 className="myheading">Olivia P. <span><img src={icon} alt="" /></span></h1>
            <p className="para">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
            <p className="date">Posted on August 17, 2023</p>
        </div>
        <div className="review">
            <div className="dots">
              <img src={star}alt="" />
              <img src={dots}alt="" />
            </div>
            <h1 className="myheading">Ava H. <span><img src={icon} alt="" /></span></h1>
            <p className="para">"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
            <p className="date">Posted on August 19, 2023</p>
        </div> 
     </div>
     </section>
     <div className="btnsection">
        <button><Link to="/Home">Load More Reviews</Link></button>
     </div>
     </>

  )
}
