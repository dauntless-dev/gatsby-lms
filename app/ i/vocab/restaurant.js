import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "../../components/NavBar"
import Table from "@components/Table"

const title = "House/Kitchen Vocab"

const tabledataone = [
  {"漢字 - Kanji": "家", "ひらがな - Hiragana": "いえ", "Romaji (English Letters)": "ie", "English Meaning": "house", "audio": "ie"},
  {"漢字 - Kanji": "床", "ひらがな - Hiragana": "ゆか", "Romaji (English Letters)": "yuka", "English Meaning": "floor", "audio": "yuka"},
  {"漢字 - Kanji": "天井", "ひらがな - Hiragana": "てんじょう", "Romaji (English Letters)": "tenjou", "English Meaning": "ceiling", "audio": "tenjou"},
  {"漢字 - Kanji": "屋根", "ひらがな - Hiragana": "やね", "Romaji (English Letters)": "yane", "English Meaning": "roof", "audio": "yane"},
  {"漢字 - Kanji": "居間", "ひらがな - Hiragana": "いま", "Romaji (English Letters)": "ima", "English Meaning": "living room", "audio": "ima"},
  {"漢字 - Kanji": "寝室", "ひらがな - Hiragana": "しんしつ", "Romaji (English Letters)": "shinshitsu", "English Meaning": "bedroom", "audio": "shinshitsu"},
  {"漢字 - Kanji": "洗面所", "ひらがな - Hiragana": "せんめんじょ", "Romaji (English Letters)": "senmenjo", "English Meaning": "washroom, bathroom", "audio": "senmenjo"},
  {"漢字 - Kanji": "お風呂", "ひらがな - Hiragana": "おふろ", "Romaji (English Letters)": "o-furo", "English Meaning": "bathtub", "audio": "o-furo"},
  {"漢字 - Kanji": "トイレ", "ひらがな - Hiragana": "トイレ", "Romaji (English Letters)": "toire", "English Meaning": "toilet (katakana)", "audio": "toire"},
  {"漢字 - Kanji": "お手洗い", "ひらがな - Hiragana": "おてあらい", "Romaji (English Letters)": "o-tearai", "English Meaning": "restroom, bathroom", "audio": "o-tearai"},
  {"漢字 - Kanji": "収納子", "ひらがな - Hiragana": "しゅうのうこ", "Romaji (English Letters)": "shuunouko", "English Meaning": "closet", "audio": "shuunouko"},
  {"漢字 - Kanji": "押入れ", "ひらがな - Hiragana": "おしいれ", "Romaji (English Letters)": "oshiire", "English Meaning": "closet", "audio": "oshiire"},
  {"漢字 - Kanji": "階段", "ひらがな - Hiragana": "かいだん", "Romaji (English Letters)": "kaidan", "English Meaning": "stairs", "audio": "kaidan"},
  {"漢字 - Kanji": "布団", "ひらがな - Hiragana": "ふとん", "Romaji (English Letters)": "futon", "English Meaning": "futon (Japanese-style mattress laid out on the floor - used for sleeping)", "audio": "futon"},
  {"漢字 - Kanji": "ベッド", "ひらがな - Hiragana": "ベッド", "Romaji (English Letters)": "beddo", "English Meaning": "bed (katakana)", "audio": "beddo"},
  {"漢字 - Kanji": "枕", "ひらがな - Hiragana": "まくら", "Romaji (English Letters)": "makura", "English Meaning": "pillow", "audio": "makura"},
  {"漢字 - Kanji": "絨毯", "ひらがな - Hiragana": "じゅうたん", "Romaji (English Letters)": "juutan", "English Meaning": "carpet", "audio": "juutan"},
  {"漢字 - Kanji": "窓", "ひらがな - Hiragana": "まど", "Romaji (English Letters)": "mado", "English Meaning": "window", "audio": "mado"},
  {"漢字 - Kanji": "玄関", "ひらがな - Hiragana": "げんかん", "Romaji (English Letters)": "genkan", "English Meaning": "entranceway, entry hall (the Japanese leave their shoes here and step up into their house or apartment)", "audio": "genkan"},
  {"漢字 - Kanji": "畳", "ひらがな - Hiragana": "たたみ", "Romaji (English Letters)": "tatami", "English Meaning": "tatami mat (Japanese straw floor coverings)", "audio": "tatami"},
  {"漢字 - Kanji": "壁", "ひらがな - Hiragana": "かべ", "Romaji (English Letters)": "kabe", "English Meaning": "wall", "audio": "kabe"},
  {"漢字 - Kanji": "ドア", "ひらがな - Hiragana": "ドア", "Romaji (English Letters)": "doa", "English Meaning": "door (katakana)", "audio": "doa"},
  {"漢字 - Kanji": "電気", "ひらがな - Hiragana": "でんき", "Romaji (English Letters)": "denki", "English Meaning": "light, electricity", "audio": "denki"},
  {"漢字 - Kanji": "台所", "ひらがな - Hiragana": "だいどころ", "Romaji (English Letters)": "daidokoro", "English Meaning": "kitchen", "audio": "daidokoro"},
  {"漢字 - Kanji": "引き出し", "ひらがな - Hiragana": "ひきだし", "Romaji (English Letters)": "hikidashi", "English Meaning": "drawer", "audio": "hikidashi"},
  {"漢字 - Kanji": "お皿", "ひらがな - Hiragana": "おさら", "Romaji (English Letters)": "o-sara", "English Meaning": "dish, plate", "audio": "o-sara"},
  {"漢字 - Kanji": "食器", "ひらがな - Hiragana": "しょっき", "Romaji (English Letters)": "shokki", "English Meaning": "tableware", "audio": "shokki"},
  {"漢字 - Kanji": "箸", "ひらがな - Hiragana": "はし", "Romaji (English Letters)": "hashi", "English Meaning": "chopsticks", "audio": "hashi"},
  {"漢字 - Kanji": "フォーク", "ひらがな - Hiragana": "フォーク", "Romaji (English Letters)": "fo-ku", "English Meaning": "fork (katakana)", "audio": "fo-ku"},
  {"漢字 - Kanji": "スプーン", "ひらがな - Hiragana": "スプーン", "Romaji (English Letters)": "supu-n", "English Meaning": "spoon (katakana)", "audio": "supu-n"},
  {"漢字 - Kanji": "ナイフ", "ひらがな - Hiragana": "ナイフ", "Romaji (English Letters)": "naifu", "English Meaning": "knife (katakana)", "audio": "naifu"},
  {"漢字 - Kanji": "包丁", "ひらがな - Hiragana": "ほうちょう", "Romaji (English Letters)": "houchou", "English Meaning": "kitchen knife, carving knife", "audio": "houchou"},
  {"漢字 - Kanji": "お椀", "ひらがな - Hiragana": "おわん", "Romaji (English Letters)": "o-wan", "English Meaning": "Japanese soup bowl, wooden bowl", "audio": "o-wan"},
  {"漢字 - Kanji": "お茶碗", "ひらがな - Hiragana": "おちゃわん", "Romaji (English Letters)": "o-chawan", "English Meaning": "rice bowl, tea cup", "audio": "o-chawan"},
  {"漢字 - Kanji": "流し", "ひらがな - Hiragana": "ながし", "Romaji (English Letters)": "nagashi", "English Meaning": "sink", "audio": "nagashi"},
  {"漢字 - Kanji": "蛇口", "ひらがな - Hiragana": "じゃぐち", "Romaji (English Letters)": "jaguchi", "English Meaning": "faucet", "audio": "jaguchi"},
  {"漢字 - Kanji": "水道の水", "ひらがな - Hiragana": "すいどうのみず", "Romaji (English Letters)": "suidou no mizu", "English Meaning": "tap water", "audio": "suidou no mizu"},
  {"漢字 - Kanji": "テーブル", "ひらがな - Hiragana": "テーブル", "Romaji (English Letters)": "te-buru", "English Meaning": "table (katakana)", "audio": "te-buru"},
  {"漢字 - Kanji": "椅子", "ひらがな - Hiragana": "いす", "Romaji (English Letters)": "isu", "English Meaning": "chair (usually written in hiragana)", "audio": "isu"},
  {"漢字 - Kanji": "戸棚", "ひらがな - Hiragana": "とだな", "Romaji (English Letters)": "todana", "English Meaning": "cupboard, wardrobe", "audio": "todana"},
  {"漢字 - Kanji": "ソファ", "ひらがな - Hiragana": "ソファ", "Romaji (English Letters)": "sofa", "English Meaning": "sofa, couch (katakana)", "audio": "sofa"},
  {"漢字 - Kanji": "テレビ", "ひらがな - Hiragana": "テレビ", "Romaji (English Letters)": "terebi", "English Meaning": "TV, television (katakana)", "audio": "terebi"},
  {"漢字 - Kanji": "炬燵", "ひらがな - Hiragana": "こたつ", "Romaji (English Letters)": "kotatsu", "English Meaning": "table with heater", "audio": "kotatsu"},
  {"漢字 - Kanji": "冷蔵庫", "ひらがな - Hiragana": "れいぞうこ", "Romaji (English Letters)": "reizouko", "English Meaning": "refrigerator", "audio": "reizouko"},
  {"漢字 - Kanji": "冷凍庫", "ひらがな - Hiragana": "れいとうこ", "Romaji (English Letters)": "reitouko", "English Meaning": "freezer", "audio": "reitouko"},
  {"漢字 - Kanji": "炊飯器", "ひらがな - Hiragana": "すいはんき", "Romaji (English Letters)": "suihanki", "English Meaning": "rice cooker", "audio": "suihanki"},
  {"漢字 - Kanji": "食器洗い機", "ひらがな - Hiragana": "しょっきあらいき", "Romaji (English Letters)": "shokkiaraiki", "English Meaning": "dishwasher", "audio": "shokkiaraiki"},
  {"漢字 - Kanji": "洗濯機", "ひらがな - Hiragana": "せんたくき", "Romaji (English Letters)": "sentakuki", "English Meaning": "washing machine", "audio": "sentakuki"},
  {"漢字 - Kanji": "掃除機", "ひらがな - Hiragana": "そうじき", "Romaji (English Letters)": "soujiki", "English Meaning": "vacuum cleaner", "audio": "soujiki"},
  {"漢字 - Kanji": "電子レンジ", "ひらがな - Hiragana": "でんしレンジ", "Romaji (English Letters)": "denshi renji", "English Meaning": "microwave oven", "audio": "denshi renji"},
  {"漢字 - Kanji": "オーブン", "ひらがな - Hiragana": "オーブン", "Romaji (English Letters)": "o-bun", "English Meaning": "oven (katakana)", "audio": "o-bun"},
  {"漢字 - Kanji": "レンジ", "ひらがな - Hiragana": "レンジ", "Romaji (English Letters)": "renji", "English Meaning": "stove (katakana)", "audio": "renji"},
  {"漢字 - Kanji": "水", "ひらがな - Hiragana": "みず", "Romaji (English Letters)": "mizu", "English Meaning": "water", "audio": "mizu"},
  {"漢字 - Kanji": "お湯", "ひらがな - Hiragana": "おゆ", "Romaji (English Letters)": "o-yu", "English Meaning": "hot water", "audio": "o-yu"},
  {"漢字 - Kanji": "塩", "ひらがな - Hiragana": "しお", "Romaji (English Letters)": "shio", "English Meaning": "salt", "audio": "shio"},
  {"漢字 - Kanji": "砂糖", "ひらがな - Hiragana": "さとう", "Romaji (English Letters)": "satou", "English Meaning": "sugar", "audio": "satou"},
  {"漢字 - Kanji": "胡椒", "ひらがな - Hiragana": "こしょう", "Romaji (English Letters)": "koshou", "English Meaning": "black pepper", "audio": "koshou"},
  {"漢字 - Kanji": "小麦粉", "ひらがな - Hiragana": "こむぎこ", "Romaji (English Letters)": "komugiko", "English Meaning": "wheat flour", "audio": "komugiko"},
  {"漢字 - Kanji": "卵", "ひらがな - Hiragana": "たまご", "Romaji (English Letters)": "tamago", "English Meaning": "egg(s)", "audio": "tamago"},
  {"漢字 - Kanji": "パン", "ひらがな - Hiragana": "パン", "Romaji (English Letters)": "pan", "English Meaning": "bread (katakana)", "audio": "pan"},
  {"漢字 - Kanji": "醤油", "ひらがな - Hiragana": "しょうゆ", "Romaji (English Letters)": "shouyu", "English Meaning": "soy sauce", "audio": "shouyu"},
  {"漢字 - Kanji": "牛乳", "ひらがな - Hiragana": "ぎゅうにゅう", "Romaji (English Letters)": "gyuunyuu", "English Meaning": "milk", "audio": "gyuunyuu"},
  {"漢字 - Kanji": "野菜", "ひらがな - Hiragana": "やさい", "Romaji (English Letters)": "yasai", "English Meaning": "vegetables", "audio": "yasai"},
  {"漢字 - Kanji": "果物", "ひらがな - Hiragana": "くだもの", "Romaji (English Letters)": "kudamono", "English Meaning": "fruit", "audio": "kudamono"},
  {"漢字 - Kanji": "じゃが芋", "ひらがな - Hiragana": "じゃがいも", "Romaji (English Letters)": "jagaimo", "English Meaning": "potato", "audio": "jagaimo"},
  {"漢字 - Kanji": "人参", "ひらがな - Hiragana": "にんじん", "Romaji (English Letters)": "ninjin", "English Meaning": "carrot", "audio": "ninjin"},
  {"漢字 - Kanji": "玉葱", "ひらがな - Hiragana": "たまねぎ", "Romaji (English Letters)": "tamanegi", "English Meaning": "onion", "audio": "tamanegi"},
  {"漢字 - Kanji": "胡瓜", "ひらがな - Hiragana": "きゅうり", "Romaji (English Letters)": "kyuuri", "English Meaning": "cucumber", "audio": "kyuuri"},
  {"漢字 - Kanji": "玉蜀黍", "ひらがな - Hiragana": "とうもろこし", "Romaji (English Letters)": "toumorokoshi", "English Meaning": "corn", "audio": "toumorokoshi"},
  {"漢字 - Kanji": "ピーマン", "ひらがな - Hiragana": "ピーマン", "Romaji (English Letters)": "pi-man", "English Meaning": "bell pepper (katakana)", "audio": "pi-man"},
  {"漢字 - Kanji": "レタス", "ひらがな - Hiragana": "レタス", "Romaji (English Letters)": "retasu", "English Meaning": "lettuce (katakana)", "audio": "retasu"},
  {"漢字 - Kanji": "菠薐草", "ひらがな - Hiragana": "ほうれんそう", "Romaji (English Letters)": "hourensou", "English Meaning": "spinach", "audio": "hourensou"},
  {"漢字 - Kanji": "キャベツ", "ひらがな - Hiragana": "キャベツ", "Romaji (English Letters)": "kyabetsu", "English Meaning": "cabbage (katakana)", "audio": "kyabetsu"},
  {"漢字 - Kanji": "林檎", "ひらがな - Hiragana": "りんご", "Romaji (English Letters)": "ringo", "English Meaning": "apple", "audio": "ringo"},
  {"漢字 - Kanji": "オレンジ", "ひらがな - Hiragana": "オレンジ", "Romaji (English Letters)": "orenji", "English Meaning": "orange", "audio": "orenji"},
  {"漢字 - Kanji": "蜜柑", "ひらがな - Hiragana": "みかん", "Romaji (English Letters)": "mikan", "English Meaning": "mandarin orange", "audio": "mikan"},
  {"漢字 - Kanji": "葡萄", "ひらがな - Hiragana": "ぶどう", "Romaji (English Letters)": "budou", "English Meaning": "grape(s)", "audio": "budou"},
  {"漢字 - Kanji": "苺", "ひらがな - Hiragana": "いちご", "Romaji (English Letters)": "ichigo", "English Meaning": "strawberry", "audio": "ichigo"},
  {"漢字 - Kanji": "木苺", "ひらがな - Hiragana": "きいちご", "Romaji (English Letters)": "kiichigo", "English Meaning": "raspberry", "audio": "kiichigo"},
  {"漢字 - Kanji": "洋梨", "ひらがな - Hiragana": "ようなし", "Romaji (English Letters)": "younashi", "English Meaning": "pear", "audio": "younashi"},
  {"漢字 - Kanji": "バナナ", "ひらがな - Hiragana": "バナナ", "Romaji (English Letters)": "banana", "English Meaning": "banana (katakana)", "audio": "banana"},
  {"漢字 - Kanji": "桃", "ひらがな - Hiragana": "もも", "Romaji (English Letters)": "momo", "English Meaning": "peach", "audio": "momo"},
  {"漢字 - Kanji": "西瓜", "ひらがな - Hiragana": "すいか", "Romaji (English Letters)": "suika", "English Meaning": "watermelon", "audio": "suika"},
  {"漢字 - Kanji": "メロン", "ひらがな - Hiragana": "メロン", "Romaji (English Letters)": "meron", "English Meaning": "melon (typically honeydew - katakana)", "audio": "meron"},
  {"漢字 - Kanji": "アプリコット", "ひらがな - Hiragana": "アプリコット", "Romaji (English Letters)": "apurikotto", "English Meaning": "apricot", "audio": "apurikotto"},
  {"漢字 - Kanji": "南瓜", "ひらがな - Hiragana": "かぼちゃ", "Romaji (English Letters)": "kabocha", "English Meaning": "pumpkin", "audio": "kabocha"},
  {"漢字 - Kanji": "トマト", "ひらがな - Hiragana": "トマト", "Romaji (English Letters)": "tomato", "English Meaning": "tomato (katakana)", "audio": "tomato"},
  {"漢字 - Kanji": "肉", "ひらがな - Hiragana": "にく", "Romaji (English Letters)": "niku", "English Meaning": "meat", "audio": "niku"},
  {"漢字 - Kanji": "鳥肉", "ひらがな - Hiragana": "とりにく", "Romaji (English Letters)": "toriniku", "English Meaning": "chicken meat", "audio": "toriniku"},
  {"漢字 - Kanji": "豚肉", "ひらがな - Hiragana": "ぶたにく", "Romaji (English Letters)": "butaniku", "English Meaning": "pork", "audio": "butaniku"},
  {"漢字 - Kanji": "牛肉", "ひらがな - Hiragana": "ぎゅうにく", "Romaji (English Letters)": "gyuuniku", "English Meaning": "beef", "audio": "gyuuniku"},
  {"漢字 - Kanji": "ホットケーキ", "ひらがな - Hiragana": "ホットケーキ", "Romaji (English Letters)": "hottoke-ki", "English Meaning": "pancakes, hotcakes (katakana)", "audio": "hottoke-ki"},
  {"漢字 - Kanji": "蜂蜜", "ひらがな - Hiragana": "はちみつ", "Romaji (English Letters)": "hachimitsu", "English Meaning": "honey", "audio": "hachimitsu"},
  {"漢字 - Kanji": "シロップ", "ひらがな - Hiragana": "シロップ", "Romaji (English Letters)": "shiroppu", "English Meaning": "syrup (katakana)", "audio": "shiroppu"},
  {"漢字 - Kanji": "豆腐", "ひらがな - Hiragana": "とうふ", "Romaji (English Letters)": "toufu", "English Meaning": "tofu", "audio": "toufu"},
  {"漢字 - Kanji": "烏賊", "ひらがな - Hiragana": "いか", "Romaji (English Letters)": "ika", "English Meaning": "squid", "audio": "ika"},
  {"漢字 - Kanji": "蛸", "ひらがな - Hiragana": "たこ", "Romaji (English Letters)": "tako", "English Meaning": "octopus", "audio": "tako"},
  {"漢字 - Kanji": "魚", "ひらがな - Hiragana": "さかな", "Romaji (English Letters)": "sakana", "English Meaning": "fish", "audio": "sakana"},
  {"漢字 - Kanji": "大さじ", "ひらがな - Hiragana": "おおさじ", "Romaji (English Letters)": "oosaji", "English Meaning": "tablespoon", "audio": "oosaji"},
  {"漢字 - Kanji": "小さじ", "ひらがな - Hiragana": "こさじ", "Romaji (English Letters)": "kosaji", "English Meaning": "teaspoon", "audio": "kosaji"},
  {"漢字 - Kanji": "俎板", "ひらがな - Hiragana": "まないた", "Romaji (English Letters)": "manaita", "English Meaning": "cutting board, chopping board", "audio": "manaita"},
  {"漢字 - Kanji": "泡だて器", "ひらがな - Hiragana": "あわだてき", "Romaji (English Letters)": "awadateki", "English Meaning": "eggbeater, whisk", "audio": "awadateki"},
  {"漢字 - Kanji": "鍋", "ひらがな - Hiragana": "なべ", "Romaji (English Letters)": "nabe", "English Meaning": "pot", "audio": "nabe"},
  {"漢字 - Kanji": "フライパン", "ひらがな - Hiragana": "フライパン", "Romaji (English Letters)": "furaipan", "English Meaning": "frying pan", "audio": "furaipan"},
  {"漢字 - Kanji": "煮る", "ひらがな - Hiragana": "にる", "Romaji (English Letters)": "niru", "English Meaning": "to boil, to cook [iv]", "audio": "niru"},
  {"漢字 - Kanji": "焼く", "ひらがな - Hiragana": "やく", "Romaji (English Letters)": "yaku", "English Meaning": "to bake, to grill [gv]", "audio": "yaku"},
  {"漢字 - Kanji": "焦げる", "ひらがな - Hiragana": "こげる", "Romaji (English Letters)": "kogeru", "English Meaning": "to burn, to be burned [iv]", "audio": "kogeru"},
  {"漢字 - Kanji": "料理する", "ひらがな - Hiragana": "りょうりする", "Romaji (English Letters)": "ryouri suru", "English Meaning": "to cook [irv]", "audio": "ryouri suru"},
  {"漢字 - Kanji": "沸騰する", "ひらがな - Hiragana": "ふっとうする", "Romaji (English Letters)": "futtou suru", "English Meaning": "to boil [irv]", "audio": "futtou suru"},
  {"漢字 - Kanji": "揚げる", "ひらがな - Hiragana": "あげる", "Romaji (English Letters)": "ageru", "English Meaning": "to deep-fry [iv]", "audio": "ageru"},
  {"漢字 - Kanji": "蒸す", "ひらがな - Hiragana": "むす", "Romaji (English Letters)": "musu", "English Meaning": "to steam [gv]", "audio": "musu"}
]

