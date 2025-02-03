import React from 'react'
import styles from "./Navbar.module.css"
import Link from "next/link"
import AuthLink from "../authLink/authLink"

const navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>BackYard</Link>
        <input className={styles.searchbar} type="text" placeholder='Search...'/>

        <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/messages">Messages</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/basket">Basket</Link>
            <AuthLink/>
        </div>

    </div>
  )
}

export default navbar