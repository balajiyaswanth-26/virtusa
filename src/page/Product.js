import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../components/MaterialUI";
import "./style.css";
import Demo from '../images/demo.jpeg'; 
import MenuBar from "../components/Menu";
const Product = (props) => {

return (
    <>
        <MenuBar />
    {/* <div>{product.productDetails.name}</div> */}
    <div className="productDescriptionContainer">
        <div className="flexRow">
        <div className="productDescContainer">
            <div className="productDescImgContainer">
            <img
                src={Demo}
                alt={"hello"}
            />
            </div>
        </div>
        </div>
        <div>
        {/* product description */}
        <div className="productDetails">
            <p className="productTitle">SAMSUNG Galaxy F12 (Sky Blue, 64 GB) (4 GB RAM)</p>
            
            <div className="flexRow priceContainer">
            <span className="price">
                <BiRupee />
                11499
            </span>
            </div>
            <div>
            <p style={{ display: "flex" }} className="desccrip">
                <span
                style={{
                    width: "100px",
                    fontSize: "18px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                }}
                >
                Description
                </span>
                <span
                style={{
                    fontSize: "16px",
                    color: "#212121",
                    lineHeight:'30px'
                }}
                >
                The Samsung Galaxy F12 features a stylish design and innovative features so that you can enjoy using the mobile phone for all that you need. Thanks to its 6000 mAh battery, you will have a blast using your phone for a long time while you stream content and much more. It provides surround sound with Dolby Atmos so that you can delve into a world of rich music. And, it’s equipped with features that ensure the protection of your mobile phone.
                </span>
            </p>
            </div>
            {/* action buttons */}
            <div className="flexRow btns">
            <MaterialButton
                title="ADD TO CART"
                bgColor="#ff9f00"
                textColor="#ffffff"
            />
            <MaterialButton
                title="PLACE ORDER"
                bgColor="#fb641b"
                textColor="#ffffff"
            />
            </div>
        </div>
        </div>
    </div>
    </>
);
};

export default Product;
