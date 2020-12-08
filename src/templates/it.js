import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import styled from "@emotion/styled";
import { Layout, Link } from "$components";
import NextPrevious from '../components/NextPrevious';
import '../components/styles.css';
import config from '../../config';
import { Divide } from "react-feather";

const forcedNavOrder = config.sidebar.forcedNavOrder;

const Edit = styled('div')`
  padding: 1rem 1.5rem;
  text-align: right;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    text-decoration: none;
    color: #555;
    border: 1px solid rgb(211, 220, 228);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: rgb(36, 42, 49);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px;
    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
`;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;
    if(!data) {
      return null;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title }
      }
    } = data;
    const gitHub = require('../components/images/github.svg');
    const Facebook = require('../components/images/fb.svg');

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter(slug => slug !== "/")
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find(url => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          const prefix = cur.split("/")[1];

          if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map(slug => {
        if(slug) {
          const { node } = allMdx.edges.find(
            ({ node }) => node.fields.slug === slug
          );

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;
    const subTitle = mdx.frontmatter.subtitle;
    const metaDescription = mdx.frontmatter.metaDescription;
    const keywords = mdx.frontmatter.keywords;
    let canonicalUrl = config.gatsby.siteUrl;
    canonicalUrl = config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    const isFront = canonicalUrl === "https://freejapaneselessons.com/"

    const hasRank = mdx.frontmatter.rank !== null

    return (
      <Layout {...this.props} lang="it">
        <Helmet htmlAttributes={{
    lang: 'it',
  }}>
          {metaTitle ? <title>{metaTitle + ` - ` + config.header.title}</title> : null }
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="twitter:description" content={metaDescription} /> : null}
          {keywords ? <meta name="keywords" http-equiv="keywords" content={keywords}></meta> : null}
          <meta property="og:image" content="/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property='og:type' content='article' />
          <meta property="og:url" content={isFront ? canonicalUrl : (canonicalUrl + '/')} />
          <link rel="canonical" href={isFront ? canonicalUrl : (canonicalUrl + '/')} />
        </Helmet>
        <div className={'titleWrapper'}>
          <div className={'title'}>
            {mdx.frontmatter.subtitle}
          </div>
    <h1>{mdx.fields.title}</h1>
          <Edit className={'mobileView'}>
            
          </Edit>
        </div>
        <div className={'mainWrapper'}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
        {hasRank && (
        <div className={'addPaddTopBottom'}>
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
        )}

{/*START BLACK FRIDAY

<div className="anndiv">
<h2 style={{textAlign:`center`}}>EPIC <span style={{color:`#f44336`}}>Black Friday</span> Japanese Course Sale (2020)</h2>
<p style={{textAlign:`center`, padding:`0 20px`}}>This is without doubt the best time of the year to take advantage of Japanese courses at heavily reduced prices.</p>
<p style={{textAlign:`center`, padding:`0 20px`}}><strong>We've located the best Japanese products and offers for you here:</strong></p>
<ul style={{listStyleType: `none`,padding:`0 20px`}}>
	<li className="annli"><a href="https://1980f7qxcdhnr9poyvwy11-a9n.hop.clickbank.net/?tid=FREEJAPLESSONSBF" target="_blank" rel="noreferrer noopener nofollow" style={{color:`#f44336`}}><strong>Rocket Japanese:</strong></a> 60% off all 3 levels of their very popular Japanese course.</li>
	<li className="annli"><a href="https://learn.iwillteachyoualanguage.com/bf-japanese-beginner-sales?affiliate_id=420071" target="_blank" rel="noreferrer noopener nofollow" style={{color:`#f44336`}}><strong>Japanese Uncovered:</strong></a> Huge discount on this popular story-based course for Japanese.</li>
	<li className="annli"><a href="https://www.japanesepod101.com/member/go.php?r=1254366&l=%2F" target="_blank" rel="noreferrer noopener nofollow" style={{color:`#f44336`}}><strong>JapanesePod101:</strong></a> Huge discount on their famous Japanese course.</li>
	<li className="annli"><a href="https://aff.babbel.com/go.cgi?pid=139&wmid=8&cpid=1&prid=1&subid=&target=eng_general" target="_blank" rel="noreferrer noopener nofollow" style={{color:`#f44336`}}><strong>Babbel Japanese:</strong></a> 50% off their Japanese course.</li>
	<li className="annli"><a href="https://shop.mondly.com/affiliate.php?ACCOUNT=ATISTUDI&AFFILIATE=36725&PATH=https%3A%2F%2Fwww.mondly.com%2Foffer%2Fmezzoguild%3FAFFILIATE%3D36725" target="_blank" rel="noreferrer noopener nofollow" style={{color:`#f44336`}}><strong>Mondly Japanese:</strong></a> Massive discount on all their language courses including Japanese.</li>
	<li className="annlibottom"><a href="https://speechling.com/?referral=MGUILD" target="_blank" rel="noreferrer noopener nofollow" style={{color:`#f44336`}}><strong>Speechling Japanese:</strong></a> 30% off their popular, non-profit Japanese program.</li>
</ul>
</div>

END BLACK FRIDAY*/}

        <div className={'copyright'}>
        © Free Japanese Lessons, {(new Date().getFullYear())}. NAGEL LLC. <Link to="/privacy-policy/">Privacy</Link>.
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        subtitle
        metaDescription
        keywords
        rank
      }
    }
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
`;
