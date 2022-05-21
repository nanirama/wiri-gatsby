import styled from "styled-components"
import blackquotebg from "../../images/blog/blackquote-bg.png"
import blackquotebg1 from "../../assets/images/bgimg.png"
import blackquotebg2 from "../../assets/images/bgimg3.png"


export const Blogwrapper = styled.div`
margin-bottom:100px; 
h1 {text-align:center;}
h6{text-align:center; display:inline-block; font-weight:400; width:100%; font-size:27px; color:#868686; text-transform:capitalize;padding:30px 0;}

`
export const Blogimg = styled.div`
margin-bottom:35px !important;
img {border-radius:40px; width:100%; }
`

export const BlogButton = styled.div`

display:flex; text-align:center; align-items:center;justify-content: center; margin-bottom:25px;
`
export const Button = styled.div`
padding:0 20px; background-color:#e6f8f3; font-weight:semibold; border-radius:5px; 
border:0; color:#08b689; text-transform:capitalize; font-size:24px; line-height:41px; cursor:pointer; font-weight:700;
`
export const Bloglist = styled.div`

ol {margin:0; padding:0; width:100%;}
ol li {width:46%; float:left; font-size:23px; line-height:50px; color:#303030; margin-left:30px; font-weight:600;
&:before {border:2px solid blue;}
::marker {border:2px solid red; background-color:#cef0e7 !important; width:30px !important; height:30px !important; border-radius:30px; color:#08b689;}
}
`

export const Blackquote = styled.div`
margin:60px 0; padding:30px 35px 30px 35px; display:flex; align-items:center;
background-color:#f8faff; background-image: url(${blackquotebg}); background-position:bottom -90px right -125px; background-repeat:no-repeat; 
`
export const Quotesvg = styled.div`

width:60px; height:60px; border-radius:60px;background-color:#4478db; justify-content:center;
display:flex; align-items:center; margin-right:25px;
svg {  align-items:center;
path {fill:#fff; width:20px; height:20px; }
}
`
export const Quotecnt = styled.div`
width:90%;
p {font-style:italic; font-weight:600; padding-bottom:0;}
`
export const Imggroup = styled.div`
margin:0px 0 40px 0;
display:flex;
justify-content: space-between;
.gatsby-image-wrapper{
    border-radius:20px;
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
   font-size:24px;
   margin-left:20px;
   position:relative;
   &:before{
    content:'';position: absolute;top:12px;left:-20px;width:10px;height:10px;background-color:#4478db;border-radius:10px;
   }
}
}
`
export const Blogimg1 = styled.div`
position: relative;
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
`
export const Bloggroup = styled.div`
background-color:#f2f5ff;
border-radius:20px;
padding:80px 0 ;
margin-top:100px;
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
`

export const Couldblk = styled.div`

.row{
  
    .col-lg-8, .col-md-6, .col-sm-12{
      margin-bottom:50px;
    }
  }
margin-top:60px;
h2{
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













