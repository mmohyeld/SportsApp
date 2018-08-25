import React from 'react';
import { StyleSheet, Text, View, Component, TouchableHighlight, Image, SectionList, Platform, ScrollView, StatusBar, WebView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ManUtdPlayers from './ManUtdPlayers';

export default class GoalsVideo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content'
        />
        <WebView
          source={{uri: 'https://streamja.com/embed/N0E7'}}
          style={{marginTop: 20}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: { height: 40, backgroundColor: '#00ff85' },
  text: { margin: 6, textAlign: 'center', alignItems: 'center' },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#e90052',
  },
  listContainer: {
    paddingTop: 22,
  },
  team: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  teamLogo: {
    width: 50,
    height: 50,
  },
  teamIcon: {
    width: 35,
    height: 35
  },
  teamName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    position: 'relative',
    top: 0
  },
  title: {
    color: '#38003C',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'relative',
    marginBottom: 10
  },
  paragraph: {
    color: '#38003C',
    fontSize: 16,
    position: 'relative',
    marginBottom: 10
  },
  // Info
  gameInfo: {
    alignItems: 'center',
    flex: 1.5,
    flexDirection: 'column',
    paddingTop: 15
  },
  infoProcess: {
    color: '#fff',
    fontSize: 13,
    marginTop: 18,
    marginBottom: 3
  },
  processUnstart: {
    fontSize: 19,
    position: 'relative',
    top: 9
  },
  infoScorePanel: {
    flex: 1,
    flexDirection: 'row'
  },
  infoScoreBlock: {
    alignItems: 'center',
    flex: 1,
    width: 60
  },
  infoScore: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '200',
    flex: 9,
    fontSize: 35
  },
  infoSide: {
    alignSelf: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 10,
    flex: 1,
    marginTop: 6
  },
  infoDivider: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: 7,
    marginLeft: 15,
    marginRight: 15,
    width: 2,
    height: 55
  },
});
