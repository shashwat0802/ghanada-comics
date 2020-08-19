import React from "react"
import { Link } from "react-router-dom"
import "../../../styles/pages/welcome/Intro.css"

const Intro = () => {
  return (
    <div className="Intro">
      <div className="link-wrapper">
        <div className="backward-wrapper">
          <div className="backward-arrow"></div>
          <div className="backward-content">
            <Link to="/">Welcome</Link>
          </div>
        </div>

        <div className="forward-wrapper">
          <div className="forward-content">
            <Link to="/ghanada-gallery/why">Why</Link>
          </div>
          <div className="forward-arrow"></div>
        </div>
      </div>

      <div className="red-area">
        <h1>Intro</h1>
        <p>
          These prelim pages of 'Ghanada Gallery' should get you into the
          Ghanashyam groove :
        </p>
        {/* main area */}
        <div className="intro-main-area">
          <div className="div-1">
            <img
              src="https://static.wixstatic.com/media/c6a101_05b3a05eaf594fe8b5b851c5c9a3a2c4.jpg/v1/fill/w_108,h_185,al_c,q_80,usm_0.66_1.00_0.01/c6a101_05b3a05eaf594fe8b5b851c5c9a3a2c4.webp"
              alt=""
              className="intro-imgs"
            />
            <div className="forward-wrapper">
              <div className="forward-content">
                <Link to="/ghanada-gallery/why">Why</Link>
              </div>
              <div className="forward-arrow"></div>
            </div>
          </div>
          <div className="div-2">
            <img
              src="https://static.wixstatic.com/media/c6a101_6a1b6628ca284e21bac9cd2bdd8dd308.jpg/v1/fill/w_112,h_147,al_c,q_80,usm_0.66_1.00_0.01/c6a101_6a1b6628ca284e21bac9cd2bdd8dd308.webp"
              alt=""
              className="intro-imgs"
            />
            <div className="forward-wrapper">
              <div className="forward-content">
                <Link to="/ghanada-gallery/how">How</Link>
              </div>
              <div className="forward-arrow"></div>
            </div>
          </div>
          <div className="div-3">
            <img
              src="https://static.wixstatic.com/media/c6a101_7a00fb1d5531413995eae46d50759ce3.jpg/v1/fill/w_112,h_156,al_c,q_80,usm_0.66_1.00_0.01/c6a101_7a00fb1d5531413995eae46d50759ce3.webp"
              alt=""
              className="intro-imgs"
            />
            <div className="forward-wrapper">
              <div className="forward-content">
                <Link to="/ghanada-gallery/author">Author</Link>
              </div>
              <div className="forward-arrow"></div>
            </div>
          </div>
          <div className="div-4">
            <img
              src="https://static.wixstatic.com/media/c6a101_3b7ed599bf624369bc7451019c146315.jpg/v1/fill/w_86,h_116,al_c,q_80,usm_0.66_1.00_0.01/c6a101_3b7ed599bf624369bc7451019c146315.webp"
              alt=""
              className="intro-imgs"
            />
            <img
              src="https://static.wixstatic.com/media/c6a101_14166e8ee30f47da985b250861a95a08.jpg/v1/fill/w_104,h_108,al_c,q_80,usm_0.66_1.00_0.01/c6a101_14166e8ee30f47da985b250861a95a08.webp"
              alt=""
              className="intro-imgs"
            />
            <div className="forward-wrapper">
              <div className="forward-content">
                <Link to="/ghanada-gallery/artists">Artists</Link>
              </div>
              <div className="forward-arrow"></div>
            </div>
          </div>
          <div className="div-5">
            <img
              src="https://static.wixstatic.com/media/c6a101_8477c1ef74e04783a351503c9c12619e.jpg/v1/fill/w_124,h_157,al_c,q_80,usm_0.66_1.00_0.01/c6a101_8477c1ef74e04783a351503c9c12619e.webp"
              alt=""
              className="intro-imgs"
            />
            <div className="forward-wrapper">
              <div className="forward-content">
                <Link to="/ghanada-gallery/hero">Hero</Link>
              </div>
              <div className="forward-arrow"></div>
            </div>
          </div>
          <div className="div-6">
            <img
              src="https://static.wixstatic.com/media/c6a101_79b219fdc8584340960a4f7077591c25.jpg/v1/fill/w_176,h_215,al_c,q_80,usm_0.66_1.00_0.01/c6a101_79b219fdc8584340960a4f7077591c25.webp"
              alt=""
              className="intro-imgs"
            />
            <div className="forward-wrapper">
              <div className="forward-content">
                <Link to="/ghanada-gallery/thanks">Thanks</Link>
              </div>
              <div className="forward-arrow"></div>
            </div>
          </div>
        </div>
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
        <img
          src="https://static.wixstatic.com/media/c6a101_69d6a5902f054a96a0a881dc0ddad862.jpg/v1/fill/w_486,h_517,al_c,q_80,usm_0.66_1.00_0.01/c6a101_69d6a5902f054a96a0a881dc0ddad862.webp"
          className="intro-img-1"
          alt=""
        />
        <img
          src="https://static.wixstatic.com/media/c6a101_ff36af27231e4d3c9eb2eed18675248c.jpg/v1/fill/w_704,h_354,al_c,lg_1,q_80/c6a101_ff36af27231e4d3c9eb2eed18675248c.webp"
          className="intro-img-2"
          alt=""
        />
      </div>
    </div>
  )
}

export default Intro
