import React from 'react';
import Tree from './tree';
import {StaticQuery, graphql, Link} from 'gatsby';
import styled from '@emotion/styled';
import {ExternalLink} from 'react-feather';
import '../styles.css';
import config from '../../../config';
import {Italian} from '../images/Italian'
import {Spanish} from '../images/Spanish'
import {Portuguese} from '../images/Portuguese'
import {German} from '../images/German'
import {English} from '../images/English'

const forcedNavOrder = config.sidebar.forcedNavOrder;

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

      const isGerman = lang === "de"
      const isItalian = lang === "it"
      const isSpanish = lang === "es"
      const isPortuguese = lang === "por"
      const isEnglish = lang === "en"
      
      if(typeof(document) != 'undefined') {
        location = document.location;
      }
      const active =
          location && (location.pathname === url || location.pathname === (config.gatsby.pathPrefix + url));
        const calculatedClassName = `item ${active ? 'active' : ''}`;

      return (
        <Sidebar>
          
            <TopUL className={'sideBarUL'}>
            {isPortuguese ? (
              <>
              <li className={calculatedClassName}><Link to="/por/alfabeto-japones/" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lição 1</span><span>Hiragana</span></div></Link></li>
              <li className={calculatedClassName}><Link to="/por/katakana/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lição 2</span><span>Katakana</span></div></Link></li>
              <li className={calculatedClassName}><Link to="/por/vocabulario-basico-e-expressoes/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lição 3</span><span>Vocabulário básico e expressões</span></div></Link></li>
              <li className={calculatedClassName}><Link to="/por/gramatica-basica/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lição 4</span><span>Gramática Básica</span></div></Link></li>
              <li className={calculatedClassName}><Link to="/por/numeros-horas-datas/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lição 5</span><span>Números, horas, datas, etc.</span></div></Link></li>
              <li className={calculatedClassName}><Link to="/por/conjugacao-verbal/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lição 6</span><span>Conjugação verbal</span></div></Link></li>
              <li className={calculatedClassName}><Link to="/por/conjugacao-verbal-continua/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lição 7</span><span>Conjugação verbal contínua</span></div></Link></li>
              <li className={calculatedClassName}><Link to="/por/usando-as-bases-dos-verbos/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lição 8</span><span>Usando as Bases dos Verbos</span></div></Link></li>
              <li className={calculatedClassName}><Link to="/por/palavras-descritivas/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lição 9</span><span>Palavras descritivas</span></div></Link></li>
              <li className={calculatedClassName}><Link to="/por/mais/" activeStyle={{ backgroundColor: "#f44336"}}>🎓 Mais Lições</Link></li>
              </>
            ) : isGerman ? (
              <>
            <li className={calculatedClassName}><Link to="/de/das-japanische-alphabet/" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lehrstunde 1</span><span>Das Japanische Alphabet</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/de/katakana/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lehrstunde 2</span><span>Das Andere Japanische Alphabet</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/de/grundwortschatz-redensarten/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lehrstunde 3</span><span>Grundwortschatz u. Redensarten</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/de/grundgrammatik/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lehrstunde 4</span><span>Grundgrammatik</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/de/zahlen-zeit-datum/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lehrstunde 5</span><span>Zahlen, Zeit, Datum</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/de/verbkonjugation/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lehrstunde 6</span><span>Verbkonjugation</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/de/verbkonjugation-fortsetzung/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lehrstunde 7</span><span>Verbkonjugation (Fortsetzung)</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/de/verwendung-verb-wortstamme/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lehrstunde 8</span><span>Verwendung der Verb-Wortstämme</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/de/beschreibende-worter/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lehrstunde 9</span><span>Beschreibende Wörter</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/de/mehr/" activeStyle={{ backgroundColor: "#f44336"}}>🎓 Willst du mehr?</Link></li>
            </>
            ) : isItalian ? (
              <>
            <li className={calculatedClassName}><Link to="/it/alfabeto-giapponese/" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lezione 1</span><span>Hiragana</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/it/katakana/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lezione 2</span><span>Katakana</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/it/vocabolario-e-modi-di-dire-essenziali/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lezione 3</span><span>Vocabolario e modi di dire essenziali</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/it/grammatica-fondamentale/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lezione 4</span><span>Grammatica fondamentale</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/it/numeri-ora-data/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lezione 5</span><span>Numeri, ora, data, ecc.</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/it/coniugazione-di-verbi/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lezione 6</span><span>Coniugazione di verbi</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/it/coniugazione-di-verbi-continuazione/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lezione 7</span><span>Coniugazione di verbi, continuazione</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/it/utilizzando-le-radici-di-verbi/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lezione 8</span><span>Utilizzando le radici di verbi</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/it/descrittive-parole/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lezione 9</span><span>Descrittive parole</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/it/dipiu/" activeStyle={{ backgroundColor: "#f44336"}}>🎓 Più lezioni</Link></li>
            </>
            ) : isSpanish ? (
              <>
            <li className={calculatedClassName}><Link to="/es/alfabeto-japones/" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lección 1</span><span>Hiragana</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/es/katakana/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lección 2</span><span>Katakana</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/es/vocabulario-basico-y-frases/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lección 3</span><span>Vocabulario básico y frases</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/es/gramatica-basica/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lección 4</span><span>Gramática básica</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/es/numeros-hora-fechas/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lección 5</span><span>Números, hora, fechas, etc.</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/es/conjugacion-verbal/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lección 6</span><span>Conjugación Verbal</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/es/conjugacion-verbal-continuacion/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lección 7</span><span>Continuación de la Conjugación de Verbos</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/es/uso-de-las-bases-del-verbo/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lección 8</span><span>El uso de las Bases del verbo</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/es/palabras-descriptivas/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lección 9</span><span>Palabras descriptivas</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/es/mas/" activeStyle={{ backgroundColor: "#f44336"}}>🎓 Más lecciones</Link></li>
            </>
            ) : (
              
            <>
            <li className={calculatedClassName}><Link to="/japanese-alphabet-hiragana/" activeStyle={{ backgroundColor: "#f44336" }} ><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 1</span><span>Hiragana</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/katakana/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 2</span><span>Katakana</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/basic-vocabulary-phrases/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 3</span><span>Basic Vocabulary & Phrases</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/basic-grammar/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 4</span><span>Basic Japanese Grammar</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/numbers-time-date/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 5</span><span>Numbers, Time & Dates</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/verb-conjugation/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 6</span><span>Verb Conjugation</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/more-verb-conjugation/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 7</span><span>More Verb Conjugation</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/verb-bases/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 8</span><span>Verb Bases</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/adjectives-adverbs/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 9</span><span>Adjectives & Adverbs</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/useful-phrases/" activeStyle={{ backgroundColor: "#f44336"}}><div style={{display:`flex`, flexDirection:`column`}}><span style={{color:`#9e9e9e`, fontSize:`.6rem`, textTransform:`uppercase`}}>Lesson 10</span><span>Useful Phrases</span></div></Link></li>
            <li className={calculatedClassName}><Link to="/register/" activeStyle={{ backgroundColor: "#f44336"}}>🎓 More Lessons</Link></li>
            </>
            )}

          </TopUL>
          <Divider />

{isEnglish ? (
          <BottomUL className={'sideBarUL'}>
          <li className={calculatedClassName}><Link to="/my-name-in-japanese/">Names in Japanese</Link>
          
          </li>
          <li className={calculatedClassName}><Link to="/japanese-software/">Software</Link></li>
          <li className={calculatedClassName}><Link to="/books-for-learning-japanese/">Books</Link></li>
          <li className={calculatedClassName}><Link to="/lds-missionaries/">For LDS Missionaries</Link></li>
          <li className={calculatedClassName}><Link to="/faq/">FAQ</Link></li>
          <li className={calculatedClassName}><Link to="/contact/">✉️ Contact</Link></li>
          <li className="flag">
            
            <a href="/it/" aria-label="Italiano" ><Italian height="40px" /></a>
            <a href="/es/" aria-label="Espanol" ><Spanish height="40px" /></a>
            <a href="/de/" aria-label="Deutsch" ><German height="40px" /></a>
            <a href="/por/" aria-label="Portugues" ><Portuguese height="40px" /></a>
            
            </li>

          </BottomUL>
) : isGerman ? (
  <BottomUL className={'sideBarUL'}>
          <li className="flag">
            
            <a href="/it/" aria-label="Italiano" ><Italian height="40px" /></a>
            <a href="/es/" aria-label="Espanol" ><Spanish height="40px" /></a>
            <a href="/" aria-label="English" ><English height="40px" /></a>
            <a href="/por/" aria-label="Portugues" ><Portuguese height="40px" /></a>
            
            </li>

          </BottomUL>
) : isItalian ? (
  <BottomUL className={'sideBarUL'}>
          <li className="flag">
            
          <a href="/" aria-label="English" ><English height="40px" /></a>
            <a href="/es/" aria-label="Espanol" ><Spanish height="40px" /></a>
            <a href="/de/" aria-label="Deutsch" ><German height="40px" /></a>
            <a href="/por/" aria-label="Portugues" ><Portuguese height="40px" /></a>
            
            </li>

          </BottomUL>
) : isSpanish ? (
  <BottomUL className={'sideBarUL'}>
          <li className="flag">
            
            <a href="/it/" aria-label="Italiano" ><Italian height="40px" /></a>
            <a href="/" aria-label="English" ><English height="40px" /></a>
            <a href="/de/" aria-label="Deutsch" ><German height="40px" /></a>
            <a href="/por/" aria-label="Portugues" ><Portuguese height="40px" /></a>
            
            </li>

          </BottomUL>
) : (
  <BottomUL className={'sideBarUL'}>
          <li className="flag">
            
            <a href="/it/" aria-label="Italiano" ><Italian height="40px" /></a>
            <a href="/es/" aria-label="Espanol" ><Spanish height="40px" /></a>
            <a href="/de/" aria-label="Deutsch" ><German height="40px" /></a>
            <a href="/" aria-label="English" ><English height="40px" /></a>
            
            </li>

          </BottomUL>
)}
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
