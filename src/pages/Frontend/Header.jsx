import React from "react";
import { CiHeart } from "react-icons/ci";
import { PiBellRingingFill } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";
import Logo from "../../assets/images/logo.webp";
import { FaSearch, FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      {/* header */}
      <header className="bg-white">
        <div className="container">
          <div className="row">
            {/* logo */}
            <div className="col-md-3">
              <img src={Logo} alt="logo" />
            </div>
            {/* menu */}
            <div className="col-md-7">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Trang chủ
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Về chúng tôi
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          sale
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          sản phẩm
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              product 1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              product 2
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              product 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button class="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            {/* icon header */}
            <div className="col-md-2">
              <FaSearch />
              <FaRegUser />
              <PiBellRingingFill />
              <CiHeart />
              <BsHandbag />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
