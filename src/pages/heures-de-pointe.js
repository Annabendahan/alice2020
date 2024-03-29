import React, { Component } from "react"
import { Link } from "gatsby"
import Popup from "../components/popup"

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
    let img = <img src={HDP7} alt="pic" className="picture" />

    if (this.state.img === 2) {
      img = <img src={HDP8} alt="pic" className="picture" />
    } else if (this.state.img === 3) {
      img = <img src={HDP6} alt="pic" className="picture" />
    } else if (this.state.img === 4) {
      img = <img src={HDP3} alt="pic" className="picture" />
    } else if (this.state.img === 5) {
      img = <img src={HDP4} alt="pic" className="picture" />
    } else if (this.state.img === 6) {
      img = <img src={HDP1} alt="pic" className="picture" />
    } else if (this.state.img === 7) {
      img = <img src={HDP5} alt="pic" className="picture" />
    } else if (this.state.img === 8) {
      this.resetCount()
    }
    return (
      <Layout>
        <SEO title="Heures de pointe" />

        <div className="collection">
          <div
            onClick={() => this.showNextPic()}
            className="pics"
            style={{
              transform: this.state.mounted
                ? "translateY(0)"
                : "translateY(50vh)",
              transition: ".4s all .7s ease-out",
              opacity: this.state.mounted ? 1 : 0,
            }}
          >
            <div className="big-image" style={{ textAlign: "center" }}>
              {" "}
              {img}
            </div>

            <div
              style={{
                opacity: this.state.mounted3 ? 1 : 0,
                transition: "all 1s ease-out",
              }}
            >
              <div className="infos">
                <h4>
                  HEURES DE POINTE - <span className="date">2018</span>
                </h4>

                <h4> {this.state.img}/7 </h4>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Heures
