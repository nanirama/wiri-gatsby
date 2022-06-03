import styled from "styled-components"

import {up, down } from "styled-breakpoints"

import Heroback from "../../../assets/images/hero-back.png"
import AppBack from "../../../assets/images/app-back.png"
import WidgetBack from "../../../assets/images/widget-back.png"
import CTABack from "../../../assets/images/cta-back.png"
import PricingBack1 from "../../../assets/images/pricing-back1.png"
import PricingBack2 from "../../../assets/images/pricing-back2.png"


/*** Hero Section Styles ***/

export const HeroSection = styled.div`
padding: 80px 0px 40px 0px;
background: linear-gradient(0deg, #f8faff -25%, #f6f9ff 125%);
border-radius: 20px;

${down("lg")} {
    text-align:center;
    padding:40px 0px;
}
.subtitle{font-size: 15px;line-height:20px;

  ${up("sm")} {
    font-size: 18px;
    line-height: 26px;
  }
  ${up("lg")} {
    font-size: 20px;
    line-height: 29px;
    margin-bottom:20px;
    margin-bottom:40px;
  }
}
.bottom-text {
font-size: 20px;
line-height: 40px;
margin-top: 16px;
    ${down("sm")} {
        font-size: 15px;
        line-height: 26px;
        margin-bottom:0; 
    }   
}
`
export const HeroHeading = styled.h1`
margin-bottom: 40px;
position: relative;
    ${up("xl")} {
        font-size: 80px;
        line-height: 80px;
    }
    ${down("lg")} {
        font-size: 66px;
        line-height: 66px;
    }
    ${down("md")} {
        font-size: 52px;
        line-height: 52px; 
        margin-bottom: 20px;       
    }
    ${down("sm")} {
        font-size:40px;
        line-height:45px;
}

`
export const HeroImage = styled.div`
position: relative;text-align: center;padding-left:30px;
background-image: url(${Heroback});background-repeat: no-repeat;background-size: contain;
${up("xl")} {
    margin-left:20px;
    padding-left:80px;
}
${down("lg")} {
    margin-top:30px;
}
.hero-img {
position: relative;width: 320px;   
    ${down("lg")} {
        width: 253px;
    }   
    ${down("sm")} {
        width:230px;
    }
}
.review-img {
top: 0;left: 60px;width: 85px;-webkit-animation: float 12s ease-in-out infinite;
animation: float 12s ease-in-out infinite;position: absolute;
    ${up("lg")} {
        width: 176px;
    }
    ${down("lg")} {
        width: 125px;
    }   
    ${down("sm")} {
        left:10px;
}
}
.menu-img {
top: calc(40% - 50px);left: 0;transform: translateY(-50%);width: 116px; animation-duration: 13s;    
    ${up("lg")} {
        width: 170px;
    }
    ${down("lg")} {
        width: 120px;
    }    
       
}
.deals-img {
top: 10%;right:0px;width: 168px;animation-duration: 7s;

    ${up("xxl")} {
        right:-50px;
    }
    ${down("lg")} {
        width: 118px;
        right:0;
    }    
    
}
.question-img {
top: 35%;width:186px;right:0;animation-duration: 15s;

${up("xxl")} {
  right: -80px;
}
    ${down("lg")} {
        width: 132px;
    }
    ${down("sm")} {
        right:-15px;
    }
     
}
.qr-img {
position: absolute;bottom: 0px;left: 30px;width: 50px;height: 50px;
    ${up("lg")} {
        width: 90px;
        height: 90px;
    }
    ${down("lg")} {
        width: 70px;
        height: 70px;
    }
    ${down("md")} {
        width: 60px;
        height: 60px;
    }    
}
.float {
  position: absolute;
  animation: float 12s ease-in-out infinite;
}
  @keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  }
`

/*** Wow Clients Styles ***/


