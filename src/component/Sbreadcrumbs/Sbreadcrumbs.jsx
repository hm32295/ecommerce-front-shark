import { Link } from "react-router-dom"
import "./Sbreadcrumbs.css"
export default function Sbreadcrumbs() {
  return (
    <>
    <nav aria-label="breadcrumb gh hj">
      <ul class=" byby breadcrumb">
      <li class="breadcrumb-item"><Link className="a" to="/Home">Home</Link></li>
      <i className="pi pi-angle-right grey"></i>
      <li class="breadcrumb-item "><Link className="a" to="/Shop">Shop</Link></li>
      <i className="pi pi-angle-right grey"></i>
      <li class="breadcrumb-item"><Link className="a" to="/Shop">Men</Link></li>
      <i className="pi pi-angle-right grey"></i>
      <li class="breadcrumb-item active" aria-current="page">T-shirts</li>
    </ul>
    </nav>
    </>
  )
}
