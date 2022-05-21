import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';
import SVG from "react-inlinesvg"

import { WidgetSection, Title, WidgetItem, WidgetImg } from "./styled"

import Reviews from "../../../assets/images/reviews.svg"
import Presence from "../../../assets/images/presence.svg"
import Hours from "../../../assets/images/hours.svg"
import Map from "../../../assets/images/map.svg"
import Links from "../../../assets/images/links.svg"
import LiveChat from "../../../assets/images/live-chat.svg"
import Reserve from "../../../assets/images/reserve.svg"
import OnlineMenu from "../../../assets/images/online-menu.svg"
import Deals from "../../../assets/images/deals.svg"
import Gallery from "../../../assets/images/gallery.svg"

const WebsiteWidget = () => {

  return (
    <WidgetSection>
      <Grid>
        <Title>
          <span className="blue-line">Use as a website widget</span>
          <span className="txt-green">.</span>
        </Title>
        <Row>
          <Col xs={12} lg={4}>
            <Row end="lg">
              <Col xs={12} lg={12}>
                <ul>
                  <WidgetItem className="row-reverse">
                    <div className="widget-img">
                      <SVG src={Reviews} />
                    </div>
                    <p className="widget-name">Business reviews</p>
                  </WidgetItem>
                  <WidgetItem className="row-reverse">
                  <div className="widget-img"> <SVG src={Presence} /></div>
                    <p className="widget-name">Social media presence</p>
                  </WidgetItem>
                  <WidgetItem className="row-reverse">
                  <div className="widget-img"> <SVG src={Hours} /></div>
                    <p className="widget-name">Openning hours</p>
                  </WidgetItem>
                  <WidgetItem className="row-reverse">
                  <div className="widget-img"> <SVG src={Map} /></div>
                    <p className="widget-name">Location map & Navigation</p>
                  </WidgetItem>
                  <WidgetItem className="row-reverse">
                  <div className="widget-img"><SVG src={Links} /></div>
                    <p className="widget-name">Useful links</p>
                  </WidgetItem>
                </ul>
              </Col></Row>
          </Col>
          <Col xs={12} lg={4}>
            <WidgetImg>
              <StaticImage src="../../../assets/images/widget1.png" alt="" />
            </WidgetImg>
          </Col>
          <Col xs={12} lg={4}>
            <ul>
              <WidgetItem>
              <div className="widget-img"><SVG src={LiveChat} /> </div>
                <p className="widget-name" first="xs">Automated & live chat</p>
              </WidgetItem>
              <WidgetItem>
                <div className="widget-img"><SVG src={Reserve} /> </div>
                <p className="widget-name">Instant online reservations and appointments</p>
              </WidgetItem>
              <WidgetItem>
                <div className="widget-img"><SVG src={OnlineMenu} /> </div>
                <p className="widget-name">Online menu</p>
              </WidgetItem>
              <WidgetItem>
                <div className="widget-img"><SVG src={Deals} /> </div>
                <p className="widget-name">Deals & Promotions</p>
              </WidgetItem>
              <WidgetItem>
                <div className="widget-img"> <SVG src={Gallery} /></div>
                <p className="widget-name">Photo & video gallery</p>
              </WidgetItem>
            </ul>
          </Col>
        </Row>
      </Grid>
    </WidgetSection>
  )
}
export default WebsiteWidget
