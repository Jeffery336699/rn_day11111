/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import NewApp from './js/NewApp';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => NewApp);
