/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const [index, setIndex] = useState(0);
  const nav = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleProduct = () => {
    nav("/products");
  };
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="https://c1.wallpaperflare.com/preview/293/253/161/bag-arm-fashion-style.jpg"
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure Leather Ladies Shoulder Bag </h5>
            <p>More Than 50% OFF on All Accessories</p>
            <div className="mb-3">
              <Button variant="dark" onClick={handleProduct}>
                Shop Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="https://hips.hearstapps.com/mac.h-cdn.co/assets/15/05/1600x800/landscape_nrm_1422393171-london_m_str_f15_044.jpg?resize=768:*"
            alt="pure cotton"
          />
          <Carousel.Caption className="bg-white">
            <h5>100% Cotton Men Black Suits</h5>
            <p>Flat 25% Off on BlueBerry & Reymond's Men's Jackets </p>
            <div className="mb-3">
              <Button variant="dark" onClick={handleProduct}>
                Shop Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="https://mydecorative.com/wp-content/uploads/2020/08/kitchen-appliances.jpg"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Decorate Your Smart Kitchen</h5>
            <p>
              Exciting Offers and Gifts are Free With Every Kitchen Appliances
            </p>
            <div className="mb-3">
              <Button variant="dark" onClick={handleProduct}>
                Shop Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default Home;
