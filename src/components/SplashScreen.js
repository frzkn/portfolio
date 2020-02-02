import React from 'react'
import styles from "./SplashScreen.module.css"

export default function SplashScreen() {
  return (
    <div class={styles.splash}>
      <div class={styles.doublebounce1}></div>
      <div class={styles.doublebounce2}></div>
    </div>
  )
}
