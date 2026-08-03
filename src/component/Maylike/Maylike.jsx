import { useEffect, useState } from "react"
import axios from "axios";
import { Rating } from 'primereact/rating';
import { Link } from "react-router-dom";
import "./Maylike.css"


export default function Maylike() {

const[data,setData]=useState([]);


  useEffect(()=>{
    try {
    const Api = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response.data);
  setData(response.data.slice(0,4));
  
    }
    Api();

    } catch (error) {
      console.log( "some thing went wrong" + error);
    }

  },[])

  return (
    <>
    <section className="hadeer">
      <h1 className="gf">NEW ARRIVALS</h1>
      <div className="nada">
        { data.map(d=>(
                    <div className="kil" key={d.id}>
                      <div className="piimg">
                        <img src={`${d.image}`} alt=""  className="iimg"/>
                      </div>
                      <Link className="text-2xl font-bold" to={`/single/${d.id}`}>{d.title.slice(0,20)}</Link>
                      <Rating value={d.rating.rate}readOnly cancel={false}></Rating>
                      <p className="ppp">${d.price}</p>
                    </div>
            ))}
      </div>
      <div className="diid">
        <button className="btbot"><Link to="/Shop">View All</Link></button>
      </div>
    </section>
    </>
  )
}
