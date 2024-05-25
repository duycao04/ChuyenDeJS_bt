import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaEdit, FaTrash } from "react-icons/fa";

const Order = () => {
  const orders = database.order;
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản Lí Danh Mục</strong>
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
                  <th>Email</th>
                  <th>Địa Chỉ</th>
                  <th>Tên</th>
                  <th>Điện Thoại</th>
                  <th>chức năng</th>
                  <th>User_ID</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.length > 0 &&
                  orders.map((order) => {
                    return (
                      <tr key={order.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{order.email}</td>
                        <td>{order.address}</td>
                        <td>{order.phone}</td>
                        <td>{order.name}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/order/edit/" + order.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{order.user_id}</td>
                        <td>{order.id}</td>
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

export default Order;
