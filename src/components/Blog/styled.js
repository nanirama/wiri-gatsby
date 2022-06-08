import styled from "styled-components";
import {up, down } from "styled-breakpoints"

import CTABack from "../../assets/images/cta-back.png"
export const FeaturedBlogitem = styled.div`
height:100%;
overflow:hidden;
position:relative;
margin:0px 10px 0px 10px;  
img{border-radius: 15px 15px 0 0 ; padding:0px; z-index:0;}
padding:0px !important;
border-radius: 15px 15px 15px 15px ;
box-shadow: 20px 0px 73px rgba(58, 70, 100, 0.07) ;
&:hover{
    h3 {color:#4478db;}
    box-shadow: 6px 0px 40px rgba(43, 92, 187, 0.25) ;
    background-color:#ffffff; cursor: pointer;
    border-radius: 15px 15px 15px 15px ; color:#4478db;

}
 p { padding-bottom:15px;
 span {font-size:17px; line-height:35px; color:#868686;}

 }
`;

export const Blogitem = styled.div`

overflow:hidden;
position:relative;
margin:0px 10px 0px 10px;  
img{border-radius: 15px 15px 0 0 ; padding:0px; z-index:0;}
padding:0px !important;
border-radius: 15px 15px 15px 15px ;
box-shadow: 20px 0px 73px rgba(58, 70, 100, 0.07) ;
&:hover{
    h3 {color:#4478db;}
    box-shadow: 6px 0px 40px rgba(43, 92, 187, 0.25) ;
    background-color:#ffffff; cursor: pointer;
    border-radius: 15px 15px 15px 15px ; color:#4478db;

}
 p { padding-bottom:15px;
 span {font-size:17px; line-height:35px; color:#868686;}
 }
 ${up("md")} {
    height:100%;
 }
`;

export const Blockcontent = styled.div`
background:#fff;
padding:10px 20px 20px 20px;
h3 {letter-spacing:-.3px; line-height:26px; font-size:23px; padding:3px 0px; margin:3px 0px;}
p.datespan{ line-height:14px; padding:2px 0px; margin:2px 0px; }
p span{ padding:0px; margin:0px; line-height:14px; }
p{ padding:2px 0px; margin:2px 0px;line-height:22px; }

`
export const FeaturedBlockcontentInner = styled.div`
padding:20px;
h3 {letter-spacing:-.3px; line-height:28px; }
p.datespan{ line-height:14px; padding:8px 0px; margin:6px 0px; }
p span{ padding:0px; margin:0px; line-height:14px; }
p{ padding:8px 0px; margin:8px 0px;line-height:22px; }
${up("sm")} {
    padding:30px;
}
`
export const FeaturedBlockcontent = styled.div`
background-color:#f0fbf8;
display:flex;
align-items: center;

${up("md")} {
position:absolute;
width:51%;
top:0px;
right:0px;
height:100%;

}
`
export const Blogsvg = styled.div`
display:flex;align-items: center; margin:6px 0px 0px 0px;
svg{width:22px;height:22px;fill:#00CC88;margin-left:3px; padding-top:2px; display:flex; align-items:center; justify-content:center;}
a{color:#08b689; font-size:20px;line-height:22px; padding:0;}
`
