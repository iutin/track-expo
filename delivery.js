import React from 'react'
import {TouchableHighlight, View, Text, StyleSheet, ScrollView} from 'react-native'
import {FormLabel, FormInput, Button, Card, Icon} from 'react-native-elements'
import {connect} from 'react-redux'
import {fetchTrackFromAPI} from './actions'
import Form from './deliveryform'
import Formresult from './deliveryresult'
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

class DeliveryForm extends React.Component {
  static navigationOptions = ({navigation}) => ({headerBackTitle: null, headerTruncatedBackTitle: null, title: `${navigation.state.params.name}`});
  constructor(props) {
    super(props);
    this.state = {
      barcode: '',
      getTrack: props.getTrack,
      type: props.navigation.state.params.type
    };
  }
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

function mapStateToProps(state) {
  return {track: state.track}
}

function mapDispatchToProps(dispatch) {
  return {
    getTrack: (barcode, type) => dispatch(fetchTrackFromAPI(barcode, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryForm)
