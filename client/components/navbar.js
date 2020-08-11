import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Checkout} from './Checkout'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="navbar">
    <h1 id="page-title">GRACEFUL SUDS</h1>
    <nav>
      <div id="links-bar">
        {isLoggedIn ? (
          <span>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </span>
        ) : (
          <span>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </span>
        )}
        <Link to="/products">All Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
    <hr />
    <div id="checkout-icon">
      <Link to="/checkout">Checkout</Link>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
