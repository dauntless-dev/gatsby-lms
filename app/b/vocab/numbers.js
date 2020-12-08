import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "../../components/NavBar"
import Table from "@components/Table"

const title = "Numbers, Time, and Dates"

const tableone = [
  {"Kanji": "一", "Hiragana": "いち", "Romaji (English Letters)": "ichi", "English Meaning": "one", "audio": "ichi"},
  {"Kanji": "二", "Hiragana": "に", "Romaji (English Letters)": "ni", "English Meaning": "two", "audio": "ni"},
  {"Kanji": "三", "Hiragana": "さん", "Romaji (English Letters)": "san", "English Meaning": "three", "audio": "san"},
  {"Kanji": "四", "Hiragana": "し", "Romaji (English Letters)": "shi", "English Meaning": "four", "audio": "shi"},
  {"Kanji": "五", "Hiragana": "ご", "Romaji (English Letters)": "go", "English Meaning": "five", "audio": "go"},
  {"Kanji": "六", "Hiragana": "ろく", "Romaji (English Letters)": "roku", "English Meaning": "six", "audio": "roku"},
  {"Kanji": "七", "Hiragana": "しち", "Romaji (English Letters)": "shichi", "English Meaning": "seven", "audio": "shichi"},
  {"Kanji": "八", "Hiragana": "はち", "Romaji (English Letters)": "hachi", "English Meaning": "eight", "audio": "hachi"},
  {"Kanji": "九", "Hiragana": "きゅう", "Romaji (English Letters)": "kyuu", "English Meaning": "nine", "audio": "kyuu"},
  {"Kanji": "十", "Hiragana": "じゅう", "Romaji (English Letters)": "juu", "English Meaning": "ten", "audio": "juu"},
  {"Kanji": "百", "Hiragana": "ひゃく", "Romaji (English Letters)": "hyaku", "English Meaning": "hundred", "audio": "hyaku"}
]

const tabletwo = [
  {"Kanji": "一時", "Hiragana": "いちじ", "Romaji (English Letters)": "ichiji", "English Meaning": "one o'clock", "audio": "ichiji"},
  {"Kanji": "二時", "Hiragana": "にじ", "Romaji (English Letters)": "niji", "English Meaning": "two o'clock", "audio": "niji"},
  {"Kanji": "二時半", "Hiragana": "にじはん", "Romaji (English Letters)": "nijihan", "English Meaning": "two thirty (半 means half)", "audio": "nijihan"},
  {"Kanji": "二時四十五分", "Hiragana": "にじよんじゅうごふん", "Romaji (English Letters)": "nijiyonjuugofun", "English Meaning": "2:45 (分 means minute)", "audio": "nijiyonjuugofun"}
]

const tablethree = [
  {"Kanji": "一月", "Hiragana": "いちがつ", "Romaji (English Letters)": "ichigatsu", "English Meaning": "January", "audio": "ichigatsu"},
  {"Kanji": "二月", "Hiragana": "にがつ", "Romaji (English Letters)": "nigatsu", "English Meaning": "February", "audio": "nigatsu"},
  {"Kanji": "三月", "Hiragana": "さんがつ", "Romaji (English Letters)": "sangatsu", "English Meaning": "March", "audio": "sangatsu"},
  {"Kanji": "四月", "Hiragana": "しがつ", "Romaji (English Letters)": "shigatsu", "English Meaning": "April", "audio": "shigatsu"}
]

const tablefour = [
  {"Kanji": "日曜日", "Hiragana": "にちようび", "Romaji (English Letters)": "nichiyoubi", "English Meaning": "Sunday (日 - sun/day)", "audio": "nichiyoubi"},
  {"Kanji": "月曜日", "Hiragana": "げつようび", "Romaji (English Letters)": "getsuyoubi", "English Meaning": "Monday (月 - moon)", "audio": "getsuyoubi"},
  {"Kanji": "火曜日", "Hiragana": "かようび", "Romaji (English Letters)": "kayoubi", "English Meaning": "Tuesday (火 - fire)", "audio": "kayoubi"},
  {"Kanji": "水曜日", "Hiragana": "すいようび", "Romaji (English Letters)": "suiyoubi", "English Meaning": "Wednesday (水 - water)", "audio": "suiyoubi"},
  {"Kanji": "木曜日", "Hiragana": "もくようび", "Romaji (English Letters)": "mokuyoubi", "English Meaning": "Thursday (木 - tree/wood)", "audio": "mokuyoubi"},
  {"Kanji": "金曜日", "Hiragana": "きんようび", "Romaji (English Letters)": "kinyoubi", "English Meaning": "Friday (金 - gold)", "audio": "kinyoubi"},
  {"Kanji": "土曜日", "Hiragana": "どようび", "Romaji (English Letters)": "doyoubi", "English Meaning": "Saturday (土 - dirt)", "audio": "doyoubi"},
  {"Kanji": "今日", "Hiragana": "きょう", "Romaji (English Letters)": "kyou", "English Meaning": "Today", "audio": "kyou"},
  {"Kanji": "明日", "Hiragana": "あした", "Romaji (English Letters)": "ashita", "English Meaning": "Tomorrow", "audio": "ashita"},
  {"Kanji": "昨日", "Hiragana": "きのう", "Romaji (English Letters)": "kinou", "English Meaning": "Yesterday", "audio": "kinou"},
  {"Kanji": "一昨日", "Hiragana": "おととい", "Romaji (English Letters)": "ototoi", "English Meaning": "the day before yesterday", "audio": "ototoi"},
  {"Kanji": "明後日", "Hiragana": "あさって", "Romaji (English Letters)": "asatte", "English Meaning": "the day after tomorrow (a small 'tsu' (っ) makes a double consonant)", "audio": "asatte"},
  {"Kanji": "今朝", "Hiragana": "けさ", "Romaji (English Letters)": "kesa", "English Meaning": "this morning", "audio": "kesa"},
  {"Kanji": "今晩", "Hiragana": "こんばん", "Romaji (English Letters)": "konban", "English Meaning": "this evening", "audio": "konban"},
  {"Kanji": "今", "Hiragana": "いま", "Romaji (English Letters)": "ima", "English Meaning": "now", "audio": "ima"}
]

const NumbersTimeB = () => {

  return (
    <>
    <Helmet htmlAttributes={{
    lang: 'en',
    }}>
    {title ? <title>{title}</title> : null }
    {title ? <meta name="title" content={title} /> : null}
    </Helmet>
    
    <NavBar level="Beginner" category="Vocabulary" lesson={title} />

      <h1>{title}</h1>

      <h2>Numbers, Time, and Days of the Week</h2>

<p>Before we get too much further into Japanese grammar and verb conjugation, I thought it would be a good idea to teach Japanese numbers, time, days of the week, etc.</p>

<Table data={tableone} />

<p>Numbers after 10 are a piece of cake once you know 1 through 10. 11 is simply ten with a one after it, 十一 (じゅういち, juuichi) , 12 - juuni , 13 - juusan , 14 - juuyon , etc. 20 is simply 二十 (にじゅう, nijuu) , 21 - nijuuichi , and so forth.</p>

<p>Put these numbers in front of the character for time 時 and you've got the time of the day.</p>

<Table data={tabletwo} />

<p>Now just put the character for moon 月 after a number and you've got a month.</p>

<Table data={tablethree} />

<p>Japanese days of the week don't follow such an easy pattern but here they are anyway along with some other time-related words.</p>

<Table data={tablefour} />

    </>
  )
}

export default NumbersTimeB