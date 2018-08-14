import ArsenalPlayers from './ArsenalPlayers';
import ManUtdPlayers from './ManUtdPlayers';
import ManCityPlayers from './ManCityPlayers';
import ChelseaPlayers from './ChelseaPlayers';
import LiverpoolPlayers from './LiverpoolPlayers';
import SpursPlayers from './SpursPlayers';
import EvertonPlayers from './EvertonPlayers';

export default {
    table:['Pos', 'Club', 'Pl', 'GD', 'Pts'],
    teams:[
        {
            name: 'Arsenal',
            avatar_url: require('./assets/images/premier_league/ars.png'),
            subtitle: 'ARS',
            colour: '#fe0002',
            roster: ArsenalPlayers,
            stats: [1, 'Arsenal', 1, '-2', 0]
        },
        {
            name: 'Bournemouth',
            avatar_url: require('./assets/images/premier_league/bou.png'),
            subtitle: 'BOU',
            colour: '#e62333',
            roster: ArsenalPlayers,
            stats: [2, 'Bournemouth', 1, '+2', 3]
        },
        {
            name: 'Brighton',
            avatar_url: require('./assets/images/premier_league/bha.png'),
            subtitle: 'BHA',
            colour: '#0054a6',
            roster: ArsenalPlayers,
            stats: [3, 'Brighton', 1, '-2', 0]
        },
        {
            name: 'Burnley',
            avatar_url: require('./assets/images/premier_league/bur.png'),
            subtitle: 'BUR',
            colour: '#6a003a',
            roster: ArsenalPlayers,
            stats: [4, 'Burnley', 1, '0', 1]
        },
        {
            name: 'Cardiff',
            avatar_url: require('./assets/images/premier_league/car.png'),
            subtitle: 'CAR',
            colour: '#035daa',
            roster: ArsenalPlayers,
            stats: [5, 'Cardiff', 1, '-2', 0]
        },
        {
            name: 'Chelsea',
            avatar_url: require('./assets/images/premier_league/che.png'),
            subtitle: 'CHE',
            colour: '#0a4595',
            roster: ChelseaPlayers,
            stats: [6, 'Chelsea', 1, '+3', 3]
        },
        {
            name: 'Crystal Palace',
            avatar_url: require('./assets/images/premier_league/cry.png'),
            subtitle: 'CRY',
            colour: '#eb302e',
            roster: ArsenalPlayers,
            stats: [7, 'Crystal Palace', 1, '+2', 3]
        },
        {
            name: 'Everton',
            avatar_url: require('./assets/images/premier_league/eve.png'),
            subtitle: 'EVE',
            colour: '#00369c',
            roster: EvertonPlayers,
            stats: [8, 'Everton', 1, '0', 1]
        },
        {
            name: 'Fulham',
            avatar_url: require('./assets/images/premier_league/ful.png'),
            subtitle: 'FUL',
            colour: '#f5f5f5',
            roster: ArsenalPlayers,
            stats: [9, 'Fulham', 1, '-2', 0]
        },
        {
            name: 'Huddersfield',
            avatar_url: require('./assets/images/premier_league/hud.png'),
            subtitle: 'HUD',
            colour: '#f5f5f5',
            roster: ArsenalPlayers,
            stats: [10, 'Huddersfield', 1, '-3', 0]
        },
        {
            name: 'Leicester City',
            avatar_url: require('./assets/images/premier_league/lei.png'),
            subtitle: 'LEI',
            colour: '#273e8a',
            roster: ArsenalPlayers,
            stats: [11, 'Leicester', 1, '-1', 0]
        },
        {
            name: 'Liverpool',
            avatar_url: require('./assets/images/premier_league/liv.png'),
            subtitle: 'LIV',
            colour: '#e31b23',
            roster: LiverpoolPlayers,
            stats: [12, 'Liverpool', 1, '+4', 3]
        },
        {
            name: 'Manchester City',
            avatar_url: require('./assets/images/premier_league/mci.png'),
            subtitle: 'MCI',
            colour: '#6caee0',
            roster: ManCityPlayers,
            stats: [13, 'Man City', 1, '+2', 3]
        },
        {
            name: 'Manchester United',
            avatar_url: require('./assets/images/premier_league/mun.png'),
            subtitle: 'MUN',
            colour: '#d81920',
            roster: ManUtdPlayers,
            stats: [14, 'Man Utd', 1, '+1', 3]
        },
        {
            name: 'Newcastle United',
            avatar_url: require('./assets/images/premier_league/new.png'),
            subtitle: 'NEW',
            colour: '#383838',
            roster: ArsenalPlayers,
            stats: [15, 'Newcastle', 1, '-1', 0]
        },
        {
            name: 'Southampton',
            avatar_url: require('./assets/images/premier_league/sou.png'),
            subtitle: 'SOU',
            colour: '#d71920',
            roster: ArsenalPlayers,
            stats: [16, 'Southampton', 1, '0', 1]
        },
        {
            name: 'Tottenham Hotspurs',
            avatar_url: require('./assets/images/premier_league/tot.png'),
            subtitle: 'TOT',
            colour: '#f5f5f5',
            roster: SpursPlayers,
            stats: [17, 'Spurs', 1, '+1', 3]
        },
        {
            name: 'Watford',
            avatar_url: require('./assets/images/premier_league/wat.png'),
            subtitle: 'WAT',
            colour: '#fe0',
            roster: ArsenalPlayers,
            stats: [18, 'Watford', 1, '+2', 3]
        },
        {
            name: 'West Ham United',
            avatar_url: require('./assets/images/premier_league/whu.png'),
            subtitle: 'WHU',
            colour: '#7d2c3b',
            roster: ArsenalPlayers,
            stats: [19, 'West Ham', 1, '-4', 0]
        },
        {
            name: 'Wolverhampton',
            avatar_url: require('./assets/images/premier_league/wol.png'),
            subtitle: 'WOL',
            colour: '#f9a01b',
            roster: ArsenalPlayers,
            stats: [20, 'Wolves', 1, '0', 1]
        },
    ]
}