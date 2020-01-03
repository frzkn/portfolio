import React from "react"
import Hero from "../components/Hero"
import Project from "../components/Project"
export default () => {
  const [light, setLight] = React.useState(true)
  return (
    <div>
      <Hero light={light} setLight={setLight} />

      <Project light={light} />
    </div>
  )
}
