import React from 'react';
import { StyleSheet, Text, View, Component, TouchableHighlight, Image, SectionList, Platform, ScrollView, StatusBar } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import ManUtdPlayers from './ManUtdPlayers';

export default class ManUtd extends React.Component {
  render() {
    const {navigation} = this.props;
    const teamName = navigation.getParam('name', 'default');
    const teamPhoto = navigation.getParam('photo', './assets/images/premier_league/mun.png');
    const teamColour = navigation.getParam('colour', '#d81920')
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content'
        />
        <View style={[styles.headerContainer, {backgroundColor: teamColour}]}>
          <View style={styles.team}>
            <Image style={styles.teamLogo} source={teamPhoto} />
            <Text style={styles.teamName}>{teamName}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.listContainer}>
            <List containerStyle={{marginBottom: 20}}>
              {
                ManUtdPlayers['manager'].map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={{uri:l.avatar_url}}
                  key={i}
                  title={l.name}
                  subtitle={l.subtitle}
                />
                ))
              }
            </List>
          </View>
          <View style={styles.listContainer}>
            <List containerStyle={{marginBottom: 20}}>
              {
                ManUtdPlayers['players'].map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={{uri:l.avatar_url}}
                  key={i}
                  title={l.name}
                  subtitle={l.subtitle}
                  onPress={() => this.props.navigation.navigate('Player', {name: l.name, photo: l.avatar_url, personal: l.personal, colour: teamColour})}
                />
                ))
              }
            </List>
          </View>
        </ScrollView>
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
});
