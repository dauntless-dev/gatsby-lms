import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "../../components/NavBar"
import Table from "@components/Table"

const title = "School Vocab"

const tabledataone = [
  {"漢字 - Kanji": "学校", "ひらがな - Hiragana": "がっこう", "Romaji (English Letters)": "gakkou", "English Meaning": "school", "audio": "gakkou"},
  {"漢字 - Kanji": "幼稚園", "ひらがな - Hiragana": "ようちえん", "Romaji (English Letters)": "youchien", "English Meaning": "preschool, kindergarten", "audio": "youchien"},
  {"漢字 - Kanji": "保育園", "ひらがな - Hiragana": "ほいくえん", "Romaji (English Letters)": "hoikuen", "English Meaning": "preschool, nursery school, day nursery", "audio": "hoikuen"},
  {"漢字 - Kanji": "小学校", "ひらがな - Hiragana": "しょうがっこう", "Romaji (English Letters)": "shougakkou", "English Meaning": "primary school, elementary school, grade school", "audio": "shougakkou"},
  {"漢字 - Kanji": "小学生", "ひらがな - Hiragana": "しょうがくせい", "Romaji (English Letters)": "shougakusei", "English Meaning": "elementary school student", "audio": "shougakusei"},
  {"漢字 - Kanji": "中学校", "ひらがな - Hiragana": "ちゅうがっこう", "Romaji (English Letters)": "chuugakkou", "English Meaning": "junior high school, middle school, lower secondary school", "audio": "chuugakkou"},
  {"漢字 - Kanji": "中学生", "ひらがな - Hiragana": "ちゅうがくせい", "Romaji (English Letters)": "chuugakusei", "English Meaning": "junior high school student", "audio": "chuugakusei"},
  {"漢字 - Kanji": "高等学校", "ひらがな - Hiragana": "こうとうがっこう", "Romaji (English Letters)": "koutougakkou", "English Meaning": "high school", "audio": "koutougakkou"},
  {"漢字 - Kanji": "高校", "ひらがな - Hiragana": "こうこう", "Romaji (English Letters)": "koukou", "English Meaning": "high school (abbreviation)", "audio": "koukou"},
  {"漢字 - Kanji": "高校生", "ひらがな - Hiragana": "こうこうせい", "Romaji (English Letters)": "koukousei", "English Meaning": "high school student", "audio": "koukousei"},
  {"漢字 - Kanji": "大学", "ひらがな - Hiragana": "だいがく", "Romaji (English Letters)": "daigaku", "English Meaning": "university, college", "audio": "daigaku"},
  {"漢字 - Kanji": "大学生", "ひらがな - Hiragana": "だいがくせい", "Romaji (English Letters)": "daigakusei", "English Meaning": "university student, college student", "audio": "daigakusei"},
  {"漢字 - Kanji": "専門学校", "ひらがな - Hiragana": "せんもんがっこう", "Romaji (English Letters)": "senmongakkou", "English Meaning": "vocational school, technical school", "audio": "senmongakkou"},
  {"漢字 - Kanji": "浪人生", "ひらがな - Hiragana": "ろうにんせい", "Romaji (English Letters)": "rouninsei", "English Meaning": "student who failed their entrance exam", "audio": "rouninsei"},
  {"漢字 - Kanji": "浪人する", "ひらがな - Hiragana": "ろうにんする", "Romaji (English Letters)": "rounin suru", "English Meaning": "to wait for another chance to enter a university [irv]", "audio": "rounin suru"},
  {"漢字 - Kanji": "留学する", "ひらがな - Hiragana": "りゅうがくする", "Romaji (English Letters)": "ryuugaku suru", "English Meaning": "to study abroad (usually at the university level) [irv]", "audio": "ryuugaku suru"},
  {"漢字 - Kanji": "留学生", "ひらがな - Hiragana": "りゅうがくせい", "Romaji (English Letters)": "ryuugakusei", "English Meaning": "exchange student", "audio": "ryuugakusei"},
  {"漢字 - Kanji": "塾", "ひらがな - Hiragana": "じゅく", "Romaji (English Letters)": "juku", "English Meaning": "coaching school, cramming school", "audio": "juku"},
  {"漢字 - Kanji": "宿題", "ひらがな - Hiragana": "しゅくだい", "Romaji (English Letters)": "shukudai", "English Meaning": "homework", "audio": "shukudai"},
  {"漢字 - Kanji": "勉強する", "ひらがな - Hiragana": "べんきょうする", "Romaji (English Letters)": "benkyou suru", "English Meaning": "to study [irv]", "audio": "benkyou suru"},
  {"漢字 - Kanji": "先生", "ひらがな - Hiragana": "せんせい", "Romaji (English Letters)": "sensei", "English Meaning": "teacher", "audio": "sensei"},
  {"漢字 - Kanji": "生徒", "ひらがな - Hiragana": "せいと", "Romaji (English Letters)": "seito", "English Meaning": "pupil, student", "audio": "seito"},
  {"漢字 - Kanji": "校長先生", "ひらがな - Hiragana": "こうちょうせんせい", "Romaji (English Letters)": "kouchousensei", "English Meaning": "principal, headmaster", "audio": "kouchousensei"},
  {"漢字 - Kanji": "教頭先生", "ひらがな - Hiragana": "きょうとうせんせい", "Romaji (English Letters)": "kyoutousensei", "English Meaning": "vice principal", "audio": "kyoutousensei"},
  {"漢字 - Kanji": "給食", "ひらがな - Hiragana": "きゅうしょく", "Romaji (English Letters)": "kyuushoku", "English Meaning": "school lunch (only in elementary and junior high school)", "audio": "kyuushoku"},
  {"漢字 - Kanji": "お弁当", "ひらがな - Hiragana": "おべんとう", "Romaji (English Letters)": "o-bentou", "English Meaning": "home lunch, 'sack' lunch", "audio": "o-bentou"},
  {"漢字 - Kanji": "学年", "ひらがな - Hiragana": "がくねん", "Romaji (English Letters)": "gakunen", "English Meaning": "year in school, grade in school", "audio": "gakunen"},
  {"漢字 - Kanji": "一年生", "ひらがな - Hiragana": "いちねんせい", "Romaji (English Letters)": "ichinensei", "English Meaning": "a student in the first year of elementary, junior high, high school, or college/university (change the 'ichi' to 'ni' for 'second year', etc.)", "audio": "ichinensei"},
  {"漢字 - Kanji": "成績表", "ひらがな - Hiragana": "せいせきひょう", "Romaji (English Letters)": "seisekihyou", "English Meaning": "report card, result sheet", "audio": "seisekihyou"},
  {"漢字 - Kanji": "テスト", "ひらがな - Hiragana": "テスト", "Romaji (English Letters)": "tesuto", "English Meaning": "test (katakana)", "audio": "tesuto"},
  {"漢字 - Kanji": "鉛筆", "ひらがな - Hiragana": "えんぴつ", "Romaji (English Letters)": "enpitsu", "English Meaning": "pencil", "audio": "enpitsu"},
  {"漢字 - Kanji": "ペン", "ひらがな - Hiragana": "ペン", "Romaji (English Letters)": "pen", "English Meaning": "pen (katakana)", "audio": "pen"},
  {"漢字 - Kanji": "消しゴム", "ひらがな - Hiragana": "けしゴム", "Romaji (English Letters)": "keshigomu", "English Meaning": "eraser (for pencil writing)", "audio": "keshigomu"},
  {"漢字 - Kanji": "黒板", "ひらがな - Hiragana": "こくばん", "Romaji (English Letters)": "kokuban", "English Meaning": "chalkboard, blackboard", "audio": "kokuban"},
  {"漢字 - Kanji": "黒板拭き", "ひらがな - Hiragana": "こくばんふき", "Romaji (English Letters)": "kokubanfuki", "English Meaning": "chalkboard eraser", "audio": "kokubanfuki"},
  {"漢字 - Kanji": "物差し", "ひらがな - Hiragana": "ものさし", "Romaji (English Letters)": "monosashi", "English Meaning": "ruler, measure", "audio": "monosashi"},
  {"漢字 - Kanji": "定規", "ひらがな - Hiragana": "じょうぎ", "Romaji (English Letters)": "jougi", "English Meaning": "ruler, measure", "audio": "jougi"},
  {"漢字 - Kanji": "計算機", "ひらがな - Hiragana": "けいさんき", "Romaji (English Letters)": "keisanki", "English Meaning": "calculator", "audio": "keisanki"},
  {"漢字 - Kanji": "机", "ひらがな - Hiragana": "つくえ", "Romaji (English Letters)": "tsukue", "English Meaning": "desk", "audio": "tsukue"},
  {"漢字 - Kanji": "椅子", "ひらがな - Hiragana": "いす", "Romaji (English Letters)": "isu", "English Meaning": "chair (usually written in hiragana)", "audio": "isu"},
  {"漢字 - Kanji": "クラス", "ひらがな - Hiragana": "クラス", "Romaji (English Letters)": "kurasu", "English Meaning": "class (katakana)", "audio": "kurasu"},
  {"漢字 - Kanji": "教室", "ひらがな - Hiragana": "きょうしつ", "Romaji (English Letters)": "kyoushitsu", "English Meaning": "classroom", "audio": "kyoushitsu"},
  {"漢字 - Kanji": "国語", "ひらがな - Hiragana": "こくご", "Romaji (English Letters)": "kokugo", "English Meaning": "Japanese (school subject)", "audio": "kokugo"},
  {"漢字 - Kanji": "算数", "ひらがな - Hiragana": "さんすう", "Romaji (English Letters)": "sansuu", "English Meaning": "arithmetic (elementary school subject)", "audio": "sansuu"},
  {"漢字 - Kanji": "数学", "ひらがな - Hiragana": "すうがく", "Romaji (English Letters)": "suugaku", "English Meaning": "mathematics, arithmetic (school subject in junior high and beyond)", "audio": "suugaku"},
  {"漢字 - Kanji": "理科", "ひらがな - Hiragana": "りか", "Romaji (English Letters)": "rika", "English Meaning": "science", "audio": "rika"},
  {"漢字 - Kanji": "科学", "ひらがな - Hiragana": "かがく", "Romaji (English Letters)": "kagaku", "English Meaning": "science", "audio": "kagaku"},
  {"漢字 - Kanji": "社会科", "ひらがな - Hiragana": "しゃかいか", "Romaji (English Letters)": "shakaika", "English Meaning": "social studies", "audio": "shakaika"},
  {"漢字 - Kanji": "歴史", "ひらがな - Hiragana": "れきし", "Romaji (English Letters)": "rekishi", "English Meaning": "history", "audio": "rekishi"},
  {"漢字 - Kanji": "体育", "ひらがな - Hiragana": "たいいく", "Romaji (English Letters)": "taiiku", "English Meaning": "physical education, P.E.", "audio": "taiiku"},
  {"漢字 - Kanji": "英語", "ひらがな - Hiragana": "えいご", "Romaji (English Letters)": "eigo", "English Meaning": "English (language)", "audio": "eigo"},
  {"漢字 - Kanji": "美術", "ひらがな - Hiragana": "びじゅつ", "Romaji (English Letters)": "bijutsu", "English Meaning": "art", "audio": "bijutsu"},
  {"漢字 - Kanji": "休憩時間", "ひらがな - Hiragana": "きゅうけいじかん", "Romaji (English Letters)": "kyuukeijikan", "English Meaning": "recess", "audio": "kyuukeijikan"},
  {"漢字 - Kanji": "卒業式", "ひらがな - Hiragana": "そつぎょうしき", "Romaji (English Letters)": "sotsugyoushiki", "English Meaning": "graduation", "audio": "sotsugyoushiki"},
  {"漢字 - Kanji": "卒業する", "ひらがな - Hiragana": "そつぎょうする", "Romaji (English Letters)": "sotsugyou suru", "English Meaning": "to graduate [irv]", "audio": "sotsugyou suru"},
  {"漢字 - Kanji": "遠足", "ひらがな - Hiragana": "えんそく", "Romaji (English Letters)": "ensoku", "English Meaning": "field trip", "audio": "ensoku"},
  {"漢字 - Kanji": "夏休み", "ひらがな - Hiragana": "なつやすみ", "Romaji (English Letters)": "natsuyasumi", "English Meaning": "summer break", "audio": "natsuyasumi"},
  {"漢字 - Kanji": "冬休み", "ひらがな - Hiragana": "ふゆやすみ", "Romaji (English Letters)": "fuyuyasumi", "English Meaning": "winter break", "audio": "fuyuyasumi"},
  {"漢字 - Kanji": "春休み", "ひらがな - Hiragana": "はるやすみ", "Romaji (English Letters)": "haruyasumi", "English Meaning": "spring break", "audio": "haruyasumi"}
]

