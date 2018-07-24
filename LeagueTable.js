import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar, ScrollView, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import PremTeams from './PremTeams';

export default class LeagueTable extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content'
        />
        <View style={styles.weekContainer}>
          <Text style={styles.weekTitle}>League Table</Text>
        </View>
        <ScrollView>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={PremTeams['table']} style={styles.tableHead} textStyle={styles.tableText}/>
            <Row data={PremTeams['ARS']} textStyle={styles.tableText}/>
          </Table>
          <View style={styles.listContainer}>
            <List containerStyle={{marginBottom: 20}}>
              {
                PremTeams['teams'].map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={l.avatar_url}
                  key={i}
                  title={l.name}
                  subtitle={l.subtitle}
                  onPress={() => this.props.navigation.navigate('Details')}
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
    paddingTop: 22,
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
  tableHead: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  tableText: {
    margin: 6,
  },
});
