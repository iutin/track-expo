import React from 'react'
import {Text, View, Image,StyleSheet} from 'react-native'
import {Button, Icon} from 'react-native-elements'
import styles from './styles'

export default class LogoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
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
