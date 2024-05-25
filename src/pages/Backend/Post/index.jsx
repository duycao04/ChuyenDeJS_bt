import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaEdit, FaTrash } from "react-icons/fa";

const Post = () => {
  const posts = database.post;
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
                  <th>Topic_ID</th>
                  <th>Tiêu Đề</th>
                  <th>Chi Tiết</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {posts &&
                  posts.length > 0 &&
                  posts.map((post) => {
                    return (
                      <tr key={post.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{post.topic_id}</td>
                        <td>{post.title}</td>
                        <td>{post.detail}</td>
                        <td>{post.slug}</td>

                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/post/edit/" + post.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{post.id}</td>
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

export default Post;
