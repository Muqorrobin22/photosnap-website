import React from "react";
import styled from "styled-components";
import { ComparePlanMobile } from "../../utils/compare/ComparePlan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Compare() {
  return (
    <CompareWrap>
      <h1>Compare</h1>
      <div className="compare">
        <h2>The Features</h2>
      </div>
      <ComparePlanMobile
        title="UNLIMITED STORY POSTING"
        check1={<FontAwesomeIcon icon={faCheck} />}
        check2={<FontAwesomeIcon icon={faCheck} />}
        check3={<FontAwesomeIcon icon={faCheck} />}
      />
      <ComparePlanMobile
        title="UNLIMITED PHOTO UPLOAD"
        check1={<FontAwesomeIcon icon={faCheck} />}
        check2={<FontAwesomeIcon icon={faCheck} />}
        check3={<FontAwesomeIcon icon={faCheck} />}
      />
      <ComparePlanMobile
        title="EMBEDDING CUSTOM CONTENT"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faCheck} />}
        check3={<FontAwesomeIcon icon={faCheck} />}
      />
      <ComparePlanMobile
        title="CUSTOMIZE METADATA"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faCheck} />}
        check3={<FontAwesomeIcon icon={faCheck} />}
      />
      <ComparePlanMobile
        title="ADVANCED METRICS"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<FontAwesomeIcon icon={faCheck} />}
      />
      <ComparePlanMobile
        title="PHOTO DOWNLOADS"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<FontAwesomeIcon icon={faCheck} />}
      />
      <ComparePlanMobile
        title="SEARCH ENGINE INDEXING"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<FontAwesomeIcon icon={faCheck} />}
      />
      <ComparePlanMobile
        title="CUSTOM ANALYTICS"
        check1={<FontAwesomeIcon icon={faTimes} />}
        check2={<FontAwesomeIcon icon={faTimes} />}
        check3={<FontAwesomeIcon icon={faCheck} />}
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

export default Compare;
