import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { down } from "styled-breakpoints"
import { Logo2 } from "../../utils/imgImport"
import { handleLangContent } from "../../utils/handleLangContent"
import { linkResolver } from "../../utils/linkResolver"
import SVG from "react-inlinesvg"
import parse from "html-react-parser"

import {Wiri, Socials, Social, FooterWrapper, FooterMenus, BottomBar} from "./styled"
import { Grid, Row, Col } from 'react-flexbox-grid';



const FooterMenu = ({ lang, data, cols }) => { 
  const clss = "col-"+cols;
  return (
    <div className={clss}>
      <h4>{data.title}</h4>
      <ul>
        {data?.items.map((item, idx) => (
          <li key={idx}>
            {item.link.uid ? (
              <Link
                className="footer-link"
                to={linkResolver({
                  type: item.link.type,
                  uid: item.link.uid,
                  lang: lang,
                })}
              >
                {item.label}
              </Link>
            ) : (
              ""
            )}
            {item.text.text ? (
              <p className="footer-text">{item.text.text}</p>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  )}

const Footer = (props) => {
  console.log("Footer", props)
  const footer_menus = []
  const { allPrismicFooter, allPrismicNavigation } = useStaticQuery(graphql`
    query {
      allPrismicFooter {
        nodes {
          lang
          data {
            socials {
              icon {
                url
              }
              to
            }
            menu_column_1_title
            menu_column_1_enabled
            menu_column_1 {
              label
              link {
                lang
                uid
                type
              }
              text {
                html
                text
              }
            }
            menu_column_2_title
            menu_column_2_enabled
            menu_column_2 {
              label
              link {
                lang
                uid
                type
              }
              text {
                html
                text
              }
            }
            menu_column_3_title
            menu_column_3_enabled
            menu_column_3 {
              label
              link {
                lang
                uid
                type
              }
              text {
                html
                text
              }
            }
            bottom_bar {
              html
              text
            }
            bottom_bar_links {
              label
              link {
                lang
                uid
                type
              }
            }
            custom_scripts {
              label
              code
            }
          }
        }
      }
      allPrismicNavigation {
        nodes {
          data {
            menu_type
            items {
              name
              to
            }
          }
          prismicId
        }
      }
    }
  `)
  //const footerData = allPrismicFooter.nodes[0].data

  const footerData = handleLangContent(
    allPrismicFooter.nodes,
    props.activeDocMeta.lang
  )

  //footer_menus.push(navData1, navData2)
  if (footerData.menu_column_1_enabled) {
    footer_menus.push({
      title: footerData.menu_column_1_title,
      items: footerData.menu_column_1,
    })
  }
  if (footerData.menu_column_2_enabled) {  
    footer_menus.push({
      title: footerData.menu_column_2_title,
      items: footerData.menu_column_2,
    })
  }
  if (footerData.menu_column_3_enabled) {
    footer_menus.push({
      title: footerData.menu_column_3_title,
      items: footerData.menu_column_3,
    })
  }

  const footerBottomBarLinks = footerData.bottom_bar_links ? footerData.bottom_bar_links : []

  return (
    <Grid fluid>
       <FooterWrapper>
      <Grid>     
        <FooterMenus>
          <Row>
          <Col xs={12} lg={5}>
              <Wiri>
                <img src={Logo2} alt="logo" className="logo" />
                <Socials className="d-flex align-items-center">
                  {footerData.socials.map((item, idx) => (
                    <Social href={item.to} key={idx}>
                      <SVG
                        src={item.icon.url}
                        height={18}
                        width="auto"
                        title="social icon"
                      />
                    </Social>
                  ))}
                </Socials>
              </Wiri>
            </Col>
            <Col xs={12} lg={7}>
              <Row>
                {footer_menus.map((item, idx) => (
                  <FooterMenu
                    lang={props.activeDocMeta.lang}
                    data={item}
                    key={idx}
                    cols={footer_menus.length === 3 ? 4 : 6}
                  />
                ))}
              </Row>
           </Col>
          </Row>
        </FooterMenus>
        <BottomBar>
          <p
            dangerouslySetInnerHTML={{
              __html: footerData.bottom_bar
                ? footerData.bottom_bar.html.replace(/^<p[^>]*>|<\/p>$/g, "")
                : "",
            }}
          ></p>
          {footerBottomBarLinks.map((item, idx) => (
            <p>
              <Link
                to={linkResolver({
                  type: item.link.type,
                  uid: item.link.uid,
                  lang: props.activeDocMeta.lang,
                })}
              >
                {item.label}
              </Link>
            </p>
          ))}
        </BottomBar>
        </Grid>
      </FooterWrapper>
      {footerData.custom_scripts?.map((item, idx) => {
        return parse(item.code)
      })}
    
    </Grid>
  )
}

export default Footer
