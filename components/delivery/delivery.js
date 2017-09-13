import React from 'react'
import {View, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {fetchTrackFromAPI} from '../../actions'
import styles from './styles'
import Form from '../deliveryform/deliveryform'
import Formresult from '../deliveryresult/deliveryresult'

/**
 * [navigationOptions description]
 * @type {[type]}
 */
class DeliveryForm extends React.Component {
  /**
   * [navigationOptions description]
   * @type {[type]}
   */
  static navigationOptions = ({navigation}) => ({headerBackTitle: null, headerTruncatedBackTitle: null, title: `${navigation.state.params.name}`});
  constructor(props) {
    super(props);
    this.state = {
      barcode: '',
      getTrack: props.getTrack,
      type: props.navigation.state.params.type
    };
  }
  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (

      <ScrollView style={{
        marginBottom: 20
      }}>
        <View style={styles.container}>
          <Form getTracks={this.props.getTrack} isFetching={this.props.track.isFetching} type={this.state.type} />
          <Formresult track={this.props.track}/>
        </View>
      </ScrollView>

    )
  }
}

/**
 * [mapStateToProps description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
function mapStateToProps(state) {
  return {track: state.track}
}

/**
 * [mapDispatchToProps description]
 * @param  {[type]} dispatch [description]
 * @return {[type]}          [description]
 */
function mapDispatchToProps(dispatch) {
  return {
    getTrack: (barcode, type) => dispatch(fetchTrackFromAPI(barcode, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryForm)
