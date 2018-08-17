import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar, ScrollView, Alert } from 'react-native';
import { List, ListItem, Card, Button } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import PremTeams from './PremTeams';

export default class NewsFeed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content'
        />
        <View style={styles.weekContainer}>
          <Text style={styles.weekTitle}>News Feed</Text>
        </View>
        <ScrollView>
            <Card
                image={{uri:'https://premierleague-static-files.s3.amazonaws.com/premierleague/photo/2018/08/10/41f1baf0-d8aa-4383-a2f2-908f1768bc6b/1014659506.jpg'}}>
                <Text style={{marginBottom: 10}}>
                    United edge Leicester in league opener.
                </Text>
                <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW' />
            </Card>
            <Card
                image={{uri:'https://premierleague-static-files.s3.amazonaws.com/premierleague/photo/2018/08/12/fa1e45a0-6e46-4f5e-af0d-2f9ddac9f5d1/2018-08-12T125221Z_1172667554_RC148BD2D3B0_RTRMADP_3_SOCCER-ENGLAND-LIV-WHU.JPG'}}>
                <Text style={{marginBottom: 10}}>
                    Liverpool smash West Ham.
                </Text>
                <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW' />
            </Card>
            <Card
                image={{uri:'https://premierleague-static-files.s3.amazonaws.com/premierleague/photo/2018/08/12/dabdb862-90f8-4b1d-a1dd-69235b776b34/1015605290.jpg'}}>
                <Text style={{marginBottom: 10}}>
                    City comfortably sweep aside Arsenal.
                </Text>
                <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW' />
            </Card>
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
