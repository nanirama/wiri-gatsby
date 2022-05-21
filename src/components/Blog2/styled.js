import styled from "styled-components";

export const Blogitem = styled.div`
margin:30px 10px 5px 10px;  
img{border-radius: 15px 15px 0 0 ;}

&:hover{
    box-shadow: 20px 0px 73px rgba(43, 92, 187, 0.25) ;
    background-color:#ffffff; cursor: pointer;
    border-radius: 15px 15px 15px 15px ; color:#4478db;
h3 {color:#4478db;}
}
 p span {font-size:17px; line-height:35px; color:#868686; margin-bottom:15px;}
`;

export const Blockcontent = styled.div`
background:#fff;
padding:35px 30px 25px 30px;
border-radius: 0px 0px 15px 15px ;
box-shadow: 20px 0px 73px rgba(58, 70, 100, 0.07) ;
h3 {letter-spacing:-1px; line-height:33px;}

`

export const Blogsvg = styled.div`
display:flex;align-items: center;
svg{width:24px;height:24px;fill:#00CC88;margin-left:3px; padding-top:2px; display:flex; align-items:center; justify-content:center;}
a{color:#08b689; font-size:22px;line-height:25px; padding:0;}
`
