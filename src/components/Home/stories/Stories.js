import React from "react";
import StoriesTemplate from "../../utils/stories/StoriesTemplate";
import mountain from "../../../assets/stories/mobile/mountains.jpg";
import cityScapes from "../../../assets/stories/mobile/cityscapes.jpg";
import days18 from "../../../assets/stories/mobile/18-days-voyage.jpg";
import architect from "../../../assets/stories/mobile/architecturals.jpg";
import styled from "styled-components";

function Stories() {
  return (
    <Wrap>
      <StoriesTemplate
        img={mountain}
        title="the mountain"
        by="by John Applesed"
      />
      <StoriesTemplate
        img={cityScapes}
        title="Sunset Cityscapes"
        by="by Benjamin Cruz"
      />
      <StoriesTemplate
        img={days18}
        title="18 Days Voyage"
        by="by Alexei Borodin"
      />
      <StoriesTemplate
        img={architect}
        title="Architecturals"
        by="by Samantha Brooke"
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 39rem);
    justify-content: center;
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Stories;
