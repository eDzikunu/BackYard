import React from 'react'
import styles from "./product.module.css"
import Image from 'next/image'

const product = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <Image src="/plush-couch.webp" className={styles.image} width={30} height={30}/> 
        <div className={styles.title}>Couch</div>
        <div className={styles.price}>$49.99</div>
        <div className={styles.info}>A very great couch</div>
        <div className={styles.seller}>
          <button className={styles.button}>Buy Now</button>
          <Image src="/user-1.webp" width={40} height={40} className={styles.user}/>
        </div>
      </div>
    </div>
  )
}

export default product