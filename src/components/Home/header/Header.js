import React from "react";
import styled from "styled-components";
import images from "../../../assets/home/mobile/create-and-share.jpg";
import { Button4 } from "../../utils/button/Button2";
import ArrowWhite from "../../utils/arrow/ArrowWhite";

function Header() {
  return (
    <HeaderWrap>
      <div className="img">
        <img src={images} alt={images} />
      </div>
      <div className="info">
        <h1>Create and share your photo stories. </h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <div>
          <Button4 to="/pricing"> Get an Invite </Button4>
          <ArrowWhite />
        </div>
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  .img {
    img {
      width: 100%;
    }
  }

  .info {
    height: 48rem;
    margin-top: -3rem;
    background-color: var(--pure-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 3.33333px;
      text-transform: uppercase;
      color: white;
      width: 31.8rem;
      text-align: left;
    }
    p {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 25px;
      mix-blend-mode: normal;
      opacity: 0.6;
      color: white;
      text-align: left;
      width: 31.8rem;
      padding: 1.6rem 0 2.3rem 0;
    }
    div {
      display: flex;
      align-items: center;
      margin-left: -10rem;
    }
  }
`;

export default Header;
