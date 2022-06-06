import styled from "styled-components";

export const AboutContainer = styled.div`

`


export const SponcerContainer = styled.div`
padding: 2rem;
margin-top: 2rem;


`

export const SpnceHeading = styled.h2`
color: #383f4d;
font-size: 16px;
font-weight: 400;
margin-bottom: 2rem;`


export const SponcerImages = styled.div`
display: grid;
grid-template-columns: auto auto auto auto auto auto auto auto auto;
grid-gap: 12px;

@media screen and (max-width: 780px){
    grid-template-columns: auto auto  ;
   
    padding: 12px;
}
img{
    height: 22px;
}`


export const SponcerImage = styled.div``





export const RatedContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 44px;
margin-top: 4rem;

@media screen and (max-width: 780px){
    grid-template-columns: 1fr ;
}`

export const LeftContainer = styled.div`
padding-left: 22px;
`



export const RateHeading = styled.h2``


export const RatePara = styled.p``


export const RatedImgs = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;

@media screen and (max-width: 780px){
    grid-template-columns: auto auto ;
}

img{
 width: 100%;
  
}

`


export const RightContainer = styled.div``

export const RatingGraph = styled.div`
img{
    width: 100%;
    height: 100%;
}`


