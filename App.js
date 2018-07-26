import React from 'react';
import {Alert, ScrollView, StyleSheet, StatusBar, Text, View } from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Navbar from './Navbar';
import GamePanel from './GamePanel';
import ManUtd from './ManUtd';
import Example from './Example';
import LeagueTable from './LeagueTable';
import MunLei from './MunLei';
import PlayerPage from './PlayerPage';

const TabStack = createMaterialTopTabNavigator(
  {
    Fixtures: {screen: Example},
    Table: {screen: LeagueTable},
  },
  {
    tabBarOptions: {
      style: {backgroundColor:'#38003C'},
    },
  },
  
);

const RootStack = createStackNavigator(
  {
    Home: {
      screen: TabStack,
      navigationOptions: ({ navigation }) => ({
        title: 'PREMIER LEAGUE',
        headerStyle: {backgroundColor:'#38003C'},
        headerTitleStyle: {color: '#fff', fontWeight: 'bold', fontSize: 25 },
      }),
    },
    Details: {
      screen: ManUtd,
      navigationOptions: ({ navigation }) => ({
        title: 'PREMIER LEAGUE',
        headerStyle: {backgroundColor:'#38003C'},
        headerTitleStyle: {color: '#fff', fontWeight: 'bold', fontSize: 25 },
      }),
    },
    Game: {
      screen: MunLei,
      navigationOptions: ({ navigation }) => ({
        title: 'PREMIER LEAGUE',
        headerStyle: {backgroundColor:'#38003C'},
        headerTitleStyle: {color: '#fff', fontWeight: 'bold', fontSize: 25 },
      }),
    },
    Player: {
      screen: PlayerPage,
      navigationOptions: ({ navigation }) => ({
        title: 'PREMIER LEAGUE',
        headerStyle: {backgroundColor:'#38003C'},
        headerTitleStyle: {color: '#fff', fontWeight: 'bold', fontSize: 25 },
      }),
    },
  },
  {
    initialRouteName: 'Home'
  },
);

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff85',
  },
  buttonContainer: {
    margin: 20
  },
  weekContainer: {
    backgroundColor: '#04f5ff',
  },
  weekTitle: {
    color: '#38003C',
    fontWeight: 'bold',
    fontSize: 25,
    position: 'relative',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
});
