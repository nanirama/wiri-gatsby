import * as React from "react"
import { Row, Col } from 'react-flexbox-grid';
import { graphql } from "gatsby"
import BlogItem from "../Blog/BlogItem";



import { Couldblk } from "../Slices/styled"

const InterestArticles = ({ data, lang }) => {
    return (
        <Couldblk>
            <h2>These could be also interesting</h2>
            <Row>
                {data.map((item, index) => {
                    return(
                        <Col lg={4} md={6} sm={12}><BlogItem key={index} data={item.interested_article.document} lang={lang} /></Col>
                      )  
                })}
            </Row>
        </Couldblk>
    )
}


export default InterestArticles

export const query = graphql`
  fragment BlogPostDataIArticles on PrismicBlogDataBodyInterestingArticles{
    slice_type
    items {
        interested_article {
            document {
            ... on PrismicBlog {
                id
                uid
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
                        gatsbyImageData(layout: CONSTRAINED, width: 550)
                    }
                }
            }
            }
        }
    }
  }
`