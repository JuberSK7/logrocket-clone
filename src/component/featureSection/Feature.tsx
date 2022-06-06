import React from "react";
import Featur from "../../assets/feature.webp";

import {
  BotomWraper,
  FeatureContainer,
  ImageWraper,
  SideWraper,
  TopWraper,
} from "./style";

interface Props {}

export const Feature = (props: Props) => {
  return (
    <div>
      <FeatureContainer>
        <ImageWraper>
          <img src={Featur} alt="img" />
        </ImageWraper>

        <SideWraper>
          <TopWraper>
            <h1>Session replay</h1>
            <p>
              Reproduce every issue with pixel-perfect replay across web and
              mobile
            </p>
            <span>Learn More</span>
          </TopWraper>
          <BotomWraper>
            <p>Frontend performance monitoring</p>
            <p>Product analytics</p>
            <p>Error tracking and management</p>
            <p>User experience analytics</p>
            <button>View all Features</button>
          </BotomWraper>
        </SideWraper>
      </FeatureContainer>
    </div>
  );
};
