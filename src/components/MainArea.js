import React from "react"
import "../styles/MainArea.css"
import WelcomePage from "./pages/WelcomePage"
import { Route } from "react-router-dom"

const MainArea = () => {
  return (
    <div className="main-area">
      {/* different components goes here */}
      <Route exact path="/" component={WelcomePage} />
    </div>
  )
}

export default MainArea
