import React from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import {CHANGE_ROUTER} from '../../constants'
import {List, ListItem } from 'react-native-elements'
import {connect} from 'react-redux'
import styles from './styles'

class Listdelivery extends React.Component {
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
Listdelivery.navigationOptions = {
  title: "Track Package",
  headerLeft: null,
};

function mapStateToProps(state) {
  return {track: state.track}
}

function mapDispatchToProps(dispatch) {
  return {
    clearResult: () => dispatch({type: CHANGE_ROUTER}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Listdelivery)
