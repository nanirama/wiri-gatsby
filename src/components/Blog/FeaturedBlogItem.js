import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Grid, Row, Col } from "react-flexbox-grid"

import prismicConfiguration from "../../../prismic-configuration";

import { FeaturedBlogitem, FeaturedImage, Blockcontent, Blogsvg, FeaturedBlockcontent, FeaturedBlockcontentInner } from "../Blog/styled";

const FeaturedBlogItem = ({ data, lang }) => {
    const { title, excerpt, article_image } = data.data
    const url = lang === prismicConfiguration.defaultLanguage ? data.uid : `${lang.slice(0, 2)}/${data.uid}`  
    return (
        <FeaturedBlogitem>
<Row>
    <Col xs={12} lg={6} className="pr-0">
        <FeaturedImage>
    <Link to={`/${url}`}><GatsbyImage image={getImage(article_image)} alt={title.text} /></Link>
    </FeaturedImage>
        </Col>
        <Col xs={12} lg={6} className="pl-0">
        <FeaturedBlockcontent>
                <FeaturedBlockcontentInner>
                <p className="datespan"><span>March 20, 2022</span></p>
                <Link to={`/${url}`}><h3>{title.text}</h3></Link>
                <p>{excerpt.text.substring(0, 100)}</p>
                <Blogsvg>
                    <Link to={`/${url}`}>Read More </Link>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                </Blogsvg>
                </FeaturedBlockcontentInner>
            </FeaturedBlockcontent>

        </Col>
</Row>

             {/* <Link to={`/${url}`}><GatsbyImage image={getImage(article_image)} alt={title.text} /></Link>
            <FeaturedBlockcontent>
                <FeaturedBlockcontentInner>
                <p className="datespan"><span>March 20, 2022</span></p>
                <Link to={`/${url}`}><h3>{title.text}</h3></Link>
                <p>{excerpt.text.substring(0, 100)}</p>
                <Blogsvg>
                    <Link to={`/${url}`}>Read More </Link>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" /></svg>
                </Blogsvg>
                </FeaturedBlockcontentInner>
            </FeaturedBlockcontent> */}
        </FeaturedBlogitem>
    )
}

export default FeaturedBlogItem

export const query = graphql`
  fragment BlogFeaturedBlog on PrismicBlog {
    id
    uid
    alternate_languages {
        id
        type
        lang
        uid
    }
    data {
        title {
        text
        html
        }
        excerpt {
        text
        html
        }
        article_image {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
  }
`

