import React from "react"
import { Helmet } from "react-helmet"

import Hero from "../components/Hero"
import Project from "../components/Project"

export default () => {
  const [light, setLight] = React.useState(true)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faraz's Portfolio</title>
      </Helmet>
      <Hero light={light} setLight={setLight} />
      <Project light={light} />
    </div>
  )
}
