import React from 'react';
import {StaticQuery, graphql, navigate} from 'gatsby';
import GitHubButton from 'react-github-btn';
import Link from './link';
import './styles.css';
import config from '../../config.js';

import { handleLogin } from '../../app/services/auth'

import Loadable from 'react-loadable';
import LoadingProvider from './mdxComponents/loading';

const help = require('./images/help.svg');
const isSearchEnabled =
  config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];
if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import Sidebar from './sidebar';

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

const handleSubmit = () => {handleLogin(user => navigate(`/members/`))}

function myFunction() {
  var x = document.getElementById('navbar');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const Header = ({location, lang}) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={data => {
      const logoImg = require('./images/logo.svg');
      const twitter = require('./images/twitter.svg');
      const {
        site: {
          siteMetadata: {
            headerTitle,
            githubUrl,
            helpUrl,
            tweetText,
            logo,
            headerLinks,
          },
        },
      } = data;
      const finalLogoLink = logo.link !== '' ? logo.link : '/';
      const isEnglish = lang === "en"
      const isGerman = lang === "de"
      const isSpanish = lang === "es"
      const isItalian = lang === "it"
      const isPortuguese = lang === "por"

      //const { user, isLoggedIn, logoutUser, identity } = useIdentityContext()
      //const [dialog, setDialog] = React.useState(false)

      return (
        <div className={'navBarWrapper'}>
          <div className={'navBarBorder'} />
          <nav className={'navBarDefault'}>
            <div className={'navBarHeader'}>
              <Link to={isEnglish ? "/" : ("/" + lang + "/")} className={'navBarBrand'}>
                <img className="img-responsive displayInline" src="/logo.svg" alt="Free Japanese Lessons" />
                
              </Link>
              {/*
	      <div
                className={'headerTitle displayInline'}
                dangerouslySetInnerHTML={{__html: headerTitle}}
		/>
		*/}
              <span onClick={myFunction} className={'navBarToggle'}>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper hiddenMobile navBarUL'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
            <div id="navbar" className={'topnav'}>
              <div className={'visibleMobile'}>
                <Sidebar location={location} lang={lang} />
                <hr />
                {isSearchEnabled ? (
                  <div className={'searchWrapper'}>
                    <LoadableComponent
                      collapse={true}
                      indices={searchIndices}
                    />
                  </div>
                ) : null}
              </div>
              <ul className={'navBarUL navBarNav navBarULRight'}>
                
                {isEnglish ? (
                <li className="navButton">
                        <a
                          style={{cursor:`pointer`}}
                          onClick={async event => {
                            event.preventDefault()
                            await handleSubmit()
                          }}
                        >
                          Members
                        </a>
                      </li>
                ) : isGerman ? (
<li className="navButton">
<a
                          style={{cursor:`pointer`}}
                          
                        >
                          Mitglieder
                        </a>
                      </li>
                ) : isSpanish ? (
<li className="navButton">
<a
                          style={{cursor:`pointer`}}
                          
                        >
                          Miembros
                        </a>
                      </li>
                ) : isItalian ? (
<li className="navButton">
<a
                          style={{cursor:`pointer`}}
                          
                        >
                          Membri
                        </a>
                      </li>
                ) : (
<li className="navButton">
<a
                          style={{cursor:`pointer`}}
                          
                        >
                          Membros
                        </a>
                      </li>
                )}
                
                {/*
                  <li className="navButton">
                  <a
                  href="/"
                  onClick={async event => {
                    event.preventDefault()
                    await handleSubmit()
                    navigate(`/members/login/`)
                  }}
                >
                  Logout
                </a>
                </li>
                */}
              </ul>
              
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
