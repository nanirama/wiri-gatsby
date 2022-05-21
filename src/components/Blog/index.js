import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid"
import BlogItem from "./BlogItem";
import { Link } from "gatsby";
import BlogItemFirst from "./BlogItemFirst";

import Srcicon from "../../assets/images/src-icon.png"
import Blogmenubg from "../../assets/images/blogmenu-bg.png"

import styled from "styled-components";

const BlogIndex = ({ blogs, basePath, isFirstPage, categories, path, lang }) => {
  return (
    <>
      <Blogtop>
        <Grid>
          <Row>
            <Col lg={12} md={12}>
              <h1>wiri blog</h1>
              <Blogsearch>
                <input type="text" className="bloginput" placeholder="Search for articles..." />
                <input type="submit" className="blogsubmit"/>
              </Blogsearch>
            </Col>
          </Row>
          <Row>
          <Col lg={12} md={12}>
            <BlogMenu>
              <ul>
                <li> <Link to="/">all</Link></li>
                <li> <Link to="/" className="active">tips & tricks</Link></li>
                <li> <Link to="/">product updates</Link></li>
                <li> <Link to="/">how to's</Link></li>
              </ul>
            </BlogMenu>
          </Col>
          </Row>
        </Grid>
      </Blogtop>

      <Blogouter>
        <Grid>
          <Row>
            {blogs.map((blog, index) =>{
              if(index===0){
                return(
                  <Col lg={4} md={6} sm={12}><BlogItem key={index} data={blog} lang={lang} /></Col>
                )                
              }
              else
              {
                return(
                  <Col lg={4} md={6} sm={12}><BlogItem key={index} data={blog} lang={lang} /></Col>
                )     
              }
                     
              })}
          </Row>
        </Grid>
      </Blogouter>
    </>
  )
}

export default BlogIndex

const Blogouter = styled.div`
.row{
  display:flex; align-items:stretch; align-content:stretch;  justify-content:stretch;justify-items: stretch;
  .col-lg-8, .col-md-6, .col-sm-12{
    margin-bottom:30px;
  }
}
`
const Blogtop = styled.div`
display:flex; align-items:center; justify-content:center; text-align:center; margin-top:50px;
h1 {font-size:106px; line-height:105px; font-weight:bold; text-transform:capitalize; padding-bottom:30px;}
`

const Blogsearch = styled.div`
height:70px; width:80%; border:2px solid #ebeef6; border-radius:10px; margin-top:30px; margin:0 auto;
.bloginput {width:80%; height:100%; border:0; float:left; outline:0; background:none; padding-left:30px; font-size:22px; color:#828282;}
.blogsubmit {width:72px; height:100%; background-color:#08b689; float:right; font-size:0; cursor:pointer; 
  border-radius:0 10px 10px 0; border:0;
  background-image: url(${Srcicon}); background-position:center center; background-repeat:no-repeat;
}
`
const BlogMenu = styled.div`
margin:40px 0;
ul {margin:0; padding:0; display: flex; align-items: center; justify-content: center;}
ul li {list-style:none; float:left; 
  .active {background-color:#4478db; color:#fff;box-shadow: 10px 0px 24px rgba( 68, 120, 219,0.27); 
    &:before { content:'';position: absolute;bottom:-7px; left:44%;width:24px;height:9px;
    background-image: url(${Blogmenubg});background-repeat:no-repeat; z-index:999;}
  }
}

ul li a {position:relative;
  color:#5f5f5f; font-size:25px; line-height:35px; text-transform:capitalize; border-radius:10px;
  padding:13px 30px; margin:0 5px;

  &:hover {background-color:#4478db; box-shadow: 10px 0px 24px rgba( 68, 120, 219,0.27); color:#fff;

  &:before { content:'';position: absolute;bottom:-7px; left:44%;width:24px;height:9px;
background-image: url(${Blogmenubg});background-repeat:no-repeat; z-index:999;}
 
  }
}
`

