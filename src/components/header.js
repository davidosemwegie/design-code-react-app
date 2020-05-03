import { Link } from "gatsby"
import React, { Component } from "react"
import "./header.css"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  //How to change the ccolor of the header if the user has scrolled

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
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
  }
}

export default Header
