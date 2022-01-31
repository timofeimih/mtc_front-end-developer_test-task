import logo from "../../assets/logo.svg";
import Container from "./Container";
import styles from "./Header.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const Header = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenuToogle = () => {
    setShowMobileMenu((current) => !current);
  };
  return (
    <>
      <Container>
        <nav className={styles.mobileMenu}>
          <div className={styles.mobileHeading}>
            <div className={styles.menuButton}>
              <i className="fa fa-bars" onClick={mobileMenuToogle}></i>
              <a href="#" className={styles.mobileLogo}>
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className={styles.order}>
              <Button class="alt">
                <span>MY ORDER</span>
                {/* <img src={shoppingCart} alt="shopping cart" /> */}
                <i className="fas fa-shopping-cart"></i>
              </Button>
            </div>
          </div>
          <ul className={ showMobileMenu ? styles.show : "" }>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">PLAN MY KITCHEN</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#gallery">GALLERY</a>
            </li>
            <li>
              <div className={styles.icons}>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <header className={styles.header}>
          <div className={styles.icons}>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">PLAN MY KITCHEN</a>
              </li>
              <li className={styles.logo}>
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#gallery">GALLERY</a>
              </li>
            </ul>
          </nav>
          <div className={styles.order}>
            <Button class="alt">
              MY ORDER
              {/* <img src={shoppingCart} alt="shopping cart" /> */}
              <i className="fas fa-shopping-cart"></i>
            </Button>
          </div>
        </header>
      </Container>
    </>
  );
};

export default Header;
