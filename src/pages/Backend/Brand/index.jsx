import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaEdit, FaTrash } from "react-icons/fa";

const Brand = () => {
  const brands = database.brand;
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
          <div className="col-md-3">Thiet Ke Form Them</div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên danh mục</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {brands &&
                  brands.length > 0 &&
                  brands.map((brand) => {
                    return (
                      <tr key={brand.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={brand.image} alt={brand.image} />
                        </td>
                        <td>{brand.name}</td>
                        <td>{brand.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/brand/edit/" + brand.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{brand.id}</td>
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

export default Brand;
