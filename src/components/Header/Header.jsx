import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header-items">
        <img
          className="vip-life-coach-logo"
          src="/images/VIPLifeCoachLogoCropped.jpg"
        />
        <section className="header-links">
          <Link className="header-link" to="/about-us">
            US
          </Link>
          <Link className="header-link" to="/client">
            COACHING
          </Link>
          <Link className="header-link" to="/coaching-areas">
            AREAS
          </Link>
          <Link className="header-link" to="/location">
            LOCATION
          </Link>
          <Link className="header-link" to="/fees-and-pricing">
            FEES AND PRICING
          </Link>
          <Link className="header-link" to="/testimonials">
            TESTIMONIALS
          </Link>
          <Link className="header-link" to="/contact">
            CONTACT
          </Link>
        </section>
      </header>
    </>
  );
};

export default Header;
