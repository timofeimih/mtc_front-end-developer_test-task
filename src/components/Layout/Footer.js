import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import facebook_icon from "../../assets/facebook_icon.svg";
import twitter_icon from "../../assets/twitter_icon.svg";
import instagram_icon from "../../assets/instagram_icon.svg";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container className={styles.footerContainer}>
        <div className={styles.line}></div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            About
            <ul>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Plan my kitchen</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            Service
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">How to buy</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            Info
            <ul>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            Follow
            <div className={styles.icons}>
              <a href="#">
                <img src={facebook_icon} alt="facebook icon" />
              </a>
              <a href="#">
                <img src={twitter_icon} alt="twitter icon" />
              </a>
              <a href="#">
                <img src={instagram_icon} alt="instagram icon" />
              </a>
            </div>
          </div>
        </div>

        <p>
          Copyright Online MTC Home Kitchens 2018 - All rights reserved. <br />
          Responsive website design, Development & Hosting by mtc.
        </p>
        <div className={styles.line}></div>
      </Container>
    </footer>
  );
};

export default Footer;
