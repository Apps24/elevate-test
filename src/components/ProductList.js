import React, { useEffect, useState } from "react";
import { httpClient } from "../axios";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const productCat = useSelector((state) => state.changeProduct.productList);
  const productSearch = useSelector((state) => state.searchProduct.productList);
//   console.log(productSearch);
//   console.log(productCat);

  const [productList, setProductList] = useState([]);
  // const [newProductList, setNewProductList] = useState([])
   const getAllProducts = async () => {
   await httpClient.get("/products?limit=9")?.then((res) => {
        // console.log(res);
        setProductList(res?.data);
      })
  }

  const getCatWiseProduct = async () => {
    await httpClient.get(`/products/category/${productCat}`)?.then((res) => {
        // console.log(res);
        setProductList(res?.data);
      });
  }

  useEffect(() => {
    productCat === "All"
      ? getAllProducts()
      : getCatWiseProduct()
  }, [productCat]);

 
  useEffect(() => {
    let tempList = [];
    if (productSearch !== undefined) {
      if (productList?.length > 0 && productList !== undefined) {
        for (let i = 0; i < productList?.length; i++) {
          if (productSearch.length > 0) {
            if (productList[i]?.category?.includes(productSearch)) {
              console.log(productList[i]);
              tempList.push({ ...productList[i] });
              setProductList(tempList);
            }
          } else {
            httpClient.get("/products?limit=9")?.then((res) => {
                setProductList(res?.data);
              })
          }
        }
      }
    }
  }, [productSearch]);

  return (
    <div className="container text-center py-4">
      <h1 className="mb-3" style={{ fontSize: "3rem" }}>
        Men &amp; Women Fashion
      </h1>
      <div className="row ">
        {productList.length !== 0 && productList?.map((item) => {
          return (
            <div key={item.id} className="col-lg-4 mt-4">
              <div
                className="card p-5"
                style={{
                  border: "none",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <h5>{item?.category}</h5>
                <p style={{ fontWeight: "600" }}>
                  {" "}
                  <span style={{ color: "#FFAC1C" }}>Price</span> ${item?.price}
                </p>
                <img
                  className="w-50 mx-auto "
                  style={{ height: "10rem" }}
                  src={item?.image}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
