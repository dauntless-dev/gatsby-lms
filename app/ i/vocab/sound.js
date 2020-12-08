import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "../../components/NavBar"
import Table from "@components/Table"

const title = "Animals, Colors, and Shapes"

const tableanimals = [
  {"漢字 - Kanji": "", "ひらがな - Hiragana": "", "Romaji (English Letters)": "", "English Meaning": "", "audio": ""}
]

const tablecolors = [
  {"漢字 - Kanji": "", "ひらがな - Hiragana": "", "Romaji (English Letters)": "", "English Meaning": "", "audio": ""}
]

const tableshapes = [
  {"漢字 - Kanji": "", "ひらがな - Hiragana": "", "Romaji (English Letters)": "", "English Meaning": "", "audio": ""}
]

const tablesentences = [
  {"漢字 - Kanji": "", "ひらがな - Hiragana": "", "Romaji (English Letters)": "", "English Meaning": "", "audio": ""}
]

const tablevocab = [
  {"漢字 - Kanji": "", "ひらがな - Hiragana": "", "Romaji (English Letters)": "", "English Meaning": "", "audio": ""}
]

const VocabFiveB = () => {

  return (
    <>
      <Helmet htmlAttributes={{
    lang: 'en',
    }}>
    {title ? <title>{title}</title> : null }
    {title ? <meta name="title" content={title} /> : null}
    </Helmet>
    <NavBar level="Beginner" category="Vocabulary" lesson="Beginning Vocabulary Part 1" />
     <div className={'title'}>
     Basic Vocabulary and Phrases
      </div>
      <h1>{title}</h1>
      <p>
      Below are a number of Japanese vocabulary words associated with animals, colors, and shapes. All words are nouns unless otherwise specified. Please note that the example sentences will be done in plain form with the polite form in parentheses. Due to the complexity of the kanji for many animals, they are often written in katakana although they are not borrowed words. We will identify those where the kanji is rarely used.
      </p>
      <h2>Animals</h2>

      <Table data={tableanimals} />

      <h2>Colors</h2>

      <Table data={tablecolors} />

      <h2>Shapes</h2>

      <Table data={tableshapes} />

      <p>Here are some example sentences:</p>

      <Table data={tablesentences} />

      <Table data={tablevocab} />

    </>
  )
}

export default VocabFiveB