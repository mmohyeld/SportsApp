import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, StatusBar, ScrollView, Alert } from 'react-native';
import Matchweek1 from './Matchweek1';
import Matchweek2 from './Matchweek2';

export default class Example extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                    barStyle='light-content'
                />
                <View style={styles.weekContainer}>
                    <Text style={styles.weekTitle}>Matchweek 2</Text>
                </View>
                <ScrollView>
                    <Text style={styles.dayTitle}>{Matchweek2['days'][0]}</Text>
                    {
                      Matchweek2['friday'].map((l, i) => (
                        <TouchableHighlight 
                            underlayColor='transparent'
                            onPress={() => this.props.navigation.navigate('Game', {homeTeam: l.homeTeam, 
                                homeLogo: l.homeLogo, 
                                awayTeam: l.awayTeam,
                                awayLogo: l.awayLogo,
                                homeScore: l.homeScore,
                                awayScore: l.awayScore,
                              })}
                            key={l.id}>
                            <View style={[styles.panelContainer, {backgroundColor: '#e90052'}]}>
                                <View style={styles.team}>
                                    <Image style={styles.teamLogo} source={l.homeLogo} />
                                    <Text style={styles.teamName}>{l.homeTeam}</Text>
                                </View>

                                <View style={styles.gameInfo}>
                                    <Text style={[styles.infoProcess, styles.processUnstart]}>{l.time}</Text>
                                </View>

                                <View style={styles.team}>
                                    <Image style={styles.teamLogo} source={l.awayLogo} />
                                    <Text style={styles.teamName}>{l.awayTeam}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                      ))
                    }
                    <Text style={styles.dayTitle}>{Matchweek2['days'][1]}</Text>
                    {
                      Matchweek2['saturday'].map((l, i) => (
                        <TouchableHighlight 
                            underlayColor='transparent'
                            onPress={() => this.props.navigation.navigate('Game', {homeTeam: l.homeTeam, 
                                homeLogo: l.homeLogo, 
                                awayTeam: l.awayTeam,
                                awayLogo: l.awayLogo,
                                homeScore: l.homeScore,
                                awayScore: l.awayScore,
                                goals: l.scorers,
                                stats: l.stats,
                              })}
                            key={l.id}>
                            <View style={[styles.panelContainer, {backgroundColor: '#e90052'}]}>
                                <View style={styles.team}>
                                    <Image style={styles.teamLogo} source={l.homeLogo} />
                                    <Text style={styles.teamName}>{l.homeTeam}</Text>
                                </View>

                                <View style={styles.gameInfo}>
                                    <Text style={[styles.infoProcess, styles.processUnstart]}>{l.time}</Text>
                                </View>

                                <View style={styles.team}>
                                    <Image style={styles.teamLogo} source={l.awayLogo} />
                                    <Text style={styles.teamName}>{l.awayTeam}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                      ))
                    }
                    <Text style={styles.dayTitle}>{Matchweek2['days'][2]}</Text>
                    {
                      Matchweek2['sunday'].map((l, i) => (
                        <TouchableHighlight 
                            underlayColor='transparent'
                            onPress={() => this.props.navigation.navigate('Game', {homeTeam: l.homeTeam, 
                                homeLogo: l.homeLogo, 
                                awayTeam: l.awayTeam,
                                awayLogo: l.awayLogo,
                                homeScore: l.homeScore,
                                awayScore: l.awayScore,
                              })}
                            key={l.id}>
                            <View style={[styles.panelContainer, {backgroundColor: '#e90052'}]}>
                                <View style={styles.team}>
                                    <Image style={styles.teamLogo} source={l.homeLogo} />
                                    <Text style={styles.teamName}>{l.homeTeam}</Text>
                                </View>

                                <View style={styles.gameInfo}>
                                    <Text style={[styles.infoProcess, styles.processUnstart]}>{l.time}</Text>
                                </View>

                                <View style={styles.team}>
                                    <Image style={styles.teamLogo} source={l.awayLogo} />
                                    <Text style={styles.teamName}>{l.awayTeam}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                      ))
                    }
                    <Text style={styles.dayTitle}>{Matchweek2['days'][3]}</Text>
                    {
                      Matchweek2['monday'].map((l, i) => (
                        <TouchableHighlight 
                            underlayColor='transparent'
                            onPress={() => this.props.navigation.navigate('Game', {homeTeam: l.homeTeam, 
                                homeLogo: l.homeLogo, 
                                awayTeam: l.awayTeam,
                                awayLogo: l.awayLogo,
                                homeScore: l.homeScore,
                                awayScore: l.awayScore,
                              })}
                            key={l.id}>
                            <View style={[styles.panelContainer, {backgroundColor: '#e90052'}]}>
                                <View style={styles.team}>
                                    <Image style={styles.teamLogo} source={l.homeLogo} />
                                    <Text style={styles.teamName}>{l.homeTeam}</Text>
                                </View>

                                <View style={styles.gameInfo}>
                                    <Text style={[styles.infoProcess, styles.processUnstart]}>{l.time}</Text>
                                </View>

                                <View style={styles.team}>
                                    <Image style={styles.teamLogo} source={l.awayLogo} />
                                    <Text style={styles.teamName}>{l.awayTeam}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                      ))
                    }
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
});
