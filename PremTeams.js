import ArsenalPlayers from './ArsenalPlayers';
import ManUtdPlayers from './ManUtdPlayers';

export default {
    table:['Pos', 'Club', 'Pl', 'GD', 'Pts'],
    clubs: [
        [1, 'Arsenal', 0, 0, 0],
        [2, 'Bournemouth', 0, 0, 0],
        [3, 'Brighton', 0, 0, 0],
        [4, 'Burnley', 0, 0, 0],
        [5, 'Cardiff', 0, 0, 0],
        [6, 'Chelsea', 0, 0, 0],
        [7, 'Crystal Palace', 0, 0, 0],
        [8, 'Everton', 0, 0, 0],
        [9, 'Fulham', 0, 0, 0],
        [10, 'Huddersfield', 0, 0, 0],
        [11, 'Leicester', 0, 0, 0],
        [12, 'Liverpool', 0, 0, 0],
        [13, 'Man City', 0, 0, 0],
        [14, 'Man Utd', 0, 0, 0],
        [15, 'Newcastle', 0, 0, 0],
        [16, 'Southampton', 0, 0, 0],
        [17, 'Spurs', 0, 0, 0],
        [18, 'Watford', 0, 0, 0],
        [19, 'West Ham', 0, 0, 0],
        [20, 'Wolves', 0, 0, 0]],
    teams:[
        {
            name: 'Arsenal',
            avatar_url: require('./assets/images/premier_league/ars.png'),
            subtitle: 'ARS',
            pos: 1, pl: 0, gd: 0, pts: 0,
            colour: '#fe0002',
            roster: ArsenalPlayers
        },
        {
            name: 'Bournemouth',
            avatar_url: require('./assets/images/premier_league/bou.png'),
            subtitle: 'BOU',
            pos: 2, pl: 0, gd: 0, pts: 0,
            colour: '#e62333',
            roster: ArsenalPlayers
        },
        {
            name: 'Brighton',
            avatar_url: require('./assets/images/premier_league/bha.png'),
            subtitle: 'BHA',
            pos: 3, pl: 0, gd: 0, pts: 0,
            colour: '#0054a6',
            roster: ArsenalPlayers
        },
        {
            name: 'Burnley',
            avatar_url: require('./assets/images/premier_league/bur.png'),
            subtitle: 'BUR',
            pos: 4, pl: 0, gd: 0, pts: 0,
            colour: '#6a003a',
            roster: ArsenalPlayers
        },
        {
            name: 'Cardiff',
            avatar_url: require('./assets/images/premier_league/car.png'),
            subtitle: 'CAR',
            pos: 5, pl: 0, gd: 0, pts: 0,
            colour: '#035daa',
            roster: ArsenalPlayers
        },
        {
            name: 'Chelsea',
            avatar_url: require('./assets/images/premier_league/che.png'),
            subtitle: 'CHE',
            pos: 6, pl: 0, gd: 0, pts: 0,
            colour: '#0a4595',
            roster: ArsenalPlayers
        },
        {
            name: 'Crystal Palace',
            avatar_url: require('./assets/images/premier_league/cry.png'),
            subtitle: 'CRY',
            pos: 7, pl: 0, gd: 0, pts: 0,
            colour: '#eb302e',
            roster: ArsenalPlayers
        },
        {
            name: 'Everton',
            avatar_url: require('./assets/images/premier_league/eve.png'),
            subtitle: 'EVE',
            pos: 8, pl: 0, gd: 0, pts: 0,
            colour: '#00369c',
            roster: ArsenalPlayers
        },
        {
            name: 'Fulham',
            avatar_url: require('./assets/images/premier_league/ful.png'),
            subtitle: 'FUL',
            pos: 9, pl: 0, gd: 0, pts: 0,
            colour: '#f5f5f5',
            roster: ArsenalPlayers
        },
        {
            name: 'Huddersfield',
            avatar_url: require('./assets/images/premier_league/hud.png'),
            subtitle: 'HUD',
            pos: 10, pl: 0, gd: 0, pts: 0,
            colour: '#f5f5f5',
            roster: ArsenalPlayers
        },
        {
            name: 'Leicester',
            avatar_url: require('./assets/images/premier_league/lei.png'),
            subtitle: 'LEI',
            pos: 11, pl: 0, gd: 0, pts: 0,
            colour: '#273e8a',
            roster: ArsenalPlayers
        },
        {
            name: 'Liverpool',
            avatar_url: require('./assets/images/premier_league/liv.png'),
            subtitle: 'LIV',
            pos: 12, pl: 0, gd: 0, pts: 0,
            colour: '#e31b23',
            roster: ArsenalPlayers
        },
        {
            name: 'Manchester City',
            avatar_url: require('./assets/images/premier_league/mci.png'),
            subtitle: 'MCI',
            pos: 13, pl: 0, gd: 0, pts: 0,
            colour: '#6caee0',
            roster: ArsenalPlayers
        },
        {
            name: 'Manchester United',
            avatar_url: require('./assets/images/premier_league/mun.png'),
            subtitle: 'MUN',
            pos: 14, pl: 0, gd: 0, pts: 0,
            colour: '#d81920',
            roster: ManUtdPlayers
        },
        {
            name: 'Newcastle',
            avatar_url: require('./assets/images/premier_league/new.png'),
            subtitle: 'NEW',
            pos: 15, pl: 0, gd: 0, pts: 0,
            colour: '#383838',
            roster: ArsenalPlayers
        },
        {
            name: 'Southampton',
            avatar_url: require('./assets/images/premier_league/sou.png'),
            subtitle: 'SOU',
            pos: 16, pl: 0, gd: 0, pts: 0,
            colour: '#d71920',
            roster: ArsenalPlayers
        },
        {
            name: 'Tottenham Hotspurs',
            avatar_url: require('./assets/images/premier_league/tot.png'),
            subtitle: 'TOT',
            pos: 17, pl: 0, gd: 0, pts: 0,
            colour: '#f5f5f5',
            roster: ArsenalPlayers
        },
        {
            name: 'Watford',
            avatar_url: require('./assets/images/premier_league/wat.png'),
            subtitle: 'WAT',
            pos: 18, pl: 0, gd: 0, pts: 0,
            colour: '#fe0',
            roster: ArsenalPlayers
        },
        {
            name: 'West Ham',
            avatar_url: require('./assets/images/premier_league/whu.png'),
            subtitle: 'WHU',
            pos: 19, pl: 0, gd: 0, pts: 0,
            colour: '#7d2c3b',
            roster: ArsenalPlayers
        },
        {
            name: 'Wolverhampton',
            avatar_url: require('./assets/images/premier_league/wol.png'),
            subtitle: 'WOL',
            pos: 20, pl: 0, gd: 0, pts: 0,
            colour: '#f9a01b',
            roster: ArsenalPlayers
        },
    ]
}