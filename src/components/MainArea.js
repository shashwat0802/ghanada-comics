import React from "react"
import "../styles/MainArea.css"
import WelcomePage from "./pages/welcome/WelcomePage"
import { Route } from "react-router-dom"
import Intro from "./pages/welcome/Intro"
import Why from "./pages/welcome/Why"
import How from "./pages/welcome/How"
import Author from "./pages/welcome/Author"
import Artists from "./pages/welcome/Artists"
import Hero from "./pages/welcome/Hero"
import Thanks from "./pages/welcome/Thanks"

const MainArea = () => {
  return (
    <div className="main-area">
      {/* different welcome components goes here */}
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/ghanada-gallery/intro" component={Intro} />
      <Route exact path="/ghanada-gallery/why" component={Why} />
      <Route exact path="/ghanada-gallery/how" component={How} />
      <Route exact path="/ghanada-gallery/author" component={Author} />
      <Route exact path="/ghanada-gallery/artists" component={Artists} />
      <Route exact path="/ghanada-gallery/hero" component={Hero} />
      <Route exact path="/ghanada-gallery/thanks" component={Thanks} />
    </div>
  )
}

export default MainArea
