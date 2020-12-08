import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "../../components/NavBar"
import Table from "@components/Table"

const title = "Beginning Vocabulary Part 2"

const tabledata = [
  {"Kanji": "私達", "Hiragana": "わたしたち", "Romaji (English Letters)": "watashitachi", "English Meaning": "we, us (formal for males, normal for females)", "audio": "watashitachi"},
  {"Kanji": "僕達", "Hiragana": "ぼくたち", "Romaji (English Letters)": "bokutachi", "English Meaning": "we, us (normal for males)", "audio": "bokutachi"},
  {"Kanji": "あなた達", "Hiragana": "あなたたち", "Romaji (English Letters)": "anatatachi", "English Meaning": "you (plural)", "audio": "anatatachi"},
  {"Kanji": "彼ら", "Hiragana": "かれら", "Romaji (English Letters)": "karera", "English Meaning": "they, them (when all guys or a mix of guys and girls)", "audio": "karera"},
  {"Kanji": "彼女達", "Hiragana": "かのじょたち", "Romaji (English Letters)": "kanojotachi", "English Meaning": "they, them (when only girls)", "audio": "kanojotachi"},
  {"Kanji": "あれ", "Hiragana": "あれ", "Romaji (English Letters)": "are", "English Meaning": "that thing, it (indicating something distant from both speaker and listener (in space, time or psychologically), or something understood without naming it directly)", "audio": "are"},
  {"Kanji": "あそこ", "Hiragana": "あそこ", "Romaji (English Letters)": "asoko", "English Meaning": "over there", "audio": "asoko"},
  {"Kanji": "あの", "Hiragana": "あの", "Romaji (English Letters)": "ano", "English Meaning": "that (descriptive - used on someone or something distant from both speaker and listener, or object/situation familiar to both speaker and listener)", "audio": "ano"},
  {"Kanji": "これら", "Hiragana": "これら", "Romaji (English Letters)": "korera", "English Meaning": "these", "audio": "korera"},
  {"Kanji": "それら", "Hiragana": "それら", "Romaji (English Letters)": "sorera", "English Meaning": "those", "audio": "sorera"},
  {"Kanji": "人々", "Hiragana": "ひとびと", "Romaji (English Letters)": "hitobito", "English Meaning": "people", "audio": "hitobito"},
  {"Kanji": "子供", "Hiragana": "こども", "Romaji (English Letters)": "kodomo", "English Meaning": "child", "audio": "kodomo"},
  {"Kanji": "子供達", "Hiragana": "こどもたち", "Romaji (English Letters)": "kodomotachi", "English Meaning": "children", "audio": "kodomotachi"},
  {"Kanji": "友達", "Hiragana": "ともだち", "Romaji (English Letters)": "tomodachi", "English Meaning": "friend/friends", "audio": "tomodachi"},
  {"Kanji": "所", "Hiragana": "ところ", "Romaji (English Letters)": "tokoro", "English Meaning": "place", "audio": "tokoro"},
  {"Kanji": "車", "Hiragana": "くるま", "Romaji (English Letters)": "kuruma", "English Meaning": "car, automobile, vehicle", "audio": "kuruma"},
  {"Kanji": "電車", "Hiragana": "でんしゃ", "Romaji (English Letters)": "densha", "English Meaning": "train", "audio": "densha"},
  {"Kanji": "地下鉄", "Hiragana": "ちかてつ", "Romaji (English Letters)": "chikatetsu", "English Meaning": "subway", "audio": "chikatetsu"},
  {"Kanji": "バス", "Hiragana": "ばす", "Romaji (English Letters)": "basu", "English Meaning": "bus (katakana)", "audio": "basu"},
  {"Kanji": "駅", "Hiragana": "えき", "Romaji (English Letters)": "eki", "English Meaning": "station", "audio": "eki"},
  {"Kanji": "切符", "Hiragana": "きっぷ", "Romaji (English Letters)": "kippu", "English Meaning": "ticket", "audio": "kippu"},
  {"Kanji": "椅子", "Hiragana": "いす", "Romaji (English Letters)": "isu", "English Meaning": "chair", "audio": "isu"},
  {"Kanji": "靴", "Hiragana": "くつ", "Romaji (English Letters)": "kutsu", "English Meaning": "shoe(s)", "audio": "kutsu"},
  {"Kanji": "日本", "Hiragana": "にほん", "Romaji (English Letters)": "nihon", "English Meaning": "Japan", "audio": "nihon"},
  {"Kanji": "日本人", "Hiragana": "にほんじん", "Romaji (English Letters)": "nihonjin", "English Meaning": "Japanese person/people", "audio": "nihonjin"},
  {"Kanji": "日本語", "Hiragana": "にほんご", "Romaji (English Letters)": "nihongo", "English Meaning": "Japanese (language)", "audio": "nihongo"},
  {"Kanji": "英語", "Hiragana": "えいご", "Romaji (English Letters)": "eigo", "English Meaning": "English (language)", "audio": "eigo"},
  {"Kanji": "水", "Hiragana": "みず", "Romaji (English Letters)": "mizu", "English Meaning": "water", "audio": "mizu"},
  {"Kanji": "日", "Hiragana": "ひ", "Romaji (English Letters)": "hi", "English Meaning": "day", "audio": "hi"},
  {"Kanji": "太陽", "Hiragana": "たいよう", "Romaji (English Letters)": "taiyou", "English Meaning": "sun", "audio": "taiyou"},
  {"Kanji": "月", "Hiragana": "つき", "Romaji (English Letters)": "tsuki", "English Meaning": "moon", "audio": "tsuki"},
  {"Kanji": "星", "Hiragana": "ほし", "Romaji (English Letters)": "hoshi", "English Meaning": "star", "audio": "hoshi"},
  {"Kanji": "雨", "Hiragana": "あめ", "Romaji (English Letters)": "ame", "English Meaning": "rain", "audio": "ame"},
  {"Kanji": "雪", "Hiragana": "ゆき", "Romaji (English Letters)": "yuki", "English Meaning": "snow", "audio": "yuki"},
  {"Kanji": "風", "Hiragana": "かぜ", "Romaji (English Letters)": "kaze", "English Meaning": "wind", "audio": "kaze"},
  {"Kanji": "トイレ", "Hiragana": "といれ", "Romaji (English Letters)": "toire", "English Meaning": "toilet/bathroom (katakana)", "audio": "toire"},
  {"Kanji": "お手洗い", "Hiragana": "おてあらい", "Romaji (English Letters)": "otearai", "English Meaning": "bathroom (honorable hand-washing place)", "audio": "otearai"},
  {"Kanji": "ホテル", "Hiragana": "ほてる", "Romaji (English Letters)": "hoteru", "English Meaning": "hotel (katakana)", "audio": "hoteru"},
  {"Kanji": "先生", "Hiragana": "せんせい", "Romaji (English Letters)": "sensei", "English Meaning": "teacher, master, doctor", "audio": "sensei"},
  {"Kanji": "食べ物", "Hiragana": "たべもの", "Romaji (English Letters)": "tabemono", "English Meaning": "food", "audio": "tabemono"},
  {"Kanji": "飲み物", "Hiragana": "のみもの", "Romaji (English Letters)": "nomimono", "English Meaning": "drink, beverage", "audio": "nomimono"},
  {"Kanji": "美味しい", "Hiragana": "おいしい", "Romaji (English Letters)": "oishii", "English Meaning": "delicious, tasty", "audio": "oishii"},
  {"Kanji": "大きい", "Hiragana": "おおきい", "Romaji (English Letters)": "ookii", "English Meaning": "big", "audio": "ookii"},
  {"Kanji": "小さい", "Hiragana": "ちいさい", "Romaji (English Letters)": "chiisai", "English Meaning": "small", "audio": "chiisai"},
  {"Kanji": "熱い", "Hiragana": "あつい", "Romaji (English Letters)": "atsui", "English Meaning": "hot (to the touch)", "audio": "atsui"},
  {"Kanji": "冷たい", "Hiragana": "つめたい", "Romaji (English Letters)": "tsumetai", "English Meaning": "cold (to the touch)", "audio": "tsumetai"},
  {"Kanji": "暑い", "Hiragana": "あつい", "Romaji (English Letters)": "atsui", "English Meaning": "hot (weather)", "audio": "atsui"},
  {"Kanji": "寒い", "Hiragana": "さむい", "Romaji (English Letters)": "samui", "English Meaning": "cold (weather)", "audio": "samui"},
  {"Kanji": "暖かい", "Hiragana": "あたたかい", "Romaji (English Letters)": "atatakai", "English Meaning": "warm", "audio": "atatakai"},
  {"Kanji": "長い", "Hiragana": "ながい", "Romaji (English Letters)": "nagai", "English Meaning": "long", "audio": "nagai"},
  {"Kanji": "短い", "Hiragana": "みじかい", "Romaji (English Letters)": "mijikai", "English Meaning": "short", "audio": "mijikai"},
  {"Kanji": "多い", "Hiragana": "おおい", "Romaji (English Letters)": "ooi", "English Meaning": "many, numerous", "audio": "ooi"},
  {"Kanji": "少ない", "Hiragana": "すくない", "Romaji (English Letters)": "sukunai", "English Meaning": "few, scarce", "audio": "sukunai"},
  {"Kanji": "たくさん", "Hiragana": "たくさん", "Romaji (English Letters)": "takusan", "English Meaning": "many, a lot, much", "audio": "takusan"},
  {"Kanji": "少し", "Hiragana": "すこし", "Romaji (English Letters)": "sukoshi", "English Meaning": "small quantity, little", "audio": "sukoshi"},
  {"Kanji": "ちょっと", "Hiragana": "ちょっと", "Romaji (English Letters)": "chotto", "English Meaning": "just a minute, short time, just a little", "audio": "chotto"},
  {"Kanji": "上", "Hiragana": "うえ", "Romaji (English Letters)": "ue", "English Meaning": "up, above, top", "audio": "ue"},
  {"Kanji": "下", "Hiragana": "した", "Romaji (English Letters)": "shita", "English Meaning": "down, under, below", "audio": "shita"},
  {"Kanji": "右", "Hiragana": "みぎ", "Romaji (English Letters)": "migi", "English Meaning": "right", "audio": "migi"},
  {"Kanji": "左", "Hiragana": "ひだり", "Romaji (English Letters)": "hidari", "English Meaning": "left", "audio": "hidari"},
  {"Kanji": "円", "Hiragana": "えん", "Romaji (English Letters)": "en", "English Meaning": "yen", "audio": "en"},
  {"Kanji": "一円", "Hiragana": "いちえん", "Romaji (English Letters)": "ichien", "English Meaning": "one yen (like a penny)", "audio": "ichien"},
  {"Kanji": "百円", "Hiragana": "ひゃくえん", "Romaji (English Letters)": "hyakuen", "English Meaning": "one hundred yen (like a dollar but a coin)", "audio": "hyakuen"},
  {"Kanji": "千円", "Hiragana": "せんえん", "Romaji (English Letters)": "senen", "English Meaning": "one thousand yen (like a $10 bill)", "audio": "sen-en"},
  {"Kanji": "一万円", "Hiragana": "いちまんえん", "Romaji (English Letters)": "ichimanen", "English Meaning": "ten thousand yen (like a $100 bill but very commonly used in Japan)", "audio": "ichiman-en"},
  {"Kanji": "名前", "Hiragana": "なまえ", "Romaji (English Letters)": "namae", "English Meaning": "name", "audio": "namae"},
  {"Kanji": "時間", "Hiragana": "じかん", "Romaji (English Letters)": "jikan", "English Meaning": "time", "audio": "jikan"},
  {"Kanji": "時計", "Hiragana": "とけい", "Romaji (English Letters)": "tokei", "English Meaning": "watch, clock", "audio": "tokei"},
  {"Kanji": "朝", "Hiragana": "あさ", "Romaji (English Letters)": "asa", "English Meaning": "morning", "audio": "asa"},
  {"Kanji": "昼", "Hiragana": "ひる", "Romaji (English Letters)": "hiru", "English Meaning": "afternoon", "audio": "hiru"},
  {"Kanji": "夜", "Hiragana": "よる", "Romaji (English Letters)": "yoru", "English Meaning": "night", "audio": "yoru"},
  {"Kanji": "後で", "Hiragana": "あとで", "Romaji (English Letters)": "ato de", "English Meaning": "later", "audio": "ato de"},
  {"Kanji": "いつも", "Hiragana": "いつも", "Romaji (English Letters)": "itsumo", "English Meaning": "always", "audio": "itsumo"},
  {"Kanji": "時々", "Hiragana": "ときどき", "Romaji (English Letters)": "tokidoki", "English Meaning": "sometimes", "audio": "tokidoki"},
  {"Kanji": "春", "Hiragana": "はる", "Romaji (English Letters)": "haru", "English Meaning": "spring, springtime", "audio": "haru"},
  {"Kanji": "夏", "Hiragana": "なつ", "Romaji (English Letters)": "natsu", "English Meaning": "summer", "audio": "natsu"},
  {"Kanji": "秋", "Hiragana": "あき", "Romaji (English Letters)": "aki", "English Meaning": "autumn, fall", "audio": "aki"},
  {"Kanji": "冬", "Hiragana": "ふゆ", "Romaji (English Letters)": "fuyu", "English Meaning": "winter", "audio": "fuyu"},
  {"Kanji": "あのう", "Hiragana": "あのう", "Romaji (English Letters)": "anou", "English Meaning": "Um..., Uh..., Errr... (typically only spoken)", "audio": "anou"},
  {"Kanji": "ええと", "Hiragana": "ええと", "Romaji (English Letters)": "eeto", "English Meaning": "Um..., Uh..., Errr... (typically only spoken)", "audio": "eeto"},
  {"Kanji": "何ですか", "Hiragana": "なんですか", "Romaji (English Letters)": "nan desu ka", "English Meaning": "What?, What is it? (polite form)", "audio": "nan desu ka"},
  {"Kanji": "誰ですか", "Hiragana": "だれですか", "Romaji (English Letters)": "dare desu ka", "English Meaning": "Who?, Who is it? (polite form)", "audio": "dare desu ka"},
  {"Kanji": "どうしてですか", "Hiragana": "どうしてですか", "Romaji (English Letters)": "doushite desu ka", "English Meaning": "Why? (polite form)", "audio": "doushite desu ka"},
  {"Kanji": "どこですか", "Hiragana": "どこですか", "Romaji (English Letters)": "doko desu ka", "English Meaning": "Where?, Where is it? (polite form)", "audio": "doko desu ka"},
  {"Kanji": "どのようにしますか", "Hiragana": "どのようにしますか", "Romaji (English Letters)": "dono you ni shimasu ka", "English Meaning": "How?, How should it be done? (polite form)", "audio": "dono you ni shimasu ka"},
  {"Kanji": "どちらですか", "Hiragana": "どちらですか", "Romaji (English Letters)": "dochira desu ka", "English Meaning": "Which?, Which one? (polite form) (between two objects)", "audio": "dochira desu ka"},
  {"Kanji": "どれですか", "Hiragana": "どれですか", "Romaji (English Letters)": "dore desu ka", "English Meaning": "Which?, Which one? (polite form) (between multiple objects)", "audio": "dore desu ka"},
  {"Kanji": "そうですか", "Hiragana": "そうですか", "Romaji (English Letters)": "sou desu ka", "English Meaning": "Is that so? (polite form) (a common way to say 'Oh, really?')", "audio": "sou desu ka"},
  {"Kanji": "そうですね", "Hiragana": "そうですね", "Romaji (English Letters)": "sou desu ne", "English Meaning": "That is correct. (polite form) (a common way to agree with someone - like 'Yep')", "audio": "sou desu ne"}
]

const VocabSixB = () => {

  return (
    <>
      <Helmet htmlAttributes={{
    lang: 'en',
    }}>
    {title ? <title>{title}</title> : null }
    {title ? <meta name="title" content={title} /> : null}
    </Helmet>
    <NavBar level="Beginner" category="Vocabulary" lesson={title} />
     <div className={'title'}>
     Basic Vocabulary and Phrases
      </div>
      <h1>{title}</h1>
      <h2>Vocabulary</h2>

      <p>Here some additional basic Japanese vocabulary words.</p>

      <Table data={tabledata} />

    </>
  )
}

export default VocabSixB