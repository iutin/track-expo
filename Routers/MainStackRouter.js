import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Listdelivery from '../listdelivery'
import Delivery from '../delivery'
import LogoScreen from '../logoscreen'

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
