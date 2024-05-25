import React from "react";
import {
  FaSearch,
  FaRegUser,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import GioiThieu from "../../components/GioiThieu_Footer.jsx";

const Footer = () => {
  return (
    <div>
      <footer class="footer mt-5 bg-dark text-light">
        <div class="container">
          <div class="row">
            {/* giới thiệu */}
            <GioiThieu />
            {/* chính sách */}
            <div class="col-md-4">
              <h5>Chính Sách</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Chính sách thành viên</a>
                </li>
                <li>
                  <a href="#">Chính sách vận chuyển</a>
                </li>
                <li>
                  <a href="#">Chăm sóc khách hàng</a>
                </li>
                <li>
                  <a href="#">Phương thức thanh toán</a>
                </li>
                <li>
                  <a href="#">Đổi trả/Bảo hành</a>
                </li>
              </ul>
            </div>
            {/* liên kết */}
            <div class="col-md-4">
              <h5>Liên kết</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Tin tức</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            {/* liên hệ */}
            <div class="col-md-4">
              <h5>Liên hệ</h5>
              <p>Địa chỉ: 123 Main Street, Ho Chi Minh City, Vietnam</p>
              <p>Email: dcao59995@gmail.com</p>
              <p>Điện thoại: 0383958932</p>
            </div>
          </div>
          {/* icon mạng xã hội */}
          <div class="row mt-3">
            <div class="col text-center">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-Google">
                      <FaGoogle />
                    </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-Youtobe">
                      <FaYoutube />
                    </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* note footer */}
          <div class="row mt-3">
            <div class="col text-center">
              <p class="mb-0">
                Copyright © 2024 <a href="#">SID</a>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
