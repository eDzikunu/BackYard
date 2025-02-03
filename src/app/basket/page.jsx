import React from 'react'
import styles from "./basket.module.css"

const page = () => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout-left}>
        <img src="" alt="backyard-banner" />
      </div>

      <h3>Hello, {user?.email}</h3>
      <h2 className={checkout-title}>Your shopping Basket</h2>

      {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}


      <div styles={checkout-right}>
        <Subtotal/> 
      </div>
    </div>
  )
}

export default page