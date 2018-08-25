import React from 'react';
import { StyleSheet, Text, View, Component, TouchableHighlight, Image, SectionList, Platform, ScrollView, StatusBar, WebView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ManUtdPlayers from './ManUtdPlayers';

export default class MunLei extends React.Component {
  render() {
    const {navigation} = this.props;
    const homeTeam = navigation.getParam('homeTeam', 'default');
    const homeLogo = navigation.getParam('homeLogo', './assets/images/premier_league/mun.png');
    const awayTeam = navigation.getParam('awayTeam', 'default')
    const awayLogo = navigation.getParam('awayLogo', './assets/images/premier_league/mun.png')
    const homeScore = navigation.getParam('homeScore', 0);
    const awayScore = navigation.getParam('awayScore', 0);
    const scorers = navigation.getParam('goals', [[]]);
    const stats = navigation.getParam('stats', [[]]);
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content'
        />
        <View style={styles.headerContainer}>
          <View style={styles.team}>
            <Image style={styles.teamLogo} source={homeLogo} />
            <Text style={styles.teamName}>{homeTeam}</Text>
          </View>

          <View style={styles.gameInfo}>
            <View style={styles.infoScorePanel}>
              <View style={styles.infoScoreBlock}>
                <Text style={styles.infoScore}>{homeScore}</Text>
              </View>
              <View style={styles.infoScoreBlock}>
                <Text style={styles.infoScore}>|</Text>
              </View>
              <View style={styles.infoScoreBlock}>
                <Text style={styles.infoScore}>{awayScore}</Text>
              </View>
            </View>
          </View>

          <View style={styles.team}>
            <Image style={styles.teamLogo} source={awayLogo} />
            <Text style={styles.teamName}>{awayTeam}</Text>
          </View>
        </View>
        <ScrollView>
          <Text style={styles.title}>Goals</Text>
          <View>
            <Table borderStyle={{borderWidth: 2, borderColor: 'transparent'}}>
              {
                scorers.map((l, i) => (
                <Row
                  data={l}
                  key={i}
                  textStyle={styles.text}
                  onPress={() => this.props.navigation.navigate('Video')}
                />
                ))
              }
            </Table>
          </View>
          <Text style={styles.title}>Match Stats</Text>
          <View>
            <Table borderStyle={{borderWidth: 2, borderColor: 'transparent'}}>
              <Rows data={stats} textStyle={styles.text}/>
            </Table>
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
