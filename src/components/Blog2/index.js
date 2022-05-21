import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid"
import BlogItem from "./BlogItem";

const BlogIndex = ({ blogs, basePath, isFirstPage, categories, path })=>{
    return(
        <Grid>
          <Row>
            {blogs.map((blog, index)=> <Col lg={4} md={6} sm={12}><BlogItem key={index} data={blog}/></Col>)}
          </Row>
        </Grid>
    )    
}

export default BlogIndex