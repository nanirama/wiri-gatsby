import styled from "styled-components";

export const Grid = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px 20px;
  justify-content:space-between;
  margin-bottom:30px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }   
`;
export const Rowitem = styled.div`
margin-bottom:30px;
`;
export const Image = styled.div`
margin:30px 10px 5px 10px;
img{
    border-radius: 15px 15px 0 0 ;

}
.listblk{
    background-color:#ffffff;
padding:20px;
border-radius: 0px 0px 15px 15px ;
box-shadow: 0px 5px 10px #f8f8f9 ;

}
.svgicon{
display:flex;
align-items: center;
svg{
width:24px;height:24px;
fill:    #00CC88;
margin-left:10px;
}
a{
    color:#00CC88;
}
}

&:hover{
     box-shadow: 0px 5px 30px #dbe3f3 ;
    background-color:#ffffff;
    cursor: pointer;
    border-radius: 0px 0px 15px 15px ;

}

 
   

`;



























