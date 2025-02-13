"use client"
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import styles from "./login.module.css"

const LoginPage = () => {

  const { data: session, status } = useSession();
  console.log("Session Data:", session, "Status:", status);


  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={() => signIn("google")}>Sign in with Google</div>
            <div className={styles.socialButton}>Sign in with Github</div>
            <div className={styles.socialButton}>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage