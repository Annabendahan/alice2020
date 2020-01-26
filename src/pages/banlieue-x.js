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
    step2: false,
    showPopup: false,
    img: "",
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
        this.setState({ step2: false })
      }.bind(this),
      20000
    )
  }

  openPopup = src => {
    this.setState({ showPopup: true, img: src })
    console.log("cc")
  }

  closePopup = () => {
    this.setState({ showPopup: false })
  }

  render() {
    return (
      <Layout>
        <SEO title="Banlieue X" />
        <div onClick={() => this.closePopup()}>
          {this.state.showPopup ? <Popup img={this.state.img} /> : null}{" "}
        </div>

        <div
          style={{
            opacity: this.state.mounted ? 1 : 0,
            transition: "opacity 2s ease-out",
          }}
          className="photos-global"
        >
          <div
            className="photos"
            style={{
              transform: this.state.step2
                ? "translateX(-2000px)"
                : "translateX(0px)",
              transition: "transform 200s ease-out",
            }}
          >
            <img
              onClick={() => this.openPopup(BX1)}
              src={BX1}
              alt="pic"
              className="picture"
            />
            <img
              onClick={() => this.openPopup(BX2)}
              src={BX2}
              alt="pic"
              className="picture"
            />
            <img
              onClick={() => this.openPopup(BX3)}
              src={BX3}
              alt="pic"
              className="picture"
            />
            <img
              onClick={() => this.openPopup(BX7)}
              src={BX7}
              alt="pic"
              className="picture"
            />
            <img
              onClick={() => this.openPopup(BX8)}
              src={BX8}
              alt="pic"
              className="picture"
            />
          </div>
        </div>

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
      </Layout>
    )
  }
}

export default Banlieue