export const WowClientsWrapper = styled.div`
padding:45px 0;
// ${down("md")} {
//     margin:0px 0;
// }
`
export const Inner = styled.div`
subtitle{margin-bottom:50px;
    ${down("md")} {
        margin-bottom:20px;
    }
}
`
export const Heading = styled.h2`
margin-bottom: 30px;position:relative;padding-bottom:20px;
&:before{content: "";
position: absolute;
width: 55px;
height: 7px;
border-radius: 4px;
background-color: rgb(68, 120, 219);
bottom: -7px;
left: 0px;
transform: translateX(0px);}
${down("sm")} {
    margin-bottom: 20px;
    padding-bottom:10px;
    &:before{width: 35px;
      height: 4px;}
}
`
export const Benfit = styled.div`
display: flex;
align-items: flex-start;
margin-bottom: 50px;
${down("sm")} {
  margin-bottom: 20px;
}
`
export const Icon = styled.div`
position: relative;
width: 60px;
height: 60px;
box-shadow: 0 11px 32px rgba(50, 69, 101, 0.11);
background-color: #ffffff;
margin-right: 30px;
border-radius: 50%;
flex-shrink: 0;
.gatsby-image-wrapper {
    position: absolute;
    width: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}  
  ${up("sm")} {
    width: 70px;
    height: 70px;
    box-shadow: 0 9px 28px rgba(50, 69, 101, 0.11);
    .gatsby-image-wrapper {
      width: 30px;
    }
  }
  ${up("lg")} {
    width: 83px;
    height: 83px;
    box-shadow: 0 11px 34px rgba(50, 69, 101, 0.11);
    .gatsby-image-wrapper {
      width: 34px;
    }
  }
  ${up("xl")} {
    width: 92px;
    height: 92px;
    box-shadow: 0 13px 39px rgba(50, 69, 101, 0.11);
    .gatsby-image-wrapper {
      width: 37px;
    }
  }
  ${up("xxl")} {
    width: 100px;
    height: 100px;
    box-shadow: 0 18px 54px rgba(50, 69, 101, 0.11);
    .gatsby-image-wrapper {
      width: 41px;
    }
  }
`
export const Content = styled.p`
padding:0;margin:0;
letter-spacing: -0.21px;
font-family: 'GelionLight';
font-size: 13px;
line-height: 19px;
letter-spacing: -0.22px;
color: #636363;
  ${up("sm")} {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.21px;
  }  
  ${up("lg")} {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.24px;
  }
  ${up("xl")} {
    font-size: 20px;
    line-height: 27px;
    letter-spacing: -0.24px;
  }
  ${up("xxl")} {
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.21px;
  }
`

/*** App Screenshots Styles ***/


export const AppSection = styled.div`
position:relative;
margin:40px 0;
`
export const Wrapper = styled.div`
position: relative;
padding: 50px 0px 0px 0;
z-index: 1;
  &:before{
    content: "";
    position: absolute;
    top: 0;left: 0;
    width:100%;height:500px;
    border-radius: 20px;
    background-color: #f0fbf8;z-index: -1;
    ${up("sm")} {
      border-radius: 36px;
      height:550px;
    }
    ${up("md")} {
      border-radius: 40px;
      height:580px;
    } 
    ${up("lg")} {
      height:600px;
    }
    ${up("xl")} {
      height:680px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;right: 0;
    width: 90px;height: 104px;
    background-image: url(${AppBack});
    background-repeat: no-repeat;background-size: contain;
    z-index: -1;
    ${up("sm")} {
      width: 187px;
      height: 214px;
    }
    ${up("md")} {
      width: 202px;
      height: 180px;
    }
    ${up("lg")} {
      width: 243px;
      height: 215px;
    }
    ${up("xl")} {
      width: 290px;
      height: 258px;
    }
    ${up("xxl")} {
      width: 360px;
      height: 320px;
    }
  }
  ${up("sm")} {
    padding-top:80px 0;
    border-radius: 36px;
  }

  ${up("lg")} {
    padding-top: 103px;
  }
  ${up("xl")} {
    padding-top: 122px;
  }
  ${up("xxl")} {
    padding-top: 156px;
  }
`
export const TopText = styled.div`
text-align:center;
h2{
    &:before{right:0;margin:0 auto;}
}
`
export const AppImages = styled.div`
margin-top:50px;
${down("lg")} {
  text-align:center;
}
`

export const AppSlider = styled.div`
.app-arrows{ display:block;}
`

