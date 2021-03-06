import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar, ScrollView, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import PremTeams from './PremTeams';

export default class LeagueTeams extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content'
        />
        <View style={styles.weekContainer}>
          <Text style={styles.weekTitle}>Teams</Text>
        </View>
        <ScrollView>
          <View style={styles.listContainer}>
            <List containerStyle={{marginBottom: 0, marginTop: 0}}>
              {
                PremTeams['teams'].map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={l.avatar_url}
                  key={i}
                  title={l.name}
                  onPress={() => this.props.navigation.navigate('Details', {name: l.name, 
                    photo: l.avatar_url, 
                    colour: l.colour,
                    roster: l.roster
                  })}
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
  panelContainer: {
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    height: 95,
    marginHorizontal: 12,
    marginBottom: 10
  },
  listContainer: {
    paddingTop: 0,
  },
  team: {
    alignItems: 'center',
    borderRadius: 5,
    flex: 1.5
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
  gameInfo: {
    alignItems: 'center',
    flex: 1.5,
    flexDirection: 'column'
  },
  infoProcess: {
    color: '#fff',
    fontSize: 10,
    marginTop: 22,
    marginBottom: 3
  },
  processUnstart: {
    fontSize: 15,
    position: 'relative',
    top: 13
  },
  dayTitle: {
    color: '#38003C',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'relative',
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  tableHead: {
    height: 40,
    backgroundColor: '#e90052',
    borderColor: '#e90052'
  },
  tableText: {
    margin: 6
  },
});
