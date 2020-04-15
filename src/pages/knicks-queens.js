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
            <div className="infos">
              <h4>
                KNICKS QUEENS - <span className="date">2018</span>
              </h4>

              <h4> {this.state.img}/6 </h4>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Knicks
