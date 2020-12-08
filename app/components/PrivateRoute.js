import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn, getUser } from "../services/auth"

export const isBrowser = () => typeof window !== 'undefined'

const user = getUser()

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/members/login`) {
    // If the user is not logged in, redirect to the login page.
    isBrowser() && navigate(`/login`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute