import { useEffect, useState } from "react"
import axios from "axios";
import Nav from "../../component/Nav/Nav"
import Footer from "../../component/Footer/Footer"
import Ratingg from "../../component/Ratingg/Ratingg";
import { useParams } from "react-router-dom";
import Product from "../../component/Product/Product";
import Maylike from "../../component/Maylike/Maylike";
import"./Single.css"
import Sbreadcrumbs from "../../component/Sbreadcrumbs/Sbreadcrumbs";
import Spacer from "../../component/Spacer/Spacer";




export default function Single() {

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



  return (
    <>
    <Nav/>
    <Spacer/>
    <Sbreadcrumbs/>
    <Product/>
    <Ratingg/>
    <Maylike/>
    <br />
    <br />
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
