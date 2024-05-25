import React from "react";
import { HiShoppingCart } from "react-icons/hi";

import product1 from "../../assets/images/moto.jpg";
const Product = () => {
  return (
    <div>
      <div className="list_product">
        <div className="container">
          <h1>Danh sách sản phẩm</h1>
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src={product1}
                  className="card-img-top card-image"
                  alt="Sản phẩm 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Sản phẩm 1</h5>
                  <p className="card-text">Mô tả sản phẩm 1</p>
                  <p className="card-text">Giá: 100.000 VNĐ</p>
                  <a href="#" className="btn btn-primary">
                    <span>Thêm vào giỏ hàng</span>
                    <span>
                      <HiShoppingCart />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={product1}
                  className="card-img-top card-image"
                  alt="Sản phẩm 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Sản phẩm 2</h5>
                  <p className="card-text">Mô tả sản phẩm 2</p>
                  <p className="card-text">Giá: 100.000 VNĐ</p>
                  <a href="#" className="btn btn-primary">
                    <span>Thêm vào giỏ hàng</span>
                    <span>
                      <HiShoppingCart />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={product1}
                  className="card-img-top card-image"
                  alt="Sản phẩm 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Sản phẩm 3</h5>
                  <p className="card-text">Mô tả sản phẩm 3</p>
                  <p className="card-text">Giá: 100.000 VNĐ</p>
                  <a href="#" className="btn btn-primary">
                    <span>Thêm vào giỏ hàng</span>
                    <span>
                      <HiShoppingCart />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={product1}
                  className="card-img-top card-image"
                  alt="Sản phẩm 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Sản phẩm 4</h5>
                  <p className="card-text">Mô tả sản phẩm 4</p>
                  <p className="card-text">Giá: 100.000 VNĐ</p>
                  <a href="#" className="btn btn-primary">
                    <span>Thêm vào giỏ hàng</span>
                    <span>
                      <HiShoppingCart />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={product1}
                  className="card-img-top card-image"
                  alt="Sản phẩm 5"
                />
                <div className="card-body">
                  <h5 className="card-title">Sản phẩm 5</h5>
                  <p className="card-text">Mô tả sản phẩm 5</p>
                  <p className="card-text">Giá: 100.000 VNĐ</p>
                  <a href="#" className="btn btn-primary">
                    <span>Thêm vào giỏ hàng</span>
                    <span>
                      <HiShoppingCart />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
