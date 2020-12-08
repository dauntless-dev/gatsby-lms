import React from "react";
import styled from "@emotion/styled";
import ThemeProvider from "../../src/components/themeProvider";
import Sidebar from "./sidebar";
import RightSidebar from "../../src/components/rightSidebar";
import Bar from "../../src/components/HelloBar"

const Wrapper = styled('div')`
  background: #f4f4f4;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 0px 88px;
  padding-top: 3rem;
  max-width: 750px;

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

const MaxWidth = styled('div')`

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;
const LeftSideBarWidth = styled('div')`
  width: 298px;
`;
const RightSideBarWidth = styled('div')`
  width: 224px;
`;
const Layout = ({ children, location, lang }) => (
  <ThemeProvider location={location} lang={lang}>
    
      <Wrapper>
        <LeftSideBarWidth className={'hiddenMobile'}>
          <Sidebar location={location} lang={lang} />
        </LeftSideBarWidth>
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={'hiddenMobile'}>
          <RightSidebar location={location} lang={lang}/>
        </RightSideBarWidth>
      </Wrapper>
      <Bar />
    
  </ThemeProvider>
);

export default Layout;
