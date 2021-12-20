import React from "react";
import styled from "styled-components";

export function ComparePlanMobile({ title, check1, check2, check3 }) {
  return (
    <ComparePlanMobileWrap>
      <h2> {title} </h2>
      <div className="compare">
        <h3>Basic</h3>
        <h3>Pro</h3>
        <h3>Business</h3>
      </div>
      <div className="compare_plan">
        <div>{check1}</div>
        <div>{check2}</div>
        <div>{check3}</div>
      </div>
    </ComparePlanMobileWrap>
  );
}

const ComparePlanMobileWrap = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  h2 {
    text-transform: uppercase;
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 2px;
    text-align: left;
  }
  .compare {
    display: flex;
    justify-content: space-around;
    text-align: left;
    h3 {
      font-family: DM Sans;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 13px;
      letter-spacing: 1.6666666269302368px;
      opacity: 0.6;
    }
  }
  .compare_plan {
    display: flex;
    justify-content: space-around;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding-bottom: 2.4rem;
    margin-bottom: 3rem;
  }
`;

export function ComparePlanTablet({ title, check1, check2, check3 }) {
  return (
    <ComparePlanTabletWrap>
      <h2> {title} </h2>

      <div className="compare_plan">
        <div>{check1}</div>
        <div>{check2}</div>
        <div>{check3}</div>
      </div>
    </ComparePlanTabletWrap>
  );
}

const ComparePlanTabletWrap = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    text-transform: uppercase;
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 2px;
    text-align: left;
  }
  .compare_plan {
    display: flex;
    justify-content: space-around;
    text-align: left;
    padding-top: 2.4rem;
    margin-bottom: 3rem;
    width: 60%;
  }

  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
