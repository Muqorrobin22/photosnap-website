import React from "react";
import styled from "styled-components";
import { Button4 } from "../../utils/button/Button2";
import ArrowWhite from "../../utils/arrow/ArrowWhite";

function StoriesTemplate(props) {
  return (
    <StoriesWrap img={props.img}>
      <div className="overlay">
        <h1>{props.title}</h1>
        <p>{props.by}</p>
        <div className="garis"></div>
        <div>
          <Button4 to="/stories"> Read the story </Button4>
          <ArrowWhite />
        </div>
      </div>
    </StoriesWrap>
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
    url(${(props) => (props.img ? props.img : "")}) no-repeat center;

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
`;

export default StoriesTemplate;
