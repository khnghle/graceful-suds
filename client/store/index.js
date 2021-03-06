import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './products'
import cart from './cart'
import singleProduct from './singleProduct'
import reviews from './reviews'
import orderHistory from './orderhistory'
import order from './order'

//add more individual reducers here as we create them!
const reducer = combineReducers({
  user,
  products,
  cart,
  singleProduct,
  reviews,
  orderHistory,
  order
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