export const AppSlide = styled.div`
.gatsby-image-wrapper{
box-shadow: 0 12px 43px rgba(83, 96, 129, 0.17);
  margin: 0 10px;
  margin-bottom: 45px;

  ${up("sm")} {
    box-shadow: 0 20px 73px rgba(83, 96, 129, 0.17);
  }
  ${up("md")} {
    box-shadow: 0 10px 38px rgba(83, 96, 129, 0.17);
  }
  ${up("lg")} {
    box-shadow: 0 13px 46px rgba(83, 96, 129, 0.17);
  }
  ${up("xl")} {
    box-shadow: 0 15px 53px rgba(83, 96, 129, 0.17);
  }
  ${up("xxl")} {
    box-shadow: 0 20px 73px rgba(83, 96, 129, 0.17);
    margin-bottom: 80px;

  }
}
${down("lg")} {
margin-bottom:30px;
}
`

/*** Website Widget Section Styles ***/


export const WidgetSection = styled.div`
${up("lg")} {
  .row-reverse{flex-direction:row-reverse;
    .widget-name{margin-left:0em;margin-right:10px }
  }
  padding:70px 0;
}
${down("md")} {
  padding:30px 0;
}
}
`
export const WidgetImg = styled.div`
background-image: url(${WidgetBack});
background-repeat: no-repeat;
background-size: contain;
text-align: center;

${down("xl")} {
  .gatsby-image-wrapper{width:275px;}
}
${down("lg")} {
  margin:30px 0;
  background-position: center;
  .gatsby-image-wrapper{width:94%;}
}
${down("md")} {
  .gatsby-image-wrapper{width:100%;}
}
`
export const Title = styled.h2`
text-align: center;
margin-bottom:50px;
  .blue-line {
    &::before {
      width: 63%;
    }
  }
  ${down("md")} {
    margin-bottom:30px;
  }
`
export const WidgetItem = styled.li`
display: flex;
align-items: center;
margin-bottom: 45px;
cursor: pointer;
.widget-name {
  font-family: 'GelionMedium';
  color: ${props => (props.active ? "#4478db" : "#303030")};
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -1.02px;
  white-space: pre-line;
  margin-left:10px;
  margin-bottom:0;
  padding:0;
  ${up("sm")} {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.74px;
  }
  ${up("md")} {
    font-size: 19px;
    line-height: 30px;
  }
  ${up("lg")} {
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.84px;
  }
  ${up("xl")} {
    font-size: 22px;
    line-height: 27px;
    letter-spacing: -0.77px;
  }
  ${up("xxl")} {
    font-size: 25px;
    line-height: 30px;
    letter-spacing: -0.78px;
  }
}
${down("md")} {
  margin-top:20px;
  margin-bottom:30px;
}

.widget-img{
    position: relative;
    width: 55px;
    height: 55px;
    box-shadow: 0 11px 32px rgba(50, 69, 101, 0.11);
    background: ${props => (props.active ? "#4478db" : "#ffffff")};
    border-radius: 50%;
    flex-shrink: 0;
    svg * {
      fill: ${props => (props.active ? "#ffffff" : "")};
      filter:${props => (props.active ? "invert(0) sepia(0) saturate(1) hue-rotate(0deg) brightness(5)" : "")};
    }
    img,
    svg {
      position: absolute;
      width: 28px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ${up("sm")} {
      width: 70px;
      height: 70px;
      box-shadow: 0 9px 28px rgba(50, 69, 101, 0.11);      
    }
    
    ${up("lg")} {
      box-shadow: 0 11px 34px rgba(50, 69, 101, 0.11);
      img,
      svg {
        width: 36px;
      }
    }
    ${up("xl")} {
      width: 80px;
      height: 80px;
      box-shadow: 0 13px 39px rgba(50, 69, 101, 0.11);
      img,
      svg {
        width: 43px;
      }
    }
    ${up("xxl")} {
      width: 90px;
      height: 90px;
      box-shadow: 0 18px 54px rgba(50, 69, 101, 0.11);
      img,
      svg {
        width: 46px;
      }
    }  
}
&:hover{
  .widget-name {color:#4478db;}
  .widget-img{background: #4478db;
  svg{fill:#fff;filter:invert(0) sepia(0) saturate(1) hue-rotate(0deg) brightness(5);}
  }
}
`
export const WidgetSlide = styled.div`
  max-width: 200px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.09);
  margin:0 20px;
`
export const DesktopWidget = styled.div`
${down("md")} {
  display:none;
}
`
export const MobileWidget = styled.div`
${up("md")} {
  display:none;
}
`

