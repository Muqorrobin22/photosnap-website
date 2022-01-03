import React from "react";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";

function FeaturesTemplate({ svg, title, text }) {
  return (
    <Bounce>
      <FeatureWrap>
        <div className="gambar">{svg}</div>
        <h3> {title} </h3>
        <p> {text} </p>
      </FeatureWrap>
    </Bounce>
  );
}

const FeatureWrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .gambar {
    padding: 0;
  }
  h3 {
    font-family: DM Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    margin: 4.8rem 0 1.6rem 0;
  }
  p {
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    width: 31rem;
  }
`;

export default FeaturesTemplate;
