import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from "styled-components";

import { Grid, Row, Col } from 'react-flexbox-grid';

const Pagination = ({ data }) => {
  const {
    previousPagePath,
    nextPagePath,
    numberOfPages,
    paginationPath,
  } = data;
  if (numberOfPages > 1) {
    let pages = [];
    for (let i = 0; i < numberOfPages; i++) {
      pages.push({
        label: i + 1,
        linkURL: i === 0 ? paginationPath : `${paginationPath}/${i + 1}`,
      });
    }

    return (

      <PagiNation>
        <Grid>
          <Row middle="xs" around="xs">
            <Col lg={2} sm={2} xs={4} start="lg">
              {previousPagePath ? (
                <Link to={`/${previousPagePath}`} className="nextprevbtn svgrotate"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" /></svg><span>Previous</span></Link>
              ) : null}
            </Col>
            <Col lg={8} sm={8} xs={4}>
              <PaginationLinks>
                {pages.map((page) => (
                  <Link
                    to={`/${page.linkURL}`}
                    activeClassName="active"
                  >
                    {page.label}
                  </Link>
                ))}
              </PaginationLinks>
            </Col>
            <Col md={2} sm={2} xs={4}>
              {nextPagePath ?
                <Row end="xs"><Col xs={12} md={12}><Link to={`/${nextPagePath}`} className="nextprevbtn"><span>Next</span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" /></svg> </Link></Col></Row>
                : null}
            </Col>
          </Row>
        </Grid>
      </PagiNation>

    );
  }

  return null;
};

Pagination.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Pagination;

const PagiNation = styled.div`
display:flex; justify-content:space-between;
margin:64px 0;
@media (max-width: 767px) {
   margin:40px 0;
}
a{ 
   color:#636363; margin-right:5px;
   padding:8px 18px;
   font-weight: bold;
   display:inline-block;
   font-size:20px;
   margin-right:5px;  
  
   &:hover{
      color:#fff;  
      background-color:#4478db;
      border-radius:8px;
      box-shadow: 13px 0px 16px rgba(68, 120, 219, 0.16) ;
   }
   @media (max-width: 479px) {
    padding:8px 15px;
    font-size:16px;
   }
}
a.active{
  color:#fff;  
      background-color:#4478db;
      border-radius:5px;
      box-shadow: 13px 0px 16px rgba(68, 120, 219, 0.16) ;
}
.nextprevbtn{
  color:#636363 !important;font-size:20px; line-height:20px;margin: 0;padding: 0;
  &:hover {color:#4478db !important; background-color:inherit !important;box-shadow: inherit;
  svg path {fill:#4478db;}  
  }
  svg {  margin-left:5px; 
    path {fill:#636363;
    }   
  }
  @media (max-width: 479px) {
    font-size:15px;
  }
}
.svgrotate svg {transform: rotate(180deg); margin-right:5px;}
`;

const PaginationLinks = styled.div`
display:flex; flex-direction:row; align-items:center; justify-content:center;
`
