import React from "react"
import Helmet from "react-helmet"
import {Link} from "gatsby"
import NavBar from "./components/NavBar"
import Table from "@components/Table"

const title = "Getting Started"

const GettingStarted = () => {
  
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
     Members Area
      </div>
      <h1>{title}</h1>

      <p>Welcome to the FreeJapaneseLessons.com Members Area!</p>

      <p>With all of the content we have available you may be wondering where to start and what the best approach to learning Japanese is. Well, that's why we created this Getting Started Guide. We will offer 3 approaches (below) based on your need.</p>

      <p>Whichever approach you take, be sure to check out the additional FREE features only available in the Members Area such as...</p>
      <p>Additional free lessons such as:</p>
      <ul>
<li><Link to="">Writing Hiragana (A-Ko)</Link></li>
<li><Link to="">Sentence Construction</Link></li>
<li><Link to="">100 Most Useful Phrases - Part 1 of 4</Link></li>
<li><Link to="">Sound Words</Link></li>
<li><Link to="">Dake, Shika, Tokoro, and Bakari</Link></li>
<li><Link to="">Grade 1 Kanji - Part 1 of 2</Link></li>
<li><Link to="">Grade 1 Kanji - Part 2 of 2</Link></li>
<li><Link to="">Grade 2 Kanji - Part 1 of 4</Link></li>
</ul>
<p>And audio files on:</p>
<ul>
<li><Link to="">Hiragana</Link></li>
<li><Link to="">Katakana</Link></li>
<li><Link to="">Beginning Vocabulary - Part 1</Link></li>
</ul>

<h2>The Rushed Learner...</h2>

<p>You need to learn some Japanese in a hurry.</p>
<ol>
	<li>Most of the <Link to="">100 Most Useful Phrases</Link> series (split into 4 parts) are <Link to="">Preferred Member</Link> lessons but also the quickest way to start learning the most common and useful Japanese phrases. If you prefer to stick to free lessons, then we would recommend the path for the Casual Learner.</li>

	<li>Once you have some common phrases under your belt and have more time to learn the language, start down the path of the Serious Learner.</li>

</ol>
<h2>The Casual Learner...</h2> 

<p>You are interested in learning a few Japanese words or phrases.</p>
<ol>
	<li>Start with the <Link to="">Beginning Vocabulary Part 1</Link> lesson. This will get you started with some basic Japanese words and phrases. The <Link to="">Meeting Someone New (and Other Common Phrases)</Link> lesson may also be a good one for you. <Link to="">100 Most Useful Phrases Part 1</Link> as well. There are also <Link to="">Preferred Member</Link> lessons covering a number of vocabulary subjects such as <Link to="">Family Vocab</Link>, <Link to="">School Vocab</Link>, and <Link to="">House/Kitchen Vocab</Link>.</li>

	<li>If you find your interest in Japanese beginning to grow, move on to the steps for the Serious Learner.</li>
</ol>
<h2>The Serious Learner...</h2>

<p>You want to become fluent and our lessons can get you on the right track.</p>
<ol>
	<li>Start with the <Link to="">Hiragana</Link> lesson but don't wait to move on until you have all of the characters memorized. Learn them as you continue to go through the other lessons.</li>

  <li>Touch on <Link to="">Katakana</Link> and <Link to="">Names in Japanese</Link> briefly just to learn your name in Japanese but don't worry too much about Katakana for now (it's the least used character set in Japanese).</li>

  <li>Be sure to learn Japanese grammar well through lessons such as <Link to="">Basic Grammar</Link> and <Link to="">Sentence Construction</Link>. Verbs are the most important part of a Japanese sentence so be sure to pay close attention to the verb conjugation lessons - <Link to="">Verb Conjugation (Godan)</Link>, <Link to="">Verb Conjugation (Ichidan and Irregular)</Link>, and <Link to="">Using the Verb Bases Part 1</Link>. There are also <Link to="">Preferred Member</Link> lessons which delve deeper into these subjects such as <Link to="">Using the Verb Bases Part 2</Link>, <Link to="">More Particles</Link>, etc.</li>

  <li>Once you feel comfortable with the content in the <Link to="">Beginner</Link> lessons, move on to the <Link to="">Intermediate</Link> lessons, and then on to the <Link to="">Advanced</Link> lessons which cover Kanji. It can take years to become fluent in Japanese so don't get discouraged!</li>
</ol>



    </>
  )
}

export default GettingStarted