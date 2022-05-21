import styled from "styled-components";

export const Blogitem = styled.div`
height:100%;
margin:30px 10px 5px 10px;  
img{border-radius: 15px 15px 0 0 ; padding:0px;}
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

export const Blockcontent = styled.div`
background:#fff;
padding:20px 20px 0px 20px;
h3 {letter-spacing:-1px; line-height:33px;}

`

export const Blogsvg = styled.div`
display:flex;align-items: center; margin-top:10px;
svg{width:24px;height:24px;fill:#00CC88;margin-left:3px; padding-top:2px; display:flex; align-items:center; justify-content:center;}
a{color:#08b689; font-size:22px;line-height:25px; padding:0;}
`
