import styled from "styled-components"
import { down, up } from "styled-breakpoints"
import { WidgetBack } from "../../utils/imgImport"

export const Section = styled.section`
  /* margin-top: 400px; */
  ${down("sm")} {
    /* margin-top: 350px; */
  }
`
export const Title = styled.h2`
  text-align: center;
  .blue-line {
    &::before {
      width: 63%;
    }
  }
`
export const WidgetItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  cursor: pointer;
  .widget-name {
    color: ${props => (props.active ? "#4478db" : "#303030")};
    font-size: 20px;
    font-weight: 500;
    line-height: 20.57px;
    letter-spacing: -1.02px;
    white-space: pre-line;
    ${up("sm")} {
      font-size: 23px;
      line-height: 28px;
      letter-spacing: -0.74px;
    }
    ${up("md")} {
      font-size: 19px;
      line-height: 19.76px;
      letter-spacing: -0.89px;
    }
    ${up("lg")} {
      font-size: 22px;
      line-height: 25px;
      letter-spacing: -0.84px;
    }
    ${up("xl")} {
      font-size: 23px;
      line-height: 27px;
      letter-spacing: -0.77px;
    }
    ${up("xxl")} {
      font-size: 26px;
      line-height: 31px;
      letter-spacing: -0.78px;
    }
  }
  .widget-img {
    position: relative;
    width: 53px;
    height: 53px;
    box-shadow: 0 11px 32px rgba(50, 69, 101, 0.11);
    background: ${props => (props.active ? "#4478db" : "#ffffff")};
    border-radius: 50%;
    flex-shrink: 0;
    svg * {
      fill: ${props => (props.active ? "#ffffff" : "")};
    }
    img,
    svg {
      position: absolute;
      width: 27px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ${up("sm")} {
      width: 85px;
      height: 85px;
      box-shadow: 0 18px 54px rgba(50, 69, 101, 0.11);
      img,
      svg {
        width: 43px;
      }
    }
    ${up("md")} {
      width: 58px;
      height: 58px;
      box-shadow: 0 9px 28px rgba(50, 69, 101, 0.11);
      img,
      svg {
        width: 30px;
      }
    }
    ${up("lg")} {
      width: 72px;
      height: 72px;
      box-shadow: 0 11px 34px rgba(50, 69, 101, 0.11);
      img,
      svg {
        width: 36px;
      }
    }
    ${up("xl")} {
      width: 82px;
      height: 82px;
      box-shadow: 0 13px 39px rgba(50, 69, 101, 0.11);
      img,
      svg {
        width: 43px;
      }
    }
    ${up("xxl")} {
      width: 90px;
      height: 90px;
      box-shadow: 0 18px 54px rgba(50, 69, 101, 0.11);
      img,
      svg {
        width: 46px;
      }
    }
  }
  ${down("sm")} {
    margin-bottom: 0;
  }
`
export const WidgetImg = styled.div`
  background-image: url(${WidgetBack});
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  img {
    ${down("xxl")} {
      width: 100%;
    }
  }
`
export const WidgetSlide = styled.div`
  max-width: 230px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.09);
`