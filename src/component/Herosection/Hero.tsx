import React from "react";
import {
  HeroContainer,
  Heading,
  HeroParagrap,
  Information,
  ButtonBlock,
  Button1,
  Button2,
  ImageContainer,
} from "./style";
interface Props {}

export const Hero = (props: Props) => {
  return (
    <div>
      <HeroContainer>
        <Information>
          <Heading>Modern Frontend Monitoring and Product Analytics</Heading>
          <HeroParagrap>
            LogRocket combines session replay, performance monitoring, and
            product analytics – empowering software teams to create the ideal
            web and mobile product experience
          </HeroParagrap>
          <ButtonBlock>
            <Button1>Get a Demo</Button1>
            <Button2>Get Started Free</Button2>
          </ButtonBlock>
        </Information>
        <ImageContainer></ImageContainer>
      </HeroContainer>
    </div>
  );
};
