import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./cateogoryList.module.css"

const CategoryList = () => {
  return (
    <div className={styles.container}>
        <div className={styles.categories}>
        <Link href="/main?cat=home" className={`${styles.category} ${styles.Home}`}> 
          <Image src="/coffee-table.webp" alt="home-image" width={40} height={40} className={styles.image}/>
          Home
        </Link>

        <Link href="/blog?cat=style" className={`${styles.category} ${styles.Tech}`}> 
          <Image src="/coffee-table.webp" alt="tech-image" width={40} height={40} className={styles.image}/>
          Tech
        </Link>

        <Link href="/blog?cat=style" className={`${styles.category} ${styles.Tech}`}> 
          <Image src="/coffee-table.webp" alt="tech-image" width={40} height={40} className={styles.image}/>
          Fashion 
        </Link>
        </div>

    </div>
  )
}

export default CategoryList