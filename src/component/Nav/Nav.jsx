import { Link } from "react-router-dom"
import didi from "../../assets/Vector (1).png"
import myicons from "../../assets/myicons.png"
import"./Nav.css"

export default function Nav() {
  return (
   <>
   <section className="nav">
      <div>
        <h1>SHOP.CO</h1>
      </div>
      <div className="menu">
        <ul>
            <li><Link className="l1" to="/Shop">Shop</Link> <i className="pi pi-angle-down
"></i></li>
            <li><Link className="l1" to="/OnSale">On Sale</Link></li>
            <li><Link className="l1" to="/NewArrivals">New Arrivals</Link></li>
            <li><Link className="l1" to="/Brands">Brands</Link></li>
        </ul>
      </div>
      <div>
        <div className="divy">
          <img src={didi}alt="" />
          <input className="myinpt" type="email" placeholder="Search for products..."/>
        </div>
      </div>
      <div className="icons">
        <span className="pi pi-search lli"></span>
        <img src={myicons}alt="" />
      </div>
   </section>
   </>
  )
}
