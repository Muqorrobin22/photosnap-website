import React from "react";
import styled from "styled-components";
import ArrowWhite from "../../utils/arrow/ArrowWhite";
import { Button4 } from "../../utils/button/Button2";
import images from "../../../assets/shared/mobile/bg-beta.jpg";
import imagesTablet from "../../../assets/shared/tablet/bg-beta.jpg";
import imagesDesktop from "../../../assets/shared/desktop/bg-beta.jpg";
import { useMediaQuery } from "react-responsive";
import Bounce from "react-reveal/Bounce";

function Beta() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  let ImagesRendering;

  if (isDesktop) {
    ImagesRendering = <img src={imagesDesktop} alt={imagesDesktop} />;
  } else if (isTablet) {
    ImagesRendering = <img src={imagesTablet} alt={imagesTablet} />;
  } else {
    ImagesRendering = <img src={images} alt={images} />;
  }

  return (
    <BetaWrap>
      {ImagesRendering}
      <div className="overlay">
        <Bounce cascade bottom>
          <h1>We’re in beta. Get your invite today!</h1>
        </Bounce>
        <div>
          <Button4 to="/pricing">Get an Invite</Button4>
          <ArrowWhite />
        </div>
      </div>
    </BetaWrap>
  );
}

const BetaWrap = styled.div`
  position: relative;
  margin-bottom: -1rem;
  img {
    width: 100%;
  }
  .overlay {
    position: absolute;
    width: 32rem;
    top: 6.4rem;

    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-family: DM Sans;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 3.3333332538604736px;
      text-align: left;
      color: white;
      text-transform: uppercase;
      margin-bottom: 2.4rem;
    }
    div {
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: 768px) {
    .overlay {
      top: 30%;
      transform: translateY(-50%);
      left: 50%;
      transform: translateX(-50%);
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      width: 88%;
      h1 {
        width: 40rem;
        font-size: 4rem;
      }
    }
  }
  @media (min-width: 1440px) {
    .overlay {
      top: 20%;
      transform: translateY(-50%);
      left: 50%;
      transform: translateX(-50%);
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      width: 88%;
      h1 {
        width: 40rem;
        font-size: 4rem;
      }
    }
  }
`;

export default Beta;
