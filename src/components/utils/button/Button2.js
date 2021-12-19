import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Button2({ children, to }) {
  return (
    <ButtonWrap1>
      <Link to={to}>{children}</Link>
    </ButtonWrap1>
  );
}

export function Button4({ children, to }) {
  return (
    <ButtonWrap2>
      <Link to={to}> {children} </Link>
    </ButtonWrap2>
  );
}

const ButtonWrap1 = styled.button`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  letter-spacing: 2px;
  width: 18rem;
  border: none;
  text-transform: uppercase;
  outline: none;

  background-color: transparent;
  transition: all 0.2s ease;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #000000;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const ButtonWrap2 = styled.button`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  letter-spacing: 2px;
  width: 18rem;
  text-transform: uppercase;
  border: none;
  outline: none;

  background-color: transparent;
  transition: all 0.2s ease;
  cursor: pointer;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    text-decoration: underline;
  }
`;
