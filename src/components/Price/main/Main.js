import React, { useState } from "react";
import { CardMobile } from "../../utils/card/Card";
import Switch from "@mui/material/Switch";
import styled from "styled-components";

function Main() {
  const [onState, SetOn] = useState(false);

  const setOnHandler = () => {
    SetOn((prevState) => !prevState);
  };

  return (
    <div>
      <ToggleSwitch>
        <h4 className={!onState ? "onState" : ""}>Monthly</h4>
        <Switch
          checked={onState}
          onChange={setOnHandler}
          inputProps={{ "aria-label": "controlled" }}
        />
        <h4 className={onState ? "onState" : ""}>Yearly</h4>
      </ToggleSwitch>
      <CardMobile
        price={!onState ? 19 : 19 * 10}
        period={!onState ? "per month" : "per year"}
        desc="Includes basic usage of our platform. Recommended for new and aspiring
        photographers."
        plan="basic"
      />
      <CardMobile
        price={!onState ? 39 : 39 * 10}
        period={!onState ? "per month" : "per year"}
        desc="More advanced features available. Recommended for photography veterans and professionals."
        plan="pro"
        featured
      />
      <CardMobile
        price={!onState ? 99 : 99 * 10}
        period={!onState ? "per month" : "per year"}
        desc="Additional features available such as more detailed metrics. Recommended for business owners."
        plan="business"
      />
    </div>
  );
}

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6.4rem 0 4rem 0;
  h4 {
    font-family: DM Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: right;
    opacity: 0.5;
  }

  .onState {
    opacity: 1;
  }
`;

export default Main;
