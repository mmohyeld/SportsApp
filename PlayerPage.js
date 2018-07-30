import React from 'react';
import { StyleSheet, Text, View, Component, TouchableHighlight, Image, SectionList, Platform, ScrollView, StatusBar } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ManUtdPlayers from './ManUtdPlayers';

export default class PlayerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'Head1', 'Head2', 'Head3'],
      tableTitle: ['Nationality', 'D.O.B', 'Age', 'Height'],
      tableData: [
        ['Spain'],
        ['07/11/1990'],
        ['27'],
        ['192cm']
      ],
      statsTitle: ['Appearances', 'Clean Sheets', 'Goals', 'Assits'],
      statsData: [
        ['237'],
        ['93'],
        ['0'],
        ['0']
      ],
    }
  }

  render() {
    const {navigation} = this.props;
    const playerName = navigation.getParam('name', 'default');
    const playerPhoto = navigation.getParam('photo', 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/man134.png');
    const personalData = navigation.getParam('personal', this.state.tableData)
    const teamColour = navigation.getParam('colour', '#d81920')
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content'
        />
        <View style={[styles.headerContainer, {backgroundColor: teamColour}]}>
          <View style={styles.team}>
            <Image style={styles.teamLogo} source={{uri:playerPhoto}} />
            <Text style={styles.teamName}>{playerName}</Text>
          </View>
        </View>
        <View padding={10}>
          <Text style={styles.title}>Personal Details</Text>
          <Table borderStyle={{borderColor: '#fff'}}>
            <TableWrapper style={styles.wrapper}>
              <Col data={this.state.tableTitle} style={styles.tableTitle} heightArr={[28,28]} textStyle={styles.colText}/>
              <Rows data={personalData} flexArr={[1]} style={styles.row} textStyle={styles.rowText}/>
            </TableWrapper>
          </Table>
          <Text style={styles.title}>All Time Stats</Text>
          <Table borderStyle={{borderColor: '#fff'}}>
            <TableWrapper style={styles.wrapper}>
              <Col data={this.state.statsTitle} style={styles.tableTitle} heightArr={[28,28]} textStyle={styles.colText}/>
              <Rows data={this.state.statsData} flexArr={[1]} style={styles.row} textStyle={styles.rowText}/>
            </TableWrapper>
          </Table>
        </View>
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
  head: {  height: 40,  backgroundColor: '#fff'  },
  wrapper: { flexDirection: 'row' },
  tableTitle: { flex: 1, backgroundColor: '#fff' },
  row: {  height: 28  },
  colText: { textAlign: 'left' },
  rowText: { textAlign: 'right' },
});
