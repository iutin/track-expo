import React from 'react'
const { StyleSheet } = React;
import MainStackRouter from "./Routers/MainStackRouter";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MainStackRouter />;
  }
}

export default Main;
