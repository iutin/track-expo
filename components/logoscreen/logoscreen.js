import React from 'react'
import {Text, View, Image,StyleSheet} from 'react-native'
import {Button, Icon} from 'react-native-elements'
import styles from './styles'

/**
 * [navigationOptions description]
 * @type {Object}
 */
export default class LogoScreen extends React.Component {
  /**
   * [navigationOptions description]
   * @type {Object}
   */
  static navigationOptions = {
    header: null
  };
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
      <Image style={styles.background} source={require('../../images/background.jpg')}>
        <View style={styles.view}>
          <Text style={styles.text}>Track Package</Text>
          <Button buttonStyle={styles.button} backgroundColor="steelblue" onPress={() => {
            this.props.navigation.navigate("Listdelivery")
          }} title='Старт'/>
        </View>
      </Image>
    )

  }
}
