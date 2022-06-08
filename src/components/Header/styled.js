import styled from "styled-components"

import {up,  down } from "styled-breakpoints"

import MenuArrow from "../../assets/images/menu-arrow.png"

export const Navbar = styled.div`
flex-wrap: nowrap;padding: 25px 0px;background-color: #fff;

${down("md")} {
    .language-single{width: 18px !important; height: 18px !important;}
    svg.css-tj5bde-Svg{width: 14px !important; height: 14px !important;}
}

${down("md")} {
    padding:15px 0px;
   
}

${down("lg")} {
.container{ width:100%;padding:0 15px;}
}
.btn-green {
font-size: 20px;font-family: 'GelionMedium';line-height: 23px;padding-left: 30px;padding-right: 30px;display:inline-block; 
}

.language-single {
    height: 28px;width: 28px;      
}
.language-option {
    height: 20px;width: 20px;margin-right: 14px;           
}
`
export const LogoandLinks = styled.div`
display:flex;justify-content: space-between;align-items: center;
.logo img {
height: 45px;width: auto;z-index: 60;
    ${down("sm")} {
        width: 100px; height: 35px;z-index: 60;
    }
}
`
export const Nav = styled.div`
flex-direction: row;align-items: center;margin-left: auto;
`
export const StyledBurger = styled.div`
width:35px;height:35px;background-color:#08b689;border-radius:50%;position: fixed;top:15px;right: 15px;z-index: 999;display: none;cursor: pointer;
${down("md")} {
  display: flex; justify-content: space-evenly; flex-flow: column nowrap;align-items: center;
}
div {
  width: 1rem;height:3px;background-color: ${({ open }) => open ? '#fff' : '#fff'};border-radius: 0px;transform-origin: 1px;transition: all 0.3s linear;position:absolute;right: 0;

  margin: 0 auto;
  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    top:${({ open }) => open ? '11px' : '8px'};
    left:${({ open }) => open ? '4px' : '0px'};
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
    top:${({ open }) => open ? '0px' : '15px'};
    left:${({ open }) => open ? '0px' : '0px'};
  }
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    top:${({ open }) => open ? '21px' : '22px'};
    left:${({ open }) => open ? '4px' : '0px'};
  }
}
`
export const Ul = styled.ul`
list-style: none;display: flex;flex-flow: row nowrap;align-items:center;margin:0;
${down("md")} {
  flex-flow: column nowrap;background-color: #fff; position: fixed;  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0; right: 0; height: 100vh; width: 100%; padding-top: 7rem;transition: transform 0.3s ease-in-out; z-index:50;
  display: flex;justify-content: start; align-items: start;
}
& > li{ list-style:none;float:left;
    ${down("md")} {
        margin-bottom:30px;
    }
    
}
& > li > a{	font-family: 'GelionMedium';margin:0 24px;color: #303030;font-size: 20px;font-weight: 400;line-height: 26px;position:relative; padding-bottom:8px;
   &:hover:before, &.active:before{
    content:'';position:absolute;bottom:0;left:0;width:100%;height:4px;border-radius:32px;background-color:#4478db;
}
    ${down("md")} {
        padding:13px 0px;
        // &:after{
        //     content:'';position:absolute;top:0;right:0;width:12px;height:45px; background-image:url(${MenuArrow});background-position:top 17px center;background-repeat:no-repeat;
        // }
    }
    &:hover, &.active{
        color:#4478db;
    }

   
}
`
export const LangSwitcher = styled.div`
padding-left: 24px;padding-right: 48px;flex-shrink: 0;z-index:60;
${down("md")} {
    margin-left: auto;padding-left: 12px;padding-right: 50px;
}
`
export const DesktopBtn = styled.div`
${down("md")} {
    display:none;
}
`

export const MobileBtn = styled.div`
display: flex;justify-content: center;align-items: center;width: 100%;margin-top:20px;
${up("md")} {
    display:none;
}
`