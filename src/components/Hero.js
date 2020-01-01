import React from "react"
import styles from "./Hero.module.css"

import woftw from "../images/wotw2.png"
import tele from "../images/telegram.svg"
import insta from "../images/instagram.svg"
import git from "../images/github.svg"
import linked from "../images/linked.svg"
import lightDark from "../images/lightdark.svg"

const Hero = () => {
  return (
    <div class={styles.main}>
      <div class={styles.hero}>
        <h2 class={styles.name}>Faraz. K</h2>
        <h4 class={styles.title}>Web Developer</h4>
        <div class={styles.links}>
          <a href="https://t.me/frzkn">
            <img class={styles.brand} src={tele} />
          </a>
          <a href="https://github.com/frzkn">
            <img class={styles.brand} src={git} />
          </a>
          <a href="https://linkedin.com/in/frzkn">
            <img class={styles.brand} src={linked} />
          </a>
          <a href="https://instagram.com/frz.kn">
            <img class={styles.brand} src={insta} />
          </a>
        </div>
        <button class={styles.resume}>RESUME</button>
        <div class={styles.circle}></div>
        <div class={styles.circle2}></div>
        <div class={styles.arc}></div>

        <p class={styles.fab}>
          <img class={styles.fabImage} src={lightDark}></img>
        </p>
        <p class={styles.chevron}>›</p>
      </div>
      <div class={styles.woftw}>
        <img src={woftw} />
        <p class={styles.woftwtag}> #homescreenoftheweek</p>
      </div>
    </div>
  )
}

export default Hero
