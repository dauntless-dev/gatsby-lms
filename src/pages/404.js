import React, { Component, useEffect } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import netlifyIdentity from "netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS


export default function NotFoundPage() {
    //useEffect(() => {
    //  netlifyIdentity.init({})
    //})
  return (
  <>

    <div className="py-4">
        <h1>Nothing here sorry.</h1>
        <hr />

        <p>
          We've made a lot of changes on this site so it might have been moved.
        </p>

        <p>
          <a href="/">Click here to find what you were looking for.</a>
        </p>

        {/*<button onClick={() => {netlifyIdentity.open()}}>Login</button>*/}

    </div>
  </>
  )
  }

