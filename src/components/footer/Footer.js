import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as Instagram } from "../../assets/shared/desktop/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/shared/desktop/twitter.svg";
import { ReactComponent as Fb } from "../../assets/shared/desktop/facebook.svg";
import { Button4 } from "../utils/button/Button2";
import ArrowWhite from "../utils/arrow/ArrowWhite";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterWrap>
      <Logo fill="white" />
      <div className="social">
        <Instagram />
        <Twitter />
        <Fb />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
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
      <div className="button">
        <Button4> Get an Invite </Button4>
        <ArrowWhite />
      </div>
      <p>
        Copyright 2019 <a href="http://">&copy;Muqorrobin</a>. All Rights
        Reserved
      </p>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  padding: 5.6rem 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--pure-black);
  .social {
    display: flex;
    margin-top: 3.2rem;
    width: 15rem;
    justify-content: space-around;
    align-items: center;
  }
  ul {
    padding: 5rem 0 12rem 0;
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
        color: white;
      }
    }
  }
  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.4rem;
  }
  p {
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    color: white;
    opacity: 0.5;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export default Footer;
