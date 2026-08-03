import "./Section4.css"
import casual from "../../assets/casual.png"
import formal from "../../assets/formal.png"
import party from "../../assets/party.png"
import gym from "../../assets/gym.png"
export default function Section() {
  return (
    <>
    <section className="myimgs">
      <div className="hgfd">
        <div className="ghgh">
        <h1>BROWSE BY DRESS STYLE</h1>
        </div>
        <div className="div1">
          <div><img src={casual} alt="" /></div>
          <div><img src={formal}alt="" /></div>
        </div>
        <div className="div2">
          <div><img src={party} alt="" /></div>
          <div><img src={gym} alt="" /></div>
        </div>
      </div>
    </section>
    </>
  )
}
