import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Q1 from "../images/sitealice/Q1.png"
import Q2 from "../images/sitealice/Q2.png"
import Q3 from "../images/sitealice/Q3.png"
import Q4 from "../images/sitealice/Q4.png"
import Q8 from "../images/sitealice/Q8.png"
import Q5 from "../images/sitealice/Q5.png"

import Text from "../components/text"

class Knicks extends Component {
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
        <SEO title="Heures de pointe" />

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
            <img src={Q1} alt="pic" className="picture" />
            <img src={Q2} alt="pic" className="picture" />
            <img src={Q3} alt="pic" className="picture" />
            <img src={Q4} alt="pic" className="picture" />
            <img src={Q5} alt="pic" className="picture" />
            <img src={Q8} alt="pic" className="picture" />
          </div>
        </div>

        <Text
          title="KNICKS QUEENS"
          date="2018"
          desc="Knicks Queens est une collection de mode inspirée du monde du basketball . Elle rappelle les couleurs de l’équipe des Knicks Queens, le bleu, le orange et le blanc. Le sweat en résille fait écho aux filets et aux grillages des terrains de basket de rue américains. Les poches rondes sur la veste et le pantalon rappellent la forme du ballon de basket."
          t1="DESIGNER"
          n1="ALICE THONNIER - HELOISE SAUVET - MARINE FOURNIER - ROXANE DE KORODY"
          t2="PHOTOGRAPHER"
          n2=" ROXANE DE KORODY"
          t3="MODEL"
          n3="ATHENA LISNYJ "
          t4="PLACE"
          n4="PIGALLE BASKETBALL"
        />
      </Layout>
    )
  }
}

export default Knicks
