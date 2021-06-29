import React from 'react';
import Product from '../Product/Product';
import './Home.scss';
import Slice1 from '../images/slice1.jpg';
import Product1 from '../images/product1.jpg';
import Product2 from '../images/product2.jpg';
import Product3 from '../images/product3.jpg';
import Product4 from '../images/product4.jpg';
import Product5 from '../images/product5.jpg';
import Product6 from '../images/product6.jpg';
import Product9 from '../images/product9.jpg';
import Slider from './Slider/Slider';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Slider />
        {/* <img className="home__image" src={Slice1} alt="" /> */}
        <div className="home__row">
          <Product
            title={
              'LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms NVIDIA G-SYNC Compatible Gaming Monitor, Black by LG'
            }
            rating={2}
            price={10.22}
            image={Product1}
            id="1"
            key="1"
          />
          <Product
            title={
              'Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics,...'
            }
            rating={4}
            price={10.22}
            image={Product2}
            id={2}
            key="2"
          />
          <Product
            title={
              'Magnelex Windshield Sun Shade Windshield Sunshade Heat Reflector Car Sun Visor Sun Shield'
            }
            rating={2}
            price={4.33}
            image={Product9}
            id={33}
            key={33}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              'Acer Swift 3 Thin & Light Laptop, 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core with Radeon Graphics, 8GB LPDDR4, 512GB NVMe SSD, Wi-Fi 6, Backlit KB, Fingerprint Reader, Alexa Built-in'
            }
            rating={4}
            price={10.22}
            image={Product3}
            id={3}
            key="3"
          />
          <Product
            title={
              'Razer Blade 15 Base Gaming Laptop 2020: Intel Core i7-10750H 6-Core, NVIDIA GeForce GTX 1660 Ti, 15.6" FHD 1080p'
            }
            rating={4}
            price={10.22}
            image={Product4}
            id={4}
            key="4"
          />
          <Product
            title={
              'CyberpowerPC Gamer Xtreme VR Gaming PC, Intel i5-10400F 2.9GHz, GeForce GTX 1660 Super 6GB, 8GB DDR4, 500GB'
            }
            rating={4}
            price={10.22}
            image={Product5}
            id={5}
            key="5"
          />
        </div>
        <div className="home__row">
          <Product
            title={
              'Lenovo Tab M10 Plus, 10.3" FHD Android Tablet, Octa-Core Processor, 64GB Storage, 4GB RAM, Iron Grey, ZA5T0300US'
            }
            rating={4}
            price={10.22}
            image={Product6}
            id={6}
            key="6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
