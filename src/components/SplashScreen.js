import React from 'react'
import styles from "./SplashScreen.module.css"

export default function SplashScreen() {
  return (
    <div className={styles.splash}>
      <div className={styles.doublebounce1}></div>
      <div className={styles.doublebounce2}></div>
    </div>
  )
}
