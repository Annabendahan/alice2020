import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/sitealice/12H50.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `1rem 0rem`,
      display: `flex`,
    }}
  >
    <Link to="/">
      <h1>ALICE THONNIER</h1>
    </Link>
    <div className="navs">
      <div className="coll">
        <Link>COLLECTIONS</Link>
        <div className="colld">
          <Link to="/heures-de-pointe"> Heures de pointe</Link> <br />{" "}
          <Link to="/banlieue-x"> Banlieue x</Link> <br />{" "}
          <Link to="/nina-collection"> Nina</Link> <br />{" "}
          <Link to="/knicks-queens"> Knicks</Link>{" "}
        </div>
      </div>
      <Link to="/about">ABOUT</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
