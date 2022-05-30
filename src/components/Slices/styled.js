import styled from "styled-components"
import blackquotebg from "../../images/blog/blackquote-bg.png"
import blackquotebg1 from "../../assets/images/bgimg.png"
import blackquotebg2 from "../../assets/images/bgimg3.png"
import {up, down } from "styled-breakpoints"

export const Blogwrapper = styled.div`
margin-bottom:100px; margin-top:70px;
h1 {text-align:center;
    ${down("lg")} {
        font-size: 60px;line-height: 64px;
    }
    ${down("md")} {
        font-size: 46px;line-height: 50px;
    }
    ${down("sm")} {
        font-size: 32px;line-height: 36px;
    }
}
h6{text-align:center; display:inline-block; font-weight:400; width:100%; font-size:27px; color:#868686; text-transform:capitalize;padding:30px 0;

    ${down("md")} {
        font-size:18px; padding:15px 0 20px 0;
    }
}
${down("xl")} {
    margin:60px 0; 
}

${down("sm")} {
    margin:30px 0; 
}

`
export const Blogimg = styled.div`
margin-bottom:35px !important;
img {border-radius:40px; width:100%; }
`

export const BlogButton = styled.div`
display:flex; text-align:center; align-items:center;justify-content: center; margin-bottom:25px;
`
export const Button = styled.div`
border:0px;
margin:0px 3px;
padding:0 15px; background-color:#e6f8f3; font-weight:semibold; border-radius:5px; 
 color:#08b689; text-transform:capitalize; font-size:20px; line-height:34px; cursor:pointer; font-weight:700;
 ${down("sm")} {
    font-size:16px;
 }
`
export const Bloglist = styled.div`
ol {margin:0; padding:0; width:100%;}
ol li {width:46%; float:left; font-size:22px; padding-left:8px; line-height:50px; position:relative; left:10px;top:10px; color:#303030; margin-left:30px; font-weight:600;
&:before {position:absolute; content:'';width:30px !important; height:30px !important;font-size:14px !important; left: -34px;top: 9px;
z-index: -999; border-radius:30px; background-color:#cef0e7 !important;}
::marker { color:#08b689;}
${down("lg")} {
    width:43%;
    font-size:20px;line-height:26px;margin-bottom:20px;
    &:before{
        left: -30px;top: 0px;
    }
}
${down("md")} {
    width:92%;margin-left:25px;
}
${down("sm")} {
    width:85%;font-size:18px;
}
${up("xl")} {
    left:40px;
}
}

h2{font-size:50px;line-height:55px;margin-bottom:15px;}
h3{line-height:35px;margin-bottom:10px;}

${down("xl")} {
    h2{font-size:45px;line-height:50px;}
}

${down("md")} {
    h2{font-size:38px;line-height:44px;}
}
${down("sm")} {
    h2{font-size:28px;line-height:34px;}
    h3{line-height:28px;}
}

`

export const Blackquote = styled.div`
margin:60px 0; padding:30px 35px 30px 35px; display:flex; align-items:center; border-radius:10px;
background-color:#f8faff; background-image: url(${blackquotebg}); background-position:bottom -90px right -125px; background-repeat:no-repeat; 
${down("md")} {
    flex-direction:column;text-align:center;
    padding:25px 15px;
}
${down("sm")} {
margin:30px 0;
}
`
export const Quotesvg = styled.div`

width:60px; height:60px; border-radius:60px;background-color:#4478db; justify-content:center;
display:flex; align-items:center; margin-right:25px;
svg {  align-items:center;
path {fill:#fff; width:20px; height:20px; }
}
${down("md")} {
margin-bottom:20px;
}

`
export const Quotecnt = styled.div`
width:90%;
p {font-style:italic; font-weight:600; padding-bottom:0;}
`
export const Imggroup = styled.div`
margin:0px 0 20px 0;
display:flex;
justify-content: space-between;
.gatsby-image-wrapper{
    border-radius:20px;
 }
 ${down("lg")} {
    align-items:center;
 }
 ${down("md")} {
     flex-direction:column;
 }
`
export const Bloglist1 = styled.div`
margin-top:70px;

h2{
    margin-bottom:30px;
}
`
export const Bloglist2 = styled.div`
margin-top:30px;
`

export const Blogitem = styled.div`
ul{
    margin:0;padding:0;
li{
    list-style:none;
   margin-bottom:20px;
   font-size:17px;
   margin-left:20px;
   position:relative;
   &:before{
    content:'';position: absolute;top:8px;left:-20px;width:10px;height:10px;background-color:#4478db;border-radius:10px;
   }   
${up("sm")}{
    font-size:19px;
 }
 ${up("lg")} {
    font-size:22px;
    &:before{top:10px;}
}

${up("xl")} {
     font-size:24px;
     &:before{top:12px;}
 }
}
}
p br{display:none;}
${up("md")} {
    width:48%;
}
${down("sm")} {
p{padding:0;}
}
`
export const Blogimg1 = styled.div`
position: relative;margin-bottom:30px;
&:before{
    content:'';position: absolute;
    bottom: -20px;
right: -5px;
width: 99px;
height: 99px;
z-index:10;
    background-image:url(${blackquotebg2});
    background-position:right center;
    background-repeat:no-repeat;
}
${up("md")} {
    width:48%;
    margin-bottom:0px;
}
.gatsby-image-wrapper{ width:100%;}

`
export const Bloggroup = styled.div`
margin-bottom:30px;
background-color:#f2f5ff;
border-radius:20px;
padding:80px 0 ;
margin-top:60px;
text-align:center;
display: inline-block;
display:flex;
align-items:center;
justify-content:center;
background-image: url(${blackquotebg1}); background-position:bottom -210px right -170px; 
background-repeat:no-repeat; 
h2{
    margin-bottom:20px;
    position:relative;
&:before{
        content:'';position: absolute;bottom:-15px;left:49%;width:40px;height:5px;background-color:#4478db;border-radius:10px;
}
&:after{
    content:'';position: absolute;top:22px;right:-8px;width:8px;height:8px;background-color:#00CC88;border-radius:10px;
}
}
a{
    background-color:#4478db;border-radius:10px;color:#fff;padding:15px 30px;display: inline-block; margin-top:20px;
}

p {padding-bottom:10px;
span { font-size:25px;line-height:25px; padding:0; margin:0;}
}
${down("md")} {
    margin-top:0px;
}

`

export const Couldblk = styled.div`
.row{
 
    .col-lg-8, .col-md-6, .col-sm-12{
      margin-bottom:50px;
    }
  }

margin-top:60px;
${down("lg")} {
    margin-top:30px;
}
h2{
    margin-bottom:40px;
    text-align:center;
    position:relative;
&:before{
    content:'';position: absolute;bottom:-15px;left:49%;width:40px;height:5px;background-color:#4478db;border-radius:10px;
}
}
`
export const Item = styled.div`
margin-top:50px;
padding:10px;
.gatsby-image-wrapper{
    border-radius:20px 20px 0 0;
    width:100%;
 }
`
export const Itemlist = styled.div`
box-shadow: 0px 0px 20px rgba( 0, 0, 0,0.1);
padding:20px;
border-radius:0px 0px 20px 20px;

p{ padding-bottom:20px !important;
line-height:30px;
span{ font-size:17px; padding:0 !important; margin:0 !important; color:#868686;}

}
a{
color:#00CC88;

}
`













