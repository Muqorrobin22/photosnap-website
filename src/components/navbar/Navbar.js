import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as Menu } from "../../assets/shared/mobile/menu.svg";
import { ReactComponent as Close } from "../../assets/shared/mobile/close.svg";
import Mobile from "./Mobile";

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

  @media (min-width: 768px) {
    .hidden {
      display: none;
    }
  }
`;

export default Navbar;
