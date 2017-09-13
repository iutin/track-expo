import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Main from './main';
const store = configureStore()
import configureStore from './configureStore'

/**
 * [state description]
 * @type {Object}
 */
class Setup extends Component {
  /**
   * [constructor description]
   * @param  {[type]} props [description]
   * @return {[type]}       [description]
   */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
}

export default Setup;
