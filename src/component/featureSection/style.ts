import styled from "styled-components";

export const FeatureContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
background-color: #f0f0f0;
padding: 22px;
margin-top: 4rem;
//width: 100%;
height: 100%;

@media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }`


export const ImageWraper = styled.div`
background-color: #fff;
border-radius: 14px;

img{
    height:80%;
    width: 90%;
    padding: 22px;
}
@media screen and (max-width: 780px){
    width: auto;
}`




export const SideWraper = styled.div`
padding: 22px;`


export const TopWraper = styled.div`
padding: 22px;
background-color: #fff;
border-radius: 14px;

h1{
    font-size: 16px;
    color: #202473;
}
p{
    color: #383f4d;
    font-size: 15px;
    line-height: 34px;
}
span{
    color: #764ABC;
    border-bottom: 2px solid #764ABC;
}
`


export const BotomWraper= styled.div`
padding: 22px;

button{
background-color: #764ABC;
color: #fff;
border-radius: 14px;
border: none;
cursor: pointer;
padding: 8px 16px;
}

p{
    color: #202473;
    margin-bottom: 20px;
    font-weight: 400;
}
`