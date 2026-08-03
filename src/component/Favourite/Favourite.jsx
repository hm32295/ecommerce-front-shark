import "./Favourite.css"
import { useEffect, useState } from "react"
import axios from "axios";
import { Rating } from 'primereact/rating';
import { Link } from "react-router-dom";

export default function Favourite() {

  const[data,setData]=useState([]);
  useEffect(()=>{
    try {
    const Api = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response.data);
   setData(response.data.slice(6,10));
    }
    Api();

    } catch (error) {
      console.log( "some thing went wrong" + error);
    }

  },[])

  return (
    <>
    <section className="k1">
      <h1 className="gf">TOP SELLING</h1>
      <div className="k2">
        { data.map(d=>(
                    <div className="k3" key={d.id}>
                      <div className="piimg">
                        <img src={`${d.image}`} alt=""  className="iimg"/>
                      </div>
                      <Link className="text-2xl font-bold" to={`/single/${d.id}`}>{d.title.slice(0,20)}</Link>
                      <Rating value={d.rating.rate}readOnly cancel={false}></Rating>
                      <p className="ppp">${d.price}</p>
                    </div>
            ))}
      </div>
      <div className="div56">
        <button className="btbot"><Link to="/Shop">View All</Link></button>
      </div>
    </section>
    </>
  )
}
