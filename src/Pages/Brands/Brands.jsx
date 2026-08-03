import Nav from "../../component/Nav/Nav"
import Footer from "../../component/Footer/Footer"
import { useEffect, useState } from "react"
import axios from "axios";
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Link } from "react-router-dom";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import Category from "../../component/Caregory/Category";
import"./Brands.css"

import React from 'react'

export default function Brands() {

  const[data,setData]=useState([]);
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

  const gridItem = (product) => {
        return (
          
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2 wholesection" key={product.id}>
                <div className="p-6">
                    <div className="flex flex-column align-items-start gap-3 py-5 class">
                        <img className="shadow-2 border-round image  " src={`${product.image}`} alt={product.name} />
                        <Link className="text-2xl font-bold" to={`/single/${product.id}`}>{product.title}</Link>
                        <Rating value={product.rating.rate}readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">${product.price}</span>
                    </div>
                </div>
            </div>
          
            
        );
    };

  return (
    <>
    
    <Nav/>
        <Breadcrumbs/>
        <Category/>
          <div className="card">
            <DataView value={data} itemTemplate={gridItem} paginator rows={9} />
          </div>
        <Footer/>
    
    
    </>
  )
}
