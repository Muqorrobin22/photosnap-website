import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as Menu } from "../../assets/shared/mobile/menu.svg";
import { ReactComponent as Close } from "../../assets/shared/mobile/close.svg";
import Mobile from "./Mobile";
import { NavLink } from "react-router-dom";
import { Button1 } from "../utils/button/Button1";

const isActive = ({ isActive }) => {
  return {
    opacity: isActive ? "0.3" : "",
  };
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <NavWrap>
      <Logo />

      {!isMenuOpen ? (
        <Menu onClick={toggleMenuOpen} className="hidden"></Menu>
      ) : (
        <Close onClick={toggleMenuOpen} className="hidden"></Close>
      )}
      {isMenuOpen &&
        ReactDOM.createPortal(
          <Mobile />,
          document.getElementById("overlay_background")
        )}

      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" style={isActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/stories" style={isActive}>
              Stories
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" style={isActive}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" style={isActive}>
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav">
        <Button1 to="/pricing"> Get An Invite </Button1>
      </div>
    </NavWrap>
  );
}

const NavWrap = styled.nav`
  height: 7.2rem;
  background-color: var(--pure-white);
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  justify-content: space-between;
  z-index: 110;

  .nav {
    display: none;
  }

  @media (min-width: 768px) {
    .hidden {
      display: none;
    }
    .nav {
      display: block;
      ul {
        padding: 0;
        text-align: center;
        display: flex;
        justify-content: space-around;
        li {
          list-style: none;
          padding-left: 1.7rem;
          a {
            text-decoration: none;
            font-family: DM Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 20px;
            text-align: center;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            color: black;
          }
        }
      }
    }
  }
`;

export default Navbar;
