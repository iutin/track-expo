import React from 'react'
import {TouchableHighlight, View, Text, StyleSheet, ScrollView} from 'react-native'
import {FormLabel, FormInput, Button, Card, Icon} from 'react-native-elements'
import {connect} from 'react-redux'
import {fetchTrackFromAPI} from './actions'

let styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
});

export default class DeliveryForm extends React.Component {
  static navigationOptions = ({navigation}) => ({headerBackTitle: null, headerTruncatedBackTitle: null, title: `${navigation.state.params.name}`});
  constructor(props) {
    super(props);
    this.state = {
      barcode: ''
    };
  }
  changeTrack = (barcode) => {
    this.setState({barcode})
  }
  render() {
    let title = this.props.isFetching==false?'Найти':'Поиск...'
    return (
      <Card dividerStyle={{
        opacity: 0,
        height: 1,
        padding: 0,
        marginBottom: 0
      }} containerStyle={{
        padding: 0
      }}>
        <FormLabel>Трек-номер</FormLabel>
        <FormInput inputStyle={{
          width: "100%",
          padding: 0
        }} onChangeText={this.changeTrack.bind(this)}/>
        <Button icon={{
          name: 'search'
        }} buttonStyle={{
          marginTop: 15,
          marginBottom: 15
        }} backgroundColor="green" style={{
          width: '100%'
        }} onPress={() => {
          if(this.props.isFetching==false){
            this.props.getTracks(this.state.barcode, this.props.type)
          }
        }} title={title}/>
      </Card>

    )
  }
}
