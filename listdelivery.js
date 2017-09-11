import React from 'react'
import {TouchableHighlight, View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import {CHANGE_ROUTER} from './constants'
import {List, ListItem } from 'react-native-elements'
import {NavigationActions } from "react-navigation";
import {connect} from 'react-redux'

let styles = StyleSheet.create({
  container: {
    flex:1,
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center'
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

        <Text style={{fontSize:18, textAlign:'center'}}>Службы доставки</Text>
        <List containerStyle={{marginBottom: 20, width:'80%'}}>
          {
            list.map((l, i) => (
              <TouchableOpacity
                style={styles.row}
                key={i}
                onPress={() =>{
                  this.props.clearResult();
                  this.props.navigation.navigate("Delivery", {
                    name: l.name,
                    type: l.type
                  })}}
              >
              <ListItem
                key={i}
                title={l.name}
              />
            </TouchableOpacity>
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
    getTrack: (barcode, type) => dispatch(fetchTrackFromAPI(barcode, type)),
    clearResult: () => dispatch({type: CHANGE_ROUTER}),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Listdelivery)
