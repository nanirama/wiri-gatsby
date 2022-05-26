import * as React from "react"
import { navigate } from "gatsby"

export default function Component(props) {
  //console.log(props)
  const uri = props.location.pathname.substring(1) // remove first slash
  const path = uri.substring(uri.indexOf("/")) // get the main uri without the language
  if (uri !== path && uri.indexOf("/")===2) {
    navigate(path)
  }
  return <></>
}