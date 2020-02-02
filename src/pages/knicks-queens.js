import React, { Component } from "react"
import { Link } from "gatsby"
import Popup from "../components/popup"

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
    let img = <img src={Q1} alt="pic" className="picture" />

    if (this.state.img === 2) {
      img = <img src={Q2} alt="pic" className="picture" />
    } else if (this.state.img === 3) {
      img = <img src={Q3} alt="pic" className="picture" />
    } else if (this.state.img === 4) {
      img = <img src={Q4} alt="pic" className="picture" />
    } else if (this.state.img === 5) {
      img = <img src={Q5} alt="pic" className="picture" />
    } else if (this.state.img === 6) {
      img = <img src={Q8} alt="pic" className="picture" />
    } else if (this.state.img === 7) {
      this.resetCount()
    }
    return (
      <Layout>
        <SEO title="Knicks Queens" />

        <div
          className="pics"
          onClick={() => this.showNextPic()}
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
          </div>
        </div>
      </Layout>
    )
  }
}

export default Knicks
