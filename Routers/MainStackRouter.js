import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Listdelivery from '../components/listdelivery/listdelivery'
import Delivery from '../components/delivery/delivery'
import LogoScreen from '../components/logoscreen/logoscreen'

export default (TrackApp = StackNavigator({
  Login: {
    screen: LogoScreen
  },
  Listdelivery: {
    screen: Listdelivery
  },
  Delivery: {
    screen: Delivery
  }
}));
