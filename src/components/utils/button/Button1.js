import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Button1({ children, to }) {
  return (
    <ButtonWrap1>
      <Link to={to}>{children}</Link>
    </ButtonWrap1>
  );
}

export function Button3({ children, to }) {
  return (
    <ButtonWrap2>
      <Link to={to}>{children}</Link>
    </ButtonWrap2>
  );
}

const ButtonWrap1 = styled.button`
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 2px;
  text-align: center;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  background-color: var(--pure-black);
  border: none;
  outline: none;
  width: 22rem;
  padding: 1.2rem 2.4rem;
  transition: all 0.3s ease;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    background-color: #dfdfdf;
    color: black;
  }
`;
const ButtonWrap2 = styled.button`
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 2px;
  text-align: center;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  background-color: var(--pure-white);
  border: none;
  outline: none;
  width: 22rem;
  padding: 1.2rem 2.4rem;
  transition: all 0.3s ease;
  a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    background-color: #dfdfdf;
    color: black;
  }
`;
