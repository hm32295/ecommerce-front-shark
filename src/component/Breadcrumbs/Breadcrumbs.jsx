import { Link } from "react-router-dom"
import "./Breadcrumbs.css"
export default function Breadcrumbs() {
  return (
    <>
    <nav aria-label="breadcrumb gh">
      <ul class=" byby breadcrumb">
      <li class="breadcrumb-item"><Link className="a" to="/Home">Home</Link></li>
      <i className="pi pi-angle-right"></i>
      <li class="breadcrumb-item active" aria-current="page">Casual</li>
    </ul>
    </nav>
    <div className="spaacer"></div>
    </>
  )
}
