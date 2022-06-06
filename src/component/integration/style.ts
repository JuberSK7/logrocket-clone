import styled from "styled-components";

export const IntegraionFirst = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
background-color: #1b1d3c;
grid-column-gap: 24px;
padding: 4rem;

@media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
}
`

export const LeftIntegration = styled.div`

`

export const InegrInfo = styled.div`
h1{
    color: #fff;
    font-size: 30px;
}
p{
    color: #fff;
}`


export const IntretImg = styled.div`
gap: 24px;
img{
    height: 100%;
    width: 40px;
   margin-right: 48px;
}`

export const RightIntiration = styled.div`
img{
    width: 100%;
}`



export const IntegrationSecond = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
padding: 4rem;`



export const LeftSiteIntig = styled.div`
img{
    width: 80%;
}`

export const MiddleIntig = styled.div`
display: flex;
 align-items: center;
 flex-direction: column;
padding: 48px;
h1{
    text-align: center;
    color: #202474;
    font-size: 30px;
}
p{
    text-align: center;
    color: #383F4D;
}

button{
   
    background-color: #202473;
color: #fff;
border-radius: 14px;
border: none;
cursor: pointer;
padding: 8px 16px;
}`


export const RightIntig = styled.div`
img{
    width: 80%;
}`



export const IntegrationTird = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
@media screen and (max-width: 780px) {
    grid-template-columns: 1fr; 
}
`



export const IntigFist = styled.div`
padding: 80px;
background-color: #000000;
div{
    display: flex;
    img{
        margin-right: 12px;  
    }
    h1{
        color: #fff;
        font-size: 24px;
}
}
p{
    color: #fff;
}
button{
padding: 6px 12px;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    transition: all .3s ease;
    border: none;
    border-radius: 14px;
    cursor: pointer;
}`



export const IntigSecond = styled.div`
padding: 80px;
background-color: #764abc;
div{
    display: flex;
    img{
        margin-right: 12px;  
    }
    h1{
        color: #fff;
        font-size: 24px;
}
}

p{
    color: #fff;
    
}

button{
    padding: 6px 12px;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    transition: all .3s ease;
    border: none;
    border-radius: 14px;
    cursor: pointer;
}`