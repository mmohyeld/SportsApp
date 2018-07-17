import React from 'react';
import {Header} from 'react-native-elements';

export default class Navbar extends React.Component {
  render() {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'PREMIER LEAGUE', style: { color: '#fff', fontWeight: 'bold', fontSize: 25 } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            backgroundColor='#38003C'
        />
    );
  }
}