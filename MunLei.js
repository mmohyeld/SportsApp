import React from 'react';
import { StyleSheet, Text, View, Component, TouchableHighlight, Image, SectionList, Platform, ScrollView, StatusBar } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import ManUtdPlayers from './ManUtdPlayers';

export default class MunLei extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content'
        />
        <View style={styles.headerContainer}>
          <View style={styles.team}>
            <Image style={styles.teamLogo} source={require('./assets/images/premier_league/mun.png')} />
            <Text style={styles.teamName}>Manchester United</Text>
          </View>

          <View style={styles.team}>
            <Image style={styles.teamLogo} source={require('./assets/images/premier_league/lei.png')} />
            <Text style={styles.teamName}>Leicester City</Text>
          </View>
        </View>
        <Text style={styles.title}>Preview</Text>
        <Text style={styles.paragraph}>The Premier League is set to kick-off on August 10th with showdown at Old Trafford between
        Manchester United and Leicester City.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#d81920',
  },
  listContainer: {
    paddingTop: 22,
  },
  team: {
    alignItems: 'center',
    borderRadius: 5
  },
  teamLogo: {
    width: 50,
    height: 50,
    marginTop: 10
  },
  teamName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    position: 'relative',
    top: 0
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
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
});
