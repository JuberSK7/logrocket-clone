import React from "react";
import {
  FirstContainer,
  LeftDivision,
  LeftDivision1,
  LeftDivision2,
  ReuseContainer,
  ReuseHeading,
  RightDivision,
  RightDivision1,
  RightDivision2,
  SecondContainer,
  ThirdContainer,
} from "./style";
import HeadingImg from "../../assets/headImg1.svg";
import HeadingImg1 from "../../assets/headImg2.svg";
import HeadingImg2 from "../../assets/headImg3.svg";
import SecImg from "../../assets/sec1.webp";
import SecImg1 from "../../assets/sec2.webp";
import SecImg2 from "../../assets/sec3.webp";
interface Props {}

export const Reuse = (props: Props) => {
  return (
    <div>
      <ReuseContainer>
        <ReuseHeading>Insights for everyone across your team</ReuseHeading>

        <FirstContainer>
          <LeftDivision>
            <div>
              <img src={HeadingImg} alt="" />
              <h1>Stop guessing why bugs happen</h1>
            </div>
            <ul>
              <li>
                Understand every bug and user-reported issue with a
                pixel-perfect video replay
              </li>
              <li>
                See network logs, Javascript errors, and performance telemetry
                for in-depth debugging
              </li>
              <li>Guide your users to a resolution with live co-browse</li>
            </ul>
          </LeftDivision>
          <RightDivision>
            <img src={SecImg} alt="" />
          </RightDivision>
        </FirstContainer>

        <SecondContainer>
          <LeftDivision1>
            <div>
              <img src={HeadingImg1} alt="" />
              <h1>Stop guessing why bugs happen</h1>
            </div>
            <ul>
              <li>
                Understand every bug and user-reported issue with a
                pixel-perfect video replay
              </li>
              <li>
                See network logs, Javascript errors, and performance telemetry
                for in-depth debugging
              </li>
              <li>Guide your users to a resolution with live co-browse</li>
            </ul>
          </LeftDivision1>
          <RightDivision1>
            <img src={SecImg1} alt="" />
          </RightDivision1>
        </SecondContainer>

        <ThirdContainer>
          <LeftDivision2>
            <div>
              <img src={HeadingImg2} alt="" />
              <h1>Stop guessing why bugs happen</h1>
            </div>
            <ul>
              <li>
                Understand every bug and user-reported issue with a
                pixel-perfect video replay
              </li>
              <li>
                See network logs, Javascript errors, and performance telemetry
                for in-depth debugging
              </li>
              <li>Guide your users to a resolution with live co-browse</li>
            </ul>
          </LeftDivision2>
          <RightDivision2>
            <img src={SecImg2} alt="" />
          </RightDivision2>
        </ThirdContainer>
      </ReuseContainer>
    </div>
  );
};
