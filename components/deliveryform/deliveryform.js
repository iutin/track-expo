import React from 'react'
import {View, Text} from 'react-native'
import {FormLabel, FormInput, Button, Card, Icon} from 'react-native-elements'
import {connect} from 'react-redux'
import {fetchTrackFromAPI} from '../../actions'
import styles from './styles'

/**
 * [navigationOptions description]
 * @type {[type]}
 */
export default class DeliveryForm extends React.Component {
  static navigationOptions = ({navigation}) => ({headerBackTitle: null, headerTruncatedBackTitle: null, title: `${navigation.state.params.name}`});
  constructor(props) {
    super(props);
    this.state = {
      barcode: ''
    };
  }
  /**
   * [changeTrack description]
   * @param  {[type]} barcode [description]
   * @return {[type]}         [description]
   */
  changeTrack = (barcode) => {
    barcode = barcode.replace(/^\s+|\s+$/gm,'');
    this.setState({barcode})
  }
  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    let title = this.props.isFetching == false
      ? 'Найти'
      : 'Поиск...'
    return (
      <Card dividerStyle={styles.card} containerStyle={{
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
          if (this.props.isFetching == false) {
            this.props.getTracks(this.state.barcode, this.props.type)
          }
        }} title={title}/>
      </Card>

    )
  }
}