/*** Call to action Section Styles ***/



export const CallSection = styled.div`
position: relative;
margin: 100px 0;
padding: 90px 25px;
background: linear-gradient(0deg, #f7f9ff -25%, #f0f4ff 125%);
border-radius: 60px;
text-align: center;
z-index: 0;
&::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 391px;
  height: 351px;
  background-image: url(${CTABack});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
  ${down("md")} {
    width: 104px;
    height: 90px;
  }
}
${down("md")} {
  margin: 50px 0;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;
}
${down("lg")} {
margin:30px 0 60px 0;
}
h2{
  &:before{right:0;margin:0 auto;}
}

`

/*** Dashboard Screenshots Section Styles ***/


export const DashboardSection = styled.div`
text-align:center;
padding:60px 0;
h2{
  &:before{right:0;margin:0 auto;}
}
${down("lg")} {
  padding:30px 0 60px 0;
}


`
export const SlickArrows = styled.div`
position: relative !important;
display: flex !important;
bottom: 0 !important;
justify-content: space-around;
margin-top: 35px !important;
text-align: center;
button {
  border: none;
  background-color: unset;
  padding: 0 20px;cursor:pointer;
  svg {
    &:hover {
      g {
        path {
          fill: #4478db;
          transition: all ease-in-out 0.2s;
        }
      }
    }
    ${down("sm")} {
      width: 11px;
      height: 17px;
    }
  }
}
`
export const RuleSlide = styled.div`
background-color: white;
`
export const RuleItem = styled.div`
display: flex;
align-items: center;
p {
  color: #5f5f5f;
  font-size: 25px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: -0.75px;
  padding:0;margin:0 0 0 10px; 
}
${down("lg")} {
  img, svg{
  width: 30px;
  height: 30px;
  }
}
${down("md")} {
p{display:block; font-size: 14px;}
  img, svg {
    width: 40px;
    height: 40px;
  }
}
`
export const RuleList = styled.ul`
display: flex;
align-items: center;
li {
  width: auto !important;
  height: auto !important;
  margin: 0 1.5vw !important;
  flex-shrink: 0;
  ${down("md")} {
    margin: 0 20px !important;
  }
  p {
    ${down("lg")} {
      font-size:15px;display:block;
      line-height:30px;
      
   
    }
  }
  &.slick-active {
    position: relative;
    padding: 20px 40px;
    background-color: #4478db;
    border-radius: 10px;
    ${down("lg")} {
      padding: 20px 30px;
    }
    ${down("md")} {
      padding: 15px 20px;
    }    
    &::before {
      content: "";
      position: absolute;
      top: -11px;
      left: 50%;
      border-left: 16px solid transparent;
      border-right: 16px solid transparent;
      border-bottom: 11px solid #4478db;
      transform: translateX(-50%);
    }
    p {
      color: white;
      }
    }
    ${down("sm")} {
      padding: 12px 20px;
      border-radius: 5px;
      &::before {
        top: -8px;
        border-left: 9.5px solid transparent;
        border-right: 9.5px solid transparent;
        border-bottom: 8px solid #4478db;
      }      
    }
  }
 `

/*** Pricing Section Styles ***/


