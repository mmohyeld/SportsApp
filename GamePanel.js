import React from 'react';
import { StyleSheet, Text, View, Component, TouchableHighlight, Image, PixelRatio, Platform } from 'react-native';

export default class GamePanel extends React.Component {

  render() {
    return (
        <View>
            <Text style={styles.dayTitle}>Friday 10 August</Text>
            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/mun.png')} />
                        <Text style={styles.teamName}>MUN</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>03:00 PM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/lei.png')} />
                        <Text style={styles.teamName}>LEI</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <Text style={styles.dayTitle}>Saturday 11 August</Text>
            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/new.png')} />
                        <Text style={styles.teamName}>NEW</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>07:30 AM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/tot.png')} />
                        <Text style={styles.teamName}>TOT</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/bou.png')} />
                        <Text style={styles.teamName}>BOU</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>10:00 AM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/car.png')} />
                        <Text style={styles.teamName}>CAR</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/ful.png')} />
                        <Text style={[styles.teamName]}>FUL</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>10:00 AM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/cry.png')} />
                        <Text style={[styles.teamName]}>CRY</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/hud.png')} />
                        <Text style={[styles.teamName]}>HUD</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>10:00 AM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/che.png')} />
                        <Text style={[styles.teamName]}>CHE</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/wat.png')} />
                        <Text style={[styles.teamName]}>WAT</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>10:00 AM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/bha.png')} />
                        <Text style={[styles.teamName]}>BHA</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/wol.png')} />
                        <Text style={[styles.teamName]}>WOL</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>12:30 PM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/eve.png')} />
                        <Text style={[styles.teamName]}>EVE</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <Text style={styles.dayTitle}>Sunday 12 August</Text>
            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/liv.png')} />
                        <Text style={styles.teamName}>LIV</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>08:30 AM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/whu.png')} />
                        <Text style={styles.teamName}>WHU</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/sou.png')} />
                        <Text style={styles.teamName}>SOU</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>08:30 AM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/bur.png')} />
                        <Text style={styles.teamName}>BUR</Text>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='transparent'>
                <View style={[styles.container, {backgroundColor: '#e90052'}]}>
                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/ars.png')} />
                        <Text style={styles.teamName}>ARS</Text>
                    </View>

                    <View style={styles.gameInfo}>
                        <Text style={[styles.infoProcess, styles.processUnstart]}>11:00 AM</Text>
                    </View>

                    <View style={styles.team}>
                        <Image style={styles.teamLogo} source={require('./assets/images/premier_league/mci.png')} />
                        <Text style={styles.teamName}>MCI</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
});
