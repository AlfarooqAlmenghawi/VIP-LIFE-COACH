import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const url = useLocation();
  console.log(url.pathname);

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="header-items">
        <img
          className="vip-life-coach-logo"
          src="/images/VIPLifeCoachLogoCropped.jpg"
        />
        <section className="header-links">
          {url.pathname === "/about-us" ? (
            <Link className="header-link-active-page" to="/about-us">
              US
            </Link>
          ) : (
            <Link className="header-link" to="/about-us">
              US
            </Link>
          )}

          {url.pathname === "/client" ? (
            <Link className="header-link-active-page" to="/client">
              COACHING
            </Link>
          ) : (
            <Link className="header-link" to="/client">
              COACHING
            </Link>
          )}

          {url.pathname === "/coaching-areas" ? (
            <Link className="header-link-active-page" to="/coaching-areas">
              AREAS
            </Link>
          ) : (
            <Link className="header-link" to="/coaching-areas">
              AREAS
            </Link>
          )}

          {url.pathname === "/location" ? (
            <Link className="header-link-active-page" to="/location">
              LOCATION
            </Link>
          ) : (
            <Link className="header-link" to="/location">
              LOCATION
            </Link>
          )}

          {url.pathname === "/fees-and-pricing" ? (
            <Link className="header-link-active-page" to="/fees-and-pricing">
              FEES AND PRICING
            </Link>
          ) : (
            <Link className="header-link" to="/fees-and-pricing">
              FEES AND PRICING
            </Link>
          )}

          {url.pathname === "/testimonials" ? (
            <Link className="header-link-active-page" to="/testimonials">
              TESTIMONIALS
            </Link>
          ) : (
            <Link className="header-link" to="/testimonials">
              TESTIMONIALS
            </Link>
          )}

          {url.pathname === "/contact" ? (
            <Link className="header-link-active-page" to="/contact">
              CONTACT
            </Link>
          ) : (
            <Link className="header-link" to="/contact">
              CONTACT
            </Link>
          )}
        </section>
        <img
          onClick={toggleMenu}
          className="header-menu-icon"
          src="images/menu.svg"
        />
      </header>
      <div className="mobile">
        {menu ? (
          <section className="header-links-mobile">
            {url.pathname === "/about-us" ? (
              <Link className="header-link-active-page" to="/about-us">
                US
              </Link>
            ) : (
              <Link className="header-link" to="/about-us">
                US
              </Link>
            )}

            {url.pathname === "/client" ? (
              <Link className="header-link-active-page" to="/client">
                COACHING
              </Link>
            ) : (
              <Link className="header-link" to="/client">
                COACHING
              </Link>
            )}

            {url.pathname === "/coaching-areas" ? (
              <Link className="header-link-active-page" to="/coaching-areas">
                AREAS
              </Link>
            ) : (
              <Link className="header-link" to="/coaching-areas">
                AREAS
              </Link>
            )}

            {url.pathname === "/location" ? (
              <Link className="header-link-active-page" to="/location">
                LOCATION
              </Link>
            ) : (
              <Link className="header-link" to="/location">
                LOCATION
              </Link>
            )}

            {url.pathname === "/fees-and-pricing" ? (
              <Link className="header-link-active-page" to="/fees-and-pricing">
                FEES AND PRICING
              </Link>
            ) : (
              <Link className="header-link" to="/fees-and-pricing">
                FEES AND PRICING
              </Link>
            )}

            {url.pathname === "/testimonials" ? (
              <Link className="header-link-active-page" to="/testimonials">
                TESTIMONIALS
              </Link>
            ) : (
              <Link className="header-link" to="/testimonials">
                TESTIMONIALS
              </Link>
            )}

            {url.pathname === "/contact" ? (
              <Link className="header-link-active-page" to="/contact">
                CONTACT
              </Link>
            ) : (
              <Link className="header-link" to="/contact">
                CONTACT
              </Link>
            )}
          </section>
        ) : null}
      </div>
    </>
  );
};

export default Header;
