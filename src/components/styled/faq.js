import styled from "styled-components"
import { down } from "styled-breakpoints"

export const Inner = styled.div`
  max-width: 556px;
  margin-left: auto;
  margin-right: auto;
`
export const Row = styled.div`
  ${down("lg")} {
    flex-direction: column-reverse;
  }
  ${down("md")} {
    h2 {
      
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  ${down("sm")} {
    h2 {
      max-width: 203px;
    }
  }
`