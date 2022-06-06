import React from "react";

import Compny1 from "../../assets/compni1.webp";
import Compny2 from "../../assets/compni2.webp";
import Compny3 from "../../assets/compni3.webp";
import Compny4 from "../../assets/compni4.webp";
import Compny5 from "../../assets/compni5.webp";
import Compny6 from "../../assets/compni6.webp";
import Compny7 from "../../assets/compni7.webp";
import Compny8 from "../../assets/compni2.webp";
import Compny9 from "../../assets/compni9.webp";
import Rate1 from "../../assets/rate1.svg";
import Rate2 from "../../assets/rate2.svg";
import Rate3 from "../../assets/rate3.svg";
import Rate4 from "../../assets/rate4.svg";
import RateGraph from "../../assets/rategraph.svg";

import {
  AboutContainer,
  SponcerContainer,
  SpnceHeading,
  SponcerImages,
  SponcerImage,
  RatedContainer,
  LeftContainer,
  RateHeading,
  RatePara,
  RatedImgs,
  RightContainer,
  RatingGraph,
} from "./style";

interface Props {}

export const About = (props: Props) => {
  return (
    <div>
      <AboutContainer>
        <SponcerContainer>
          <SpnceHeading>TRUSTED BY THESE GREAT COMPANIES :</SpnceHeading>
          <SponcerImages>
            <SponcerImage>
              <img src={Compny1} alt="img" />
            </SponcerImage>
            <SponcerImage>
              <img src={Compny2} alt="img" />
            </SponcerImage>
            <SponcerImage>
              <img src={Compny3} alt="img" />
            </SponcerImage>
            <SponcerImage>
              <img src={Compny4} alt="img" />
            </SponcerImage>
            <SponcerImage>
              <img src={Compny5} alt="img" />
            </SponcerImage>
            <SponcerImage>
              <img src={Compny6} alt="img" />
            </SponcerImage>
            <SponcerImage>
              <img src={Compny7} alt="img" />
            </SponcerImage>
            <SponcerImage>
              <img src={Compny8} alt="img" />
            </SponcerImage>
            <SponcerImage>
              <img src={Compny9} alt="img" />
            </SponcerImage>
          </SponcerImages>
        </SponcerContainer>

        <RatedContainer>
          <LeftContainer>
            <RateHeading>LogRocket rated #1 for session replay</RateHeading>
            <RatePara>
              See why LogRocket users rated us the #1 solution for session
              replay and a leader in product analytics, bug tracking,
              performance monitoring, and more
            </RatePara>
            <RatedImgs>
              <img src={Rate1} alt="" />
              <img src={Rate2} alt="" />
              <img src={Rate3} alt="" />
              <img src={Rate4} alt="" />
            </RatedImgs>
          </LeftContainer>
          <RightContainer>
            <RatingGraph>
              <img src={RateGraph} alt="" />
            </RatingGraph>
          </RightContainer>
        </RatedContainer>
      </AboutContainer>
    </div>
  );
};