export const PricingSection = styled.div`
position: relative;
margin: 100px 0;
padding-top: 100px;
padding-bottom: 0px;
z-index: 0;
${down("lg")} {
  margin:60px 0 30px 0;
  padding: 60px 0px 0 0;  
}
&:before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height:700px;
  background-color: #f0fbf8;
  border-radius: 60px;
  z-index:-1;
}
&::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 351px;
  height: 320px;
  background-image: url(${PricingBack1});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
  ${down("md")} {
    width: 75px;
    height: 65px;
  }
}
`
export const Plan = styled.div`
position: relative;
display: flex;
width: max-content;
margin:35px auto 50px auto;
padding: 5px;
align-items: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 17px 43px rgba(44, 57, 79, 0.05);
${down("md")} {
  border-radius: 3px;
  margin:10px auto 30px auto;
}
`
export const Button = styled.button`
padding: 7px 30px;
font-family: 'GelionMedium';
color: ${props => (props.active ? "white" : "#303030")};
font-size: 20px;
font-weight: 500;
line-height: 41px;
text-align: center;
text-transform: uppercase;
border: none;
cursor:pointer;
background-color: ${props => (props.active ? "#4478db" : "white")};
.month{ background-color:#4478db;}
&:first-child {
  border-radius: 15px 0 0 15px;
}
&:nth-child(2) {
  border-radius: 0 15px 15px 0;
}
.active{
  border-radius: 15px 0 0 15px;
  background-color:#4478db;
  color:#fff;
}
${down("md")} {
  padding: 5px 15px;
  font-size: 15px;
  line-height: 30px;
  &:first-child {
    border-radius: 7px 0 0 7px;
  }
  &:nth-child(2) {
    border-radius: 0 7px 7px 0;
  }
}
`
export const Tag = styled.div`
position: absolute;
left: calc(100% + 30px);
width: max-content;
padding: 0 10px;
box-shadow: 3px 8px 10px rgba(19, 14, 35, 0.03);
border: 1px solid #e9e9e9;
background-color: #ffffff;
font-family: 'GelionSemibold';
font-size: 21px;
font-weight: 400;
line-height: 41px;
letter-spacing: -0.42px;
color: #303030;
&::after,
&::before {
  content: "";
  display: block;
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
}
&::after {
  border-color: transparent white transparent transparent;
  border-width: 21px;
}
&::before {
  border-color: transparent #e9e9e9 transparent transparent;
  border-width: 22px;
}
${down("md")} {
  font-size: 15px;
  line-height: 38px;
}
${down("sm")} {
  display:none;
  left: calc(100% + 15px);
  font-size: 10px;
  line-height: 19.17px;
  letter-spacing: -0.43px;
  padding: 0 5px;
  &::after {
    border-color: transparent white transparent transparent;
    border-width: 10px;
  }
  &::before {
    border-color: transparent #e9e9e9 transparent transparent;
    border-width: 11px;
  }
}
`
export const PricingSlider = styled.div`
.green{background-color:#08b689;
  p, span, .feature{color:#fff;}
  hr{background-color: white;border-color:#fff;opacity: 0.3;}
  .btn-green{color: #08b689;background-color: #fff;
    &:hover{
      background-color: #4478db;color:#fff;
  }
}

&::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 144px;
  height: 140px;
  background-image: url(${PricingBack2});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
  ${down("md")} {
    width: 84px;
    height: 83px;
  }
}
}
`
export const PricingSlide = styled.div`
position: relative;
padding: 29px 18px;
box-shadow: 0 12px 43px rgba(83, 96, 129, 0.17);
border-radius: 10px;
background-color: ${props => (props.active ? "#08b689" : "white")};
z-index: 0;
${down("lg")} {
  margin-bottom:30px;
}
${up("sm")} {
  padding: 24px 20px;
  border-radius: 20px;
  box-shadow: 0 10px 38px rgba(83, 96, 129, 0.17);
}
${up("lg")} {
  padding: 35px 23px;
  box-shadow: 0 13px 46px rgba(83, 96, 129, 0.17);
}
${up("xxl")} {
  padding: 52px 26px;
}
&::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 144px;
  height: 140px;
  background-image: ${props => (props.active ? `url(${PricingBack2})` : "")};
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
  ${down("md")} {
    width: 84px;
    height: 83px;
  }
}
.price {
  color: ${props => (props.active ? "white" : "#303030")};
  font-size: 70px;
  font-weight: 500;
  line-height: 41px;
  font-size: 40px;
  font-family: 'GelionMedium';
  ${up("sm")} {
    font-size: 50px;
  }    
  ${up("xl")} {
    font-size: 57px;
  }
  ${up("xxl")} {
    font-size: 70px;
  }
}
.per-month {
  font-weight: 400;
  font-size: 20px;
  font-family: 'GelionRegular';
  color: ${props => (props.active ? "white" : "#989898")};     
}
.type {
  color: ${props => (props.active ? "white" : "#4478db")};
  font-size: 18px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0.58px;
  font-family: 'GelionBold';
  ${up("sm")} {
    font-size: 23px;
  }
  ${up("lg")} {
    font-size: 29px;
  }
}
.feature {font-family: 'GelionMedium';
  color: ${props => (props.active ? "white" : "#303030")};
  font-size: 15px;
  font-weight: 500;
  line-height: 35.86px;
  letter-spacing: 0.44px;
  margin-left:10px;
  ${up("sm")} {
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 0.42px;
  }  
  ${up("lg")} {
    font-size: 17px;
    line-height: 45px;
    letter-spacing: 0.48px;
  }
  ${up("xl")} {
    line-height: 49px;
    letter-spacing: 0.44px;
  }
  ${up("xxl")} {
    font-size: 21px;
    line-height: 61px;
    letter-spacing: 0.42px;
  }
}
hr {
  border-width: 1px;
  border-color: ${props => (props.active ? "white" : "black")};
  height: 2px !important;
  background-color: ${props => (props.active ? "white" : "black")};
  opacity: ${props => (props.active ? 0.3 : 0.1)};
  margin:1rem 0;
}
.btn-green {
  font-size: 26px;
  line-height: 41px;
  padding-left: 50px;
  padding-right: 50px;
  ${down("md")} {
    font-size: 22px;
    line-height: 35px;
    padding-left: 40px;
    padding-right:40px;
  }
  ${down("sm")} {
    font-size: 18px;
    line-height: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
}
p{padding:0;margin:0;}

&:hover{
  background:#08b689;
  p, span{color:#fff;}
  .btn-green{ background:#fff;color:#08b689;
  &:hover{
    background:#4478db;color:#fff;
  }
  }
  
}



`

