import React from "react";
import {
  InegrInfo,
  IntegraionFirst,
  IntegrationSecond,
  IntegrationTird,
  IntigFist,
  IntigSecond,
  IntretImg,
  LeftIntegration,
  LeftSiteIntig,
  MiddleIntig,
  RightIntig,
  RightIntiration,
} from "./style";
import ReactI from "../../assets/Reacticon.webp";
import AngulaI from "../../assets/AngularIcon.webp";
import Redux from "../../assets/ReduxIcon.webp";
import Java from "../../assets/javaicon.webp";
import Embed from "../../assets/embericon.webp";
import VueJs from "../../assets/vuejsicon.webp";
import Sideimg1 from "../../assets/Sideimg1.webp";
import VsIcon from "../../assets/VsIcons.webp";
import Sideimg2 from "../../assets/Sideimg2.webp";
import Selfhost from "../../assets/slfthost.svg";
import Cloud from "../../assets/cloud.svg";
interface Props {}

export const Inegration = (props: Props) => {
  return (
    <div>
      <IntegraionFirst>
        <LeftIntegration>
          <InegrInfo>
            <h1>Works with your stack</h1>
            <p>
              LogRocket works regardless of language or framework, and we
              provide SDKs for specific technologies
            </p>
          </InegrInfo>
          <IntretImg>
            <img src={ReactI} alt="" />
            <img src={AngulaI} alt="" />
            <img src={Redux} alt="" />
            <img src={Java} alt="" />
            <img src={Embed} alt="" />
            <img src={VueJs} alt="" />
          </IntretImg>
        </LeftIntegration>
        <RightIntiration>
          <img src={VsIcon} alt="" />
        </RightIntiration>
      </IntegraionFirst>

      <IntegrationSecond>
        <LeftSiteIntig>
          <img src={Sideimg1} alt="" />
        </LeftSiteIntig>
        <MiddleIntig>
          <h1>Integrates with the tools you already use</h1>
          <p>
            Integrate LogRocket into your tech stack for a comprehensive view of
            your user experience across web and mobile apps
          </p>
          <button>See all Intigrations</button>
        </MiddleIntig>
        <RightIntig>
          <img src={Sideimg2} alt="" />
        </RightIntig>
      </IntegrationSecond>

      <IntegrationTird>
        <IntigFist>
          <div>
            <img src={Selfhost} alt="" />
            <h1>Self-host</h1>
          </div>
          <p>
            Run LogRocket in AWS, GCP, Azure, or your own environment. Setup
            takes 1-2 hours
          </p>
          <button> Learn More</button>
        </IntigFist>
        <IntigSecond>
          <div>
            <img src={Cloud} alt="" />
            <h1>LogRocket Cloud</h1>
          </div>
          <p>
            Use our hosted solution and get set up in seconds Try all features
            free for 14 days and cancel at any time
          </p>
          <button>Get Started Free</button>
        </IntigSecond>
      </IntegrationTird>
    </div>
  );
};
