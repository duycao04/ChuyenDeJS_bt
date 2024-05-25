import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Database from "../../../data_fake.json";
const Contact = () => {
  const contacts = Database.contact;
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lí liên hệ</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn-danger">
              <FaTrash /> Thùng rác
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">THIET KE FORM THEM</div>
          <div className="col-md-9">
            <div className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình</th>
                  <th>Tên danh mục</th>
                  <th>Slug</th>
                  <th>Chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {contacts &&
                  contacts.length > 0 &&
                  contacts.map((contact) => {
                    return (
                      <tr key={contact.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={contact.image} alt={contact.image} />
                        </td>
                        <td>{contact.name}</td>
                        <td>{contact.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/contact/edit/" + contact.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{contact.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
