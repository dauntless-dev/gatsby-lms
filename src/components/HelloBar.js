import React from "react"
import {StaticQuery, graphql} from "gatsby"
import styled from "styled-components"

const Bar = () => (
  <div>
    {/*
    <Pusher />
    <MezzoBar>
      <strong>
        <u>EPIC</u>
      </strong>{" "}
      CYBER MONDAY <span style={{color: `#f44336`}}>Japanese</span> Course{" "}
      <b>
        <u>SALE</u>
      </b>{" "}
      <strong>(60% OFF + Ending Soon!):</strong>{" "}
      <HelloButton
        href="https://1980f7qxcdhnr9poyvwy11-a9n.hop.clickbank.net/?tid=FREEJAPBAR"
        target="_blank"
        rel="noopener">
        SHOW ME
      </HelloButton>
    </MezzoBar>
    */}
  </div>
)

export default Bar

const Pusher = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  height: 27px;
  @media only screen and (max-width: 600px) {
    height: 49px;
  }
`
const MezzoBar = styled.div`
  background-color: #262626;
  color: #fff;
  position: fixed;
  z-index: 9999;
  width: 100%;
  padding: 0.2em 0.5em 0.2em 0.5em;
  font-size: 1em;
  font-family: "Jost";
  font-weight: 400;
  text-align: center;
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.15);
  bottom: 0;

  -webkit-animation: mezzobar 1s ease forwards;
  -moz-animation: mezzobar 1s ease forwards;
  animation: mezzobar 1s ease forwards;

  -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s;
  animation-delay: 2s;
`
const HelloButton = styled.a`
  background-color: #f44336;
  border-color: #5c3773 !important;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  font-weight: 700 !important;
  font-size: 1em !important;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem !important;
  webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 4px 35px 0 rgba(255, 255, 255, 0.4),
      0 6px 35px 0 rgba(255, 255, 255, 0.4) !important;
    color: #fff !important;
  }
`
