import React from "react";
import { Link } from "gatsby";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/gallery">
        <Jumbotron fluid className="jumbo gallery-jumbo">
          <Container>
            <h1>Gallery</h1>
            <p>
              View past student artwork here.
            </p>
          </Container>
        </Jumbotron>
      </Link>
      <Link to="about">
        <Jumbotron fluid className="jumbo about-jumbo">
          <Container>
            <h1>About Us</h1>
            <p>
              Check out the school's location and contact info here.
            </p>
          </Container>
        </Jumbotron>
      </Link>
    </Layout>
  );
}

export default IndexPage