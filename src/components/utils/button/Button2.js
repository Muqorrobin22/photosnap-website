import React from "react";
import styled from "styled-components";

export function Button2({ children }) {
  return <ButtonWrap1>{children}</ButtonWrap1>;
}

export function Button4({ children }) {
  return <ButtonWrap2>{children}</ButtonWrap2>;
}

const ButtonWrap1 = styled.button`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  letter-spacing: 2px;
  color: #000000;
  width: 18rem;
  border: none;
  text-transform: uppercase;
  outline: none;

  background-color: transparent;
  transition: all 0.2s ease;
  cursor: pointer;

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
  color: white;
  width: 18rem;
  text-transform: uppercase;
  border: none;
  outline: none;

  background-color: transparent;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
