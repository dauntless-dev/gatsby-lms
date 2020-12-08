import React from "react"
import {Link, navigate} from "gatsby"
import { handleLogin, logout, getUser } from './services/auth'
import styled from "@emotion/styled"
import {Stripe} from "@components/images/Stripe"

function handleLogout() {logout(user => navigate(`/`))}

function Main() {
  const user = getUser()
  return (
    <>
      <div className="titleWrapper">
      <div className="title">Welcome</div>
      <h1>Free Japanese Lessons</h1>
      </div>
      
      <div className="mainWrapper">
      <p className="paragraph">First time here? Check out the <Link to="/members/getting-started/">Getting Started Guide</Link>.</p>
      <p className="paragraph">Below you will find the ten public lessons, organized appropriately, as well as new lessons that are only available in the Members Area. The lessons are separated by skill level and category. Click the skill level to see only lessons for that skill level.</p>
      
      <table>
        <tbody>
          <tr>
            <td>🔊 = with sound</td>
            <td>🚩 = members only</td>
            <td>⭐ = premium members only</td>
          </tr>
        </tbody>
      </table>

      <table>
      <thead>
        <tr>
          <th>Beginner</th>
          <th>Intermediate</th>
          <th>Advanced</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td><strong>Basics</strong></td>
        <td><strong>Vocabulary</strong></td>
        <td><strong>Kanji</strong></td>
        </tr>
        <tr>
          <td><Link to="/members/b/basics/names/">Names in Japanese</Link> 🔊</td>
          <td><Link to="#" disabled={true}>Sound words</Link> 🔊 🚩</td>
          <td><Link to="#">Introduction to Kanji</Link></td>
        </tr>
        <tr>
          <td><Link to="/members/b/basics/hiragana/">Hiragana</Link> 🔊</td>
          <td>Business Vocab 🔊 ⭐</td>
          <td><strong>Grade 1 Kanji</strong></td>
        </tr>
        <tr>
          <td><Link to="/members/b/basics/hiragana-writing01/">Writing Hiragana (A-Ko)</Link> 🔊 🚩</td>
          <td>Idioms and Figures of Speech 🔊 ⭐</td>
          <td><Link to="#">Part 1 of 2</Link> 🔊 🚩</td>
        </tr>
        <tr>
          <td>Writing Hiragana (Sa-To) 🔊 ⭐</td>
          <td>Words That Sound Similar 🔊 ⭐</td>
          <td><Link to="#">Part 2 of 2</Link> 🔊 🚩</td>
        </tr>
        <tr>
          <td>Writing Hiragana (Na-Ho) 🔊 ⭐</td>
          <td>More Words That Sound Similar 🔊 ⭐</td>
          <td><strong>Grade 2 Kanji</strong></td>
        </tr>
        <tr>
          <td>Writing Hiragana (Ma-Yo) 🔊 ⭐</td>
          <td>Going to a Restaurant 🔊 ⭐</td>
          <td><Link to="#">Part 1 of 4</Link> 🔊 🚩</td>
        </tr>
        <tr>
          <td>Writing Hiragana (Ra-N) 🔊 ⭐</td>
          <td>Parts of the Body 🔊 ⭐</td>
          <td>Part 2 of 4 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/basics/katakana/">Katakana</Link> 🔊</td>
          <td>Honorifics 🔊 ⭐</td>
          <td>Part 3 of 4 🔊 ⭐</td>
        </tr>
        <tr>
          <td><strong>Vocabulary</strong></td>
          <td><strong>Grammar</strong></td>
          <td>Part 4 of 4 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/vocab/vocab01/">Beginning Vocabulary Part 1</Link> 🔊</td>
          <td>Using the Verb Bases Part 3 🔊 ⭐</td>
          <td><strong>Grade 3 Kanji</strong></td>
        </tr>
        <tr>
          <td>Beginning Vocabulary Part 2 🔊 ⭐</td>
          <td><Link to="#">Dake, Shika, Tokoro, and Bakari</Link> 🔊</td>
          <td>Part 1 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/vocab/numbers/">Numbers, Time, and Dates</Link> 🔊</td>
          <td>Counters 🔊 ⭐</td>
          <td>Part 2 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td>Family Vocab 🔊 ⭐</td>
          <td>Complex Sentences 🔊 ⭐</td>
          <td>Part 3 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td>School Vocab 🔊 ⭐</td>
          <td>Describing and Comparing 🔊 ⭐</td>
          <td>Part 4 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td>House/Kitchen Vocab 🔊 ⭐</td>
          <td>Transitive, Intransitive, and Passive Verbs 🔊 ⭐</td>
          <td>Part 5 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td>Animals, Colors, and Shapes 🔊 ⭐</td>
          <td>Questions and Uncertainty 🔊 ⭐</td>
          <td><strong>Grade 4 Kanji</strong></td>
        </tr>
        <tr>
          <td><strong>Grammar</strong></td>
          <td>Time-Based Grammar 🔊 ⭐</td>
          <td>Part 1 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/grammar/basic-grammar/">Basic Grammar</Link> 🔊</td>
          <td>Other Important Grammatical Principles 🔊 ⭐</td>
          <td>Part 2 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/grammar/godan-verbs/">Verb Conjugation Part 1</Link> 🔊</td>
          <td></td>
          <td>Part 3 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/grammar/ichidan-verbs/">Verb Conjugation Part 2</Link> 🔊</td>
          <td></td>
          <td>Part 4 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/grammar/bases01/">Using the Verb Bases Part 1</Link> 🔊</td>
          <td></td>
          <td>Part 5 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td>Using the Verb Bases Part 2 🔊 ⭐</td>
          <td></td>
          <td><strong>Grade 5 Kanji</strong></td>
        </tr>
        <tr>
          <td><Link to="/members/b/grammar/descriptive01/">Descriptive Words Part 1</Link> 🔊</td>
          <td></td>
          <td>Part 1 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/grammar/sentence-construction/">Sentence Construction</Link> 🔊 🚩</td>
          <td></td>
          <td>Part 2 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td>More Particles 🔊 ⭐</td>
          <td></td>
          <td>Part 3 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td><strong>Common Phrases</strong></td>
          <td></td>
          <td>Part 4 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/common/meeting/">Meeting Someone New</Link> 🔊</td>
          <td></td>
          <td>Part 5 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td><Link to="/members/b/common/common01/">100 Most Useful Phrases (1 of 4)</Link> 🔊 🚩</td>
          <td></td>
          <td><strong>Grade 6 Kanji</strong></td>
        </tr>
        <tr>
          <td>100 Most Useful Phrases (2 of 4) 🔊 ⭐</td>
          <td></td>
          <td>Part 1 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td>100 Most Useful Phrases (3 of 4) 🔊 ⭐</td>
          <td></td>
          <td>Part 2 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td>100 Most Useful Phrases (4 of 4) 🔊 ⭐</td>
          <td></td>
          <td>Part 3 of 5 🔊 ⭐</td>
        </tr>
        <tr>
          <td>Basic Conversations 🔊 ⭐</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      </table>

<BuyBox style={{textAlign:`center`}}>

<div className="gridblocks">

<h2>Want our best Japanese content?</h2>
<hr style={{border: `1px dashed #646464`, width:`50%`, margin:`auto`, marginTop:`10px`, marginBottom:`10px`, opacity:`.5`}} />
<p>Enjoy <strong>unlimited access</strong> to all our high quality audio lessons (Beginner, Intermediate and Advanced) for a small, one-time upgrade payment of only:</p>

<p><span style={{color: `#f44336`, fontWeight: `600`, fontSize: `1.4rem`}}>$27</span> <small>USD</small></p>

<p>This is a single, <strong>non-recurring</strong> fee that grants you <strong>lifetime access</strong> to all our Japanese language material and also helps us continue to improve our content. We provide more Japanese learning material than most expensive online courses for a fraction of what they charge.</p>

</div>

<div className="gridblocks" style={{marginBottom:`10px`}}>
  <BuyButton href="#">Upgrade Now</BuyButton>
</div>

<div className="gridblocks" style={{opacity:`.5`}}>
  <Stripe width="120" height="auto" />
</div>

</BuyBox>

      <button onClick={() => handleLogout()} style={{ width: 100 }}>
          log out
        </button>
        <div className={'copyright'}>
        © Free Japanese Lessons, {(new Date().getFullYear())}. NAGEL LLC. <Link to="/privacy-policy/">Privacy</Link>.
        </div>
      </div>

      
    </>
  )
}

export default Main

const BuyBox = styled.div`
  padding:30px;
  background-color: #262626;
  border-radius: 2px;
  color: #fff;
  display: grid;
  
    grid-gap: 10px;
    align-items: center;
      @media (min-width: 600px) {
        .gridblocks { grid-template-columns: repeat(2, 1fr); }
      }
`
const BuyButton = styled.a`
background-color: #f44336;
    border-radius: 2px;
    color: #fff !important;
    transition: .3s ease-in-out;
    font-family: 'Jost';
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 25px;
    &:hover {
      box-shadow: rgba(244, 67, 54, 0.3) 0px 4px 50px 0px, rgba(244, 67, 54, 0.3) 0px 6px 50px 0px;
    }
`