import React from "react"
import { Router } from "@reach/router"
import Layout from "./components/layout"
import Profile from "./profile"
import GettingStarted from "./getting-started"
import Main from "./main"
import PrivateRoute from "./components/PrivateRoute"
import VocabOneB from "./b/vocab/vocab01"
import VocabTwoB from "./b/vocab/vocab02"
import VocabThreeB from "./b/vocab/vocab03"
import VocabFourB from "./b/vocab/vocab04"
import VocabFiveB from "./b/vocab/vocab05"
import VocabSixB from "./b/vocab/vocab06"
import NumbersTimeB from "./b/vocab/numbers"
import BasesOne from "./b/grammar/bases01"
import BasesTwo from "./b/grammar/bases02"
import DescriptiveOne from "./b/grammar/descriptive01"
import GodanVerbs from "./b/grammar/godan-verbs"
import IchidanVerbs from "./b/grammar/ichidan-verbs"
import BasicGrammar from "./b/grammar/basic-grammar"
import MoreParticles from "./b/grammar/more-particles"
import SentenceConstruction from "./b/grammar/sentence-construction"
import CommonOne from "./b/common/common01"
import CommonTwo from "./b/common/common02"
import CommonThree from "./b/common/common03"
import CommonFour from "./b/common/common04"
import Conversations from "./b/common/conversations"
import Meeting from "./b/common/meeting"
import Hiragana from "./b/basics/hiragana"
import HiraganaWritingOne from "./b/basics/hiragana-writing01"
import HiraganaWritingTwo from "./b/basics/hiragana-writing02"
import HiraganaWritingThree from "./b/basics/hiragana-writing03"
import HiraganaWritingFour from "./b/basics/hiragana-writing04"
import HiraganaWritingFive from "./b/basics/hiragana-writing05"
import Katakana from "./b/basics/katakana"
import NamesInJapanese from "./b/basics/names"
import Login from "./login"

const App = () => {
  return (
    <Layout lang="en" location="/members/">
      
      <Router>
        <PrivateRoute path="/members/profile/" component={Profile} />
        <PrivateRoute path="/members/getting-started/" component={GettingStarted} />
        <PrivateRoute path="/members/" component={Main} />
        <PrivateRoute path="/members/b/vocab/vocab01/" component={VocabOneB} />
        <PrivateRoute path="/members/b/vocab/vocab02/" component={VocabTwoB} />
        <PrivateRoute path="/members/b/vocab/vocab03/" component={VocabThreeB} />
        <PrivateRoute path="/members/b/vocab/vocab04/" component={VocabFourB} />
        <PrivateRoute path="/members/b/vocab/vocab05/" component={VocabFiveB} />
        <PrivateRoute path="/members/b/vocab/vocab06/" component={VocabSixB} />
        <PrivateRoute path="/members/b/vocab/numbers/" component={NumbersTimeB} />
        <PrivateRoute path="/members/b/grammar/bases01/" component={BasesOne} />
        <PrivateRoute path="/members/b/grammar/bases02/" component={BasesTwo} />
        <PrivateRoute path="/members/b/grammar/descriptive01/" component={DescriptiveOne} />
        <PrivateRoute path="/members/b/grammar/godan-verbs/" component={GodanVerbs} />
        <PrivateRoute path="/members/b/grammar/ichidan-verbs/" component={IchidanVerbs} />
        <PrivateRoute path="/members/b/grammar/basic-grammar/" component={BasicGrammar} />
        <PrivateRoute path="/members/b/grammar/more-particles/" component={MoreParticles} />
        <PrivateRoute path="/members/b/grammar/sentence-construction/" component={SentenceConstruction} />
        <PrivateRoute path="/members/b/common/common01/" component={CommonOne} />
        <PrivateRoute path="/members/b/common/common02/" component={CommonTwo} />
        <PrivateRoute path="/members/b/common/common03/" component={CommonThree} />
        <PrivateRoute path="/members/b/common/common04/" component={CommonFour} />
        <PrivateRoute path="/members/b/common/meeting/" component={Meeting} />
        <PrivateRoute path="/members/b/common/conversations/" component={Conversations} />
        <PrivateRoute path="/members/b/basics/hiragana/" component={Hiragana} />
        <PrivateRoute path="/members/b/basics/hiragana-writing01/" component={HiraganaWritingOne} />
        <PrivateRoute path="/members/b/basics/hiragana-writing02/" component={HiraganaWritingTwo} />
        <PrivateRoute path="/members/b/basics/hiragana-writing03/" component={HiraganaWritingThree} />
        <PrivateRoute path="/members/b/basics/hiragana-writing04/" component={HiraganaWritingFour} />
        <PrivateRoute path="/members/b/basics/hiragana-writing05/" component={HiraganaWritingFive} />
        <PrivateRoute path="/members/b/basics/katakana/" component={Katakana} />
        <PrivateRoute path="/members/b/basics/names/" component={NamesInJapanese} />
      </Router>
    </Layout>
  )
}
function PublicRoute(props) {
  return <div>{props.children}</div>
}

export default App