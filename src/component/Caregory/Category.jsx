import "./Category.css"
import cat from "../../assets/categoory.png"
export default function Category() {
  return (
    <>
    <section className="seccat">
        <div className="seccat1">
            <div className="heading6"><h1>Casual</h1></div>
            <div className="img6"><img src={cat}alt="" /></div>
        </div>
    </section>
    </>
  )
}
