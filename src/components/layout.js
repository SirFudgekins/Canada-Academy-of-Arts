/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import { ThemeContext } from "./ThemeContext";
import styled from "@emotion/styled";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const themes = {
    light: {
      foreground: "inherit",
      background: "inherit",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };

  const ThemedLayout = styled.div`
    color: ${props => themes[props.theme.name].foreground};
    background-color: ${props => themes[props.theme.name].background};
    transition: all 0.4s ease;
    min-height: 100vh;

    & a {
      color: ${props => (props.theme.name === "dark" ? "white" : "inherit")};
    }
  `;

  return (
    <ThemeContext.Consumer>
      {theme => (
        <ThemedLayout theme={theme} className="theme">
          <Header siteTitle={data.site.siteMetadata.title} theme={theme} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: `80vw`,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
          </div>
          <Footer />
        </ThemedLayout>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout