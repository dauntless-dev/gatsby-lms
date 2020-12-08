import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "../../components/NavBar"
import Table from "@components/Table"

const title = "Family Vocab"

const family = [
  {"Kanji": "家族", "Hiragana": "かぞく", "Romaji": "kazoku", "English Meaning": "family", "audio": "kazoku"},
  {"Kanji": "親", "Hiragana": "おや", "Romaji": "oya", "English Meaning": "parent(s)", "audio": "oya"},
  {"Kanji": "両親", "Hiragana": "りょうしん", "Romaji": "ryoushin", "English Meaning": "parents", "audio": "ryoushin"},
  {"Kanji": "夫婦", "Hiragana": "ふうふ", "Romaji": "fuufu", "English Meaning": "couple", "audio": "fuufu"},
  {"Kanji": "夫", "Hiragana": "おっと", "Romaji": "otto", "English Meaning": "husband (your own)", "audio": "otto"},
  {"Kanji": "主人", "Hiragana": "しゅじん", "Romaji": "shujin", "English Meaning": "husband (your own)", "audio": "shujin"},
  {"Kanji": "ご主人", "Hiragana": "ごしゅじん", "Romaji": "goshujin", "English Meaning": "husband (someone else's)", "audio": "goshujin"},
  {"Kanji": "妻", "Hiragana": "つま", "Romaji": "tsuma", "English Meaning": "wife (your own)", "audio": "tsuma"},
  {"Kanji": "家内", "Hiragana": "かない", "Romaji": "kanai", "English Meaning": "wife (your own)", "audio": "kanai"},
  {"Kanji": "奥さん", "Hiragana": "おくさん", "Romaji": "okusan", "English Meaning": "wife (someone else's)", "audio": "okusan"},
  {"Kanji": "子", "Hiragana": "こ", "Romaji": "ko", "English Meaning": "child", "audio": "ko"},
  {"Kanji": "子供", "Hiragana": "こども", "Romaji": "kodomo", "English Meaning": "children", "audio": "kodomo"},
  {"Kanji": "赤ちゃん", "Hiragana": "あかちゃん", "Romaji": "akachan", "English Meaning": "baby", "audio": "akachan"},
  {"Kanji": "息子", "Hiragana": "むすこ", "Romaji": "musuko", "English Meaning": "son (your own)", "audio": "musuko"},
  {"Kanji": "息子さん", "Hiragana": "むすこさん", "Romaji": "musukosan", "English Meaning": "son (someone else's)", "audio": "musukosan"},
  {"Kanji": "娘", "Hiragana": "むすめ", "Romaji": "musume", "English Meaning": "daughter (your own)", "audio": "musume"},
  {"Kanji": "娘さん", "Hiragana": "むすめさん", "Romaji": "musumesan", "English Meaning": "daughter (someone else's)", "audio": "musumesan"},
  {"Kanji": "父", "Hiragana": "ちち", "Romaji": "chichi", "English Meaning": "father (your own)", "audio": "chichi"},
  {"Kanji": "お父さん", "Hiragana": "おとうさん", "Romaji": "otousan", "English Meaning": "father (someone else's)", "audio": "otousan"},
  {"Kanji": "母", "Hiragana": "はは", "Romaji": "haha", "English Meaning": "mother (your own)", "audio": "haha"},
  {"Kanji": "お母さん", "Hiragana": "おかあさん", "Romaji": "okaasan", "English Meaning": "mother (someone else's)", "audio": "okaasan"},
  {"Kanji": "兄", "Hiragana": "あに", "Romaji": "ani", "English Meaning": "older brother (your own)", "audio": "ani"},
  {"Kanji": "お兄さん", "Hiragana": "おにいさん", "Romaji": "oniisan", "English Meaning": "older brother (someone else's)", "audio": "oniisan"},
  {"Kanji": "弟", "Hiragana": "おとうと", "Romaji": "otouto", "English Meaning": "younger brother (your own)", "audio": "otouto"},
  {"Kanji": "弟さん", "Hiragana": "おとうとさん", "Romaji": "otoutosan", "English Meaning": "younger brother (someone else's)", "audio": "otoutosan"},
  {"Kanji": "兄弟", "Hiragana": "きょうだい", "Romaji": "kyoudai", "English Meaning": "brother(s), sibling(s)", "audio": "kyoudai"},
  {"Kanji": "姉", "Hiragana": "あね", "Romaji": "ane", "English Meaning": "older sister (your own)", "audio": "ane"},
  {"Kanji": "お姉さん", "Hiragana": "おねえさん", "Romaji": "oneesan", "English Meaning": "older sister (someone else's)", "audio": "oneesan"},
  {"Kanji": "妹", "Hiragana": "いもうと", "Romaji": "imouto", "English Meaning": "younger sister (your own)", "audio": "imouto"},
  {"Kanji": "妹さん", "Hiragana": "いもうとさん", "Romaji": "imoutosan", "English Meaning": "younger sister (someone else's)", "audio": "imoutosan"},
  {"Kanji": "姉妹", "Hiragana": "しまい", "Romaji": "shimai", "English Meaning": "sister(s)", "audio": "shimai"},
  {"Kanji": "祖父母", "Hiragana": "そふぼ", "Romaji": "sofubo", "English Meaning": "grandparents", "audio": "sofubo"},
  {"Kanji": "祖父", "Hiragana": "そふ", "Romaji": "sofu", "English Meaning": "grandfather", "audio": "sofu"},
  {"Kanji": "祖母", "Hiragana": "そぼ", "Romaji": "sobo", "English Meaning": "grandmother", "audio": "sobo"},
  {"Kanji": "お祖父さん", "Hiragana": "おじいさん", "Romaji": "ojiisan", "English Meaning": "grandpa", "audio": "ojiisan"},
  {"Kanji": "お祖母さん", "Hiragana": "おばあさん", "Romaji": "obaasan", "English Meaning": "grandma", "audio": "obaasan"},
  {"Kanji": "おじさん", "Hiragana": "おじさん", "Romaji": "ojisan", "English Meaning": "uncle", "audio": "ojisan"},
  {"Kanji": "おばさん", "Hiragana": "おばさん", "Romaji": "obasan", "English Meaning": "aunt", "audio": "obasan"},
  {"Kanji": "甥", "Hiragana": "おい", "Romaji": "oi", "English Meaning": "nephew", "audio": "oi"},
  {"Kanji": "姪", "Hiragana": "めい", "Romaji": "mei", "English Meaning": "niece", "audio": "mei"},
  {"Kanji": "いとこ", "Hiragana": "いとこ", "Romaji": "itoko", "English Meaning": "cousin", "audio": "itoko"},
  {"Kanji": "はとこ", "Hiragana": "はとこ", "Romaji": "hatoko", "English Meaning": "second cousin", "audio": "hatoko"},
  {"Kanji": "孫", "Hiragana": "まご", "Romaji": "mago", "English Meaning": "grandchild", "audio": "mago"},
  {"Kanji": "曽お祖父さん", "Hiragana": "ひおじいさん", "Romaji": "hiojiisan", "English Meaning": "great-grandfather (add an extra 'hi' for great-great, etc.)", "audio": "hiojiisan"},
  {"Kanji": "曽お祖母さん", "Hiragana": "ひおばあさん", "Romaji": "hiobaasan", "English Meaning": "great-grandmother (add an extra 'hi' for great-great, etc.)", "audio": "hiobaasan"},
  {"Kanji": "先祖", "Hiragana": "せんぞ", "Romaji": "senzo", "English Meaning": "ancestors", "audio": "senzo"},
  {"Kanji": "親戚", "Hiragana": "しんせき", "Romaji": "shinseki", "English Meaning": "relatives", "audio": "shinseki"}
]

const familyTableTwo = [
  {"Kanji": "兄弟は三人で兄一人と妹二人(です)。", "Hiragana": "きょうだいはさんにんであにひとりといもうとふたり(です)。", "Romaji": "Kyoudai wa sannin de ani hitori to imouto futari (desu).", "English Meaning": "I have three siblings. One older brother and two younger sisters.", "audio": "kyoudai wa sannin de ani hitori to imouto futari"},
  {"Kanji": "僕はハーフだ(です)。父はアメリカ人で母は日本人だ(です)。", "Hiragana": "ぼくはハーフだ(です)。ちちはアメリカじんではははにほんじんだ(です)。", "Romaji": "Boku wa ha-fu da (desu). Chichi wa amerikajin de haha wa nihonjin da (desu).", "English Meaning": "I am a 'half' (half Japanese, in this case). My dad is an American and my mom is Japanese.", "audio": "boku wa ha-fu desu chichi wa amerikajin de haha wa nihonjin desu"},
  {"Kanji": "夏休みは祖父母の家に訪問する(します)。", "Hiragana": "なつやすみはそふぼのいえにほうもんする(します)。", "Romaji": "Natsuyasumi wa sofubo no ie ni houmon suru (shimasu).", "English Meaning": "We visit our grandparents during summer vacation.", "audio": "natsuyasumi wa sofubo no ie ni houmon shimasu"}
]

const familyTableThree = [
  {"Kanji": "一人", "Hiragana": "ひとり", "Romaji": "hitori", "English": "one person", "audio": "hitori"},
  {"Kanji": "二人", "Hiragana": "ふたり", "Romaji": "futari", "English": "two people", "audio": "futari"},
  {"Kanji": "三人", "Hiragana": "さんにん", "Romaji": "sannin", "English": "three people", "audio": "sannin"},
  {"Kanji": "", "Hiragana": "ハーフ", "Romaji": "ha-fu", "English": "a 'half', typically a person that is half Japanese", "audio": "ha-fu"},
  {"Kanji": "アメリカ人", "Hiragana": "アメリカじん", "Romaji": "amerikajin", "English": "American person", "audio": "amerikajin"},
  {"Kanji": "日本人", "Hiragana": "にほんじん", "Romaji": "nihonjin", "English": "Japanese person", "audio": "nihonjin"},
  {"Kanji": "夏休み", "Hiragana": "なつやすみ", "Romaji": "natsuyasumi", "English": "summer vacation", "audio": "natsuyasumi"},
  {"Kanji": "訪問する", "Hiragana": "ほうもんする", "Romaji": "houmon suru", "English": "to visit", "audio": "houmon suru"}
]

const VocabTwoB = () => {

  return (
    <>
    <Helmet htmlAttributes={{
    lang: 'en',
    }}>
    {title ? <title>{title}</title> : null }
    {title ? <meta name="title" content={title} /> : null}
    </Helmet>
    
    <NavBar level="Beginner" category="Vocabulary" lesson="Family Vocab" />

      <h1>{title}</h1>
      <p>Below are a number of Japanese vocabulary words associated with the family. All words are nouns unless otherwise specified. Please note that the example sentences will be done in plain form with the polite form in parentheses.</p>

      <Table data={family} />

      <p>Here are some example sentences:</p>

      <Table data={familyTableTwo} />

      <h2>Vocab Breakdown</h2>

      <Table data={familyTableThree} />

    </>
  )
}

export default VocabTwoB