const tabledatatwo = [
  {"漢字 - Kanji": "この林檎を食べてから、洗濯をして、掃除機を掛けて、お風呂を綺麗にする(します)。", "ひらがな - Hiragana": "このりんごをたべてから、せんたくをして、そうじきをかけて、おふろをきれいにする(します)。", "Romaji (English Letters)": "Kono ringo o tabete kara, sentaku o shite, soujiki o kakete, o-furo o kirei ni suru (shimasu).", "English Meaning": "After I eat this apple, I will do laundry, vacuum, and then clean the bathtub.", "audio": "Kono ringo o tabete kara, sentaku o shite, soujiki o kakete, o-furo o kirei ni suru"},
  {"漢字 - Kanji": "小麦粉と牛乳と卵を鍋の中に入れて混ぜる(混ぜます)。", "ひらがな - Hiragana": "こむぎことぎゅうにゅうとたまごをなべのなかにいれてまぜる(まぜます)。", "Romaji (English Letters)": "Komugiko to gyuunyuu to tamago o nabe no naka ni irete mazeru (mazemasu).", "English Meaning": "Put flour, milk, and an egg into a pot and mix. (Japanese command form is not used in recipe instructions)", "audio": "Komugiko to gyuunyuu to tamago o nabe no naka ni irete mazeru"}
]

