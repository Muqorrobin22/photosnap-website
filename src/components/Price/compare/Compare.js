import React from "react";
import styled from "styled-components";
import {
  ComparePlanMobile,
  ComparePlanTablet,
} from "../../utils/compare/ComparePlan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Checklist } from "../../../assets/pricing/desktop/check.svg";

export function Compare() {
  return (
    <CompareWrap>
      <h1>Compare</h1>
      <div className="compare">
        <h2>The Features</h2>
      </div>
      <ComparePlanMobile
        title="UNLIMITED STORY POSTING"
        check1={<Checklist />}
        check2={<Checklist />}
        check3={<Checklist />}
      />
      <ComparePlanMobile
        title="UNLIMITED PHOTO UPLOAD"
        check1={<Checklist />}
        check2={<Checklist />}
        check3={<Checklist />}
      />
      <ComparePlanMobile
        title="EMBEDDING CUSTOM CONTENT"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<Checklist />}
        check3={<Checklist />}
      />
      <ComparePlanMobile
        title="CUSTOMIZE METADATA"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<Checklist />}
        check3={<Checklist />}
      />
      <ComparePlanMobile
        title="ADVANCED METRICS"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<Checklist />}
      />
      <ComparePlanMobile
        title="PHOTO DOWNLOADS"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<Checklist />}
      />
      <ComparePlanMobile
        title="SEARCH ENGINE INDEXING"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<Checklist />}
      />
      <ComparePlanMobile
        title="CUSTOM ANALYTICS"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<Checklist />}
      />
    </CompareWrap>
  );
}

const CompareWrap = styled.div`
  width: 80%;
  margin: 6.4rem auto;
  h1 {
    text-align: center;
    text-transform: uppercase;
    margin: 3rem 0;
  }

  .compare {
    h2 {
      text-transform: uppercase;
      text-align: left;
      padding-bottom: 2.3rem;
      border-bottom: 1px solid black;
    }
  }
`;

export function CompareTablet() {
  return (
    <CompareTabletWrap>
      <h1>Compare</h1>
      <div className="compare">
        <h2>The Features</h2>
        <div className="right">
          <h2>Basic</h2>
          <h2>Pro</h2>
          <h2>Business</h2>
        </div>
      </div>
      <ComparePlanTablet
        title="UNLIMITED STORY POSTING"
        check1={<Checklist />}
        check2={<Checklist />}
        check3={<Checklist />}
      />
      <ComparePlanTablet
        title="UNLIMITED PHOTO UPLOAD"
        check1={<Checklist />}
        check2={<Checklist />}
        check3={<Checklist />}
      />
      <ComparePlanTablet
        title="EMBEDDING CUSTOM CONTENT"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<Checklist />}
        check3={<Checklist />}
      />
      <ComparePlanTablet
        title="CUSTOMIZE METADATA"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<Checklist />}
        check3={<Checklist />}
      />
      <ComparePlanTablet
        title="ADVANCED METRICS"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<Checklist />}
      />
      <ComparePlanTablet
        title="PHOTO DOWNLOADS"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<Checklist />}
      />
      <ComparePlanTablet
        title="SEARCH ENGINE INDEXING"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<Checklist />}
      />
      <ComparePlanTablet
        title="CUSTOM ANALYTICS"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<Checklist />}
      />
    </CompareTabletWrap>
  );
}

const CompareTabletWrap = styled.div`
  width: 80%;
  margin: 6.4rem auto;
  h1 {
    text-align: center;
    text-transform: uppercase;
    margin: 3rem 0;
  }

  .compare {
    display: flex;
    justify-content: space-between;
    h2 {
      text-transform: uppercase;
      text-align: left;
      padding-bottom: 2.3rem;
    }

    .right {
      display: flex;
      width: 60%;
      justify-content: space-around;
    }

    border-bottom: 1px solid black;
  }
`;
