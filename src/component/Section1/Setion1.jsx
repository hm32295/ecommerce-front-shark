import"./Setion1.css"
import im1 from "../../assets/im1.png"
import im2 from "../../assets/im2.png"
import im3 from "../../assets/im3.png"
import im4 from "../../assets/im4.png"
import im5 from "../../assets/im5.png"
export default function Setion1() {
  return (
    <>
    <section className="mysec">
        <div className="mydidi">
            <div><img src={im1}alt="" /></div>
            <div><img src={im2}alt="" /></div>
            <div><img src={im3}alt="" /></div>
            <div><img src={im4}alt="" /></div>
            <div><img src={im5}alt="" /></div>
        </div>
    </section>
    </>
  )
}
