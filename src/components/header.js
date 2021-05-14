import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Switch from "react-switch";
import "./header.css";

const Header = ({ siteTitle, theme }) => (
  <header className="header">
    <div className="nav-bar">
      <h2 className="nav-option">
        <Link to="/">
          {siteTitle}
        </Link>
      </h2>
      <div className="nav-option small-link">
        <Link to="/gallery">Gallery</Link>
      </div>
      <div className="nav-option small-link">
        <Link to="/about">About</Link>
      </div>
      <Switch
        className="nav-option small-link"
        onChange={() =>
          theme.updateTheme(theme.name === "light" ? "dark" : "light")
        }
        checked={theme.name === "dark"}
        onColor="#8c8888"
        offColor="#8c8888"
        checkedIcon={<span role="img" aria-label="moon" className="emoji">🌙</span>}
        uncheckedIcon={<span role="img" aria-label="sun" className="emoji">☀️</span>}
        boxShadow="0 0 2px 3px #B38CD9"
        activeBoxShadow="0 0 2px 3px #dfb3e6"
        aria-label="light/dark mode switch"
      />
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
