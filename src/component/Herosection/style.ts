import styled from "styled-components";

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const Information = styled.div`
  padding: 2rem;
  margin: 1rem;
`;

export const Heading = styled.h1`
  color: #202473;
  font-size: 48px;
  font-weight: 800;
  line-height: 66px;
  margin-bottom: 15px;
`;

export const HeroParagrap = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 36px;
  max-width: 450px;
`;

export const ButtonBlock = styled.div``;

export const Button1 = styled.button`
  align-items: center;
  display: inline-flex;
  font-size: 16px;
  justify-content: center;
  background-color: #fff;
  border-color: #764abc;
  color: black;
  border-radius: 35px;
  line-height: 1.5;
  padding: 0.375rem 2rem;
  cursor: pointer;
  margin-right: 25px;
  margin-top: 15px;

  &:hover{
      background-color:#764abc ;
      color: #fff;
  }
`;

export const Button2 = styled.button`
  align-items: center;
  display: inline-flex;
  font-size: 16px;
  justify-content: center;
  background-color: #764abc;
  border-color: #764abc;
  color: #fff;
  border: none;
  border-radius: 35px;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const ImageContainer = styled.div`
  background-image: url("https://cdn.sanity.io/images/mr2nzgx7/production/261ddf1ddde75672ce1ebed01127b680bdadf417-1374x873.svg?rect=0,0,1374,872&w=320&h=203&auto=format");
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  height: 100%;
  width: 60vw;


  @media screen and (max-width: 780px) {
  
  

  }
`;
