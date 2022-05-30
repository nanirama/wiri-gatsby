import React, { useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid"
import BlogItem from "./BlogItem";
import { Link } from "gatsby";

import styled from "styled-components";
import {up, down } from "styled-breakpoints"
import BlogItemFirst from "./BlogItemFirst";
import FeaturedBlogItem from "./FeaturedBlogItem";


import Srcicon from "../../assets/images/src-icon.png"

import CatMenu from "./CatMenu";


const BlogIndex = ({ blogs, basePath, isFirstPage, categories, path, lang, cat='', catList, title, featuredArticle }) => {
  const [state, setState] = useState({
    filteredPosts: [],
    query: "",
  });

   const handleInputChange = event => {
    const query = event.target.value;
    const filteredPosts = blogs.filter(blog => {      
      return (
        blog.data.title.text.toLowerCase().includes(query.toLowerCase()) 
      );
    });
    console.log('filteredPosts',filteredPosts)
    setState({
      query,
      filteredPosts,
    });
  };

  const posts = state.query ? state.filteredPosts : blogs;
  return (
    <>
      <Blogtop>
        <Grid>
          <Row>
            <Col lg={12} md={12}>
              <h1>{title}</h1>
              <Blogsearch>
              <input
                type="text"
                aria-label="Search"
                className="bloginput"
                placeholder="Search for articles..."
                value={state.query}
                onChange={handleInputChange}
              />                
                <input type="submit" className="blogsubmit"/>
              </Blogsearch>
            </Col>
          </Row>
          <Row>
          <Col lg={12} md={12}>
              <CatMenu cat={cat} catList={catList} lang={lang} />
          </Col>
          </Row>
        </Grid>
      </Blogtop>

      <Blogouter>
        <Grid>
          <Row>
            {featuredArticle && <Col lg={8} md={12} sm={12}><FeaturedBlogItem data={featuredArticle} lang={lang}/></Col>}
            {posts.map((blog, index) =>{             
                return(
                  <Col lg={4} md={6} sm={12}><BlogItem key={index} data={blog} lang={lang} /></Col>
                )    
                     
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
    padding:0px;
    margin-top:20px;
    margin-bottom:20px;
  }
}
margin-bottom:20px;
`
const Blogtop = styled.div`
display:flex; align-items:center; justify-content:center; text-align:center; margin-top:50px;
h1 {font-size:40px; line-height:45px; font-weight:bold; text-transform:capitalize; padding-bottom:30px;
  ${up("sm")} {
    font-size:70px; line-height:70px;
  }
  ${up("lg")} {
    font-size:80px; line-height:80px;
  }
  ${up("xl")} {
    font-size:95px; line-height:95px;
  }
  ${up("xxl")} {
    font-size:106px; line-height:105px;
  }
}
`
const Blogsearch = styled.div`
height:50px; width:100%; border:2px solid #ebeef6; border-radius:10px; margin-top:30px; margin:0 auto;
.bloginput {width:60%; height:100%; border:0; float:left; outline:0; background:none; padding-left:15px; font-size:16px; color:#828282;}
.blogsubmit {width:60px; height:100%; background-color:#08b689; float:right; font-size:0; cursor:pointer;background-size:40%;
  border-radius:0 10px 10px 0; border:0;background-image: url(${Srcicon}); background-position:center center; background-repeat:no-repeat;}
  ${up("sm")} {
    .bloginput {width:80%;}
  }
  ${up("md")} {
  width:80%;height:60px;
  height:70px;
  .bloginput {
    font-size:22px; padding-left: 30px;
  }
  .blogsubmit {width:72px;background-size: inherit;}


}
`


