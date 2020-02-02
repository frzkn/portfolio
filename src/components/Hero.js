import React from "react"
import styles from "./Hero.module.css"
import classNames from "classnames/bind"
import woftw from "../banners/week3.png"
import tele from "../images/telegram.svg"
import insta from "../images/instagram.svg"
import git from "../images/github.svg"
import linked from "../images/linked.svg"
import lightDark from "../images/lightdark.svg"
import scroll from "../images/scroll.svg"

let cx = classNames.bind(styles)

const Hero = ({ light, setLight, content, showContent, fade, setFade }) => {
  const [resumeBanner, toggleResumeBanner] = React.useState(false)
  const toggleMode = () => setLight(!light)

  const applyFade = () => {
    setFade(true)
  }
  return (
    <div
      className={cx({ main: true, darkBg: !light, render: !content, fadeIn: fade })}
    >
      <div className={styles.hero}>
        <h2 className={cx({ name: true, lightText: !light })}>Faraz. K</h2>
        <h4 className={`${styles.title} accent`}>Web Developer</h4>
        <div className={cx({ links: true, invertLinks: !light })}>
          <a href="https://t.me/frzkn" target="_blank">
            <img className={styles.brand} src={tele}  alt="tele"/>
          </a>
          <a href="https://github.com/frzkn" target="_blank">
            <img className={styles.brand} src={git} alt="git"/>
          </a>
          <a href="https://linkedin.com/in/frzkn" target="_blank">
            <img className={styles.brand} src={linked} alt="linked"/>
          </a>
          <a href="https://instagram.com/frz.kn" target="_blank">
            <img className={styles.brand} src={insta} alt="insta"/>
          </a>
        </div>
        <button
          className={cx({ resume: true, showBanner: resumeBanner })}
          onClick={() => toggleResumeBanner(!resumeBanner)}
        >
          RESUME
        </button>
        <div className={styles.circle}></div>
        <div className={styles.circle2}></div>
        <div className={styles.arc}></div>

        <p className={cx({ fab: true, fadeIn: fade })} onClick={toggleMode}>
          <img className={styles.fabImage} src={lightDark} alt="fab"></img>
        </p>
      </div>
      <div className={styles.woftw}>
        <img
          src={woftw}
          alt="woftw"
          onLoad={() => {
            showContent(true)
            applyFade()
            // await new Promise(done =>
            //   setTimeout(() => {
            //     showContent(true)
            //     done()
            //   }, 2000)
            // )

            // await new Promise(done =>
            //   setTimeout(() => {
            //     applyFade()
            //     done()
            //   }, 500)
            // )
          }}
        />
        <p className={cx({ woftwtag: true, lightText: !light })}>
          #homescreenoftheweek
        </p>
        <div className={styles.rectangle}></div>
      </div>
      <img src={scroll} className={styles.chevron} />
    </div>
  )
}

export default Hero
