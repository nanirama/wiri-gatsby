import styled from "styled-components"
import { up, down } from "styled-breakpoints"

export const SlickArrows = styled.div`
  position: relative !important;
  display: flex !important;
  bottom: 0 !important;
  justify-content: space-around;
  margin-top: 35px;
  text-align: center;
  button {
    border: none;
    background-color: unset;
    padding: 0 20px;
    svg {
      &:hover {
        g {
          path {
            fill: #4478db;
            transition: all ease-in-out 0.2s;
          }
        }
      }
      ${down("sm")} {
        width: 11px;
        height: 17px;
      }
    }
  }
`
export const RuleSlide = styled.div`
  background-color: white;
  /* box-shadow: 0 12px 43px rgba(83, 96, 129, 0.17);
  ${up("sm")} {
    box-shadow: 0 24px 88px rgba(83, 96, 129, 0.17);
  }
  ${up("md")} {
    box-shadow: 0 10px 38px rgba(83, 96, 129, 0.17);
  }
  ${up("lg")} {
    box-shadow: 0 13px 46px rgba(83, 96, 129, 0.17);
  }
  ${up("xl")} {
    box-shadow: 0 15px 53px rgba(83, 96, 129, 0.17);
  }
  ${up("xxl")} {
    box-shadow: 0 20px 73px rgba(83, 96, 129, 0.17);
  } */
`
export const RuleItem = styled.div`
  display: flex;
  align-items: center;
  p {
    color: "#5f5f5f";
    font-size: 25px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.75px;
  }
  ${down("sm")} {
    p {
      font-size: 15px;
      font-weight: 500;
      text-align: left;
      letter-spacing: -0.77px;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
`
export const RuleList = styled.ul`
  display: flex;
  align-items: center;
  li {
    width: auto !important;
    height: auto !important;
    margin: 0 1.5vw !important;
    flex-shrink: 0;
    &.slick-active {
      position: relative;
      padding: 20px 40px;
      background-color: #4478db;
      /* box-shadow: 0 10px 24px rgba(68, 120, 219, 0.27); */
      border-radius: 10px;
      &::before {
        content: "";
        position: absolute;
        top: -11px;
        left: 50%;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        border-bottom: 11px solid #4478db;
        transform: translateX(-50%);
      }
      p {
        color: white;
      }
      ${down("sm")} {
        padding: 12px 20px;
        /* box-shadow: 0 6px 14px rgba(68, 120, 219, 0.27); */
        border-radius: 5px;
        &::before {
          top: -8px;
          border-left: 9.5px solid transparent;
          border-right: 9.5px solid transparent;
          border-bottom: 8px solid #4478db;
        }
        p {
        }
      }
    }
  }
`
