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
    let img = <img src={N3} alt="pic" className="picture" />

    if (this.state.img === 2) {
      img = <img src={N2} alt="pic" className="picture" />
    } else if (this.state.img === 3) {
      img = <img src={N1} alt="pic" className="picture" />
    } else if (this.state.img === 4) {
      this.resetCount()
    }
    return (
      <Layout>
        <SEO title="Nina Collection" />

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
            <div className="infos">
              <h4>
                NINA COLLECTION - <span className="date">2018</span>
              </h4>

              <h4> {this.state.img}/3 </h4>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Nina
