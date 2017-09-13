import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import thunk from 'redux-thunk'

/**
 * [configureStore description]
 * @return {[type]} [description]
 */
export default function configureStore() {
  let store = createStore(app, applyMiddleware(thunk))
  return store
}
