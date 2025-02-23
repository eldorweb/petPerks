import styled from 'styled-components'

export const HomeStyle = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%; 
    padding-left: 30px;
    padding-right: 66px;
    padding-top: 40px;
    padding-bottom: 40px;
    .header{
        .forBgimg{
            display: flex;
        }
        .header_left{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin-right: 250px;
            .vertical1{
                display: flex;
                flex-direction: column;
                gap: 30px;
                a{
                    text-decoration: none;
                    color: #000;
                    font-family: lufga400;
                    font-size: 14px;
                    text-transform: uppercase;
                    cursor: pointer;
                    writing-mode: vertical-lr;
                }
            }
            .vertical2{
                cursor: pointer;
                writing-mode: sideways-lr;
                color: #fff;
                font-family: lufga500;
                font-size: 14px;
                text-transform: uppercase;
                padding: 15px 5px;
                border-radius: 6px;
                background-color: #000;
            }
        }
        .header_right{
            display: flex;
            .right_1{
                display: flex;
                flex-direction: column;
                align-items: start;
                margin-top: 100px;
                h1{
                    color: #000;
                    font-family: lufga600;
                    text-transform: capitalize;
                    font-size: 80px;
                    margin-bottom: 20px;
                }
                p{
                    color: #000;
                    font-family: lufga400;
                    font-size: 24px;
                    margin-bottom: 60px;
                    span{
                        color: #E44E70;
                        font-family: lufga400;
                        font-size: 24px;
                    }
                }
                button{
                    background-color: #000;
                    border-radius: 10px;
                    padding: 13px 35px;
                    color: #fff;
                    font-family: lufga500;
                    font-size: 16px;
                    border: none;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 177px;
                }
                .wrapper{
                    display: flex;
                    gap: 30px;
                    .img1{
                        border-radius: 15px;
                        width: 160px;
                        height: 120px;
                        object-fit: cover;
                        object-position: center;
                    }
                    .owners{
                        h3{
                            font-family: lufga500;
                            font-size: 24px;
                            color: #000;
                            text-transform: capitalize;
                            margin-bottom: 13px;
                        }
                        p{
                            color: #000;
                            font-family: lufga400;
                            font-size: 14px;
                            display: flex;
                            align-items: center;
                            span{
                                font-family: lufga400;
                                font-size: 14px;
                                color: rgba(0, 0, 0, 0.70);
                            }
                            img{
                                width: 18px;
                                height: 18px;
                                margin-right: 7px;
                                margin-top: -3px;
                            }
                        }
                        .users{
                            display: flex;
                            margin-top: -50px;
                            img{
                                border-radius: 50%;
                                width: 45px;
                                height: 45px;
                                object-fit: cover;
                                object-position: center;
                                border: 3px solid #FFEDE9;
                                margin-left: -15px;
                            }
                            div{
                                border-radius: 50%;
                                width: 45px;
                                height: 45px;
                                border: 3px solid #FFEDE9;
                                margin-left: -15px;
                                background-color: #000;
                                color: #fff;
                                font-family: lufga600;
                                font-size: 13px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                transform: translate(-50% -50%);
                            }
                        }
                    }
                }
            }
            .right_2{
                margin-left: 30px;
                height: 100%;
                margin-top: 50px;
            }
        }
    }
`

export const CategoryStyle = styled.div`
display: flex;
flex-direction: column;
background: #FFFBFA;
padding:100px 300px;

h2{
color: #000;
font-family: Lufga600;
font-size: 40px;
line-height: 35px;
text-transform: capitalize;
margin-bottom: 36px;
}
.carousel{
    display: flex;
    align-items: center;
    gap: 30px;
    .d1{
        background: #FFDDD6;
    }
    .d2{
        background: #FFE7C2;
    }
    .d3{
        background: #D8F3E5;
    }
    .d4{
        background: #DEF7FF;
    }
    .d5{
        background: #EFE9FF;
    }
    div{
        width: 234px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 15px 15px 0px 15px;
        height: 200px;
        p{
            color: #000;
            text-align: center;
            font-family: Lufga500;
            font-size: 20px;
            line-height: 35px;
            text-transform: capitalize;
        }
        img{
            width: 200px;
            height: 170px;
        }
    }
}
`