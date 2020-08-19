import React from "react"
import "../styles/MainArea.css"
import WelcomePage from "./pages/welcome/WelcomePage"
import { Route } from "react-router-dom"
import Intro from "./pages/welcome/Intro"

const MainArea = () => {
  return (
    <div className="main-area">
      {/* different components goes here */}
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/ghanada-gallery/intro" component={Intro} />
    </div>
  )
}

export default MainArea
