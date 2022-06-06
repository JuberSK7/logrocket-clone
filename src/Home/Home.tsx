import React from "react";
import { About } from "../component/aboutSection/About";
import { Feature } from "../component/featureSection/Feature";
import { Hero } from "../component/Herosection/Hero";
import { Inegration } from "../component/integration/Inegration";
import { Reuse } from "../component/useablSection/Reuse";

import { HomeContainer } from "./style";

interface Props {}

export const Home = (props: Props) => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Feature />
      <Reuse />
      <Inegration />
    </HomeContainer>
  );
};
