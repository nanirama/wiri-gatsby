import React from "react"

export const SVG = ({ svg, className }) => (
  <span
    className={className}
    dangerouslySetInnerHTML={{
      __html: svg,
    }}
  ></span>
)
