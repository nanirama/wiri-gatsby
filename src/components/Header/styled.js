import styled from "styled-components"

import {up,  down } from "styled-breakpoints"

import MenuArrow from "../../assets/images/menu-arrow.png"


import English from "../../assets/images/united-kingdom.svg"

import Spanish from "../../assets/images/spain.svg"



export const Navbar = styled.div`
flex-wrap: nowrap;padding: 25px 0px;background-color: #fff;height:45px;

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

export const DropDownContainer = styled.div`
position:relative;
padding:0 48px 0 24px;
${down("md")} {
 margin-left: auto;padding-left: 12px;padding-right: 50px;
}

// .flag.english{width:30px;height:30px;float:left;background-image: url('data:image/svg+xml;utf8, <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#f0f0f0" r="256"/><g fill="#0052b4"><path d="m52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178z"/><path d="m503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076z"/><path d="m8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075z"/><path d="m411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177z"/><path d="m100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102v-133.176z"/><path d="m189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075z"/><path d="m322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075z"/><path d="m370.005 322.784 89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z"/></g><g fill="#d80027"><path d="m509.833 222.609h-220.44-.001v-220.442c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461.744-33.391 2.167v220.44.001h-220.442c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319.744 22.461 2.167 33.391h220.44.001v220.442c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-.743 33.391-2.167v-220.44-.001h220.442c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-.744-22.461-2.167-33.391z"/><path d="m322.783 322.784 114.236 114.236c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482z"/><path d="m189.217 322.784h-.002l-114.235 114.235c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804z"/><path d="m189.217 189.219v-.002l-114.236-114.237c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z"/><path d="m322.783 189.219 114.237-114.238c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>');background-repeat:no-repeat ;}
// .flag.spanish{width:30px;height:30px;float:left;background-image: url('data:image/svg+xml;utf8, <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m0 256c0 31.314 5.633 61.31 15.923 89.043l240.077 22.261 240.077-22.261c10.29-27.733 15.923-57.729 15.923-89.043s-5.633-61.31-15.923-89.043l-240.077-22.261-240.077 22.261c-10.29 27.733-15.923 57.729-15.923 89.043z" fill="#ffda44"/><g fill="#d80027"><path d="m496.077 166.957c-36.171-97.484-130.006-166.957-240.077-166.957s-203.906 69.473-240.077 166.957z"/><path d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>');background-repeat:no-repeat ;}


.flag.english{float:left;background-image: url(${English});background-repeat:no-repeat ;}
.flag.spanish{float:left;background-image:url(${Spanish}) ;background-repeat:no-repeat ;}


.flag{width:20px;height:20px; margin-right:10px;}

.flag.active{width:28px;height:28px;margin-right:0;
    ${down("md")} {
        {width:18px;height:18px;}
        
    }
}

`;

export const DropDownHeader = styled.div`
padding: 0 20px 0 0;
position:relative;
cursor:pointer;
&:before{
    content:'';
    position:absolute;
    top:9px;right:0;width:12px;height:12px;
    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>');background-repeat:no-repeat ;
}

${down("md")} {
    padding: 0 14px 0 0;
    &:before{width:8px;height:8px;top:7px;
    background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>');}
}

`;

export const DropDownListContainer = styled.div`
position:absolute;
width:200px;
top:40px;left:0;
cursor:pointer;
z-index:30;
box-shadow: 0 27px 49px rgba(29, 22, 55, 0.36);
border-radius: 10px;
background-color:#fff;
padding-bottom:2px;
`;

export const DropDownList = styled.ul`
margin: 0;
padding:0;
`;
export const ListItem = styled.li`
list-style: none;
padding:12px 20px;
border-bottom: 1px solid rgba(19,19,19,0.1);
width:100%;
font-size: 20px;
line-height:20px;
font-weight: 400;
margin-bottom:5px;
color: #303030;
display:flex;
border-right: 3px solid transparent;
box-sizing: border-box;

&:hover, &:active{font-weight:600;color:#4478db; border-right: 3px solid #4478db;}




`;


