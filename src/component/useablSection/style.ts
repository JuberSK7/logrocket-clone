import styled from "styled-components";


export const ReuseContainer = styled.section`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;`



export const ReuseHeading = styled.h1`
font-size: 32px;
color: #202473;
padding: 48px;
@media screen and (max-width: 780px){
   font-size: 22px;
   padding: 28px;
}`







export const FirstContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: 24px;
border-bottom: 3px solid rgba(32,36,115,.1)!important;
padding: 4rem;


@media screen and (max-width: 780px){
    grid-template-columns: 1fr;
}`

export const LeftDivision = styled.div`
order: 1;
div{
    display: flex;
img{
width: 10%;
margin-right: 12px;
}

h1{
    color: #202473;
    font-size: 24px;
}}

ul{
    li{
        color: #383F4D;
        font-size: 16px;
        line-height: 30px;
    margin-bottom: 20px;
    }
}`

export const RightDivision = styled.div`
order: 2;
img{
    width: 80%;
    border-radius: 12px;
    @media screen and (max-width: 780px){
    width: 100%;
}
}`












export const SecondContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border-bottom: 3px solid rgba(32,36,115,.1)!important;
grid-column-gap: 24px;
padding: 4rem;

@media screen and (max-width: 780px){
    grid-template-columns: 1fr;
}

`
export const LeftDivision1 = styled.div`
order: 2;
div{
    display: flex;
img{
width: 10%;
margin-right: 12px;
}

h1{
    color: #202473;
    font-size: 24px;
}}

ul{
    li{
        color: #383F4D;
        font-size: 16px;
        line-height: 30px;
    margin-bottom: 20px;
    }
}

`

export const RightDivision1 = styled.div`
order: 1;
img{
    width: 80%;
    border-radius: 12px;
    @media screen and (max-width: 780px){
    width: 100%;
}
}
`













export const ThirdContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border-bottom: 3px solid rgba(32,36,115,.1)!important;
grid-column-gap: 24px;
padding: 4rem;

@media screen and (max-width: 780px){
    grid-template-columns: 1fr;
}`

export const LeftDivision2 = styled.div`
order: 1;
div{
    display: flex;
img{
width: 10%;
margin-right: 12px;
}

h1{
    color: #202473;
    font-size: 24px;
 
}}


ul{
li{
    color: #383F4D;
        font-size: 16px;
        line-height: 30px;
    margin-bottom: 20px;
}
}`

export const RightDivision2= styled.div`
order: 2;
img{
    width: 80%;
    border-radius: 12px;
    @media screen and (max-width: 780px){
    width: 100%;
}
}`
