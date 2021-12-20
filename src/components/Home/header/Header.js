import React from "react";
import styled from "styled-components";
import images from "../../../assets/home/mobile/create-and-share.jpg";
import imagesTablet from "../../../assets/home/tablet/create-and-share.jpg";
import imagesDesktop from "../../../assets/home/desktop/create-and-share.jpg";
import { Button4 } from "../../utils/button/Button2";
import ArrowWhite from "../../utils/arrow/ArrowWhite";
import { useMediaQuery } from "react-responsive";

function Header() {
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
    <HeaderWrap>
      <div className="img">{ImagesRendering}</div>
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

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(49.5rem, 61rem) minmax(27.3rem, 83rem);
    .img {
      order: 2;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .info {
      margin-top: 0;
      order: 1;
      height: auto;
      padding: 17.3rem 5.4rem;
      h1 {
        font-size: 4rem;
        width: 38.7rem;
      }
      p {
        font-size: 1.5rem;
        width: 38.7rem;
      }
      div {
        width: 38.7rem;
        margin-left: 0;
      }
    }
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: minmax(61rem, 1fr) minmax(83rem, 1fr);

    .img {
      img {
        height: 100%;
      }
    }
  }
`;

export default Header;
