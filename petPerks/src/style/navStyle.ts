import styled from "styled-components";
import { NavLink as RouteNavLink } from "react-router";

export const NavStyle = styled.div`
    background-color: #fff;
    width: 100vw;
    font-family: lufga600;
    font-size: 20px;
    display: flex;
    .logo_div{
        display: flex;
        align-items: center;
        gap: 10px;
    }
`

export const NavLink = styled(RouteNavLink)`
text-decoration: none;
font-family: lufga400;
font-size: 16px;
color: #24262B;
cursor: pointer;
display: flex;
gap: 5px;
align-items: center;
&.active{
    color: #000;
}
&.active svg path{
    fill: red;
}
` 