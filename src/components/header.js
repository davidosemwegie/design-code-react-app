import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require("../images/logo-designcode.svg")} width="30" />
      </Link>
      <Link to="">Courses</Link>
      <Link to="">Downloads</Link>
      <Link to="">Workshops</Link>
      <Link to="">
        <button>Buy</button>
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
