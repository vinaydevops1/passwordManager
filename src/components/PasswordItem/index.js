import './index.css'

const PasswordItem = props => {
  const {eachItem, onClickDelete} = props
  const {website, username, password, id, showPassword} = eachItem
  const firstLetter = website.slice(0, 1).toUpperCase()
  const deletePassword = () => {
    onClickDelete(id)
  }

  return (
    <li className="single-container">
      <h1 className="letter-heading">{firstLetter}</h1>
      <div className="details">
        <p>{website}</p>
        <p>{username}</p>
        {showPassword ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-size"
          />
        )}
      </div>
      <button
        type="button"
        onClick={deletePassword}
        data-testid="delete"
        className="button-delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
