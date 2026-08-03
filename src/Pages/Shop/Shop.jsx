import"./Shop.css"
import Nav from "../../component/Nav/Nav"
import Footer from "../../component/Footer/Footer"
import { useEffect, useState } from "react"
import axios from "axios";
import { Rating } from 'primereact/rating';
import { Link } from "react-router-dom";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import Category from "../../component/Caregory/Category";
import { Paginator } from 'primereact/paginator';

export default function Shop() {

  const[data,setData]=useState([]);
  const [first, setFirst] = useState(0);   
  const [rows, setRows] = useState(9);
  useEffect(()=>{
    try {
    const Api = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response.data);
    setData(response.data)
    }
    Api();

    } catch (error) {
      console.log( "some thing went wrong" + error);
    }

  },[])

const visibleProducts = data.slice(first, first + rows);
const onPageChange = (event) => {
  setFirst(event.first);
  setRows(event.rows);
};

  return (
    <>
    <Nav/>
    <Breadcrumbs/>
    <Category/>
    <section className="bigjib">
      <div className="jip">
        {visibleProducts.map(d => (
        <div className="junior" key={d.id}>
            <div className="piimg">
            <img src={d.image} alt="" className="iimg" />
        </div>
        <Link className="text-2xl font-bold" to={`/single/${d.id}`}> {d.title.slice(0, 20)}</Link>
        <Rating value={d.rating.rate} readOnly cancel={false} />
        <p className="ppp">{d.price}$</p>
      </div>
))}
    </div>
    </section>
    <Paginator first={first} rows={rows} totalRecords={data.length} rowsPerPageOptions={[4, 8, 12]} onPageChange={onPageChange}/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer/>
    </>
  )
}
