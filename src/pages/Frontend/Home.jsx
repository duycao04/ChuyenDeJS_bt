import React from "react";
import ChinhSachItem from "../../components/ChinhSachItem.jsx";
// import Database from "../../data_fake.json";
// import Product from "../../components/Product.jsx";

import Slider1 from "../../components/Slider.jsx";

import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Product from "./Product.jsx";

const Home = () => {
  // const listproduct = Database.products;
  return (
    <>
      <Header />
      <Outlet />
      <main>
        {/* //slide động */}
        <Slider1 />
        {/* sản phẩm */}
        <div className="ChinhSach">
          <div className="row py-5">
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển"
                des="Cho đơn hàng từ 500k"
              />
            </div>
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển"
                des="Cho đơn hàng từ 500k"
              />
            </div>
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển"
                des="Cho đơn hàng từ 500k"
              />
            </div>
            <div className="col-md-3">
              <ChinhSachItem
                image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                alt="chinhsach1"
                title="Miễn Phí Vận Chuyển"
                des="Cho đơn hàng từ 500k"
              />
            </div>
          </div>
          <hr />
        </div>
        {/* <div className="section_flash_sale">
          <div className="container">
            <div className="row">
              {listproduct.map((pt, index) => {
                return (
                  <div className="col-md" key={index}>
                    <Product product={pt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
        <Product />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
