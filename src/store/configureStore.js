import {createStore} from 'redux'
import rootReducer from '../reducers'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState)
}
