import React from "react";
import StoriesTemplate from "../utils/stories/StoriesTemplate";
import mountain from "../../assets/stories/mobile/mountains.jpg";
import cityScapes from "../../assets/stories/mobile/cityscapes.jpg";
import days18 from "../../assets/stories/mobile/18-days-voyage.jpg";
import architect from "../../assets/stories/mobile/architecturals.jpg";

function Stories() {
  return (
    <div>
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
    </div>
  );
}

export default Stories;