const tabledatathree = [
  {"漢字 - Kanji": "掛ける", "ひらがな - Hiragana": "かける", "Romaji (English Letters)": "kakeru", "English Meaning": "to turn on (in the case of an engine or appliance)) [iv]", "audio": "kakeru"},
  {"漢字 - Kanji": "綺麗にする", "ひらがな - Hiragana": "きれいにする", "Romaji (English Letters)": "kirei ni suru", "English Meaning": "to make clean) [irv]", "audio": "kirei ni suru"},
  {"漢字 - Kanji": "入れる", "ひらがな - Hiragana": "いれる", "Romaji (English Letters)": "ireru", "English Meaning": "to put in, to insert) [iv]", "audio": "ireru"},
  {"漢字 - Kanji": "混ぜる", "ひらがな - Hiragana": "まぜる", "Romaji (English Letters)": "mazeru", "English Meaning": " to mix) [iv]", "audio": "mazeru"}
]

const VocabFourB = () => {

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
      <p>Below are a number of Japanese vocabulary words associated with the house and kitchen. All words are nouns unless otherwise specified. Please note that the example sentences will be done in plain 
      form with the polite form in parentheses.</p>

      <Table data={tabledataone} />

      <p>Here are some example sentences:</p>

      <Table data={tabledatatwo} />

      <h2>Vocab breakdown</h2>

      <Table data={tabledatathree} />

      </>
  )
}

export default VocabFourB