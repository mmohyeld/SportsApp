import React from 'react';
import { StyleSheet, Text, View, Component, TouchableHighlight, Image, SectionList, Platform, ScrollView, StatusBar } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import ManUtdPlayers from './ManUtdPlayers';

export default class ManUtd extends React.Component {
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
            </View>
            <ScrollView>
                <View style={styles.listContainer}>
                    <List containerStyle={{marginBottom: 20}}>
                        {
                            ManUtdPlayers['mun'].map((l, i) => (
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
});
