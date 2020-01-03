import React from "react"
import styles from "./Project.module.css"
import code from "../images/code.svg"
import link from "../images/link.svg"
import classNames from "classnames/bind"

export default ({ light }) => {
  let cx = classNames.bind(styles)
  return (
    <div className={cx({ main: true, darkBg: !light })}>
      <h2 className={cx({ lightText: !light })}>Projects //</h2>
      <div className={styles.cards}>
        <div className={cx({ card: true, paddingcard: true })}></div>
        <div className={styles.card}>
          <h3>ÐChat</h3>
          <p>Decentralized solution to integrity first Chat on IPFS Network</p>
          <div className={styles.links}>
            <a href="#">
              <img src={code}></img>
              <p>Code</p>
            </a>
            <a href="#">
              <img src={link}></img>
              <p>Link</p>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Smashkeys</h3>
          <p>
            Test your typing speed by smashing keys. A 1-minute sprint typing
            test.
          </p>
          <div className={styles.links}>
            <a href="#">
              <img src={code}></img>
              <p>Code</p>
            </a>
            <a href="#">
              <img src={link}></img>
              <p>Link</p>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Recipe Search</h3>
          <p>
            Easy instant Recipes using ingredients you already have in your
            kitchen.
          </p>
          <div className={styles.links}>
            <a href="#">
              <img src={code}></img>
              <p>Code</p>
            </a>
            <a href="#">
              <img src={link}></img>
              <p>Link</p>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <h3>WYD?</h3>
          <p>
            Telegram service script to automatically respond with what you're
            currently doing when asked WYD
          </p>
          <div className={styles.links}>
            <a href="#">
              <img src={code}></img>
              <p>Code</p>
            </a>
            <a href="#">
              <img src={link}></img>
              <p>Link</p>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Dropbooks</h3>
          <p>
            Sending ebooks and documents to Kindle instantly and wirelessly.
          </p>
          <div className={styles.links}>
            <a href="#">
              <img src={code}></img>
              <p>Code</p>
            </a>
            <a href="#">
              <img src={link}></img>
              <p>Link</p>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <h3>B@I Website</h3>
          <p>Frontend for a Blockchain based Indian Startup.</p>
          <div className={styles.links}>
            <a href="#">
              <img src={code}></img>
              <p>Code</p>
            </a>
            <a href="#">
              <img src={link}></img>
              <p>Link</p>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Tic-Tac-Toe</h3>
          <p>Android X and 0 Game.</p>
          <div className={styles.links}>
            <a href="#">
              <img src={code}></img>
              <p>Code</p>
            </a>
            <a href="#">
              <img src={link}></img>
              <p>Link</p>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Weather App</h3>
          <p>Descriptive weather app for entered location</p>
          <div className={styles.links}>
            <a href="#">
              <img src={code}></img>
              <p>Code</p>
            </a>
            <a href="#">
              <img src={link}></img>
              <p>Link</p>
            </a>
          </div>
        </div>{" "}
        <div className={cx({ card: true, paddingcard: true })}></div>
      </div>

    </div>
  )
}
