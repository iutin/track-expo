import React from 'react'
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native'
import {Button, Card, Icon} from 'react-native-elements'

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

export default class DeliveryResult extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let display = 1;
    if (this.props.track.isShow && this.props.track.result.length > 0) {
      display = 1;
    } else {
      display = 0;
    }
    if (this.props.track.error == true) {
      alert('Информации по трек-номеру нет!');
    }
    return (
      <Card containerStyle={{
        opacity: display
      }} title="Результат по треку">
        <View>
          {this.props.track.result.map((u, i) => {
            return (
              <Text style={{textAlign:'left'}} key={i}>{u}</Text>
            )
          })
}
        </View>
      </Card>

    )
  }
}
