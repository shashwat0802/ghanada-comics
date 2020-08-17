import React from "react"
import "../styles/MainArea.css"
import WelcomePage from "./pages/WelcomePage"

const MainArea = () => {
  return (
    <div className="main-area">
      <div className="header-img"></div>
      {/* different components goes here */}
      <WelcomePage />
    </div>
  )
}

export default MainArea
