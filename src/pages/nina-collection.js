import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import N1 from "../images/sitealice/N1.png"
import N2 from "../images/sitealice/N2.jpg"
import N3 from "../images/sitealice/N3.jpg"

import Text from "../components/text"

class Nina extends Component {
  state = {
    step2: false,
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ step2: true })
      }.bind(this),
      100
    )
  }
  render() {
    return (
      <Layout>
        <SEO title="Nina Collection" />

        <div className="photos-global">
          <div
            className="photos"
            style={{
              transform: this.state.step2
                ? "translateX(-2000px)"
                : "translateX(100px)",
              transition: "transform 100s ease-out",
            }}
          >
            <img src={N1} alt="pic" className="picture" />
            <img src={N2} alt="pic" className="picture" />
            <img src={N3} alt="pic" className="picture" />
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
