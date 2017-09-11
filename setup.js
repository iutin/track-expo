import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Main from './main';
const store = configureStore()
import configureStore from './configureStore'

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
}

export default Setup;
