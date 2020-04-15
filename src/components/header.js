import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/sitealice/12H50.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
    }}
  >
    <Link to="/">
      <h1>ALICE THONNIER</h1>
    </Link>
    <div className="navs">
      <div className="coll">
        <Link to="/collections">COLLECTIONS</Link>
      </div>
      <Link to="/about">ABOUT</Link>
      <Link to="/moodboard">MOODBOARD</Link>
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
