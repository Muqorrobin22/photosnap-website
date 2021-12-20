import React from "react";
import styled from "styled-components";
import FeaturesTemplate from "../../utils/features/FeaturesTemplate";
import { ReactComponent as Svg1 } from "../../../assets/features/desktop/responsive.svg";
import { ReactComponent as Svg2 } from "../../../assets/features/desktop/no-limit.svg";
import { ReactComponent as Svg3 } from "../../../assets/features/desktop/embed.svg";
import { ReactComponent as Svg4 } from "../../../assets/features/desktop/custom-domain.svg";
import { ReactComponent as Svg5 } from "../../../assets/features/desktop/boost-exposure.svg";
import { ReactComponent as Svg6 } from "../../../assets/features/desktop/drag-drop.svg";

function Main() {
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
      <section>
        <FeaturesTemplate
          svg={<Svg4 />}
          title="Custom Domain"
          text="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! "
        />
      </section>
      <section>
        <FeaturesTemplate
          svg={<Svg5 />}
          title="Boost Your Exposure"
          text="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
        />
      </section>
      <section>
        <FeaturesTemplate
          svg={<Svg6 />}
          title="Drag & Drop Image"
          text="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.."
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

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 34rem);
    justify-content: center;
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }
`;

export default Main;
