import React from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import {CHANGE_ROUTER} from '../../constants'
import {List, ListItem } from 'react-native-elements'
import {connect} from 'react-redux'
import styles from './styles'

/**
 * [list description]
 * @type {Array}
 */
class Listdelivery extends React.Component {
  /**
   * [constructor description]
   * @param  {[type]} props [description]
   * @return {[type]}       [description]
   */
  constructor(props) {
    super(props);
  }
  render() {
    let list  = [
      {type:"novaposhta", name:"Новая почта"},
      {type:"ukrposhta", name:"Укрпочта"},
      {type:"intime", name:"Интайм"},
      {type:"delivery", name:"Деливери"},
      {type:"autolux", name:"Автолюкс"}
    ];
    /**
     * [description]
     * @param  {[type]} View [description]
     * @return {[type]}      [description]
     */
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Службы доставки</Text>
        <List containerStyle={{marginBottom: 20, width:'80%'}}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                containerStyle={styles.row}
                key={i}
                onPress={() =>{
                  this.props.clearResult();
                  this.props.navigation.navigate("Delivery", {
                    name: l.name,
                    type: l.type
                  })}}
              />

            ))
          }
        </List>

      </View>
    )
  }
}
/**
 * [navigationOptions description]
 * @type {Object}
 */
Listdelivery.navigationOptions = {
  title: "Track Package",
  headerLeft: null,
};

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
    clearResult: () => dispatch({type: CHANGE_ROUTER}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Listdelivery)
