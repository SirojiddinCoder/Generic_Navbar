import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const WrapperHeader = styled.div`
width: 100%;
margin-top: 68px;

`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
justify-content: space-between;
max-width: 1231px;

margin: 0 auto;
`

export const Logo = styled('img')`
    
    width: 106px;
    height: 39px;

`
export const LogoWrapper = styled.div`
display: flex;
`
export const LinkGroup = styled.div`
display: flex;
`
export const ItemGroup = styled.div`
display: flex;
`

export const Link = styled(NavLink)`
text-decoration: none;
/* color: #363853; */
font-size: 18px;
font-family: Rubik;
font-weight: 400;
word-wrap: break-word;
margin: 0 40px;
cursor: pointer;
/* '#FF6838' */
/* #363853 */

color: ${({active})=> (active ? '#FF6838' : 'black')};


`