import styled from "styled-components";

export const FooterContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

@media screen and (max-width: 780px) {
    grid-template-columns:  1fr;
}
`


export const FooterLeft = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
padding-left: 34px;
padding-top: 44px;

button{
    background-color: #33AAAA;
    color: #fff;
    padding: 12px 18px;
    font-size: 14px;
    border: none;
    margin-bottom: 1rem;

}`

export const FooterRight = styled.div`
display: flex;
justify-content: space-around;
padding-top: 44px;
flex-direction: row;
border-left: 3px solid rgba(32,36,115,.1)!important;

`
export const FooterItem = styled.div`


`
export const FooterLinkTitle = styled.div`
color: #764abc;
font-size: 16px;
margin-bottom: 8px;



`

export const FooterLink = styled.div`
color: #929CB1;
font-size: 12px;
margin-bottom: 8px;

`


export const Footerbottom =  styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
background-color: #e5e5e5;
padding: 2rem 2rem;`

export const CopyRight = styled.div`
color: #202473;
font-size: 13px;`


export const Owner = styled.div`
color: #202473;
font-size: 13px;
`