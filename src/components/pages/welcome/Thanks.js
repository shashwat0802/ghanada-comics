import React from "react"
import { Link } from "react-router-dom"
import "../../../styles/pages/welcome/Thanks.css"
const Thanks = () => {
  return (
    <div className="Thanks">
      <div className="link-wrapper">
        <div className="backward-wrapper">
          <div className="backward-arrow"></div>
          <div className="backward-content">
            <Link to="/ghanada-gallery/hero">Hero</Link>
          </div>
        </div>

        <div className="forward-wrapper">
          <div className="forward-content">
            <Link to="/ghanada-gallery/books">books</Link>
          </div>
          <div className="forward-arrow"></div>
        </div>
      </div>
      <div className="red-area">
        <h1>Thanks</h1>
        <p>
          Ghanada Gallery' set sail as a{" "}
          <Link
            to="https://www.facebook.com/GhanadaClub/"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Facebook page
          </Link>{" "}
          with my partners in crime Sayori and Krishna at the helm. Aficionados
          pitched in with snaps, scans, suggestions & support.
        </p>
        <p>We acknowledge our debt to :</p>
        <p style={{ color: "#30c4c6" }}>
          Abhik Gupta. Abhimannyu Dutta. Abhimanyu Mojumder. Anish Deb. Apu Dey.
          Arindam Gupta. Arindam Nandy. Arnab Das. Avisek Dhar. Benuka Gupta.
          Biswajit Ray. Chayan Samaddar. Chiranjit Das. Chumki Chatterjee.
          Debajyoti Guha. Debasis Mukhopadhyay. Debasish Deb. Debasish Goswami.
          Debasish Gupta. Debjyoti Bhattacharyya. Dibyendu Singha Roy. Esha
          Chatterjee. Giridhari Sarkar. Goutam Karmakar.Himadri Kishore
          Dasgupta. Himadri Mukhopadhyay. Indranath Banerjee. Kaushik Majumdar.
          Kausik Ray. Kuntal Mondal. Muyin Parvez. National Library, Kolkata.
          Neela Bandyopadhyay. Nilachal Baidya. Pranab Bhattacharjee. Rajashree
          Dutta Dhar. Rakhi Mitra Dasmunshi. Ramkrishna Bhattacharya. Ramranjan
          Ray. Ranjan Dutta. Riddhi Goswami. Rustam Mukherjee. Sagnik Prasad
          Ghosh. Sagoto Walker. Samudra Basu. Santanu Ghosh. Santu Bag. Sarasij
          Sengupta. Somnath Das Gupta. Soumen Paul. Subhendu Dasmunshi. Sujit
          Kundu. Sumit Roy. Surajit Dasgupta.
        </p>
        <p>... and a million other Ghanada buffs !</p>
      </div>
    </div>
  )
}

export default Thanks
