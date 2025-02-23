import styled from "styled-components";
import { NavLink as RouteNavLink } from "react-router";

export const NavStyle = styled.div`
    background-color: #fff;
    width: 100vw;
    font-family: lufga600;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 80px;
    padding-left: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .logo_div{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-right: 65px;
        img{
            width: 41.822px;
            height: 44px;
        }
        h2{
            color: #000;
            font-family: Jost;
            font-size: 30px;
            font-weight: 600;
        }
    }
    .nav_div{
        display: flex;
        gap: 40px;
        margin-right: auto;
    }
    .nav_right{
        display: flex;
        gap: 50px;
        .login_div{
            display: flex;
            gap: 5px;
        }
        .icon_div{
            display: flex;
            gap: 30px;
            svg:hover path{
                fill: red;
                stroke: red;
            }
        }
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
    color: red;
}
&.active svg path{
    fill: red;
}
&:hover{
    color:rgba(255, 0, 0, 0.48);
}
&:hover svg path{
    fill: rgba(255, 0, 0, 0.48);
}

` 