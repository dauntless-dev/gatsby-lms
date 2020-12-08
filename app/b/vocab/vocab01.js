import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "../../components/NavBar"
import Table from "@components/Table"

const title = "Beginning Vocabulary Part 1"

const vocabdata = [
  {"Kanji": "私", "Hiragana": "わたし", "Romaji (English Letters)": "watashi", "English Meaning": "I (formal for males, normal for females)", "audio": "watashi"},
  {"Kanji": "僕", "Hiragana": "ぼく", "Romaji (English Letters)": "boku", "English Meaning": "I (normal for males)", "audio": "boku"},
  {"Kanji": "彼", "Hiragana": "かれ", "Romaji (English Letters)": "kare", "English Meaning": "he", "audio": "kare"},
  {"Kanji": "彼女", "Hiragana": "かのじょ", "Romaji (English Letters)": "kanojo", "English Meaning": "she", "audio": "kanojo"},
  {"Kanji": "あなた", "Hiragana": "あなた", "Romaji (English Letters)": "anata", "English Meaning": "you (singular/normal)", "audio": "anata"},
  {"Kanji": "これ", "Hiragana": "これ", "Romaji (English Letters)": "kore", "English Meaning": "this (noun)", "audio": "kore"},
  {"Kanji": "ここ", "Hiragana": "ここ", "Romaji (English Letters)": "koko", "English Meaning": "here", "audio": "koko"},
  {"Kanji": "この", "Hiragana": "この", "Romaji (English Letters)": "kono", "English Meaning": "this (descriptive - ex. this pen)", "audio": "kono"},
  {"Kanji": "それ", "Hiragana": "それ", "Romaji (English Letters)": "sore", "English Meaning": "that (noun)", "audio": "sore"},
  {"Kanji": "そこ", "Hiragana": "そこ", "Romaji (English Letters)": "soko", "English Meaning": "there", "audio": "soko"},
  {"Kanji": "その", "Hiragana": "その", "Romaji (English Letters)": "sono", "English Meaning": "that (descriptive - ex. that pen)", "audio": "sono"},
  {"Kanji": "人", "Hiragana": "ひと", "Romaji (English Letters)": "hito", "English Meaning": "person", "audio": "hito"},
  {"Kanji": "犬", "Hiragana": "いぬ", "Romaji (English Letters)": "inu", "English Meaning": "dog", "audio": "inu"},
  {"Kanji": "猫", "Hiragana": "ねこ", "Romaji (English Letters)": "neko", "English Meaning": "cat", "audio": "neko"},
  {"Kanji": "家", "Hiragana": "いえ", "Romaji (English Letters)": "ie", "English Meaning": "house", "audio": "ie"},
  {"Kanji": "ありがとう", "Hiragana": "ありがとう", "Romaji (English Letters)": "arigatou", "English Meaning": "Thank you. (normal)", "audio": "arigatou"},
  {"Kanji": "ありがとう ございます", "Hiragana": "ありがとう ございます", "Romaji (English Letters)": "arigatou gozaimasu", "English Meaning": "Thank you. (formal)", "audio": "arigatou gozaimasu"},
  {"Kanji": "どういたしまして", "Hiragana": "どういたしまして", "Romaji (English Letters)": "douitashimashite", "English Meaning": "You're welcome. (normal)", "audio": "douitashimashite"},
  {"Kanji": "おはよう", "Hiragana": "おはよう", "Romaji (English Letters)": "ohayou (sounds like 'Ohio')", "English Meaning": "Good morning. (informal)", "audio": "ohayou"},
  {"Kanji": "おはようございます", "Hiragana": "おはようございます", "Romaji (English Letters)": "ohayou gozaimasu", "English Meaning": "Good morning. (normal and formal)", "audio": "ohayou gozaimasu"},
  {"Kanji": "こんにちは", "Hiragana": "こんにちは", "Romaji (English Letters)": "konnichiwa", "English Meaning": "Hello. (normal)", "audio": "konnichiwa"},
  {"Kanji": "こんばんは", "Hiragana": "こんばんは", "Romaji (English Letters)": "konbanwa", "English Meaning": "Good evening. (normal)", "audio": "konbanwa"},
  {"Kanji": "さよなら", "Hiragana": "さよなら", "Romaji (English Letters)": "sayonara", "English Meaning": "Goodbye. (normal)", "audio": "sayonara"},
  {"Kanji": "頑張ってください", "Hiragana": "がんばってください", "Romaji (English Letters)": "gambatte kudasai (can also be written 'ganbatte kudasai')", "English Meaning": "Hang in there", "audio": "gambatte kudasai"},
  {"Kanji": "気をつけてください", "Hiragana": "きをつけてください", "Romaji (English Letters)": "ki o tsukete kudasai (can also be written 'ki wo tsukete kudasai')", "English Meaning": "Be careful, Take care", "audio": "ki o tsukete kudasai"}
]

const VocabOneB = () => {

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
      <p>Now that you've at least started learning the Japanese alphabets, let's learn some basic vocabulary words and simple Japanese phrases. I will list the Kanji , Hiragana , Romaji (the word sounded out using English letters), and the English meaning for each Japanese word or phrase. Most Japanese words have Kanji for them but I will only include the Kanji if that word is typically written that way.</p>

<p>Keep in mind that the Japanese language has different levels of politeness that change based on who you are talking to. I will refer to these as "ultra-formal", "formal" (or "polite form"), "normal" (or "plain form"), "informal", and "rude" (we won't be covering too much of the rude form, however).</p>

<p>Click on the 🔊 image next to each word or phrase to hear how they are pronounced.</p>

<Table data={vocabdata} />

    </>
  )
}

export default VocabOneB