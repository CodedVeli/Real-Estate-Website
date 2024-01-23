import React from "react";
import photo1 from "../assets/pic1.jpg";
import photo5 from "../assets/pic5.jpg";
import { FaHome } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";
import { MdApartment } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import { MdOutlineVilla } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import "./Home.css";

function Home() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div>
      <div className="header">
        <img src={photo5} alt="house" />
      </div>
      <div className="prop">
        <h1>Display Latest & Featured Properties</h1>
        <h2>Check out some of our latest properties .</h2>
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>
      </div>

      <div className="container1">
        <div className="image1">
          <img className="image5" src={photo5} alt="house" />
          <h1 className="help">How we help people?</h1>
        </div>
        <div className="cards-body">
          <div className="cards">
            <h1>
              <FaHome />
            </h1>
            <h1>Sell Home Or Office</h1>
            <p>
              We sell homes for family and <br /> also for office pursposes
            </p>
          </div>
          <div className="cards">
            <h1>
              <PiBuildingsFill />
            </h1>
            <h1>Rent Home or Office</h1>
            <p>
              We sell homes for family and <br /> also for office pursposes
            </p>
          </div>
          <div className="cards">
            <h1>
              <BsBuildingsFill />
            </h1>
            <h1>Find Next Home</h1>
            <p>
              We sell homes for family and <br /> also for office pursposes
            </p>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="text1">
          <h1>
            Explore <br /> By Property Type
          </h1>
          <p>
            Get started by choosing from one of our <br /> properties from
            either office,Apartments
          </p>
          <button>View All Property</button>
        </div>
        <div className="icon">
          <div className="icons">
            <h1>
              <MdApartment />
            </h1>
            <p>Apartment</p>
          </div>
          <div className="icons">
            <h1>
              <MdOutlineVilla />
            </h1>
            <p>Villa</p>
          </div>
          <div className="icons">
            <h1>
              <PiWarehouseFill />
            </h1>
            <p>Studio</p>
          </div>
          <div className="icons">
            <h1>
              <HiBuildingOffice />
            </h1>
            <p>Office</p>
          </div>
        </div>
      </div>
      <div className="letter">
        <div className="letter1">
          <h1>Subscribe Newsletter</h1>
          <p>
            Subscribe to our our newsletter <br /> to get our latest properties
          </p>
          <input type="text" placeholder="Enter your email" /> <br /> <br />
          <button>Subscribe</button>
        </div>
        <div className="newi">
          <img className="im" src={photo5} alt="house" />
        </div>
      </div>
    </div>
  );
}

export default Home;
