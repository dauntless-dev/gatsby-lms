import React, { Component } from "react"
import styled from "styled-components"

export function ImageMDX(props) {
  const isLeft = props.align === "left"
  const isCenter = props.align === "center"
  return (
    <Figure
      style={{
        float: props.align,
        margin: isLeft ? "0 20px 0 0" : isCenter ? "auto" : "0 0 0 20px",
        maxWidth: props.maxWidth,
        minWidth: props.minWidth
      }}
    >
      {props.children}
      <Caption>{props.caption}</Caption>
    </Figure>
  )
}

ImageMDX.defaultProps = {
  float: "right",
  marginLeft: "20px",
  marginRight: "0",
  maxWidth: "300px",
  minWidth: "100px",
  caption: "",
}

const Figure = styled.figure`
  max-width: ${props => props.maxWidth};
  min-width: ${props => props.minWidth};
  @media only screen and (max-width: 600px) {
    max-width: 200px;
    min-width: 150px;
  }
`

const Caption = styled.figcaption`
  color: #868686;
  font-family: Platform;
  text-align: center;
  margin-bottom: 1rem;
`
