// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: false}

  usernameInput = event => {
    this.setState({username: event.target.value})
  }

  passwordInput = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameForm = () => {
    const {username} = this.state
    return (
      <div className="form-input-container">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="input-box"
          type="text"
          id="username"
          placeholder="Username"
          onChange={this.usernameInput}
          value={username}
        />
      </div>
    )
  }

  renderPasswordForm = () => {
    const {password} = this.state
    return (
      <div className="form-input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="input-box"
          type="password"
          id="password"
          placeholder="Password"
          onChange={this.passwordInput}
          value={password}
        />
      </div>
    )
  }

  gotoHomePage = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.gotoHomePage()
    } else {
      console.log(data.error_msg)
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {errorMsg} = this.state
    const isError = errorMsg !== '' ? true : false
    const errStatement = <p className="error-msg">*{errorMsg}</p>
    return (
      <div className="login-bg-container">
        <img
          className="login-form-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="login-form-container">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <form className="login-form" onSubmit={this.submitForm}>
            {this.renderUsernameForm()}
            {this.renderPasswordForm()}
            <button className="login-form-submit-btn" type="submit">
              Login
            </button>
            {isError && errStatement}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
