import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';
import styled from '@emotion/styled';
import {ExternalLink} from 'react-feather';
import '../../../src/components/styles.css';

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({className, active, level, ...props}) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} />
    </li>
  );
})`
  list-style: none;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: ${({level}) => (level === 0 ? 700 : 400)};
    font-size: 18px;
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #f44336 !important;
    }

    ${props =>
      props.active &&
      `
      color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const Sidebar = styled('aside')`
  width: 100%;
  /* background-color: rgb(245, 247, 249); */
  /* border-right: 1px solid #ede7f3; */
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;
  //padding-bottom: 40px;
  background: rgb(35,35,35);
background-color: linear-gradient(180deg, rgba(35,35,35,1) 0%, rgba(203,203,203,1) 100%);
background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjAuNzI0bW0iIGhlaWdodD0iMzMuMDgxbW0iIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIwLjcyNCAzMy4wODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0LjA3IC03Mi42NDgpIj4KICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNy45OTMgNjYuNzA5IDkxLjQzOSkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iLjIxMjk1IiBmb250LWZhbWlseT0iVHJ5a2tlciIgZm9udC1zaXplPSIxMC41ODNweCIgbGV0dGVyLXNwYWNpbmc9IjBweCIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgiIHdvcmQtc3BhY2luZz0iMHB4Ij4KICAgPHRleHQgdHJhbnNmb3JtPSJyb3RhdGUoMjMuNDE3KSIgeD0iODIuODQ4OTUzIiB5PSI1Mi4xNzIxODgiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4geD0iODIuODQ4OTUzIiB5PSI1Mi4xNzIxODgiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iLjIxMjk1IiBzdHJva2Utd2lkdGg9Ii4yNjQ1OCI+5pelPC90c3Bhbj48L3RleHQ+CiAgIDx0ZXh0IHRyYW5zZm9ybT0icm90YXRlKC03LjY1NDEpIiB4PSI1MC42MjI3ODciIHk9IjEwMi4wOTE2MiIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbiB4PSI1MC42MjI3ODciIHk9IjEwMi4wOTE2MiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIuMjEyOTUiIHN0cm9rZS13aWR0aD0iLjI2NDU4Ij7mnKw8L3RzcGFuPjwvdGV4dD4KICAgPHRleHQgdHJhbnNmb3JtPSJyb3RhdGUoLTEyLjcwOSkiIHg9IjMzLjA3ODU3OSIgeT0iMTE3LjcwNjkyIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHRzcGFuIHg9IjMzLjA3ODU3OSIgeT0iMTE3LjcwNjkyIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9Ii4yMTI5NSIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgiPuiqnjwvdHNwYW4+PC90ZXh0PgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==");
  
background-repeat: no-repeat;
background-size: contain;
background-position: bottom center;

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    //background: rgb(35,35,35);
//background: linear-gradient(180deg, rgba(35,35,35,1) 0%, rgba(203,203,203,1) 100%);
    height: auto;
  }
`;
const TopUL = styled.ul`
background: rgb(35,35,35);
background-color: linear-gradient(180deg, rgba(35,35,35,1) 0%, rgba(203,203,203,1) 100%);
background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjAuNzI0bW0iIGhlaWdodD0iMzMuMDgxbW0iIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIwLjcyNCAzMy4wODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0LjA3IC03Mi42NDgpIj4KICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNy45OTMgNjYuNzA5IDkxLjQzOSkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iLjIxMjk1IiBmb250LWZhbWlseT0iVHJ5a2tlciIgZm9udC1zaXplPSIxMC41ODNweCIgbGV0dGVyLXNwYWNpbmc9IjBweCIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgiIHdvcmQtc3BhY2luZz0iMHB4Ij4KICAgPHRleHQgdHJhbnNmb3JtPSJyb3RhdGUoMjMuNDE3KSIgeD0iODIuODQ4OTUzIiB5PSI1Mi4xNzIxODgiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4geD0iODIuODQ4OTUzIiB5PSI1Mi4xNzIxODgiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iLjIxMjk1IiBzdHJva2Utd2lkdGg9Ii4yNjQ1OCI+5pelPC90c3Bhbj48L3RleHQ+CiAgIDx0ZXh0IHRyYW5zZm9ybT0icm90YXRlKC03LjY1NDEpIiB4PSI1MC42MjI3ODciIHk9IjEwMi4wOTE2MiIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbiB4PSI1MC42MjI3ODciIHk9IjEwMi4wOTE2MiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIuMjEyOTUiIHN0cm9rZS13aWR0aD0iLjI2NDU4Ij7mnKw8L3RzcGFuPjwvdGV4dD4KICAgPHRleHQgdHJhbnNmb3JtPSJyb3RhdGUoLTEyLjcwOSkiIHg9IjMzLjA3ODU3OSIgeT0iMTE3LjcwNjkyIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHRzcGFuIHg9IjMzLjA3ODU3OSIgeT0iMTE3LjcwNjkyIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9Ii4yMTI5NSIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgiPuiqnjwvdHNwYW4+PC90ZXh0PgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==");
  
background-repeat: no-repeat;
background-size: contain;
background-position: bottom center;
padding-bottom:20px;
padding-top:20px;
margin-top:0px !important;
`
const BottomUL = styled.ul`
background:#303030;
-moz-box-shadow:    inset 0 0 5px #000000;
   -webkit-box-shadow: inset 0 0 5px #000000;
   box-shadow:         inset 0 0 5px #000000;
padding-bottom:20px;
padding-top:20px;
margin-top:0px !important;
`

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  //padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #262626;
  }
`;

const SidebarLayout = ({location, lang}) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({allMdx}) => {

      const url = location
      
      if(typeof(document) != 'undefined') {
        location = document.location;
      }
      const active =
          location && (location.pathname === url || location.pathname === ('/' + url));
        const calculatedClassName = `item ${active ? 'active' : ''}`;

      return (
        <Sidebar>
          
            <TopUL className={'sideBarUL'}>
           
     
            <li className={calculatedClassName}><Link to="#" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Basics</span><span>Names In Japanese</span></div></Link></li>
            <li className={calculatedClassName}><Link to="#" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Basics</span><span>Hiragana</span></div></Link></li>
            <li className={calculatedClassName}><Link to="#" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Basics</span><span>Writing Hiragana (A-Ko)</span></div></Link></li>
            <li className={calculatedClassName}><Link to="#" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Basics</span><span>Writing Hiragana (Sa-To)</span></div></Link></li>
            <li className={calculatedClassName}><Link to="#" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Basics</span><span>Writing Hiragana (Na-Ho)</span></div></Link></li>
            <li className={calculatedClassName}><Link to="#" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Basics</span><span>Writing Hiragana (Ma-Yo)</span></div></Link></li>
            <li className={calculatedClassName}><Link to="#" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Basics</span><span>Writing Hiragana (Ra-N)</span></div></Link></li>
            <li className={calculatedClassName}><Link to="#" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Basics</span><span>Katakana</span></div></Link></li>
          </TopUL>
          <Divider />


        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