const tabledatatwo = [
  {"漢字 - Kanji": "日本語をもっと勉強したらペラペラになれると思う(思います)。", "ひらがな - Hiragana": "にほんごをもっとべんきょうしたらペラペラになれるとおもう(おもいます)。", "Romaji (English Letters)": "Nihongo o motto benkyou shitara pera pera ni nareru to omou (omoimasu).", "English Meaning": "If I study Japanese harder I think I can become fluent.", "audio": "nihongo o motto benkyou shitara pera pera ni nareru to omou"},
  {"漢字 - Kanji": "先生は凄い沢山の宿題を与えた(与えました)。", "ひらがな - Hiragana": "せんせいはすごいたくさんのしゅくだいをあたえた(あたえました)。", "Romaji (English Letters)": "Sensei wa sugoi takusan no shukudai o ataeta (ataemashita).", "English Meaning": "The teacher gave me tons of homework.", "audio": "sensei wa sugoi takusan no shukudai o ataemashita"}
]

const tabledatathree = [
  {"漢字 - Kanji": "", "ひらがな - Hiragana": "もっと", "Romaji (English Letters)": "motto", "English Meaning": "more", "audio": "motto"},
  {"漢字 - Kanji": "", "ひらがな - Hiragana": "なる", "Romaji (English Letters)": "naru", "English Meaning": "to become", "audio": "naru"},
  {"漢字 - Kanji": "思う", "ひらがな - Hiragana": "おもう", "Romaji (English Letters)": "omou", "English Meaning": "to think", "audio": "omou"},
  {"漢字 - Kanji": "凄い", "ひらがな - Hiragana": "すごい", "Romaji (English Letters)": "sugoi", "English Meaning": "terrible, amazing, great, terrific, to a great extent", "audio": "sugoi"},
  {"漢字 - Kanji": "沢山", "ひらがな - Hiragana": "たくさん", "Romaji (English Letters)": "takusan", "English Meaning": "many, a lot, much", "audio": "takusan"},
  {"漢字 - Kanji": "与える", "ひらがな - Hiragana": "あたえる", "Romaji (English Letters)": "ataeru", "English Meaning": "to give", "audio": "ataeru"},
]


const VocabThreeB = () => {

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
      <p>Below are a number of Japanese vocabulary words associated with school. All words are nouns unless otherwise specified. Please note that the example sentences will be done in plain form with the polite form in parentheses.</p>

      <Table data={tabledataone} />

      <p>Here are some example sentences:</p>

      <Table data={tabledatatwo} />

      <h2>Vocab breakdown</h2>

      <Table data={tabledatathree} />

      <p>Note: In the Japanese school system, elementary school has grades 1-6, junior high school has grades 1-3, and high school has grades 1-3.</p>

    </>
  )
}

export default VocabThreeB