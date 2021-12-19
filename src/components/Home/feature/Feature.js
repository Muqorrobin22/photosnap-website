import React from "react";
import styled from "styled-components";
import FeaturesTemplate from "../../utils/features/FeaturesTemplate";
import { ReactComponent as Svg1 } from "../../../assets/features/desktop/responsive.svg";
import { ReactComponent as Svg2 } from "../../../assets/features/desktop/no-limit.svg";
import { ReactComponent as Svg3 } from "../../../assets/features/desktop/embed.svg";

function Feature() {
  return (
    <FeatureWrap>
      <section>
        <FeaturesTemplate
          svg={<Svg1 />}
          title="100% Responsive"
          text="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />
      </section>
      <section>
        <FeaturesTemplate
          svg={<Svg2 />}
          title="No Photo Upload Limit"
          text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
      </section>
      <section>
        <FeaturesTemplate
          svg={<Svg3 />}
          title="Available to Embed"
          text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
        />
      </section>
    </FeatureWrap>
  );
}

const FeatureWrap = styled.div`
  padding: 8rem 3.2rem;
  section:not(:last-child) {
    margin-bottom: 5.6rem;
  }
`;

export default Feature;
