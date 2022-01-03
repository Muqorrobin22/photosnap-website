import React from "react";
import styled from "styled-components";
import images from "../../../assets/home/mobile/beautiful-stories.jpg";
import images2 from "../../../assets/home/mobile/designed-for-everyone.jpg";
import imagesTablet from "../../../assets/home/tablet/beautiful-stories.jpg";
import images2Tablet from "../../../assets/home/tablet/designed-for-everyone.jpg";
import imagesDesktop from "../../../assets/home/desktop/beautiful-stories.jpg";
import images2Desktop from "../../../assets/home/desktop/designed-for-everyone.jpg";
import { Button2 } from "../../utils/button/Button2";
import ArrowBlack from "../../utils/arrow/ArrowBlack";
import { useMediaQuery } from "react-responsive";
import Zoom from "react-reveal/Zoom";

function Main() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  let ImagesRendering;
  let ImagesRendering2;

  if (isDesktop) {
    ImagesRendering = <img src={imagesDesktop} alt={imagesDesktop} />;
  } else if (isTablet) {
    ImagesRendering = <img src={imagesTablet} alt={imagesTablet} />;
  } else {
    ImagesRendering = <img src={images} alt={images} />;
  }
  if (isDesktop) {
    ImagesRendering2 = <img src={images2Desktop} alt={images2Desktop} />;
  } else if (isTablet) {
    ImagesRendering2 = <img src={images2Tablet} alt={images2Tablet} />;
  } else {
    ImagesRendering2 = <img src={images2} alt={images2} />;
  }
  return (
    <MainWrap>
      <div className="grid1">
        <Zoom>
          <div className="img1">{ImagesRendering}</div>
        </Zoom>
        <div className="info1">
          <Zoom cascade right>
            <h1>BEAUTIFUL STORIES EVERY TIME </h1>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
          </Zoom>
          <Zoom right>
            <div>
              <Button2 to="/stories"> view the stories </Button2>
              <ArrowBlack />
            </div>
          </Zoom>
        </div>
      </div>
      <div className="grid2">
        <Zoom>
          <div className="img2">{ImagesRendering2}</div>
        </Zoom>
        <div className="info2">
          <Zoom cascade left>
            <h1>DESIGNED FOR EVERYONE </h1>
            <p>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
          </Zoom>
          <Zoom>
            <div>
              <Button2 to="/stories"> view the stories </Button2>
              <ArrowBlack />
            </div>
          </Zoom>
        </div>
      </div>
    </MainWrap>
  );
}

const MainWrap = styled.main`
  .img1,
  .img2 {
    img {
      width: 100%;
    }
  }

  .info1,
  .info2 {
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

  @media (min-width: 768px) {
    .grid1 {
      display: grid;
      grid-template-columns: minmax(27.3rem, 83rem) minmax(49.5rem, 61rem);
      .img1 {
        order: 1;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .info1 {
        margin-top: 0;
        order: 2;
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
    .grid2 {
      display: grid;
      grid-template-columns: minmax(49.5rem, 61rem) minmax(27.3rem, 83rem);
      .img2 {
        order: 2;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .info2 {
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
  }

  @media (min-width: 1440px) {
    .grid2 {
      display: grid;
      grid-template-columns: minmax(61rem, 1fr) minmax(83rem, 1fr);

      .img {
        img {
          height: 100%;
        }
      }
    }
  }
`;

export default Main;
