import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Mobile() {
  return (
    <MenuWrap>
      <ul>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
      <div className="garis"></div>
      <div>Button</div>
    </MenuWrap>
  );
}

const MenuWrap = styled.div`
  position: absolute;
  width: 80%;
  height: 25.3rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--pure-white);
  top: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  animation: slideIn 0.2s ease-in forwards;
  ul {
    padding: 0;
    li {
      list-style: none;
      padding-top: 2rem;
      a {
        text-decoration: none;
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        color: black;
      }
    }
  }
  .garis {
    height: 1px;
    width: 31rem;
    background-color: black;
    opacity: 0.25;
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      left: 0;
    }
    to {
      opacity: 1;

      left: 50%;
    }
  }

  @media (min-width: 768px) {
    & {
      display: none;
      visibility: hidden;
    }
  }
`;

export default Mobile;
