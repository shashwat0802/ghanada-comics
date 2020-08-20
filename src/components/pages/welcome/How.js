import React, { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "react-modal"
import "../../../styles/pages/welcome/How.css"

const How = () => {
  const [modalstatus, setModalStatus] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const handleClick = (e) => {
    setImgUrl(e.target.src)
    console.log(imgUrl)
    setModalStatus(true)
  }
  return (
    <div className="How">
      <Modal
        isOpen={modalstatus}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalStatus(false)}
      >
        <img src={imgUrl} alt="" className="modal" />
      </Modal>
      <div className="link-wrapper">
        <div className="backward-wrapper">
          <div className="backward-arrow"></div>
          <div className="backward-content">
            <Link to="/ghanada-gallery/why">Why</Link>
          </div>
        </div>

        <div className="forward-wrapper">
          <div className="forward-content">
            <Link to="/ghanada-gallery/author">Author</Link>
          </div>
          <div className="forward-arrow"></div>
        </div>
      </div>
      <div className="red-area">
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
        {/* images done */}
        <h1>How</h1>
        <div className="how-first-wrapper">
          <div className="how-first-img">
            <img
              src="https://static.wixstatic.com/media/c6a101_3990881941964a32bb2e71dc1dd0f8c8.jpg/v1/fill/w_674,h_874,al_c,q_85,usm_0.66_1.00_0.01/c6a101_3990881941964a32bb2e71dc1dd0f8c8.webp"
              alt=""
              onClick={handleClick}
            />
            <p style={{ color: "#fff" }}>
              Flyer declaring results of a Sit-and-Draw Contest (1983)
              co-organised by 'Pakshiraj', a magazine edited by Premendra Mitra
            </p>
          </div>
          <div className="how-first-content">
            <p>Blame it on the flyer.</p>
            <p>
              This art contest earned me a consolation prize from Premendra
              Mitra, and ultimately my first Ghanada book.
            </p>
            <p>
              On the jacket, showing off his skill at generating gas globules,
              stood the lean legend.
            </p>
            <p>At ease, yet alert. The quintessential Das.</p>
            <p>
              His bubbles radiated colours rarely seen in the rich palette of
              Bengali tall-tales.
            </p>
          </div>
        </div>
        <div className="how-img-wrapper">
          <div className="how-img-1">
            <img
              src="https://static.wixstatic.com/media/c6a101_6a1b6628ca284e21bac9cd2bdd8dd308.jpg/v1/fill/w_550,h_720,al_c,q_85,usm_0.66_1.00_0.01/c6a101_6a1b6628ca284e21bac9cd2bdd8dd308.webp"
              alt=""
              onClick={handleClick}
            />
            <p>
              Reverse side of the flyer announcing the forthcoming book :
              'Ghanadar Hij Bij Bij' (1983)
            </p>
          </div>
          <div className="how-img-2">
            <img
              src="https://static.wixstatic.com/media/c6a101_325776b2727e4a55b0a34ce28694492f.jpg/v1/fill/w_592,h_943,al_c,q_85,usm_0.66_1.00_0.01/c6a101_325776b2727e4a55b0a34ce28694492f.webp"
              alt=""
              onClick={handleClick}
            />
            <p>
              Premendra Mitra's 'Ghanadar Hij Bij Bij' (1983) Cover Art : Dhruba
              Roy Publisher : Pakshiraj Prakashani
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How
