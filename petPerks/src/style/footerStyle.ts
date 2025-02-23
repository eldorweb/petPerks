import styled from "styled-components";
import { NavLink as RouteNavLink } from "react-router";


export const FooterStyle = styled.div`
    font-family: lufga400;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 80px;
    padding-left: 80px;
    padding-top: 84px;
    padding-bottom: 20px;
    flex-direction: column;
    background-color: #FDDAD3;
    padding-left: 100px;
    width: 100%;
    .footerTop{
        display: flex;
        .footerFirst{
            margin-right: 45px;
            margin-bottom: 89px;
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
                    margin-bottom: 6px;
                }
                input{
                    width: 300px;
                    height: 45px;
                    border-radius: 10px;
                    background-color: #FFEDE9;
                    border: none;
                    &::placeholder{
                        padding: 14px 153px 15px 17px;
                        font-size: 14px;
                        color: #000;
                    }
                }
            }
        }
        .footerSecond{
            gap: 10px;
            padding-top: 25px;
            margin-right: 80px;
            img{
                width: 60px;
                height: 60px;
                margin-right: 10px;
            }
            h2{
                color: #000;
                font-family: lufga600;
                font-size: 20px;
                margin-bottom: 40px;
            }
            .second_div{
                display: flex;
                margin-bottom: 10px;
                .wrapper{
                    h3{
                        font-family: lufga500;
                        font-size: 16px;
                        color: #000;
                    }
                    p{
                        color: #000;
                        opacity: 0.6;
                        font-family: lufga400;
                        font-size: 13px;
                    }
                }
            }
        }
        .footerThird:not(:last-child){
            margin-right: 80px;
        }
        .footerThird{
            h2{
                color: #000;
                font-size: 20px;
                font-family: lufga600;
                margin-bottom: 40px;
                margin-top: 20px;
            }
            li{
                color: #000;
                font-size: 15px;
                font-family: lufga400;
                margin-bottom: 14px;
            }
        }
    }
    .footerBottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        padding-top: 20px;
        h3{
            color: #000;
            font-family: lufga400;
            font-size: 15px;
        }
        .bottomDiv{
            display: flex;
            p{
                color: #000;
                font-family: lufga400;
                font-size: 15px;
                margin-right: 24px;
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