import React from 'react'
import styles from "./subtotal.module.css"
import { useState } from 'react';
import { getBasketTotal } from '@/context/reducer';
const Subtotal = () => {
    const [{basket}] = useState(""); 
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
        }).format(value);
      };

  return (
    <div className={styles.container}>
        <p>
            Subtotal ({basket?.length} items) : {" "}
            <strong>{formatCurrency(getBasketTotal(basket))}</strong>
        </p>

        <small className={styles.subtotalGift}>
            <input type="checkbox" placeholder="This order contains a gift" />
        </small>

        <button> Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal