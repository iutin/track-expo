import React from 'react'
import { Text,View,Image} from 'react-native'
import {Button,Icon} from 'react-native-elements'

export default class LogoScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  constructor(props){
  	super(props);
  	this.state = {};
    // setTimeout(() => this.props.navigation.navigate("Listdelivery"), 1000);
  }
  render() {
    return(
      <Image style={{
        backgroundColor: '#fff',
               flex: 1,
               position: 'absolute',
               width: '100%',
               height: '100%',
               justifyContent: 'center',
      }} source = {require('./images/background.jpg')}>
      <View style={{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text style={{
          backgroundColor: 'transparent',
          textAlign: 'center',
          fontSize: 30,
          color: '#fff'
        }}>Track Package</Text>
        <Button buttonStyle={{
          marginTop: 30,
          marginBottom: 15,
          width: 130,
        }} backgroundColor="steelblue" onPress={() => {
          this.props.navigation.navigate("Listdelivery")
        }} title='Старт'/>
      </View>
    </Image>
    )

  }
}
