import "./Hero.css"
import staar from "../../assets/big star.png"
import stare from "../../assets/small star.png"
import { useEffect, useState } from "react";
export default function Hero() {


const [count, setCount] = useState(0);

useEffect(() => {
if (count < 200) {
    setTimeout(() => {
        setCount(count + 10);
    }, 200);
    }
}, [count]);

const [cont, setCont] = useState(0);

useEffect(() => {
if (cont < 30000) {
    setTimeout(() => {
        setCont(cont + 1000);
    }, 200);
    }
}, [cont]);

const [countt, setCountt] = useState(0);

useEffect(() => {
if (countt < 2000) {
    setTimeout(() => {
        setCountt(countt + 100);
    }, 200);
    }
}, [countt]);

return (
    <>
    <section className="hero">
        <div className="bigdiv">
            <div className="counter">
                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="heroooo">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="shhop">Shop Now</button>
            </div>
            <div className="mycount">
                <div>
                    <h1 className="h3">{count}+</h1>
                    <p>International Brands</p>
                </div>
                <div>
                    <h1 className="h3">{countt}+</h1>
                    <p>High-Quality Products</p>
                </div>
                <div>
                    <h1 className="h3">{cont}+</h1>
                    <p>Happy Customers</p>
                </div>
            </div>
            <div className="imges">
                <div>
                    <img src={staar} alt="" />
                </div>
                <div>
                    <img src={stare} alt="" />
                </div>
            </div>
        </div> 
    </section>
    </>
)
}
