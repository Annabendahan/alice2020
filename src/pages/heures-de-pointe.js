import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HDP7 from "../images/sitealice/HDP7.jpg"
import HDP1 from "../images/sitealice/HDP1.png"
import HDP6 from "../images/sitealice/HDP6.png"
import HDP3 from "../images/sitealice/HDP3.png"
import HDP4 from "../images/sitealice/HDP4.png"
import HDP8 from "../images/sitealice/HDP8.png"
import HDP5 from "../images/sitealice/HDP5.png"

import Text from "../components/text"

class Heures extends Component {
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
    setTimeout(
      function() {
        this.setState({ step2: false })
      }.bind(this),
      20000
    )
  }
  render() {
    return (
      <Layout>
        <SEO title="Heures de pointe" />

        <div className="photos-global">
          <div
            className="photos"
            style={{
              transform: this.state.step2
                ? "translateX(-2000px)"
                : "translateX(0px)",
              transition: "transform 100s ease-out",
            }}
          >
            <img src={HDP1} alt="pic" className="picture" />
            <img src={HDP7} alt="pic" className="picture" />
            <img src={HDP6} alt="pic" className="picture" />
            <img src={HDP3} alt="pic" className="picture" />
            <img src={HDP4} alt="pic" className="picture" />
            <img src={HDP8} alt="pic" className="picture" />
            <img src={HDP5} alt="pic" className="picture" />
          </div>
        </div>

        <Text
          title="HEURES DE POINTE"
          date="2018"
          desc=" Heures de Pointe est une collection unisexe inspirée du métro aux Heures
        les plus fréquentées. Le concept de la collection est de fusionner des
        vêtements de personnes positionnées côte à côte pour obtenir des
        vêtements à pluri-apparence."
          t1="DESIGNER"
          n1="ALICE THONNIER"
          t2="PHOTOGRAPHER"
          n2="CARA PHOTOGRAPHIES"
          t3="MODEL"
          n3="MONIQUE ANDREW / ARNAUD PAGNARO "
          t4="MAKE UP"
          n4="MARIA M ZOLA"
          t5="STUDIO -"
          n5="STUDIO VALMY"
        />
      </Layout>
    )
  }
}

export default Heures
