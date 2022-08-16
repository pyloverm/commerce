import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill, BsBagDashFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';

const Canceled = () => {
  

  const { setCartItems,setTotalQuantities} = useStateContext();
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    const cartQuantitiesData = JSON.parse(localStorage.getItem('cart_quantities'));
    if(cartData != null ){setCartItems(cartData)}
    if(cartQuantitiesData != null ){setTotalQuantities(cartQuantitiesData)}
  }, []);


  return (
    <div className="success-wrapper">
      <div className="success canceled">
        <p className="icon">
          <BsBagDashFill />
        </p>
        <h2>Oops Your order failed :c</h2>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Canceled