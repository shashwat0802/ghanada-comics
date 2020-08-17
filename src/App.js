import React from "react"

import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from "react-router-dom"
import MainArea from "./components/MainArea"
import SiteFooter from "./components/SiteFooter"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainArea />
        <SiteFooter />
      </Router>
    </div>
  )
}

export default App
