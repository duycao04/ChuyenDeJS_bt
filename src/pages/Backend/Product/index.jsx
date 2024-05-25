import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaEdit } from "react-icons/fa";

const Product = () => {
  const products = database.products;
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quan li danh muc</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn danger">
              {" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">Thiet ke form them</div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>Category_id</th>
                  <th>brand_id</th>
                  <th>giá</th>
                  <th>giá_sale</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.length > 0 &&
                  products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={product.image} alt={product.image} />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.slug}</td>

                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/product/edit/" + product.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>

                        <td>{product.Category_id}</td>
                        <td>{product.brand_id}</td>
                        <td>{product.price}</td>
                        <td>{product.price_sale}</td>
                        <td>{product.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
