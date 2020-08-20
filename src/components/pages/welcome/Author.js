import React, { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "react-modal"
import "../../../styles/pages/welcome/Author.css"

const Author = () => {
  const [modalstatus, setModalStatus] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const handleClick = (e) => {
    setImgUrl(e.target.src)
    setModalStatus(true)
  }

  return (
    <div className="Author">
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
            <Link to="/ghanada-gallery/how">How</Link>
          </div>
        </div>

        <div className="forward-wrapper">
          <div className="forward-content">
            <Link to="/ghanada-gallery/artists">Artist</Link>
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
        {/* images done above */}
        <h1>Author</h1>
        <h3>
          Who trapped the mouse first, on celluloid ?{" "}
          <Link to="https://en.wikipedia.org/wiki/Premendra_Mitra">
            Premendra Mitra
          </Link>
        </h3>
        <p>
          The creator of Bengal's best armchair adventurer Ghanada. This is how
          the all-rounder author described our lanky legend :
        </p>
        <img
          src="https://static.wixstatic.com/media/c6a101_cdbd3c91082742799d28fb80886be737.jpg/v1/fill/w_1520,h_818,al_c,q_85,usm_0.66_1.00_0.01/c6a101_cdbd3c91082742799d28fb80886be737.webp"
          alt=""
          onClick={handleClick}
          className="author-main-img"
        />
        <p>... and here's his self-assessment :</p>
        <p>
          "scientifically inclined by birth, poet by accident, story-teller by
          profession".
        </p>
        <p>Also a job-hopper by choice.</p>
        <p>
          A rainbow of quaint qualities that helped the restless writer fashion
          his unique alter ego.
        </p>
        <img
          src="https://static.wixstatic.com/media/c6a101_7a00fb1d5531413995eae46d50759ce3.jpg/v1/fill/w_326,h_455,al_c,q_80,usm_0.66_1.00_0.01/c6a101_7a00fb1d5531413995eae46d50759ce3.webp"
          alt=""
          className="premendra-img"
        />
        <p>Premendra Mitra</p>
      </div>
      <div className="author-footer">
        <img
          src="https://static.wixstatic.com/media/c6a101_e21b99981a44438bb03e8323783e2e74.jpg/v1/fill/w_288,h_466,al_c,q_80,usm_0.66_1.00_0.01/c6a101_e21b99981a44438bb03e8323783e2e74.webp"
          alt=""
        />
        <p>
          Premendra Mitra's{" "}
          <Link to="https://en.wikipedia.org/wiki/Chupi_Chupi_Aashey">
            'Chupi Chupi Aashey'
          </Link>{" "}
          still remains one of the sole faithful screen adaptations of
          Christie's classic 'The Mousetrap'
        </p>
      </div>
      <div className="author-img-wrapper">
        <img
          src="https://static.wixstatic.com/media/c6a101_2cd79018d01c49e986c4183a26c4a424.jpg/v1/fill/w_330,h_418,al_c,q_80,usm_0.66_1.00_0.01/c6a101_2cd79018d01c49e986c4183a26c4a424.webp"
          alt=""
          className="author-footer-img"
        />
        <p>artist : Ajey deb</p>
      </div>
    </div>
  )
}

export default Author
