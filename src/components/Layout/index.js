import * as React from "react"
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"

import Header from "../Header"
import Footer from "../Footer"
// import { theme } from "../styled"


const theme = createTheme({
  sm: "576px",
  md: "769px",
  lg: "993px",
  xl: "1201px",
  xxl: "1441px",
})

const Layout = ( props ) => {
  console.log("Layout", props)
  const childrenWithProps = React.Children.map(
    props.children,
    (child, index) => {
      return React.cloneElement(child, {
        activeDocMeta: props.activeDocMeta,
      })
    }
  )
  
  return (
    <ThemeProvider theme={theme}>
      <Header activeDocMeta={props.activeDocMeta} />
      <main>{childrenWithProps}</main>
      <Footer activeDocMeta={props.activeDocMeta} />
    </ThemeProvider>
  )
}

export default Layout
