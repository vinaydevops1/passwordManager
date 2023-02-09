import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

class AppPage extends Component {
  state = {
    listOfPasswords: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    showPassword: false,
  }

  onClickAdd = event => {
    event.preventDefault()
    const {website, username, password, showPassword} = this.state
    const newPasswordAdd = {
      id: uuidv4(),
      website,
      username,
      password,
      showPassword,
    }

    this.setState(prevState => ({
      listOfPasswords: [...prevState.listOfPasswords, newPasswordAdd],
      website: '',
      password: '',
      username: '',
    }))
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({
      listOfPasswords: prevState.listOfPasswords.map(eachItem => {
        if (eachItem.showPassword === false) {
          return {
            ...eachItem,
            showPassword: !eachItem.showPassword,
          }
        }
        return {
          ...eachItem,
          showPassword: !eachItem.showPassword,
        }
      }),
    }))
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onClickDelete = id => {
    const {listOfPasswords} = this.state
    const filteredList = listOfPasswords.filter(eachItem => eachItem.id !== id)

    this.setState({
      listOfPasswords: filteredList,
    })
  }

  render() {
    const {
      website,
      listOfPasswords,
      username,
      password,
      searchInput,
    } = this.state

    const searchResult = listOfPasswords.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const noOfPasswords = searchResult.length

    return (
      <div className="home-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-img"
        />
        <div className="container2">
          <form className="add-password" onSubmit={this.onClickAdd}>
            <h1 className="add-heading">Add New Password</h1>
            <div className="containers">
              <label htmlFor="website">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="add-img"
                />
              </label>
              <input
                value={website}
                id="website"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                className="input-style"
              />
            </div>
            <div className="containers">
              <label htmlFor="username">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="add-img"
                />
              </label>
              <input
                value={username}
                id="username"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                className="input-style"
              />
            </div>
            <div className="containers">
              <label htmlFor="password">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="add-img"
                />
              </label>
              <input
                value={password}
                id="password"
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                className="input-style"
              />
            </div>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <div className="password-img2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
        </div>
        <div className="passwords-container">
          <div className="password-search">
            <div className="password-count">
              <h1 className="add-heading">Your Passwords</h1>
              <p className="count">{noOfPasswords}</p>
            </div>
            <div className="search-container">
              <div className="container-search">
                <label htmlFor="search">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-img"
                  />
                </label>
                <input
                  value={searchInput}
                  id="search"
                  type="search"
                  placeholder="search"
                  onChange={this.onChangeSearch}
                  className="search-style"
                />
              </div>
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox-style"
              id="checkbox"
              onChange={this.onChangeCheckbox}
            />
            <label htmlFor="checkbox" className="checkbox">
              Show Passwords
            </label>
          </div>
          {noOfPasswords === 0 ? (
            <div className="nopasswords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="result-img"
              />
              <p className="add-heading">No Passwords</p>
            </div>
          ) : (
            <ul className="list-of-passwords">
              {searchResult.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default AppPage
