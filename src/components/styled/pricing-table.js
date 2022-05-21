import styled from "styled-components"
import { down, up } from "styled-breakpoints"
import {
  PricingBack1,
  PricingBack2,
} from "../../utils/imgImport"

export const Inner = styled.div`
  position: relative;
  margin: 150px 0 500px;
  padding-top: 100px;
  padding-bottom: 345px;
  background-color: #f0fbf8;
  border-radius: 60px;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 351px;
    height: 320px;
    background-image: url(${PricingBack1});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    ${down("md")} {
      width: 75px;
      height: 65px;
    }
  }
  ${down("md")} {
    margin: 50px 0 470px;
    padding: 30px 35px 400px;
    border-radius: 20px;
  }
  ${down("sm")} {
    margin-bottom: 200px;
  }
`
export const Plan = styled.div`
  position: relative;
  display: flex;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  padding: 5px;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 17px 43px rgba(44, 57, 79, 0.05);
  ${down("md")} {
    border-radius: 3px;
  }
`
export const Button = styled.button`
  padding: 7px 30px;
  color: ${props => (props.active ? "white" : "#303030")};
  font-size: 20px;
  font-weight: 500;
  line-height: 41px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  background-color: ${props => (props.active ? "#4478db" : "white")};
  &:first-child {
    border-radius: 15px 0 0 15px;
  }
  &:nth-child(2) {
    border-radius: 0 15px 15px 0;
  }
  ${down("md")} {
    padding: 5px 15px;
    font-size: 12px;
    line-height: 24.1px;
    &:first-child {
      border-radius: 7px 0 0 7px;
    }
    &:nth-child(2) {
      border-radius: 0 7px 7px 0;
    }
  }
`
export const Tag = styled.div`
  position: absolute;
  left: calc(100% + 30px);
  width: max-content;
  padding: 0 10px;
  box-shadow: 3px 8px 10px rgba(19, 14, 35, 0.03);
  border: 1px solid #e9e9e9;
  background-color: #ffffff;
  font-family: "Gelion-SemiBold";
  font-size: 21px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: -0.42px;
  color: #303030;
  &::after,
  &::before {
    content: "";
    display: block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
  }
  &::after {
    border-color: transparent white transparent transparent;
    border-width: 21px;
  }
  &::before {
    border-color: transparent #e9e9e9 transparent transparent;
    border-width: 22px;
  }
  ${down("md")} {
    left: calc(100% + 15px);
    font-size: 10px;
    line-height: 19.17px;
    letter-spacing: -0.43px;
    padding: 0 5px;
    &::after {
      border-color: transparent white transparent transparent;
      border-width: 10px;
    }
    &::before {
      border-color: transparent #e9e9e9 transparent transparent;
      border-width: 11px;
    }
  }
`
export const PricingSlider = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  ${down("md")} {
    top: 50%;
  }
  ${down("sm")} {
    top: 40%;
  }
`
export const PricingSlide = styled.div`
  position: relative;
  /* width: 211px; */
  padding: 29px 18px;
  box-shadow: 0 12px 43px rgba(83, 96, 129, 0.17);
  border-radius: 10px;
  background-color: ${props => (props.active ? "#08b689" : "white")};
  z-index: 0;
  ${up("sm")} {
    padding: 53px 39px;
    border-radius: 20px;
    box-shadow: 0 24px 88px rgba(83, 96, 129, 0.17);
  }
  ${up("md")} {
    padding: 24px 20px;
    box-shadow: 0 10px 38px rgba(83, 96, 129, 0.17);
  }
  ${up("lg")} {
    padding: 35px 23px;
    box-shadow: 0 13px 46px rgba(83, 96, 129, 0.17);
  }
  ${up("xxl")} {
    width: 360px;
    padding: 52px 26px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 144px;
    height: 140px;
    background-image: ${props => (props.active ? `url(${PricingBack2})` : "")};
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    ${down("md")} {
      width: 84px;
      height: 83px;
    }
  }
  .price {
    color: ${props => (props.active ? "white" : "#303030")};
    font-size: 70px;
    font-weight: 500;
    line-height: 41px;
    font-size: 42px;
    ${up("sm")} {
      font-size: 84px;
    }
    ${up("md")} {
      font-size: 43px;
    }
    ${up("lg")} {
      font-size: 52px;
    }
    ${up("xl")} {
      font-size: 57px;
    }
    ${up("xxl")} {
      font-size: 70px;
    }
  }
  .per-month {
    font-weight: 400;
    font-size: 20px;
    color: ${props => (props.active ? "white" : "#989898")};
    ${up("sm")} {
      font-size: 24px;
    }
    ${up("md")} {
      font-size: 15px;
    }
    ${up("lg")} {
      font-size: 16px;
    }
    ${up("xl")} {
      font-size: 17px;
    }
    ${up("xxl")} {
      font-size: 20px;
    }
  }
  .type {
    color: ${props => (props.active ? "white" : "#4478db")};
    font-size: 18px;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0.58px;
    ${up("sm")} {
      font-size: 35px;
    }
    ${up("md")} {
      font-size: 20px;
    }
    ${up("lg")} {
      font-size: 23px;
    }
    ${up("xl")} {
      font-size: 24px;
    }
    ${up("xxl")} {
      font-size: 29px;
    }
  }
  .feature {
    color: ${props => (props.active ? "white" : "#303030")};
    font-size: 13px;
    font-weight: 500;
    line-height: 35.86px;
    letter-spacing: 0.44px;
    ${up("sm")} {
      font-size: 25px;
      line-height: 73px;
      letter-spacing: 0.42px;
    }
    ${up("md")} {
      font-size: 15px;
      line-height: 38px;
      letter-spacing: normal;
    }
    ${up("lg")} {
      font-size: 18px;
      line-height: 46px;
      letter-spacing: 0.48px;
    }
    ${up("xl")} {
      line-height: 49px;
      letter-spacing: 0.44px;
    }
    ${up("xxl")} {
      font-size: 21px;
      line-height: 61px;
      letter-spacing: 0.42px;
    }
  }
  hr {
    height: 2px !important;
    background-color: ${props => (props.active ? "white" : "black")};
    opacity: ${props => (props.active ? 0.3 : 0.1)};
  }
  .btn-green {
    font-family: "Gelion-SemiBold";
    font-size: 26px;
    font-weight: 400;
    line-height: 41px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;
    ${down("md")} {
      font-size: 16px;
      line-height: 24.1px;
      padding-left: 30px;
      padding-right: 30px;
    }
  }
`
export const Header = styled.div``
export const Body = styled.div``
export const Footer = styled.div`
  margin-top: 40px;
  text-align: center;
`