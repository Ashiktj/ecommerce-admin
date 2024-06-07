import React, { useEffect, useState } from 'react'
import "./ListProduct.css";
import cross_icon from '../../assets/cross_icon.png'
import { baseurl } from '../Url';

function ListProduct() {
  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = () => { 
    fetch(`${baseurl}/allproducts`) 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

    const removeProduct = async (id) => {
      await fetch(`${baseurl}/removeproduct`, {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({id:id}),
    })

    fetch(`${baseurl}/allproducts`) 
    .then((res) => res.json()) 
    .then((data) => setAllProducts(data))

    }
  return (
    <div className="listproduct">
    <h1>All Products List</h1>
    <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
    <div className="listproduct-allproducts">
      <hr />
      {allproducts.map((e) => {
        return (
          <div>
            <div className="listproduct-format-main">
              <img className="listproduct-product-icon" src={e.image} alt="" />
              <p cartitems-product-title>{e.name}</p>
              <p>${e.old_price}</p>
              <p>${e.new_price}</p>
              <p>{e.category}</p>
              <img className="listproduct-remove-icon" onClick={()=>{removeProduct(e.id)}} src={cross_icon} alt="" />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default ListProduct