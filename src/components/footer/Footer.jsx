import React from 'react'
import Image from 'next/image'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.Image} src="/green-pillow.webp" alt='app-logo-image' width={50} height={50}/>
      <p className={styles.desc}> 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
        necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
        porro sequi, totam minima consequuntur, aspernatur deleniti vero
        repellendus dorales.
      </p>


    </div>
  )
}

export default Footer 