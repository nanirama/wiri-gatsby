import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { WowClientsWrapper, Inner, Heading, Benfit, Icon, Content } from "./styled"
import { Grid, Row, Col } from 'react-flexbox-grid';

const EWowClients = ({ data }) => {
    const { title, subtitle, benefits, background } = data.primary.wclients.document.data
    return (
        <WowClientsWrapper>
            <Grid fluid>
                <Row middle="xs">
                    <Col xs={12} lg={6} first="lg" last="xs">
                        <GatsbyImage image={getImage(background)} alt={title} />
                    </Col>
                    <Col xs={12} lg={6} className="pr-14">
                        <Inner>
                            <Heading>{title}<span className="txt-green">.</span></Heading>
                            <p className="subtitle">{subtitle}</p>
                            {benefits && benefits.map((item, index) => {
                                return (
                                    <Benfit key={index}>
                                        <Icon>
                                            <GatsbyImage image={getImage(item.icon)} alt={item.title} />
                                        </Icon>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <Content>{item.content}</Content>
                                        </div>
                                    </Benfit>
                                )
                            })}
                        </Inner>
                    </Col>
                </Row>
            </Grid>
        </WowClientsWrapper>
    )
}

export default EWowClients