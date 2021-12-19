import React from "react";
import styled from "styled-components";
import images from "../../../assets/home/mobile/beautiful-stories.jpg";
import images2 from "../../../assets/home/mobile/designed-for-everyone.jpg";
import { Button2 } from "../../utils/button/Button2";
import ArrowBlack from "../../utils/arrow/ArrowBlack";

function Main() {
  return (
    <MainWrap>
      <div className="img">
        <img src={images} alt={images} />
      </div>
      <div className="info">
        <h1>BEAUTIFUL STORIES EVERY TIME </h1>
        <p>
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>
        <div>
          <Button2> view the stories </Button2>
          <ArrowBlack />
        </div>
      </div>
      <div className="img">
        <img src={images2} alt={images2} />
      </div>
      <div className="info">
        <h1>DESIGNED FOR EVERYONE </h1>
        <p>
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>
        <div>
          <Button2> view the stories </Button2>
          <ArrowBlack />
        </div>
      </div>
    </MainWrap>
  );
}

const MainWrap = styled.main`
  .img {
    img {
      width: 100%;
    }
  }

  .info {
    height: 48rem;
    margin-top: -3rem;
    background-color: var(--pure-white);
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
      color: var(--pure-black);
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
      color: var(--pure-black);
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

export default Main;
