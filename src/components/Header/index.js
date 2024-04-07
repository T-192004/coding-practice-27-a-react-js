// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header-nav-bar">
    <img
      className="nav-bar-logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="nav-item-list">
      <li className="nav-item">Home</li>
      <li className="nav-item">Products</li>
      <li className="nav-item">Cart</li>
      <li className="nav-item">
        <button className="nav-logout-btn" type="button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
