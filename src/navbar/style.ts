import styled from 'styled-components'

export const Nav = styled.nav`
display:flex;
justify-content: space-between;
align-items: center;

`

export const LogoContainer = styled.div`

margin-left: 24px;

`

export const Logo = styled.div`
cursor: pointer;`

export const ListContainer = styled.div`
margin-right: 4rem;
@media screen and (max-width: 780px){
    display: none;
}
`


export const OrderList = styled.ul`
display: flex;
flex-direction: row;
list-style: none;
gap: 2rem;
`

export const ListItem = styled.li`
font-size: 14px;
background: none; 
color: #383f4d;
padding: 16px 0!important;
cursor: pointer;
`