import React from "react";
import styled from "styled-components";
import { Button4 } from "../../utils/button/Button2";
import ArrowWhite from "../../utils/arrow/ArrowWhite";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";

function StoriesTemplate(props) {
  return (
    <Bounce>
      <StoriesWrap img={props.img}>
        <div className="overlay">
          <Bounce cascade>{props.date ? <h3>{props.date}</h3> : ""}</Bounce>
          <Bounce cascade left>
            <h1>{props.title}</h1>
            <p>{props.by}</p>
          </Bounce>
          <div className="garis"></div>
          <LightSpeed left>
            <div>
              <Button4 to="/stories"> Read the story </Button4>
              <ArrowWhite />
            </div>
          </LightSpeed>
        </div>
      </StoriesWrap>
    </Bounce>
  );
}

const StoriesWrap = styled.div`
  height: 37.5rem;

  position: relative;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0.27%,
      rgba(0, 0, 0, 0.661222) 100%
    ),
    url(${(props) => (props.img ? props.img : "")}) no-repeat;
  transition: all 0.4s ease;
  background-position: center;
  background-size: cover;
  .overlay {
    position: absolute;
    width: 32rem;
    top: 20rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    h3 {
      font-family: DM Sans;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0px;
      text-align: left;
      color: white;
      margin-bottom: 0.3rem;
    }
    h1 {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 25px;
      text-transform: capitalize;
      color: white;
      margin: 0;
    }

    p {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 17px;
      color: #ffffff;
      margin-bottom: 1.6rem;
      margin-top: 0.4rem;
    }
    .garis {
      height: 1px;
      width: 32rem;
      background-color: #fff;
      opacity: 0.25;
      margin: 1.6rem 0 2rem 0;
    }
    div {
      display: flex;
      justify-content: space-between;
      width: 32rem;
    }
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

export default StoriesTemplate;
