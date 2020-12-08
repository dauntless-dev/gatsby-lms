import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "../../components/NavBar"
import Table from "@components/Table"

const title = "The Other Japanese Alphabet"

const katakana = [
  {"漢字 - Kanji": "", "ひらがな - Hiragana": "", "Romaji (English Letters)": "", "English Meaning": "", "audio": ""}
]

const Katakana = () => {

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
     Katakana
      </div>
      <h1>{title}</h1>

    </>
  )
}

export default Katakana