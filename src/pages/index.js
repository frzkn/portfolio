import React from "react"
import { Helmet } from "react-helmet"

import SplashScreen from "../components/SplashScreen"
import Hero from "../components/Hero"
import Project from "../components/Project"


export default () => {
  const [light, setLight] = React.useState(true)
  const [content, showContent] = React.useState(false)
  const [fade, setFade] = React.useState(false)
  


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faraz's Portfolio</title>
      </Helmet>
      {!content && <SplashScreen />}
      <Hero
        light={light}
        setLight={setLight}
        content={content}
        showContent={showContent}
        fade={fade}
        setFade={setFade}
      />
      <Project light={light} content={content} fade={fade} />
    </div>
  )
}
