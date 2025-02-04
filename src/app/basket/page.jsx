"use client"
import React from 'react'
import styles from "./basket.module.css"
import { useStateValue } from '@/providers/StateProvider'
import Subtotal from '@/components/subtotal/subtotal'
import CheckoutProduct from '@/components/checkout/CheckoutProduct'

const page = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_left}>
        <img src="" alt="backyard-banner" />

        <h3>Hello, {user?.email}</h3>
      <h2 className={styles.checkout_title}>Your shopping Basket</h2>

      {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}

      </div>

      
      <div styles={styles.checkout_right}>
        <Subtotal/> 
      </div>
    </div>
  )
}

export default page