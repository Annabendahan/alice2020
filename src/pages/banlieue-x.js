import React, { Component } from "react"
import { Link } from "gatsby"
import Popup from "../components/popup"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BX1 from "../images/sitealice/BX1.png"
import BX2 from "../images/sitealice/BX2.png"
import BX3 from "../images/sitealice/BX3.jpg"
import BX7 from "../images/sitealice/BX7.jpg"
import BX8 from "../images/sitealice/BX8.png"

import Text from "../components/text"

class Banlieue extends Component {
  state = {
    mounted: false,
    mounted2: false,
    mounted3: false,
    step2: false,
    showPopup: false,
    img: 1,
  }

  componentDidMount() {
    this.setState({ mounted: true })
    setTimeout(
      function() {
        this.setState({ step2: true })
      }.bind(this),
      100
    )
    setTimeout(
      function() {
        this.setState({ mounted2: true })
      }.bind(this),
      500
    )
    setTimeout(
      function() {
        this.setState({ mounted3: true })
      }.bind(this),
      1000
    )
    setTimeout(
      function() {
        this.setState({ step2: false })
      }.bind(this),
      20000
    )
  }

  resetCount = () => {
    this.setState({ img: 1 })
  }

  showNextPic = () => {
    this.setState({ img: this.state.img + 1 })
  }
  render() {
    let img = <img src={BX1} alt="pic" className="picture" />

    if (this.state.img === 2) {
      img = <img src={BX2} alt="pic" className="picture" />
    } else if (this.state.img === 3) {
      img = <img src={BX3} alt="pic" className="picture" />
    } else if (this.state.img === 4) {
      img = <img src={BX7} alt="pic" className="picture" />
    } else if (this.state.img === 5) {
      img = <img src={BX8} alt="pic" className="picture" />
    } else if (this.state.img === 6) {
      this.resetCount()
    }
    return (
      <Layout>
        <SEO title="Banlieue X" />
        <div
          onClick={() => this.showNextPic()}
          className="pics"
          style={{
            transform: this.state.mounted
              ? "translateY(0)"
              : "translateY(50vh)",
            transition: ".4s all .7s ease-out",
            opacity: this.state.mounted ? 1 : 0,
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center" }}> {img}</div>

          <div
            style={{
              opacity: this.state.mounted3 ? 1 : 0,
              transition: "all 1s ease-out",
            }}
          >
            <Text
              title="BANLIEUE X"
              date="2018"
              desc="What do young people do in a post-apocalyptic world, where perfection is not wanted anymore and borders are abolished? They start creating. They do fashion. They dance. They put their forces together and build something new. A story about a group of friends that is not afraid of the future. The timeless Banlieue serves as setting, under the artistic direction of Oana von Rave – in exclusive for The Flow House. - Karim Coppola"
              t1="DESIGNER"
              n1="ALICE THONNIER - HELOISE SAUVET - MARINE FOURNIER - ROXANE DE KORODY"
              t2="PHOTOGRAPHER"
              n2=" JEAN MARC JALEEL"
              t3="STARRING"
              n3="YAMINE KHIAR - PAUL HUET - HELMY EL WAKIL (WILLIAMS MANAGEMENT) - STEPHANIE ARNAUD - JULIENNE I - LAURA UNG "
              t4="HAIR & MAKE UP"
              n4="ANTOINE L'HEBRELLEC - CHLOÉ BADEAU"
              t5="DANCERS -"
              n5="PERKINS KELLEY - MR BROMA"
              t6="STYLED BY -"
              n6="OANA VON RAVEN"
              t7="BRANDS -"
              n7="ALICE THONNIER - ASOS - LA PERLA - AMERICAN APPAREL - NIKE - DR MARTENS - TOD'S - ACNE STUDIO - VINTAGE ARMY  IN EXCLUSIVE FOR: THE FLOW HOUSE"
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Banlieue
