import React from "react";
import styled from "styled-components";

export function Button1({ children }) {
  return <ButtonWrap1> {children} </ButtonWrap1>;
}

export function Button3({ children }) {
  return <ButtonWrap2> {children} </ButtonWrap2>;
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
  color: white;
  background-color: var(--pure-black);
  border: none;
  outline: none;
  width: 22rem;
  padding: 1.2rem 2.4rem;
  transition: all 0.3s ease;
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
  color: black;
  background-color: var(--pure-white);
  border: none;
  outline: none;
  width: 22rem;
  padding: 1.2rem 2.4rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #dfdfdf;
    color: black;
  }
`;
