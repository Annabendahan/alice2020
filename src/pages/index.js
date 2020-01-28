import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../images/sitealice/12H50.png"
import N2 from "../images/sitealice/N2.jpg"
import BX7 from "../images/sitealice/BX7.jpg"
import BX2 from "../images/sitealice/BX2.png"
import BX3 from "../images/sitealice/BX3.jpg"
import BX8 from "../images/sitealice/BX8.png"
import HDP7 from "../images/sitealice/HDP7.jpg"
import HDP1 from "../images/sitealice/HDP1.png"
import HDP6 from "../images/sitealice/HDP6.png"
import HDP3 from "../images/sitealice/HDP3.png"
import backstage from "../images/sitealice/backstage.mp4"
import Q1 from "../images/sitealice/Q1.png"
import N3 from "../images/sitealice/N3.jpg"
import N1 from "../images/sitealice/N1.png"

class IndexPage extends Component {
  state = {
    mounted: false,
    p: 0,
    a: 200,
    c: 400,
    v: -200,
    l: 100,
    e: -50,

    step2: false,
  }

  componentDidMount() {
    setInterval(
      function() {
        let p = this.state.p
        let a = this.state.a
        let c = this.state.c
        let v = this.state.v
        let l = this.state.l
        let e = this.state.e
        this.setState({
          p: p - 1,
          a: a - 1,
          c: c - 1,
          v: v + 1,
          l: l - 1,
          e: e + 1,
        })
      }.bind(this),
      100
    )
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
      25000
    )
  }

  render() {
    let p = this.state.p
    let a = this.state.a
    let c = this.state.c
    let v = this.state.v
    let l = this.state.l
    let e = this.state.e
    return (
      <Layout>
        <SEO title="Accueil" />
        {/* <div className="logo">
          <img src={logo} alt="" />
        </div> */}

        <div
          className="all"
          style={{
            width: "100%",
            height: "2000px",
            transform: this.state.step2
              ? "translateY(-2000px)"
              : "translateY(300px)",
            transition: "transform 100s ease-out",
          }}
        >
          <Link to="nina-collection">
            <img
              style={{ position: "absolute", top: "200px", left: "5%" }}
              src={N2}
              className="pic"
              alt=""
            />
          </Link>
          <br />
          <Link to="banlieue-x">
            <img
              style={{ position: "absolute", right: `${e}px` }}
              src={BX7}
              className="pic"
              alt=""
            />
          </Link>
          <Link to="banlieue-x">
            <img
              style={{
                position: "absolute",
                top: "600px",

                left: `${l}px`,
              }}
              src={BX2}
              className="pic"
              alt=""
            />
          </Link>

          <Link to="heures-de-pointe">
            {" "}
            <img
              style={{
                position: "absolute",
                left: `${e}px`,

                top: "1500px",
              }}
              src={HDP7}
              className="pic"
              alt=""
            />
          </Link>
          <Link to="banlieue-x">
            <img
              style={{
                position: "absolute",
                top: "1700px",
                left: `-10%`,
              }}
              src={BX3}
              className="pic"
              alt=""
            />
          </Link>
          <Link to="knicks-queens">
            <img
              style={{
                position: "absolute",
                top: "1100px",
                right: `-10%`,
              }}
              src={Q1}
              className="pic"
              alt=""
            />
          </Link>
          <Link to="heures-de-pointe">
            <img
              style={{
                position: "absolute",
                top: "800px",
                right: "20%",
              }}
              src={HDP3}
              className="pic"
              alt=""
            />
          </Link>
          <Link to="nina-collection">
            <img
              style={{
                position: "absolute",
                top: "2500px",
                right: `40%`,
              }}
              src={N3}
              className="pic"
              alt=""
            />
          </Link>
          <Link to="nina-collection">
            <img
              style={{
                position: "absolute",
                top: "1700px",
                right: `${a}px`,
              }}
              src={N1}
              className="pic"
              alt=""
            />
          </Link>
          <Link to="banlieue-x">
            <img
              style={{
                position: "absolute",
                top: "2950px",

                left: `${v}px`,
              }}
              src={BX8}
              className="pic"
              alt=""
            />{" "}
          </Link>
          <Link to="heures-de-pointe">
            <img
              style={{
                position: "absolute",
                top: "3100px",

                right: "-10px",
              }}
              src={HDP6}
              className="pic"
              alt=""
            />
          </Link>
          <Link to="heures-de-pointe">
            <img
              style={{
                position: "absolute",
                top: "2800px",

                right: "10%",
              }}
              src={HDP1}
              className="pic"
              alt=""
            />
          </Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
