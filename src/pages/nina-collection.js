import React, { Component } from "react"
import { Link } from "gatsby"
import Popup from "../components/popup"

import Layout from "../components/layout"
import SEO from "../components/seo"

import N1 from "../images/sitealice/N1.png"
import N2 from "../images/sitealice/N2.jpg"
import N3 from "../images/sitealice/N3.jpg"

import Text from "../components/text"

class Nina extends Component {
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
      10000
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
        <SEO title="Nina Collection" />
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
              onClick={() => this.openPopup(N1)}
              src={N1}
              alt="pic"
              className="picture"
            />

            <img
              onClick={() => this.openPopup(N2)}
              src={N2}
              alt="pic"
              className="picture"
            />
            <img
              onClick={() => this.openPopup(N3)}
              src={N3}
              alt="pic"
              className="picture"
            />
          </div>
        </div>

        <Text
          title="NINA COLLECTION"
          date="2018"
          t1="DESIGNER"
          n1="ALICE THONNIER - HELOISE SAUVET - MARINE FOURNIER - ROXANE DE KORODY"
          t2="PHOTOGRAPHER"
          n2="GABRIELLE RIOUAH"
          t3="MODEL"
          n3="NINA STEIMEL "
          t4="MAKE UP"
          n4="CAROLINE MADISON"
        />
      </Layout>
    )
  }
}

export default Nina
