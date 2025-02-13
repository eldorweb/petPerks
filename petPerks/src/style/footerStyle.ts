import styled from "styled-components";
import { NavLink as RouteNavLink } from "react-router";


export const FooterStyle = styled.div`
    font-family: lufga400;
    font-size: 20px;
    display: flex;
    padding-top: 84px;
    padding-bottom: 20px;
    flex-direction: column;
    background-color: #FDDAD3;
    padding-right: 320px;
    padding-left: 320px;
    width: 100%;
    .footerTop{
        display: flex;
        .footerFirst{
            margin-right: 30px;
            .first_address{
                color: #000;
                margin-bottom: 45px;
                line-height: 30px;
                font-size: 15px;
            }
            .first_subscribe{
                p{
                    font-family: lufga500;
                    font-size: 16px;
                    color: #000;
                    text-transform: capitalize;
                }
                input{
                    width: 300px;
                    height: 45px;
                    border-radius: 10px;
                    background-color: #FFEDE9;
                    border: none;
                }
            }
        }
        .footerSecond{
            img{
                width: 60px;
                height: 60px;
            }
        }
    }
`


export const FooterLink = styled(RouteNavLink)`
text-decoration: none;
font-family: Jost;
font-size: 40px;
font-weight: 600;
color: #000;
cursor: pointer;
display: flex;
gap: 10px;
align-items: center;
margin-bottom: 30px;
` 