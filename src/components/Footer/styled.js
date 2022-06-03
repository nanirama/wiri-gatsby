import styled from "styled-components"

import {up,  down } from "styled-breakpoints"

import  footerback1 from "../../assets/images/footer-back1.png";
import  footerback2 from "../../assets/images/footer-back2.png";

export const Wiri = styled.div`
${down("lg")} {
    text-align: center;margin-bottom: 40px;
}
.logo{width:auto;}
`
export const Socials = styled.div`
display: flex;margin-top: 40px; align-items: center;
${down("lg")} {
    margin-top: 15px;justify-content: center;
}
`
export const Social = styled.a`
display: block; position: relative;width: 55px;height: 55px;flex-shrink: 0; background-color: #fff; 
box-shadow: 0 16px 32px rgba(0, 0, 0, 0.04); border-radius: 50%; margin-right: 10px;
  &:hover {
    background-color:#08b689;
    svg{filter:invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(8)}
  }
  ${down("md")} {
    width: 45px;height: 45px;
  }
  svg {position: absolute;top: 50%; left: 50%;transform: translate(-50%, -50%);height:16px;}
`
export const FooterWrapper = styled.div`
position: relative;padding-top: 100px;background-color: #f6f9ff;border-radius: 60px 60px 0 0;
background-image: linear-gradient(to bottom, #f8faff 0%, #f6f9ff 100%);z-index: 1;
&::before {
    content: ""; position: absolute;top: 0; left: 0;width: 160px; height: 218px; background-image: url(${props => props.Fback1});background-repeat: no-repeat; background-size: contain;  z-index: -1;
}
&::after {
    content: ""; position: absolute; bottom: 0;right: 0;width: 188px; height: 497px;background-image: url(${props => props.Fback2}); background-repeat: no-repeat;background-size: contain;z-index: -1;
    ${down("lg")} {
        display: none;
    }
}
${down("lg")} {
    padding-top:50px;
    .container{ padding:0 15px;width:100%;}
}
${down("sm")} {
    border-radius: 30px 30px 0 0;
    &::before {
        width: 130px; height:130px;
    }
}
`

export const FooterMenus = styled.div`
padding-bottom: 80px; border-bottom: 1px solid rgba(0, 0, 0, 0.1);
${down("md")} { 
    padding-bottom:0px !important;  
}
.footer-link {color: #404040;font-size: 20px;font-weight: 400;line-height: 39px;letter-spacing: 0.2px;
    ${down("sm")} { 
        font-size: 15px;line-height: 30px;
    }
}
.footer-text {color: #404040;font-size: 20px;line-height: 27px;letter-spacing: 0.2px;
    ${down("sm")} {
        font-size: 15px; line-height: 22px;margin-bottom:8px;
    }
} 
${down("md")} {
    padding-bottom: 50px;padding-left: 16px; padding-right: 16px;
}  
h4{
    font-size: 25px;line-height:30px;letter-spacing:-.78px;font-family: 'GelionSemiBold';margin-bottom:10px;
    ${down("md")} {
        font-size: 20px;line-height:25px;
    }
}
ul{ margin:0; padding:0;list-style:none;}
ul li{list-style:none;}
.col-6{width:50%;}
`
export const BottomBar = styled.div`
display: flex;flex-wrap: wrap;padding-top: 60px; padding-bottom: 60px;text-align: center; justify-content: center;
p, a { color: #404040;font-size: 15px;line-height: 20px;
        ${down("sm")} {
    font-size: 12px; margin-bottom:8px;
    }
}
p { padding: 0 20px; border-right: 1px solid #d1d1d1;
    &:last-child {border: none;}
}
${down("md")} {
    padding-top: 20px; padding-bottom: 20px;
    p {
        &:first-child {width: 100%;border-right: none;margin-bottom: 8px;}
    }
}
  `