export const Header = styled.div`
`
export const Body = styled.div`

ul li{display:flex;align-items: center;}
`
export const Footer = styled.div`
  margin-top: 40px;
  text-align: center;
`

/*** FAQ Section Styles ***/

export const FaqSection = styled.div`
padding:30px 0 60px 0;
${up("md")} {
  padding:60px 0 100px 0;
}

`
export const FaqContent = styled.div`
${up("lg")} {
  padding-left:30px;
}
`
export const FaqImage = styled.div`
${down("lg")} {
  margin-top:30px;
  text-align:center;
}
`
export const StyledContainer = styled.div`
position: relative;
display: flex;
align-items: center;
flex-direction: column;
padding:0 15px;
margin-top:40px;
.faq {
  width: 100%; 
  .title {
    font-size: 2.5rem;      
    color: var(--desaturated-blue);    
  }
} 
`
export const StyledDropdown = styled.div`
width:98%;
user-select: none;
box-shadow: rgba(48, 48, 48, 0.08) 0px 12px 49px;
border-radius: 10px;
background-color: rgb(255, 255, 255);
padding: 16px 24px;
margin-bottom:15px;
${up("lg")} {
  width:95%;
}
.question {
  position: relative;
  font-size: 25px;font-family: 'GelionBold';
  font-weight:700;line-height:45px;
  color:${(props) => (props.open ? "#08b689" : "#303030")};
  cursor: pointer;padding:0 40px 0 0;
}
.question:hover {
  color: ${(props) =>
  props.open ? "#08b689" : "#303030"};
}
.question::after {
  content: '${(props) => (props.open ? "-" : "+")}';
  position: absolute;
  right:0;top: 0;width:30px;height:30px;
  border-radius: 50%;
  background:${(props) => (props.open ? "#08b689" : "rgba(189, 207, 240, 0.15)")};
  padding: 8px;
  font-size: 28px;font-weight:700;font-family: 'GelionBold';
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(68, 120, 219);
  color:${(props) => (props.open ? "#fff" : "rgb(68, 120, 219)")};  
}
.answer {
  display: ${(props) => (props.open ? "block" : "none")};
  overflow-wrap: break-word;
  color: rgb(64, 64, 64);font-family: 'GelionLight';
  line-height: 25px;font-size:20px;font-weight:300;
  padding:0 40px 0 0;
  margin: 0;
}
`;