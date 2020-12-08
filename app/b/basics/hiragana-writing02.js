import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "../../components/NavBar"
import Table from "@components/Table"

const title = "Writing (Sa-To)"

const hiraganawriting = [
  {"漢字 - Kanji": "", "ひらがな - Hiragana": "", "Romaji (English Letters)": "", "English Meaning": "", "audio": ""}
]

const HiraganaWritingTwo = () => {

  return (
    <>
    <Helmet htmlAttributes={{
    lang: 'en',
    }}>
    {title ? <title>{title}</title> : null }
    {title ? <meta name="title" content={title} /> : null}
    </Helmet>
    <NavBar level="Beginner" category="Phrases" lesson={title} />
     <div className={'title'}>
     {title}
      </div>
      <h1>{title}</h1>

    </>
  )
}

export default HiraganaWritingTwo