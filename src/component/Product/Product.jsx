import { useEffect, useState } from "react"
import axios from "axios";
import { Rating } from 'primereact/rating';
import { useParams } from "react-router-dom";
import sale from "../../assets/sale.png"
import "./Product.css"


export default function Product() {

  const[data,setData]=useState({});
  const {id}=useParams();
  
  useEffect(()=>{
    try {
    const Api = async()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response.data);
    setData(response.data)
    }
    Api();

    } catch (error) {
      console.log( "some thing went wrong" + error);
    }

  },[id])

  const[count,setCount]=useState(0);

  const decrease=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
    
  const increase=()=>{
    if (count<20) {
        setCount(count+1)
    }
  }
    
  
  return (
    <>
    <section className="products">
        <div className="myproduct">
            <div className="productimg">
                <img src={`${data.image}`} alt={data.title}/>
            </div>
            <div className="details">
                <div className="titlerate">
                    <h1 className="tiitle">{data.title}</h1>
                    <Rating value={data?.rating?.rate} readOnly cancel={false}></Rating>
                    <div className="price">
                        <div><span className=" myprice">${data.price}</span></div>
                        <div><img src={sale}alt="" /></div>
                        <div><button className="b40">-40%</button></div>
                    </div>
                    <p className="pp">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                </div>
                <div>
                    <h3>Select Colors</h3>
                    <div className="color">
                        <button className="btn1"><i className="pi pi-check"></i></button>
                        <button className="btn2"><i className="pi pi-check"></i></button>
                        <button className="btn3"><i className="pi pi-check"></i></button>
                    </div>
                </div>
                <div>
                    <h3>Choose Size</h3>
                    <div className="btns">
                        <button>Small</button>
                        <button>Medium</button>
                        <button>Large</button>
                        <button>X-Large</button>
                    </div>
                </div>
                <div className="mainbtn">
                    <div className="counter">
                        <button onClick={decrease}><i className="pi pi-minus"></i></button>
                        <p>{count}</p>
                        <button onClick={increase}><i className="pi pi-plus"></i></button>
                    </div>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
