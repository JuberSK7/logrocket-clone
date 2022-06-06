import React from "react";

import {
  Nav,
  LogoContainer,
  Logo,
  ListContainer,
  OrderList,
  ListItem,
} from "./style";
import Logroket from "../assets/logroket.svg";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div>
      <Nav>
        <LogoContainer>
          <Logo>
            <img src={Logroket} />
          </Logo>
        </LogoContainer>

        <ListContainer>
          <OrderList>
            <ListItem>Features</ListItem>
            <ListItem>Solutions</ListItem>
            <ListItem>Pricing</ListItem>
            <ListItem>Costumers</ListItem>
            <ListItem>Docs</ListItem>
            <ListItem>Blogs</ListItem>
            <ListItem>Login</ListItem>
            <ListItem>SignUp</ListItem>
            <ListItem>📞(8584)84352312</ListItem>
          </OrderList>
        </ListContainer>
      </Nav>
    </div>
  );
};
