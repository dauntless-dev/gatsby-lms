import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin, logout } from './services/auth'

class Login extends React.Component {
  handleSubmit = () => handleLogin(user => navigate(`/members/`))
  handleLogout = () => logout(user => navigate(`/`))
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Log in</h1>
        <button onClick={this.handleSubmit} style={{ width: 100 }}>
          log in
        </button>
        <button onClick={this.handleLogout} style={{ width: 100 }}>
          log out
        </button>
      </div>
    )
  }
}

export default Login