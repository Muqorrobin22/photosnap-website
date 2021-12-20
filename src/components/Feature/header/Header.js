import React from "react";
import styled from "styled-components";
import images from "../../../assets/features/mobile/hero.jpg";

function Header() {
  return (
    <HeaderWrap>
      <div className="img">
        <img src={images} alt={images} />
      </div>
      <div className="info">
        <h1>FEATURES</h1>
        <p>
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
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
    padding: 5.2rem 2.9rem;
    margin-top: -0.5rem;
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
  }
`;

export default Header;
