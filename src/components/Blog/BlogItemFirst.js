import React from "react";
import { Link } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import prismicConfiguration from "../../../prismic-configuration";

import { Blogitem, Blockcontent, Blogsvg } from "../Blog/styled";

const BlogItemFirst = ({ data, lang }) => {
    const { title, excerpt, firstarticle_image } = data.data
    console.log('blog singledata', lang)
    console.log('blog singledata', data.uid)
    const url = lang === prismicConfiguration.defaultLanguage ? data.uid : `${lang.slice(0, 2)}/${data.uid}`
    console.log('blog singledata', url)
    return (
        <Blogitem>
            <Grid>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <GatsbyImage image={getImage(firstarticle_image)} alt={title.text} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Blockcontent>
                            <p><span>March 20, 2022</span></p>
                            <h3>{title.text}</h3>
                            <p>{excerpt.text}</p>
                            <Blogsvg>
                                <Link to={`/${url}`}>Read More </Link>
                                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                            </Blogsvg>
                        </Blockcontent>
                    </Col>
                </Row>
            </Grid>
        </Blogitem>
    )
}

export default BlogItemFirst

