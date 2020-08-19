import React from "react"
import "../styles/MainArea.css"
import WelcomePage from "./pages/welcome/WelcomePage"
import { Route } from "react-router-dom"
import Intro from "./pages/welcome/Intro"
import Why from "./pages/welcome/Why"

const MainArea = () => {
  return (
    <div className="main-area">
      {/* different welcome components goes here */}
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/ghanada-gallery/intro" component={Intro} />
      <Route exact path="/ghanada-gallery/why" component={Why} />
    </div>
  )
}

export default MainArea
