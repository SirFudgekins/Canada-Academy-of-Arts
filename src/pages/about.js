import React from "react";
import { Link } from "gatsby";
import "./about.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => (
    <Layout>
        <SEO title="About" />
        <h1 className="location-header">Location</h1>
        <div className="location-box">
            <div className="location-details">
                7381 Kennedy Road Suite 207A<br />Markham, ON, Canada<br />L3R 5B5<br />Phone: (416)829-3392
            </div>
            <div className="location-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1439.0086622319866!2d-79.30464804179438!3d43.834738729565665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d410c28def73%3A0xd39b2487ee40d904!2s7381%20Kennedy%20Rd%2C%20Markham%2C%20ON%20L3R%205B5!5e0!3m2!1sen!2sca!4v1620957228041!5m2!1sen!2sca" width="600" height="450"  allowfullscreen="" loading="lazy" className="google-map" title="Google Map of art school location"></iframe>
            </div>
        </div>
    </Layout>
)

export default About