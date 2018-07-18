import React from 'react';
import {Alert, ScrollView, StyleSheet, StatusBar, Text, View } from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Navbar from './Navbar';
import GamePanel from './GamePanel';
import ManUtd from './ManUtd';
import Example from './Example';
import LeagueTable from './LeagueTable';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Example,
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
    Table: {
      screen: LeagueTable,
      navigationOptions: ({ navigation }) => ({
        title: 'PREMIER LEAGUE',
        headerStyle: {backgroundColor:'#38003C'},
        headerTitleStyle: {color: '#fff', fontWeight: 'bold', fontSize: 25 },
      }),
    },
  },
  {
    initialRouteName: 'Table',
  }
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
