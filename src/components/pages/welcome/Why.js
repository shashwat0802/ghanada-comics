import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../../../styles/pages/welcome/Why.css"
import Modal from "react-modal"

const Why = () => {
  const [modalstatus, setModalStatus] = useState(false)
  const handleClick = (e) => {
    var imgUrl = e.target.src
    console.log(imgUrl)
    setModalStatus(true)
  }

  return (
    <div className="Why">
      <Modal
        isOpen={modalstatus}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalStatus(false)}
      >
        <h1>hello</h1>
      </Modal>
      <div className="link-wrapper">
        <div className="backward-wrapper">
          <div className="backward-arrow"></div>
          <div className="backward-content">
            <Link to="/ghanada-gallery/intro">intro</Link>
          </div>
        </div>

        <div className="forward-wrapper">
          <div className="forward-content">
            <Link to="/ghanada-gallery/how">how</Link>
          </div>
          <div className="forward-arrow"></div>
        </div>
      </div>
      <div className="red-area">
        <h1>Why</h1>
        <p>'Da' is the short form of 'Dada' [Elder Brother].</p>
        <p>
          Juvenile fiction in Bengali is dominated by the ‘Da’-s. Tenida,
          Pheluda, Wrijuda, Pindida…
        </p>
        <p>
          Ghanashyam Das was among the first characters to popularise this
          trend.
        </p>
        <p>
          Ghanada’s zany yarns were originally decorated with uber-cool sketches
          complementing his persona.
        </p>
        <p>Sadly, only a sprinkling is gettable at present.</p>
        <p>
          'Ghanada Gallery', an improvement on our Facebook Page, is set to
          display the illustrious Ghanada graphics.
        </p>
        <p>And more… if you’re keen.</p>
        <p>Big brother, we’re watching you.</p>
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
        {/* images section */}
        <div className="why-img-wrapper">
          <div className="why-red-area">
            <img
              src="https://static.wixstatic.com/media/c6a101_9af03611ea8d4feda27c2482397db98d.jpg/v1/fill/w_135,h_135,al_c,q_80,usm_0.66_1.00_0.01/c6a101_9af03611ea8d4feda27c2482397db98d.jpg"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/c6a101_14fe763588de4fdd8c6bb103acf635e8.jpg/v1/fill/w_135,h_135,al_c,q_80,usm_0.66_1.00_0.01/c6a101_14fe763588de4fdd8c6bb103acf635e8.jpg"
              alt=""
            />
            <p>
              Two of the most popular 'Da'-s in Bengali Literature, Pheluda &
              Tenida
            </p>
          </div>
          <div className="why-red-area">
            <img
              src="https://static.wixstatic.com/media/c6a101_85e9d78e7ed44a46a683ddf77d8968a0.jpg/v1/fill/w_414,h_654,al_c,q_80,usm_0.66_1.00_0.01/c6a101_85e9d78e7ed44a46a683ddf77d8968a0.webp"
              alt=""
            />
            <p>Premendra Mitra's Ghanada [Ghanashyam Das]</p>
          </div>
        </div>
        <div className="why-footer">
          <img
            src="https://static.wixstatic.com/media/c6a101_7acd172a5eb14c87a27ec204e9221513.jpg/v1/fill/w_724,h_694,al_c,q_85,usm_0.66_1.00_0.01/c6a101_7acd172a5eb14c87a27ec204e9221513.webp"
            alt=""
            onClick={handleClick}
          />
        </div>
        <img
          src="https://static.wixstatic.com/media/c6a101_2cd79018d01c49e986c4183a26c4a424.jpg/v1/fill/w_330,h_418,al_c,q_80,usm_0.66_1.00_0.01/c6a101_2cd79018d01c49e986c4183a26c4a424.webp"
          alt=""
          className="why-footer-img"
        />
      </div>
    </div>
  )
}

export default Why
