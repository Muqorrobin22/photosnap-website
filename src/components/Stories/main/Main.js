import React from "react";
import styled from "styled-components";
import StoriesTemplate from "../../utils/stories/StoriesTemplate";
import mountain from "../../../assets/stories/mobile/mountains.jpg";
import cityScapes from "../../../assets/stories/mobile/cityscapes.jpg";
import days18 from "../../../assets/stories/mobile/18-days-voyage.jpg";
import architect from "../../../assets/stories/mobile/architecturals.jpg";
import worldTour from "../../../assets/stories/mobile/world-tour.jpg";
import unforeseen from "../../../assets/stories/mobile/unforeseen-corners.jpg";
import kingAfrica from "../../../assets/stories/mobile/king-on-africa.jpg";
import trip from "../../../assets/stories/mobile/trip-to-nowhere.jpg";
import rage from "../../../assets/stories/mobile/rage-of-the-sea.jpg";
import running from "../../../assets/stories/mobile/running-free.jpg";
import behind from "../../../assets/stories/mobile/behind-the-waves.jpg";
import calm from "../../../assets/stories/mobile/calm-waters.jpg";
import milky from "../../../assets/stories/mobile/milky-way.jpg";
import dark from "../../../assets/stories/mobile/dark-forest.jpg";
import somwarpet from "../../../assets/stories/mobile/somwarpet.jpg";
import land from "../../../assets/stories/mobile/land-of-dreams.jpg";

function Main() {
  return (
    <Wrap>
      <StoriesTemplate
        date="April 16th 2020"
        img={mountain}
        title="the mountain"
        by="by John Applesed"
      />
      <StoriesTemplate
        date="April 14th 2020"
        img={cityScapes}
        title="Sunset Cityscapes"
        by="by Benjamin Cruz"
      />
      <StoriesTemplate
        date="April 11th 2020"
        img={days18}
        title="18 Days Voyage"
        by="by Alexei Borodin"
      />
      <StoriesTemplate
        date="April 9th 2020"
        img={architect}
        title="Architecturals"
        by="by Samantha Brooke"
      />
      <StoriesTemplate
        date="April 16th 2020"
        img={worldTour}
        title="World Tour 2019"
        by="by Timothy Wagner"
      />
      <StoriesTemplate
        date="April 3rd 2020"
        img={unforeseen}
        title="Unforeseen Corners"
        by="by William Malcolm"
      />
      <StoriesTemplate
        date="March 29th 2020"
        img={kingAfrica}
        title="King on Africa: Part II"
        by="by Tim Hillenburg"
      />
      <StoriesTemplate
        date="March 21st 2020"
        img={trip}
        title="The Trip to Nowhere "
        by="by Felicia Rourke"
      />
      <StoriesTemplate
        date="March 19th 2020"
        img={rage}
        title="Rage of The Sea"
        by="by Mohammed Abdul"
      />
      <StoriesTemplate
        date="March 16th 2020"
        img={running}
        title="Running Free"
        by="by Michelle"
      />
      <StoriesTemplate
        date="March 16th 2020"
        img={behind}
        title="Behind the Waves"
        by="by Lamarr Wilson"
      />
      <StoriesTemplate
        date="March 9th 2020"
        img={calm}
        title="Calm Waters"
        by="by Samantha Brooke"
      />
      <StoriesTemplate
        date="March 5th 2020"
        img={milky}
        title="The Milky Way"
        by="by Benjamin Cruz"
      />
      <StoriesTemplate
        date="March 5th 2020"
        img={dark}
        title="Night at The Dark Forest"
        by="by  Mohammed Abdul"
      />
      <StoriesTemplate
        date="March 1st 2020"
        img={somwarpet}
        title="Somwarpet’s Beauty"
        by="by Michelle"
      />
      <StoriesTemplate
        date="March 1st 2020"
        img={land}
        title="Land of Dreams"
        by="by William Malcolm"
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 39rem);
    justify-content: space-evenly;
    margin-top: -0.3rem;
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Main;
