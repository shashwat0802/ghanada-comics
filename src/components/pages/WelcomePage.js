import React from "react"
import { Link } from "react-router-dom"
import "../../styles/pages/WelcomePage.css"

const WelcomePage = () => {
  return (
    <>
      <div className="header-img"></div>
      <div className="forward-wrapper">
        <div className="forward-content">
          <Link to="/ghanada-gallery/intro">Intro</Link>
        </div>
        <div className="forward-arrow"></div>
      </div>

      <div className="welcome-area">
        <div className="main-text">
          <div className="header">
            <h3>Welcome to 'Ghanada Gallery'</h3>
            <p>Graphics from Premendra Mitra's grand Ghanada tales</p>
          </div>
          <div className="secondary-area">
            <h4>72 Banamali Naskar Lane.</h4>
            <p>
              Visitors to Kolkata are not likely to locate the quaint boarding
              house at this address. Or its legendary lodger Ghanada aka
              Ghanashyam Das aka Dos. Or even the original sketches adorning
              Ghanada’s anecdotes ( 1945 - 1987 ).
            </p>
            <p>
              'Ghanada Gallery' is an attempt to exhibit glimpses of the graphic
              gems we’ve unearthed.
            </p>
          </div>
          <div className="mid-area">
            <h5>
              <span>‘Ghanashyam Das’</span> may well stand for :
            </h5>
            <p className="special-text">
              Globe-Hopper. Adventurer. Naturalist. Avenger. Scientific
              Humanist. Yarner. Athlete. Mythologist. Dialect-Authority.
              Saviour.
            </p>
            <h4>
              In short you owe your existence to <span>Ghanada.</span> None
              other.
            </h4>
            <p>
              Dedicated to the awesome age of innovative Bengali illustrators
              and tale-tellers.
            </p>
          </div>
          <img
            src="https://lh3.googleusercontent.com/bsop14Ephv7idhrp4EKqo5ZifJJxLvGuCMrvutjpwXyWDUwrhY9WK0jRhHKUHEuYtaMd=s85"
            className="img-1"
            alt=""
          />
          <img
            src="https://lh3.googleusercontent.com/bsop14Ephv7idhrp4EKqo5ZifJJxLvGuCMrvutjpwXyWDUwrhY9WK0jRhHKUHEuYtaMd=s85"
            className="img-2"
            alt=""
          />
          <img
            src="https://static.parastorage.com/services/skins/2.1229.80/images/wysiwyg/core/themes/base/scotchl.png"
            className="img-3"
            alt=""
          />
          <img
            src="https://static.parastorage.com/services/skins/2.1229.80/images/wysiwyg/core/themes/base/scotchl.png"
            className="img-4"
            alt=""
          />
          <div className="footer-div">
            <Link to="#">Enter 'Ghanada Gallery'</Link>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <h4>disclaimer</h4>
        <p>
          WE ARE NOT THE COPYRIGHT HOLDERS OF ANY OF THE MATERIALS [
          ILLUSTRATIONS, ARTICLES ETC. ] DISPLAYED IN THIS WEBSITE. 'GHANADA
          GALLERY' IS NOT A COMMERCIAL VENTURE.
        </p>
      </div>
    </>
  )
}

export default WelcomePage
