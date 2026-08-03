import "./Section5.css"
import stars from "../../assets/stars.png"
import icon from "../../assets/check.png"
import dots from "../../assets/dots.png"
export default function Section5() {
  return (
    <>
    <section className="review12">
        <div className="h22">
            <h1 className="h58">OUR HAPPY CUSTOMERS</h1>
        </div>
        <div className="rev">
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
                    <img src={stars}alt="" />
                    <img src={dots}alt="" />
                </div>
                <h1 className="myheading">Olivia P. <span><img src={icon} alt="" /></span></h1>
                <p className="para">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
                <p className="date">Posted on August 17, 2023</p>
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
        </div>
    </section>
    </>
  )
}
