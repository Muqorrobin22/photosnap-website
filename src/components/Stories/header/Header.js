import React from "react";
import styled from "styled-components";
import images from "../../../assets/stories/mobile/moon-of-appalacia.jpg";
import imagesTablet from "../../../assets/stories/tablet/moon-of-appalacia.jpg";
import imagesDesktop from "../../../assets/stories/desktop/moon-of-appalacia.jpg";
import { Button4 } from "../../utils/button/Button2";
import ArrowWhite from "../../utils/arrow/ArrowWhite";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";

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
        <motion.h6
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -500, opacity: 0 }}
          transition={{ delay: 1 }}
        >
          LAST MONTH’S FEATURED STORY
        </motion.h6>
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -500, opacity: 0 }}
          transition={{ delay: 1 }}
        >
          HAZY FULL MOON OF APPALACHIA{" "}
        </motion.h1>
        <Zoom cascade left>
          <div className="info-2">
            <span>March 2nd 2020</span> &nbsp;
            <span>by John Appleseed</span>
          </div>
        </Zoom>
        <Zoom cascade left>
          <p>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
        </Zoom>
        <Zoom>
          <div>
            <Button4 to="/pricing"> Read the Story </Button4>
            <ArrowWhite />
          </div>
        </Zoom>
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
  .info-2 {
    display: flex;
    color: white;
    text-align: left;
    justify-content: space-between;
    span:first-child {
      font-family: DM Sans;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
      opacity: 0.75;
    }
    span:last-child {
      font-family: DM Sans;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
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
    h6 {
      font-family: DM Sans;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 2px;
      text-align: left;
      color: white;
      margin: 0 0 0 -7rem;
    }
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
    position: relative;

    .info {
      position: absolute;
      top: 10rem;
      left: 0;
      margin: 0;
      background-color: transparent;
      h1,
      h6,
      p {
        width: 38.7rem;
      }
      h6 {
        margin: 0;
      }
      div {
        width: 38.7rem;
        margin-left: 0;
        justify-content: flex-start;
      }
    }
  }
`;

export default Header;
