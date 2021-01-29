import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="">Contact</Link>
            <Link to="">Support</Link>
            <Link to="">Alamat</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="">Instagram</Link>
            <Link to="">Facebook</Link>
            <Link to="">Youtube</Link>
            <Link to="">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="" className="social-logo">
              Adiwiyata
            </Link>
          </div>
          <small class="website-rights">Wisnu © 2020</small>
          <div class="social-icons">
            <Link class="social-icon-link facebook">
              <i class="fab fa-facebook-f" />
            </Link>
            <Link class="social-icon-link instagram">
              <i class="fab fa-instagram" />
            </Link>
            <Link class="social-icon-link youtube">
              <i class="fab fa-youtube" />
            </Link>
            <Link class="social-icon-link twitter">
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
