import React, { useEffect, useState } from "react";
import styles from "./topheader.module.css";
import searchIcon from "../assets/images/magnifying-glass-solid.svg";
import cartIcon from "../assets/images/cart-shopping-solid.svg";
import userIcon from "../assets/images/user-solid.svg";
import { httpClient } from "../axios";
import { changeProductAction } from "../store/changeProduct";
import { useDispatch, useSelector } from "react-redux";
import { searchProductAction } from "../store/searchProduct";

const TopHeader = () => {
  const [categories, setCategories] = useState([]);
  const [ipSearch, setIpSearch] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeProductAction.setOnload("All"));
    httpClient.get("/products/categories").then((res) => {
      // console.log(res);
      setCategories(res?.data);
    });
  }, []);

  const changeCat = (cat) => {
    // console.log(cat);
    dispatch(changeProductAction.setOnload(cat));

  };

  const changeInput = (event) => {
    // console.log(event.target.value);
    dispatch(searchProductAction.setProductName(ipSearch));

  }

   return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.linksContainer}>
          <ul>
            <li>
              <a href="#">Best Seller</a>
            </li>
            <li>
              <a href="#">Gift Ideas</a>
            </li>
            <li>
              <a href="#">New Releases</a>
            </li>
            <li>
              <a href="#">Today's Deals</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
          </ul>
        </div>
        <div className={`text-center ${styles.mainLogo}`}>
          <h1>Eflyer</h1>
        </div>
        <div className={styles.mainNavBar}>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid px-4  ">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo03"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item me-3">
                    <span className="navbar-toggler-icon"></span>
                  </li>
                  <li className="nav-item me-3">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ background: "#333333", border: "none" }}
                      >
                        All Category
                      </button>
                      <ul className="dropdown-menu">
                        {categories?.map((cat) => {
                          return (
                            <li onClick={() => changeCat(cat)} key={cat}>
                              <span className="dropdown-item">{cat}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item me-3">
                    <div className={`input-group ${styles.inputs}`}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search this blog"
                        aria-label="Search this blog"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setIpSearch(e.target.value)}
                      />
                      <span
                        className="input-group-text"
                        style={{ background: "#FFAC1C" }}
                        id="basic-addon2"
                        onClick={changeInput}

                      >
                        <img width={15} src={searchIcon} alt="" />
                      </span>
                    </div>
                    {/* <a className="nav-link" href="#">Link</a> */}
                  </li>
                  <li className="nav-item me-3">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          background: "#ffffff",
                          color: "#333333",
                          border: "none",
                        }}
                      >
                        English
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            India
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item me-3">
                    <img src={cartIcon} width={15} alt="" />
                    <p
                      className="ms-2"
                      style={{
                        color: "#ffffff",
                        display: "inline-block",
                        fontWeight: "600",
                      }}
                    >
                      CART
                    </p>
                  </li>
                  <li className="nav-item">
                    <img src={userIcon} width={15} alt="" />
                    <p
                      className="ms-2"
                      style={{
                        color: "#ffffff",
                        display: "inline-block",
                        fontWeight: "600",
                      }}
                    >
                      USER
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
