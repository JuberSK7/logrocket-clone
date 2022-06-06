import React from "react";
import {
  CopyRight,
  Footerbottom,
  FooterContainer,
  FooterItem,
  FooterLeft,
  FooterLink,
  FooterLinkTitle,
  FooterRight,
  Owner,
} from "./style";
import Logo from "../assets/logroket.svg";
interface Props {}

export const Footer = (props: Props) => {
  return (
    <div>
      <FooterContainer>
        <FooterLeft>
          <img src={Logo} alt="" />
          <p>LogRocket</p>
          <p>87 Summer St</p>
          <p>Boston, MA 02110</p>
          <p>Speak with sales: (855) 564-7625</p>
          <button>Status: All System Oprational</button>
        </FooterLeft>
        <FooterRight>
          <FooterItem>
            <FooterLinkTitle>DEVELOPERS</FooterLinkTitle>
            <FooterLink>Github </FooterLink>
            <FooterLink>Documentation </FooterLink>
            <FooterLink>Bug Bounty</FooterLink>
            <FooterLink>Audits</FooterLink>
            <FooterLink>Careers</FooterLink>
          </FooterItem>

          <FooterItem>
            <FooterLinkTitle>DEVELOPERS</FooterLinkTitle>
            <FooterLink>Github </FooterLink>
            <FooterLink>Documentation </FooterLink>
            <FooterLink>Bug Bounty</FooterLink>
            <FooterLink>Audits</FooterLink>
            <FooterLink>Careers</FooterLink>
          </FooterItem>

          <FooterItem>
            <FooterLinkTitle>DEVELOPERS</FooterLinkTitle>
            <FooterLink>Github </FooterLink>
            <FooterLink>Documentation </FooterLink>
            <FooterLink>Bug Bounty</FooterLink>
            <FooterLink>Audits</FooterLink>
            <FooterLink>Careers</FooterLink>
          </FooterItem>
        </FooterRight>
      </FooterContainer>
      <Footerbottom>
        <CopyRight>Copyright ©2022 LogRocket, Inc</CopyRight>
        <Owner>Made with Zubair</Owner>
      </Footerbottom>
    </div>
  );
};
