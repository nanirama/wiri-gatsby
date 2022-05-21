import styled from "styled-components"
import { up, down } from "styled-breakpoints"
import { AppBack } from "../../utils/imgImport"

export const Section = styled.section`
  margin-bottom: 300px;
  ${up("sm")} {
    margin-bottom: 470px;
  }
  ${up("md")} {
    margin-bottom: 250px;
  }
  ${up("xxl")} {
    margin-bottom: 350px;
  }
  ${down("md")} {
    .app-arrows {
      display: block;
    }
  }
`
export const Inner = styled.div`
  position: relative;
  padding: 50px 38px 215px;
  background-color: #f0fbf8;
  border-radius: 20px;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 90px;
    height: 104px;
    background-image: url(${AppBack});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    ${up("sm")} {
      width: 187px;
      height: 214px;
    }
    ${up("md")} {
      width: 202px;
      height: 180px;
    }
    ${up("lg")} {
      width: 243px;
      height: 215px;
    }
    ${up("xl")} {
      width: 290px;
      height: 258px;
    }
    ${up("xxl")} {
      width: 360px;
      height: 320px;
    }
  }
  ${up("sm")} {
    padding: 102px 77px 364px;
    border-radius: 36px;
  }
  ${up("md")} {
    padding-top: 83px;
    padding-bottom: 256px;
    border-radius: 40px;
  }
  ${up("lg")} {
    padding-top: 103px;
    padding-bottom: 308px;
  }
  ${up("xl")} {
    padding-top: 122px;
    padding-bottom: 367px;
  }
  ${up("xxl")} {
    padding-top: 156px;
    padding-bottom: 452px;
  }
`
export const AppSlider = styled.div`
  position: absolute;
  top: 180px;
  width: 100%;
  ${up("sm")} {
    top: 389px;
  }
  ${up("md")} {
    top: 284px;
  }
  ${up("lg")} {
    top: 244px;
  }
  ${up("xl")} {
    top: 292px;
  }
  ${up("xxl")} {
    top: 363px;
  }
`
export const AppSlide = styled.div`
  box-shadow: 0 12px 43px rgba(83, 96, 129, 0.17);
  margin: 0 20px;
  ${up("sm")} {
    width: 301px;
    box-shadow: 0 20px 73px rgba(83, 96, 129, 0.17);
  }
  ${up("md")} {
    width: 168px;
    box-shadow: 0 10px 38px rgba(83, 96, 129, 0.17);
  }
  ${up("lg")} {
    width: 203px;
    box-shadow: 0 13px 46px rgba(83, 96, 129, 0.17);
  }
  ${up("xl")} {
    width: 242px;
    box-shadow: 0 15px 53px rgba(83, 96, 129, 0.17);
  }
  ${up("xxl")} {
    width: 301px;
    box-shadow: 0 20px 73px rgba(83, 96, 129, 0.17);
  }
`