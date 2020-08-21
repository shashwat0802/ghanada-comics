import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../../../styles/pages/welcome/Artists.css"
import Modal from "react-modal"
const Artists = () => {
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
            <Link to="/ghanada-gallery/author">Author</Link>
          </div>
        </div>

        <div className="forward-wrapper">
          <div className="forward-content">
            <Link to="/ghanada-gallery/hero">Hero</Link>
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
        <div className="artists-area-1">
          <div className="area-1-imgs">
            {/* images goes here */}
            <img
              src="https://static.wixstatic.com/media/c6a101_3b7ed599bf624369bc7451019c146315.jpg/v1/fill/w_623,h_841,al_c,q_90/c6a101_3b7ed599bf624369bc7451019c146315.webp"
              alt=""
              onClick={handleClick}
              className="area1-img"
            />
            <img
              src="https://static.wixstatic.com/media/c6a101_6b1c2d49b29b4c61b31d54dbaf1355ba.jpg/v1/fill/w_866,h_286,al_c,lg_1,q_90/c6a101_6b1c2d49b29b4c61b31d54dbaf1355ba.webp"
              alt=""
              onClick={handleClick}
              className="area1-img"
            />
            <img
              src="https://static.wixstatic.com/media/c6a101_8d1b20c0286e424495d6ce439575beb4.jpg/v1/fill/w_937,h_642,al_c,q_90/c6a101_8d1b20c0286e424495d6ce439575beb4.webp"
              alt=""
              onClick={handleClick}
              className="area1-img"
            />
            <img
              src="https://static.wixstatic.com/media/c6a101_6504c84eb58d4eac9759dd5210df9d84.jpg/v1/fill/w_432,h_706,al_c,lg_1,q_90/c6a101_6504c84eb58d4eac9759dd5210df9d84.webp"
              alt=""
              onClick={handleClick}
              className="area1-img"
            />
            <img
              src="https://static.wixstatic.com/media/c6a101_7081fe0d17364ebf9420809f3d0d7f95.jpg/v1/fill/w_762,h_1024,al_c,q_90/c6a101_7081fe0d17364ebf9420809f3d0d7f95.webp"
              alt=""
              onClick={handleClick}
              className="area1-img"
            />
            <img
              src="https://static.wixstatic.com/media/c6a101_7360112519af4ba8a8d56f7b0bfa952a.jpg/v1/fill/w_503,h_545,al_c,lg_1,q_90/c6a101_7360112519af4ba8a8d56f7b0bfa952a.webp"
              alt=""
              onClick={handleClick}
              className="area1-img"
            />
          </div>
          <div className="area1-content">
            <h1>Protul Chandra Bandyopadhyay</h1>
            <p>
              The Bengali who autographed his artwork in Devanagari or English.
            </p>
            <p>
              You mastered the alphabet. Memorized rhymes. Moved on to
              spine-chillers. His sketches smiled back. Or scared you silly.
            </p>
            <p>
              A master of the traditional realistic style, Protul Chandra
              Bandyopadhyay (1903 - 74) created the first visual model of
              Ghanada. In over twenty tales through two and a half decades,
              Ghanashyam Das' handlebar moustache stood testimony to the
              Premendra - Protul partnership.
            </p>
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
          <div className="artists-area-2">
            <div className="area2-content">
              <h1>Ajit Gupta</h1>
              <p>
                1956. Ghanashyam Das was already a teen icon. Time then to
                publish an anthology from stories scattered in the Puja annuals.
              </p>
              <p>
                The hero defied categorization. ‘Adventure’, ‘Science Fiction’,
                ‘Mystery’, ‘Humour’ – genres mingled. The brew was served in a
                wacky ironic matter-of-fact fashion, posing a challenge to the
                new book designer.
              </p>
              <p>
                If Protul Chandra spiced and tensed up the understated action
                scenes to match his own style, Ajit Gupta (1928 - 2013)’s
                visuals complemented Premendra’s literary USP. Reduced years,
                kilos, facial fur and flab gave the revamped graphic avatar a
                chiseled uncertain-aged poker face.
              </p>
              <p>A cool new Ghanada for the post-Independence teens.</p>
            </div>
            <div className="area2-img">
              <img
                src="https://static.wixstatic.com/media/c6a101_14166e8ee30f47da985b250861a95a08.jpg/v1/fill/w_523,h_542,al_c,lg_1,q_90/c6a101_14166e8ee30f47da985b250861a95a08.webp"
                alt=""
                onClick={handleClick}
                className="area2-img"
              />
              <img
                src="https://static.wixstatic.com/media/c6a101_3875a9cfc3f74b9c92587e18e2ea4fbf.jpg/v1/fill/w_757,h_1158,al_c,q_90,usm_0.66_1.00_0.01/c6a101_3875a9cfc3f74b9c92587e18e2ea4fbf.webp"
                alt=""
                onClick={handleClick}
                className="area2-img"
              />
              <img
                src="https://static.wixstatic.com/media/c6a101_34f7c50862354fc991ab378495bc3583.jpg/v1/fill/w_828,h_1090,al_c,q_90,usm_0.66_1.00_0.01/c6a101_34f7c50862354fc991ab378495bc3583.webp"
                alt=""
                onClick={handleClick}
                className="area2-img"
              />
              <img
                src="https://static.wixstatic.com/media/c6a101_0a9236d06b814969a19110f142dd9395.jpg/v1/fill/w_658,h_1056,al_c,q_90,usm_0.66_1.00_0.01/c6a101_0a9236d06b814969a19110f142dd9395.webp"
                alt=""
                onClick={handleClick}
                className="area2-img"
              />
              <img
                src="https://static.wixstatic.com/media/c6a101_c2eec2e0e6a941e780930d4b7737dcf9.jpg/v1/fill/w_327,h_988,al_c,q_90,usm_0.66_1.00_0.01/c6a101_c2eec2e0e6a941e780930d4b7737dcf9.webp"
                alt=""
                onClick={handleClick}
                className="area2-img"
              />
              <img
                src="https://static.wixstatic.com/media/c6a101_8b9ad00d2e99422294e8b78c90a4b15c.jpg/v1/fill/w_671,h_1024,al_c,q_90,usm_0.66_1.00_0.01/c6a101_8b9ad00d2e99422294e8b78c90a4b15c.webp"
                alt=""
                onClick={handleClick}
                className="area2-img"
              />
            </div>
          </div>
        </div>
        <div className="red-area">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src="https://static.wixstatic.com/media/c6a101_8d55cd0945f3479683be9aef78fe6313.jpg/v1/fill/w_386,h_170,al_c,q_80,usm_0.66_1.00_0.01/c6a101_8d55cd0945f3479683be9aef78fe6313.webp"
              alt=""
              width="300px"
              height="100px"
              style={{ marginTop: "2rem" }}
            />
            <p style={{ justifySelf: "center" }}>
              Some artists like Balaibandhu Roy pursued the Protul-prototype
            </p>
          </div>
          <p style={{ color: "#fff", fontSize: "1rem", textAlign: "right" }}>
            From Left) Protul Chandra & Balaibandhu's Ghanada [From 'Shuto' &
            'Dhil' respectively]
          </p>
          <p>
            But Ajit Gupta's graphic is still considered the copybook version.
          </p>
          <p>
            Publishers often replaced the hero's head, as visualized by another
            illustrator, with an elongated Gupta-Ghanada cranium in later
            editions of the same book.
          </p>
          <p style={{ color: "#fff", fontSize: "0.85rem" }}>
            A Gupta face grafted on to a Dhiren Bal body. ['Maap' from the 1970
            & 1993 editions of 'Ghanadar Juri Nei']
          </p>
          <img
            src="https://static.wixstatic.com/media/c6a101_2bdfefbcaa454d04ab2e4ad02add1eba.jpg/v1/fill/w_266,h_280,al_c,q_80,usm_0.66_1.00_0.01/c6a101_2bdfefbcaa454d04ab2e4ad02add1eba.webp"
            alt=""
            style={{
              width: "250px",
              height: "200px",
              border: "5px solid transparent",
            }}
            className="image-border"
          />
          <p>Premendra Mitra's own preference was no secret either</p>
          <p style={{ color: "#fff", fontSize: "0.75rem" }}>
            Excerpts from Ajit Gupta's memoir 'Bhaalobaashaar Aadda' (2007) :
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <img
              src="https://static.wixstatic.com/media/c6a101_fd7379cf3ab44638ba85dec66b522a96.jpg/v1/fill/w_802,h_166,al_c,q_80,usm_0.66_1.00_0.01/c6a101_fd7379cf3ab44638ba85dec66b522a96.webp"
              alt=""
              style={{
                width: "300px",
                height: "200px",
                border: "5px solid transparent",
                cursor: "pointer",
              }}
              onClick={handleClick}
            />
            <img
              src="https://static.wixstatic.com/media/c6a101_89819aea30ce4bfb9d59730d543d10f5.jpg/v1/fill/w_740,h_194,al_c,q_80,usm_0.66_1.00_0.01/c6a101_89819aea30ce4bfb9d59730d543d10f5.webp"
              alt=""
              style={{
                width: "300px",
                height: "200px",
                border: "5px solid transparent",
                cursor: "pointer",
              }}
              onClick={handleClick}
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1rem",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/c6a101_41fd0027c9504b48b7e7566e0f6a3a81.jpg/v1/fill/w_464,h_670,al_c,q_80,usm_0.66_1.00_0.01/c6a101_41fd0027c9504b48b7e7566e0f6a3a81.webp"
              alt=""
              style={{
                width: "300px",
                height: "400px",
                border: "5px solid transparent",
                cursor: "pointer",
              }}
              onClick={handleClick}
            />
            <img
              src="https://static.wixstatic.com/media/c6a101_70b41c25e6624743a2a52157c5c60795.jpg/v1/fill/w_442,h_670,al_c,q_80,usm_0.66_1.00_0.01/c6a101_70b41c25e6624743a2a52157c5c60795.webp"
              alt=""
              style={{
                width: "300px",
                height: "400px",
                border: "5px solid transparent",
                cursor: "pointer",
              }}
              onClick={handleClick}
            />
            <p style={{ alignSelf: "center" }}>
              This article by Premendra Mitra from 'Kishore Jnan Bijnan' (1981)
              contains a rare reference to the Ghanada illustrations.
            </p>
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
          <h1>Others</h1>
          <p>
            Ghanada's reign (1945 - 87) spanned Bengal's most decisive four
            decades of teen fiction. Illustration styles also evolved with the
            advent of glossy juvenile journals and new printing techniques.
          </p>
          <p>
            More than two dozen ace artists gifted Ghanashyam their distinctive
            touch. Notable names included :
          </p>
          <p style={{ color: "turquoise" }}>
            Ahibhushan Malik. Alay Kumar Ghoshal. Alok Dhar. Anup Ray.
            Balaibandhu Roy. Bimal Das. Debasish Deb. Dhirenkumar Baul. Dhruba
            Roy. Dilip Das. Goutam Roy. Narayan Debnath. Narendra
            Dutta.Onkarnath Bhattacharya. Prashanta Gupta. Robin Basu. Samir
            Mondal. Samir Sarkar. Shailo Narayan Chakraborty. Shuvaprasanna
            Bhattacharya. Subodh Kumar Dasgupta. Subrata Chowdhury. Sudhir
            Moitra. Surya Roy. Tushar Chattopadhyay. Uday Deb.
          </p>
          <div className="artists-end-div">
            <img
              src="https://lh3.googleusercontent.com/fHdGeNd2tf5unHmlJIDhQN_LO-1ImPqId4QsCOE5JUwPBd2v6y6zhfmb6halVW5XFm3ZRQ=s115"
              alt=""
              onClick={handleClick}
            />
            <img
              src="https://lh3.googleusercontent.com/-Niu1qpKWtPNKrZs4R__b8MM9pSHXq0ile8uelqVBuTvOYY8aM_uxtmpRQn_DeVW5T1iboo=s85"
              alt=""
              onClick={handleClick}
            />
            <img
              src="https://lh3.googleusercontent.com/zUzvRxAoQY181OLRczA3O2UGOWaVNlaLt1ogJ5BcSoi2OE6T0g76dURVJSb80zqhFcgQ=s85"
              alt=""
              onClick={handleClick}
            />
            <img
              src="https://lh3.googleusercontent.com/jGMq8ba-RdWtx9Bf_-RO_NxmMygMRkWMM26OB4w0OolA35_DysElF07zHsZ0i1X-y2AU=s85"
              alt=""
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="author-footer">
          <img
            src="https://static.wixstatic.com/media/c6a101_710a81b5a235445386a0b69a6c23945e.jpg/v1/fill/w_220,h_368,al_c,q_80,usm_0.66_1.00_0.01/c6a101_710a81b5a235445386a0b69a6c23945e.webp"
            alt=""
            onClick={handleClick}
          />
          <p>
            Ajit Gupta modelled his trademark Ghanada on a certain 'Nitishbabu'
            belonging to Premendra Mitra's film unit
          </p>
        </div>
        <img
          src="https://static.wixstatic.com/media/c6a101_2cd79018d01c49e986c4183a26c4a424.jpg/v1/fill/w_330,h_418,al_c,q_80,usm_0.66_1.00_0.01/c6a101_2cd79018d01c49e986c4183a26c4a424.webp"
          alt=""
          className="why-footer-img"
        />
        <p>artist : Ajey deb</p>
      </div>
      <div className="link-wrapper">
        <div className="backward-wrapper">
          <div className="backward-arrow"></div>
          <div className="backward-content">
            <Link to="/ghanada-gallery/author">Author</Link>
          </div>
        </div>

        <div className="forward-wrapper">
          <div className="forward-content">
            <Link to="/ghanada-gallery/hero">Hero</Link>
          </div>
          <div className="forward-arrow"></div>
        </div>
      </div>
    </div>
  )
}

export default Artists
