import React from "react";
import styled from "styled-components";
import { Button1, Button3 } from "../button/Button1";

export function CardMobile({ period, price, plan, desc, featured }) {
  return (
    <CardMobileWrap featured={featured}>
      <h1>{plan}</h1>
      <p>{desc}</p>
      <div className="price">
        <h2>{price}.00</h2>
        <h4>{period}</h4>
      </div>
      <div className="btn">
        {featured ? (
          <Button3 to="pricing">Pick Plan</Button3>
        ) : (
          <Button1 to="pricing">Pick Plan</Button1>
        )}
      </div>
    </CardMobileWrap>
  );
}

const CardMobileWrap = styled.div`
  background: ${(props) => (props.featured ? "var(--pure-black)" : "#f5f5f5")};
  padding: 5.6rem 2.2rem;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2.4rem;
  color: ${(props) => (props.featured ? "white" : "black")};
  transition: all 0.3s ease;
  h1 {
    font-family: DM Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    text-transform: capitalize;
  }
  .price {
    h2 {
      font-family: DM Sans;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 4.166666507720947px;
      text-align: center;
      margin: 4rem 0 0 0;
    }
    h4 {
      font-family: DM Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      opacity: 0.6;
      margin-bottom: 4rem;
    }
  }
  p {
    width: 80%;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    opacity: 0.6;
  }

  .btn {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    transform: scale(${(props) => (props.featured ? 1.1 : 1)});
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

export function CardTablet({ period, price, plan, desc, featured }) {
  return (
    <CardTabletWrap featured={featured}>
      <div>
        <h1>{plan}</h1>
        <p>{desc}</p>
        <div className="btn">
          {featured ? (
            <Button3 to="pricing">Pick Plan</Button3>
          ) : (
            <Button1 to="pricing">Pick Plan</Button1>
          )}
        </div>
      </div>

      <div className="price">
        <h2>{price}.00</h2>
        <h4>{period}</h4>
      </div>
    </CardTabletWrap>
  );
}

const CardTabletWrap = styled.div`
  background: ${(props) => (props.featured ? "var(--pure-black)" : "#f5f5f5")};
  padding: 5.6rem 2.2rem;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2.4rem;
  color: ${(props) => (props.featured ? "white" : "black")};
  h1 {
    font-family: DM Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    text-transform: capitalize;
  }
  .price {
    h2 {
      font-family: DM Sans;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 4.166666507720947px;
      text-align: center;
      margin: 4rem 0 0 0;
    }
    h4 {
      font-family: DM Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      opacity: 0.6;
      margin-bottom: 4rem;
    }
  }
  p {
    width: 80%;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    opacity: 0.6;
  }

  .btn {
    display: flex;
    justify-content: center;
  }
`;
