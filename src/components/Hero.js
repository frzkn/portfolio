import React from "react"
import styles from "./Hero.module.css"
import classNames from "classnames/bind"
import woftw from "../images/wotw2.png"
import tele from "../images/telegram.svg"
import insta from "../images/instagram.svg"
import git from "../images/github.svg"
import linked from "../images/linked.svg"
import lightDark from "../images/lightdark.svg"
import scroll from "../images/scroll.svg"

let cx = classNames.bind(styles)

const Hero = ({ light, setLight }) => {
  const toggleMode = () => setLight(!light)
  return (
    <div class={cx({ main: true, darkBg: !light })}>
      <div class={styles.hero}>
        <h2 class={cx({ name: true, lightText: !light })}>Faraz. K</h2>
        <h4 class={`${styles.title} accent`}>Web Developer</h4>
        <div class={cx({ links: true, invertLinks: !light })}>
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

        <p class={styles.fab} onClick={toggleMode}>
          <img class={styles.fabImage} src={lightDark}></img>
        </p>
      </div>
      <div class={styles.woftw}>
        <img src={woftw} />
        <p class={cx({ woftwtag: true, lightText: !light })}>
          #homescreenoftheweek
        </p>
      </div>
      <img src={scroll} class={styles.chevron} />
    </div>
  )
}

export default Hero
