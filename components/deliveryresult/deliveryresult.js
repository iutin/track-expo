import React from 'react'
import {View, Text} from 'react-native'
import {Button, Card, Icon} from 'react-native-elements'
import styles from './styles'

/**
 * [opacity description]
 * @type {Number}
 */
export default class DeliveryResult extends React.Component {
  /**
   * [constructor description]
   * @param  {[type]} props [description]
   * @return {[type]}       [description]
   */
  constructor(props) {
    super(props);
  }
  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    let opacity = 0;
    if (this.props.track.isShow && this.props.track.result.length > 0) {
      opacity = 1;
    }

    if (this.props.track.error == true) {
      alert('Информации по трек-номеру нет!');
    }
    return (
      <Card containerStyle={{
        opacity
      }} title="Результат по треку">
        <View>
          {this.props.track.result.map((u, i) => {
            return (
              <Text style={styles.text} key={i}>{u}</Text>
            )
          })
}
        </View>
      </Card>

    )
  }
}
