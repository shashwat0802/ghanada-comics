import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../../../styles/pages/welcome/Hero.css"
import Modal from "react-modal"
const Hero = () => {
  const [modalstatus, setModalStatus] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const handleClick = (e) => {
    setImgUrl(e.target.src)
    setModalStatus(true)
  }

  return (
    <div className="Hero">
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
            <Link to="/ghanada-gallery/artists">Artists</Link>
          </div>
        </div>

        <div className="forward-wrapper">
          <div className="forward-content">
            <Link to="/ghanada-gallery/thanks">Thanks</Link>
          </div>
          <div className="forward-arrow"></div>
        </div>
      </div>
      <div className="red-area">
        <h1>Hero</h1>
        <div>
          <div className="content">
            <p>
              Cat on a sand heap. Relaxed yet alert. The trait of a true
              thespian.
            </p>
            <p>
              Our hero is a performer with a bisected brain. Chilling out on his
              armchair, narrator-half blows the latest tale-bubble.
            </p>

            <p>
              Alert-half however takes in the listeners’ reaction while
              improvising, smudging out flaws and even looking out for Banwari’s
              tray of goodies.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://static.wixstatic.com/media/c6a101_13461eda61904adead7757b30ac6236c.jpg/v1/fill/w_496,h_624,al_c,q_80,usm_0.66_1.00_0.01/c6a101_13461eda61904adead7757b30ac6236c.webp"
              alt=""
              onClick={handleClick}
              style={{ maxHeight: "250px", maxWidth: "300px" }}
              className="border-img"
            />
            <p style={{ display: "inline", color: "#fff", fontSize: "1rem" }}>
              Armchair adventurer cum pensive puffer.
            </p>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://static.wixstatic.com/media/c6a101_fa0550fe83d5477abbacde2ecf78789e.jpg/v1/fill/w_508,h_590,al_c,q_80,usm_0.66_1.00_0.01/c6a101_fa0550fe83d5477abbacde2ecf78789e.webp"
              alt=""
              onClick={handleClick}
              style={{ maxHeight: "250px", maxWidth: "300px" }}
              className="border-img"
            />
            <p style={{ color: "#fff", fontSize: "1rem" }}>
              Our cool-headed hero confronts a Herculean hoodlum
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <p>
              His adventurer alter ego is also deceptively cool. Not a flicker
              in his facial muscles as he confronts a hunky Yankee. Even the
              Yeti.
            </p>
            <p>
              But in two ticks the gangster lies groaning. Alert-half has
              silently struck !
            </p>
          </div>
        </div>
        <div>
          <p style={{ color: "#fff", fontSize: "1rem" }}>
            Artistic Interpretation Discovering a Schistocerca gregaria (locust)
            afloat the Bahr al-Arab... Pratul Chandra's no-nonsense protagonist
            (Left) is tense with excitement. Gupta's quirky self-mocking
            Ghanashyam (Right) remains stoically impassive
          </p>
          <img
            src="https://static.wixstatic.com/media/c6a101_fc5867e80ab54383ac5c10ab31902a89.jpg/v1/fill/w_770,h_446,al_c,q_80,usm_0.66_1.00_0.01/c6a101_fc5867e80ab54383ac5c10ab31902a89.webp"
            alt=""
            onClick={handleClick}
            style={{ maxHeight: "250px", maxWidth: "300px" }}
            className="border-img"
          />
        </div>
        <div style={{ margin: "1.5rem 0" }}>
          <img
            src="https://static.wixstatic.com/media/c6a101_77d6626fba62422d9671e2293ae5869c.jpg/v1/fill/w_494,h_362,al_c,q_80,usm_0.66_1.00_0.01/c6a101_77d6626fba62422d9671e2293ae5869c.webp"
            alt=""
            onClick={handleClick}
            style={{ maxHeight: "250px", maxWidth: "300px" }}
            className="border-img"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              fontSize: "1rem",
            }}
          >
            <p>Story-teller also leads a double life.</p>
            <p>
              The boarding house youngsters are treated to science-scented
              adventures and modified myths.
            </p>
            <p>
              But come evening, and their Ghanada is transformed into the
              respectable Ghanashyambabu. This gentleman regales an elderly
              audience of strollers with retellings of history. Chronicles of
              his ancestors’ deeds.
            </p>
          </div>
          <img
            src="https://static.wixstatic.com/media/c6a101_1327dd1ac0274d95a2b66583854fc5a1.jpg/v1/fill/w_326,h_500,al_c,q_80,usm_0.66_1.00_0.01/c6a101_1327dd1ac0274d95a2b66583854fc5a1.webp"
            alt=""
            onClick={handleClick}
            style={{ maxHeight: "250px", maxWidth: "300px" }}
            className="border-img"
          />
        </div>
        <p style={{ color: "#fff", fontSize: "1rem" }}>
          For a skilled craftsman, drawing a tall, bony, uncertain-aged hero is
          not a challenge. But interpreting the in-between lines calls for an
          intelligent imaginative illustrator.
        </p>
        <div style={{ justifyContent: "space-around" }}>
          <img
            src="https://static.wixstatic.com/media/c6a101_a36334e2cdfb477dbc523dfba39e7997.jpg/v1/fill/w_428,h_420,al_c,q_80,usm_0.66_1.00_0.01/c6a101_a36334e2cdfb477dbc523dfba39e7997.webp"
            alt=""
            onClick={handleClick}
            style={{ maxHeight: "250px", maxWidth: "300px" }}
            className="border-img"
          />
          <img
            src="https://static.wixstatic.com/media/c6a101_f8049c9c05154911a30fc80fa3047860.jpg/v1/fill/w_618,h_599,al_c,q_85,usm_0.66_1.00_0.01/c6a101_f8049c9c05154911a30fc80fa3047860.webp"
            alt=""
            onClick={handleClick}
            style={{ maxHeight: "250px", maxWidth: "300px" }}
            className="border-img"
          />
          <img
            src="https://static.wixstatic.com/media/c6a101_8aa41954f1c44e95adebc1aee2edb2ce.jpg/v1/fill/w_404,h_446,al_c,q_80,usm_0.66_1.00_0.01/c6a101_8aa41954f1c44e95adebc1aee2edb2ce.webp"
            alt=""
            onClick={handleClick}
            style={{ maxHeight: "250px", maxWidth: "300px" }}
            className="border-img"
          />
        </div>
        <p style={{ color: "#fff", fontSize: "1rem" }}>
          Actor observing the Adventurer Ghanada detachedly watches alter ego
          Ghanashyam's exploits. A dramatic alienation of the two entities. From
          the first two books, M C Sarkar edition (1986, 1988).
        </p>
      </div>
    </div>
  )
}

export default Hero
