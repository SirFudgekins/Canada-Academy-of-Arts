import React from 'react';
import "./Footer.css";
import { Link } from "gatsby";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="https://github.com/LegoCityMan7063/Canada-Academy-of-Arts">GitHub</a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </p>
            </div>
        </div>
    )
}

export default Footer