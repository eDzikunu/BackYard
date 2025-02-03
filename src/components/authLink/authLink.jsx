import React from 'react'
import styles from "./authLink.module.css"
import Link from 'next/link'

const authLink = () => {
  return (
    <div className={styles.container}>
      <Link href="/login">Login</Link>
    </div>
  )
}

export default authLink