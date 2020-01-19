import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      display: `flex`,
    }}
  >
    <h1>ALICE THONNIER</h1>
    <div className="navs">
      <Link>COLLECTIONS</Link>
      <Link>ABOUT</Link>
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
